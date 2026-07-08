'use strict';
/** Controlador de configuración — CU-11 Administrar tarifas y parámetros (RF-18, RF-22, RNF-11). */
const Configuracion = require('../models/Configuracion');
const Tarifa = require('../models/Tarifa');
const { CATEGORIAS } = require('../services/medidas');

exports.mostrar = (req, res) => {
  res.render('configuracion', {
    usuario: req.session.usuario,
    config: Configuracion.obtener(),
    tarifas: Tarifa.listar(),
    categorias: CATEGORIAS,
    guardado: req.query.ok === '1',
    error: null,
  });
};

/** POST /configuracion/parametros — %IGV, tope descuento, correlativo, plazo, factor. */
exports.guardarParametros = (req, res) => {
  const igv = parseFloat(req.body.igv_pct);
  const tope = parseFloat(req.body.tope_descuento);
  const corr = parseInt(req.body.correlativo_inicial, 10);
  const plazo = parseInt(req.body.plazo_recordatorio, 10);
  const factor = parseFloat(req.body.factor_globo);

  // Validación: rechaza valores inválidos (Excepción 4a de CU-11).
  if ([igv, tope, factor].some((n) => !Number.isFinite(n) || n < 0) ||
      !Number.isFinite(corr) || corr < 1 || !Number.isFinite(plazo) || plazo < 0 || tope > 100) {
    return res.status(400).render('configuracion', {
      usuario: req.session.usuario,
      config: Configuracion.obtener(),
      tarifas: Tarifa.listar(),
      categorias: CATEGORIAS,
      guardado: false,
      error: 'Valores inválidos: revise que IGV, tope, correlativo, plazo y factor sean números válidos (no negativos).',
    });
  }
  Configuracion.actualizar({ igv_pct: igv, tope_descuento: tope, correlativo_inicial: corr, plazo_recordatorio: plazo, factor_globo: factor });
  res.redirect('/configuracion?ok=1');
};

/** POST /configuracion/tarifas — edición de precios unitarios (RNF-11, sin recompilar). */
exports.guardarTarifas = (req, res) => {
  const tarifas = Tarifa.listar();
  for (const t of tarifas) {
    const val = parseFloat(req.body[`tarifa_${t.id}`]);
    if (Number.isFinite(val) && val >= 0) Tarifa.actualizar(t.id, val);
  }
  res.redirect('/configuracion?ok=1');
};
