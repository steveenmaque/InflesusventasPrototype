'use strict';
/**
 * Punto de entrada del prototipo MVC.
 * Sistema de Gestión de Cotizaciones — InfleSusVentas (MVP 1, requisitos Must).
 * Arranque:  npm start   (usa node --experimental-sqlite)
 */
const path = require('node:path');
const express = require('express');
const session = require('express-session');

require('./config/db'); // inicializa esquema y datos semilla
const rutas = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Vistas (EJS) — capa View del MVC
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'inflesusventas-cotizaciones-2026',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 * 8 },
}));

// Expone el usuario y la ruta actual a todas las vistas (sidebar activo)
app.use((req, res, next) => {
  res.locals.usuario = req.session?.usuario || null;
  res.locals.rutaActual = req.path;
  next();
});

app.use('/', rutas);

// 404
app.use((req, res) => {
  res.status(404).render('error', {
    titulo: 'Página no encontrada',
    mensaje: 'La ruta solicitada no existe.',
    usuario: req.session?.usuario || null,
  });
});

app.listen(PORT, () => {
  console.log(`\n  InfleSusVentas · Cotizaciones (MVP Must)`);
  console.log(`  Servidor en http://localhost:${PORT}`);
  console.log(`  Usuarios demo:  gerente / gerente123   ·   trabajador / trabajador123\n`);
});
