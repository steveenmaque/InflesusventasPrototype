'use strict';
/**
 * Adaptador del servicio externo de RUC — CU-02 (RF-02..RF-05).
 *
 * Consulta la API de apis.net.pe (datos de SUNAT) para validar el RUC y
 * autocompletar la razón social (RF-03/RF-05). Estrategia:
 *   1) Valida el formato del RUC (11 dígitos, inicia en 10/15/17/20) — RF-04.
 *   2) Consulta la API. El endpoint v1 por defecto funciona SIN token; si se
 *      define APIS_NET_TOKEN se envía como Bearer (mayor cuota / endpoint v2).
 *   3) Si la API responde pero no halla datos → RUC válido sin coincidencia.
 *   4) Si la API falla (red/servicio) → se usa un padrón local de respaldo y,
 *      si tampoco hay coincidencia, se permite continuar manualmente (RNF-06).
 *
 * Variables de entorno (ver .env.example):
 *   APIS_NET_TOKEN   (opcional) token Bearer de https://apis.net.pe
 *   APIS_NET_URL     (opcional) endpoint; por defecto v1 de apis.net.pe
 *                    (v1 responde el campo "nombre"; v2 responde "razonSocial")
 */

// Padrón local de respaldo (RUC → razón social), usado si la API no responde.
const PADRON_DEMO = {
  '20512345678': 'Publicidad Total S.A.C.',
  '20601234567': 'Eventos y Promociones del Perú S.A.C.',
  '10456789012': 'Rodríguez Rodríguez Ciro',
  '20548765432': 'Inflables y Marketing E.I.R.L.',
  '20707654321': 'Ferias Corporativas del Sur S.A.C.',
};

const API_URL = process.env.APIS_NET_URL || 'https://api.apis.net.pe/v1/ruc';
const TIMEOUT_MS = 8000;

/** Valida el formato del RUC peruano (RF-04 rechaza formatos incorrectos). */
function formatoValido(ruc) {
  return /^(10|15|17|20)\d{9}$/.test(String(ruc || '').trim());
}

/**
 * Consulta apis.net.pe. Devuelve { razonSocial } (null si el RUC es válido pero
 * SUNAT no devuelve datos). Lanza si el servicio no está disponible.
 */
async function consultarApi(ruc) {
  const url = `${API_URL}?numero=${encodeURIComponent(ruc)}`;
  const headers = { Accept: 'application/json', Referer: 'https://apis.net.pe/' };
  if (process.env.APIS_NET_TOKEN) headers.Authorization = `Bearer ${process.env.APIS_NET_TOKEN}`;

  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const resp = await fetch(url, { headers, signal: ctrl.signal });
    // 404/422: RUC con formato válido pero SUNAT no devuelve datos.
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

  try {
    const { razonSocial } = await consultarApi(limpio);
    if (razonSocial) {
      return { formato: true, disponible: true, valido: true, razonSocial };
    }
    // API disponible pero sin coincidencia: probar respaldo local, si no, no encontrado.
    const demo = PADRON_DEMO[limpio];
    if (demo) return { formato: true, disponible: true, valido: true, razonSocial: demo };
    return { formato: true, disponible: true, valido: false, razonSocial: null };
  } catch (e) {
    console.error('[ruc] apis.net.pe no disponible:', e.message);
    const demo = PADRON_DEMO[limpio];
    if (demo) return { formato: true, disponible: true, valido: true, razonSocial: demo };
    // Servicio caído y sin respaldo: continuar manualmente (RNF-06).
    return { formato: true, disponible: false, valido: false, razonSocial: null };
  }
}

module.exports = { validarRuc, formatoValido };
