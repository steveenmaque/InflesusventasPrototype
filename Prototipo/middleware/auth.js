'use strict';
/**
 * Control de acceso (RD-09, RNF-08): toda operación exige sesión autenticada.
 * requiereAuth protege las rutas; requiereGerente restringe la configuración (CU-11).
 */
function requiereAuth(req, res, next) {
  if (req.session && req.session.usuario) return next();
  return res.redirect('/login');
}

function requiereGerente(req, res, next) {
  if (req.session?.usuario?.rol === 'gerente') return next();
  return res.status(403).render('error', {
    titulo: 'Acceso restringido',
    mensaje: 'Solo el Gerente puede administrar tarifas y parámetros (CU-11).',
    usuario: req.session?.usuario,
  });
}

module.exports = { requiereAuth, requiereGerente };
