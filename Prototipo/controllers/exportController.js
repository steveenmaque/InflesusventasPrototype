'use strict';
/** Controlador de exportación y envío — CU-06 (PDF/Word) y CU-07 (correo). */
const Cotizacion = require('../models/Cotizacion');
const { generarPDF } = require('../services/pdf');
const { generarWord } = require('../services/word');
const { enviarCotizacion } = require('../services/correoService');

function cargar(req, res) {
  const cot = Cotizacion.porNumero(parseInt(req.params.numero, 10));
  if (!cot) { res.status(404).render('error', { titulo: 'No encontrada', mensaje: 'La cotización no existe.', usuario: req.session.usuario }); return null; }
  return cot;
}

/** GET /cotizaciones/:numero/pdf — RF-26. */
exports.pdf = async (req, res) => {
  const cot = cargar(req, res); if (!cot) return;
  try {
    const buf = await generarPDF(cot);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="Cotizacion_${cot.numero}.pdf"`);
    res.send(buf);
  } catch (e) {
    res.status(500).render('error', { titulo: 'Error al exportar', mensaje: 'No se pudo generar el PDF: ' + e.message, usuario: req.session.usuario });
  }
};

/** GET /cotizaciones/:numero/word — RF-27. */
exports.word = (req, res) => {
  const cot = cargar(req, res); if (!cot) return;
  res.setHeader('Content-Type', 'application/msword');
  res.setHeader('Content-Disposition', `attachment; filename="Cotizacion_${cot.numero}.doc"`);
  res.send(generarWord(cot));
};

/** POST /cotizaciones/:numero/enviar — CU-07 (RF-28). */
exports.enviar = (req, res) => {
  const cot = cargar(req, res); if (!cot) return;
  const correo = (req.body.correo || '').trim();
  const r = enviarCotizacion(correo, cot.numero, `Cotizacion_${cot.numero}.pdf`);
  if (!r.ok) {
    return res.redirect(`/cotizaciones/${cot.numero}?enviada=error`);   // correo inválido / fallo
  }
  Cotizacion.registrarEnvio(cot.numero, correo);                        // estado 'Enviada'
  res.redirect(`/cotizaciones/${cot.numero}?enviada=ok`);
};
