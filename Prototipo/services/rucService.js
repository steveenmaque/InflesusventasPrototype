'use strict';
/**
 * Adaptador del servicio externo de RUC — CU-02 (RF-02..RF-05).
 *
 * En producción consultaría la API de SUNAT. Como el prototipo debe funcionar sin
 * credenciales ni conexión garantizada, la validación se resuelve así:
 *   1) Valida el formato del RUC (11 dígitos, inicia en 10/15/17/20).
 *   2) Busca en un padrón local de demostración.
 * Si el servicio "no está disponible", el sistema permite continuar manualmente (RNF-06):
 * el llamador simplemente deja la razón social editable.
 */

// Padrón de demostración (RUC → razón social).
const PADRON_DEMO = {
  '20512345678': 'Publicidad Total S.A.C.',
  '20601234567': 'Eventos y Promociones del Perú S.A.C.',
  '10456789012': 'Rodríguez Rodríguez Ciro',
  '20548765432': 'Inflables y Marketing E.I.R.L.',
  '20707654321': 'Ferias Corporativas del Sur S.A.C.',
};

/** Valida el formato del RUC peruano (RF-04 rechaza formatos incorrectos). */
function formatoValido(ruc) {
  return /^(10|15|17|20)\d{9}$/.test(String(ruc || '').trim());
}

/**
 * Valida el RUC y, si corresponde, autocompleta la razón social (RF-03).
 * @returns { formato, disponible, valido, razonSocial }
 *   formato=false   → RUC mal formado (RF-04): no autocompleta.
 *   disponible=false→ servicio caído (RNF-06): continuar manualmente.
 *   valido=true     → autocompletar razón social (editable, RF-05).
 */
function validarRuc(ruc) {
  const limpio = String(ruc || '').trim();
  if (!formatoValido(limpio)) {
    return { formato: false, disponible: true, valido: false, razonSocial: null };
  }
  // Simula disponibilidad del servicio externo (aquí siempre disponible en el prototipo).
  const disponible = true;
  const razonSocial = PADRON_DEMO[limpio] || null;
  return { formato: true, disponible, valido: !!razonSocial, razonSocial };
}

module.exports = { validarRuc, formatoValido };
