'use strict';
/** Controlador de autenticación — CU-01 (RF-46, RF-47). */
const Usuario = require('../models/Usuario');

exports.mostrarLogin = (req, res) => {
  if (req.session?.usuario) return res.redirect('/');
  res.render('login', { error: null });
};

exports.login = (req, res) => {
  const { usuario, password } = req.body;
  const r = Usuario.autenticar((usuario || '').trim(), password || '');
  if (!r.ok) {
    const error = r.motivo === 'inactivo'
      ? 'Usuario inactivo: acceso denegado.'                 // Excepción 3b
      : 'Credenciales inválidas. Inténtelo nuevamente.';      // Excepción 3a
    return res.status(401).render('login', { error });
  }
  req.session.usuario = r.usuario;
  res.redirect('/');
};

exports.logout = (req, res) => {
  req.session.destroy(() => res.redirect('/login'));         // RF-47: cerrar sesión
};
