'use strict';
/** Controlador de dashboard, historial y clientes — CU-08 (RF-30..RF-36). */
const Cotizacion = require('../models/Cotizacion');
const Cliente = require('../models/Cliente');

exports.dashboard = (req, res) => {
  res.render('dashboard', {
    usuario: req.session.usuario,
    resumen: Cotizacion.resumen(),
    recientes: Cotizacion.listar('').slice(0, 5),
  });
};

exports.historial = (req, res) => {
  const filtro = req.query.q || '';
  res.render('historial', {
    usuario: req.session.usuario,
    cotizaciones: Cotizacion.listar(filtro),
    filtro,
  });
};

exports.clientes = (req, res) => {
  res.render('clientes', {
    usuario: req.session.usuario,
    clientes: Cliente.listar(),
  });
};
