'use strict';
/**
 * Adaptador del servicio externo de RUC — CU-02 (RF-02..RF-05).
 *
 * Consulta la API de apis.net.pe (datos de SUNAT) cuando hay token configurado
 * (APIS_NET_TOKEN). Estrategia:
 *   1) Valida el formato del RUC (11 dígitos, inicia en 10/15/17/20) — RF-04.
 *   2) Si hay token, consulta apis.net.pe y autocompleta la razón social (RF-03/05).
 *   3) Si el servicio falla o no hay token, usa un padrón local de demostración;
 *      si tampoco hay coincidencia y el servicio está caído, marca disponible=false
 *      para que el usuario continúe manualmente (RNF-06).
 *
 * Variables de entorno (ver .env.example):
 *   APIS_NET_TOKEN   token Bearer de https://apis.net.pe
 *   APIS_NET_URL     (opcional) endpoint; por defecto v2 de apis.net.pe
 */

// Padrón de demostración (RUC → razón social), usado sin token o como respaldo.
const PADRON_DEMO = {
  '20512345678': 'Publicidad Total S.A.C.',
  '20601234567': 'Eventos y Promociones del Perú S.A.C.',
  '10456789012': 'Rodríguez Rodríguez Ciro',
  '20548765432': 'Inflables y Marketing E.I.R.L.',
  '20707654321': 'Ferias Corporativas del Sur S.A.C.',
};

const API_URL = process.env.APIS_NET_URL || 'https://api.apis.net.pe/v2/sunat/ruc';
const TIMEOUT_MS = 8000;

/** Valida el formato del RUC peruano (RF-04 rechaza formatos incorrectos). */
function formatoValido(ruc) {
  return /^(10|15|17|20)\d{9}$/.test(String(ruc || '').trim());
}

/**
 * Consulta apis.net.pe. Devuelve { razonSocial } o { razonSocial: null } si el
 * RUC es válido pero no se halló. Lanza si el servicio no está disponible.
 */
async function consultarApi(ruc) {
  const url = `${API_URL}?numero=${encodeURIComponent(ruc)}`;
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const resp = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.APIS_NET_TOKEN}`,
        Accept: 'application/json',
        Referer: 'https://apis.net.pe/',
      },
      signal: ctrl.signal,
    });
    // 404/422: el RUC es válido en formato pero SUNAT no devuelve datos.
    if (resp.status === 404 || resp.status === 422) return { razonSocial: null };
    if (!resp.ok) throw new Error(`apis.net.pe respondió HTTP ${resp.status}`);
    const data = await resp.json();
    const razon = data.razonSocial || data.nombre || data.razon_social || null;
    return { razonSocial: razon };
  } finally {
    clearTimeout(t);
  }
}

/**
 * Valida el RUC y, si corresponde, autocompleta la razón social (RF-03).
 * @returns {Promise<{ formato, disponible, valido, razonSocial }>}
 *   formato=false    → RUC mal formado (RF-04): no autocompleta.
 *   disponible=false → servicio caído (RNF-06): continuar manualmente.
 *   valido=true      → autocompletar razón social (editable, RF-05).
 */
async function validarRuc(ruc) {
  const limpio = String(ruc || '').trim();
  if (!formatoValido(limpio)) {
    return { formato: false, disponible: true, valido: false, razonSocial: null };
  }

  // Servicio real (apis.net.pe) si hay token configurado.
  if (process.env.APIS_NET_TOKEN) {
    try {
      const { razonSocial } = await consultarApi(limpio);
      return { formato: true, disponible: true, valido: !!razonSocial, razonSocial: razonSocial || null };
    } catch (e) {
      console.error('[ruc] apis.net.pe no disponible:', e.message);
      const demo = PADRON_DEMO[limpio];
      if (demo) return { formato: true, disponible: true, valido: true, razonSocial: demo };
      // Servicio caído y sin respaldo: continuar manualmente (RNF-06).
      return { formato: true, disponible: false, valido: false, razonSocial: null };
    }
  }

  // Sin token: padrón local de demostración.
  const razonSocial = PADRON_DEMO[limpio] || null;
  return { formato: true, disponible: true, valido: !!razonSocial, razonSocial };
}

module.exports = { validarRuc, formatoValido };
