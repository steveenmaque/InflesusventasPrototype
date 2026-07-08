'use strict';
/** Definición de rutas (mapeo Ruta → Controlador del MVC). */
const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const cotizacion = require('../controllers/cotizacionController');
const historial = require('../controllers/historialController');
const exportar = require('../controllers/exportController');
const config = require('../controllers/configController');
const { requiereAuth, requiereGerente } = require('../middleware/auth');

// --- CU-01 Autenticarse ---
router.get('/login', auth.mostrarLogin);
router.post('/login', auth.login);
router.post('/logout', requiereAuth, auth.logout);

// --- Dashboard e historial (CU-08) ---
router.get('/', requiereAuth, historial.dashboard);
router.get('/historial', requiereAuth, historial.historial);
router.get('/clientes', requiereAuth, historial.clientes);

// --- Cotizaciones (CU-02, CU-03, CU-04, CU-05) ---
router.get('/cotizaciones/nueva', requiereAuth, cotizacion.mostrarFormulario);
router.post('/cotizaciones', requiereAuth, cotizacion.crear);
router.get('/cotizaciones/:numero', requiereAuth, cotizacion.detalle);

// APIs (AJAX) para validación de RUC y cálculo en vivo
router.post('/api/ruc', requiereAuth, cotizacion.apiValidarRuc);
router.post('/api/calcular', requiereAuth, cotizacion.apiCalcular);

// --- Exportar y enviar (CU-06, CU-07) ---
router.get('/cotizaciones/:numero/pdf', requiereAuth, exportar.pdf);
router.get('/cotizaciones/:numero/word', requiereAuth, exportar.word);
router.post('/cotizaciones/:numero/enviar', requiereAuth, exportar.enviar);

// --- Configuración: tarifas y parámetros (CU-11, solo Gerente) ---
router.get('/configuracion', requiereAuth, requiereGerente, config.mostrar);
router.post('/configuracion/parametros', requiereAuth, requiereGerente, config.guardarParametros);
router.post('/configuracion/tarifas', requiereAuth, requiereGerente, config.guardarTarifas);

module.exports = router;
