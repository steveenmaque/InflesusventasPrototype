'use strict';
/**
 * Motor de cálculo de precio, descuento e IGV — CU-05.
 * Reglas de dominio:
 *   RD-02: el IGV se calcula SIEMPRE sobre el subtotal YA con descuento.
 *   RD-08: el descuento no supera el tope (10%) y depende de la cantidad.
 *   RD-07: el precio base sale de la tarifa (categoría + rango de tamaño).
 *
 * Criterio de aceptación de la SRS: base 1000 con 10% de descuento e IGV 18% → total 1062.
 */

const redondea = (n) => Math.round((Number(n) + Number.EPSILON) * 100) / 100;

/**
 * Ajusta el porcentaje de descuento al tope permitido (RD-08).
 * @returns porcentaje válido en el rango [0, tope].
 */
function limitarDescuento(pct, tope = 10) {
  let p = Number(pct);
  if (!Number.isFinite(p) || p < 0) p = 0;
  if (p > tope) p = tope;
  return p;
}

/**
 * Calcula los montos de una cotización a partir de sus ítems.
 * @param items  [{ precio_base }]  precio_base = precio_unit * cantidad
 * @param descuentoPct porcentaje solicitado por el usuario
 * @param config { igv_pct, tope_descuento }
 * @returns desglose { base, descuentoPct, descuentoMonto, subtotal, igv, total, igvPct }
 */
function calcularCotizacion(items, descuentoPct, config) {
  const igvPct = Number(config.igv_pct);
  const tope = Number(config.tope_descuento);

  const base = redondea(items.reduce((acc, it) => acc + Number(it.precio_base || 0), 0));
  const pct = limitarDescuento(descuentoPct, tope);        // RD-08
  const descuentoMonto = redondea(base * (pct / 100));
  const subtotal = redondea(base - descuentoMonto);         // subtotal con descuento
  const igv = redondea(subtotal * (igvPct / 100));          // RD-02: IGV sobre subtotal con descuento
  const total = redondea(subtotal + igv);

  return { base, descuentoPct: pct, descuentoMonto, subtotal, igv, total, igvPct };
}

module.exports = { calcularCotizacion, limitarDescuento, redondea };
