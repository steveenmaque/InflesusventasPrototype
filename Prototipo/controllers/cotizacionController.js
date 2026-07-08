'use strict';
/**
 * Controlador de cotizaciones — CU-02 (validar cliente), CU-03 (crear),
 * CU-04 (aplicar descuento) y CU-05 (calcular precio e IGV).
 */
const Cotizacion = require('../models/Cotizacion');
const Cliente = require('../models/Cliente');
const Tarifa = require('../models/Tarifa');
const Configuracion = require('../models/Configuracion');
const { validarRuc } = require('../services/rucService');
const { procesarMedidas, descripcionAutomatica, CATEGORIAS } = require('../services/medidas');
const { calcularCotizacion } = require('../services/calculo');
const { DEFAULTS } = require('../services/plantilla');

/** GET /cotizaciones/nueva — formulario de nueva cotización (RF-33). */
exports.mostrarFormulario = (req, res) => {
  res.render('cotizacion_form', {
    usuario: req.session.usuario,
    categorias: CATEGORIAS,
    config: Configuracion.obtener(),
    defaults: DEFAULTS,
    error: null,
  });
};

/** POST /api/ruc — CU-02: valida el RUC y autocompleta la razón social (AJAX). */
exports.apiValidarRuc = (req, res) => {
  const r = validarRuc(req.body.ruc);
  if (!r.formato) return res.json({ ok: false, motivo: 'formato', mensaje: 'RUC con formato incorrecto (11 dígitos, inicia en 10/15/17/20).' });
  if (!r.disponible) return res.json({ ok: false, motivo: 'servicio', mensaje: 'Servicio de RUC no disponible: ingrese la razón social manualmente (RNF-06).' });
  if (!r.valido) return res.json({ ok: false, motivo: 'no_encontrado', mensaje: 'RUC válido pero sin coincidencia: ingrese la razón social manualmente.' });
  return res.json({ ok: true, razonSocial: r.razonSocial });
};

/**
 * POST /api/calcular — CU-05: previsualiza el desglose sin guardar (cálculo en vivo).
 * Recibe { items:[{categoria,medidas,cantidad}], descuento_pct }.
 */
exports.apiCalcular = (req, res) => {
  try {
    const cfg = Configuracion.obtener();
    const { items } = construirItems(req.body.items || [], cfg);
    const montos = calcularCotizacion(items, req.body.descuento_pct, cfg);
    res.json({ ok: true, montos, items: items.map((i) => ({ descripcion: i.descripcion, rango: i.rango, precio_unit: i.precio_unit, precio_base: i.precio_base })) });
  } catch (e) {
    res.json({ ok: false, mensaje: e.message });
  }
};

/** Construye los ítems válidos a partir de la entrada, aplicando medidas y tarifas. */
function construirItems(entrada, cfg) {
  if (!Array.isArray(entrada) || entrada.length === 0) {
    throw new Error('La cotización debe tener al menos un ítem (RF-08).');
  }
  const items = [];
  for (const raw of entrada) {
    const pm = procesarMedidas(raw.categoria, raw.medidas || {}, cfg.factor_globo);
    if (!pm.ok) throw new Error(pm.error);                       // RD-03: bloquea si faltan medidas
    const cantidad = Math.max(1, parseInt(raw.cantidad, 10) || 1);
    const precioUnit = Tarifa.precioUnitario(raw.categoria, pm.rango);
    if (precioUnit == null) {
      throw new Error(`No hay tarifa definida para ${raw.categoria} (${pm.rango}). Configúrela en Tarifas (CU-11).`);
    }
    // Descripción automática (RD-04); 'Otros' respeta la que ingrese el usuario.
    let descripcion = descripcionAutomatica(raw.categoria, pm.medidas);
    if (raw.categoria === 'otros') descripcion = (raw.descripcion || '').trim();
    items.push({
      categoria: raw.categoria, medidas: pm.medidas, rango: pm.rango, cantidad,
      descripcion, precio_unit: precioUnit, precio_base: Math.round(precioUnit * cantidad * 100) / 100,
    });
  }
  return { items };
}

/** POST /cotizaciones — CU-03: crea y guarda la cotización con numeración y fecha. */
exports.crear = (req, res) => {
  const cfg = Configuracion.obtener();
  try {
    const entrada = JSON.parse(req.body.items_json || '[]');
    const { items } = construirItems(entrada, cfg);
    const montos = calcularCotizacion(items, req.body.descuento_pct, cfg);

    // CU-02: registrar/asociar cliente (razón social editable, RF-05).
    const razon = (req.body.razon_social || '').trim();
    if (!razon) throw new Error('La razón social del cliente es obligatoria.');
    const cliente = Cliente.guardar({
      ruc: (req.body.ruc || '').trim() || null,
      razon_social: razon,
      correo: (req.body.correo || '').trim() || null,
      telefono: (req.body.telefono || '').trim() || null,
    });

    const numero = Cotizacion.crear(
      {
        cliente_id: cliente.id,
        usuario_id: req.session.usuario.id,
        fecha: new Date().toISOString().slice(0, 10),          // RF-25: fecha de emisión
        tipo: 'estandar',
        correo_envio: cliente.correo,
        atencion: (req.body.atencion || '').trim() || null,
        condicion_pago: (req.body.condicion_pago || '').trim() || null,
        tiempo_entrega: (req.body.tiempo_entrega || '').trim() || null,
      },
      items, montos,
    );
    res.redirect(`/cotizaciones/${numero}?creada=1`);
  } catch (e) {
    res.status(400).render('cotizacion_form', {
      usuario: req.session.usuario,
      categorias: CATEGORIAS,
      config: cfg,
      defaults: DEFAULTS,
      error: e.message,
    });
  }
};

/** GET /cotizaciones/:numero — detalle de la cotización (CU-08). */
exports.detalle = (req, res) => {
  const cot = Cotizacion.porNumero(parseInt(req.params.numero, 10));
  if (!cot) return res.status(404).render('error', { titulo: 'No encontrada', mensaje: 'La cotización no existe.', usuario: req.session.usuario });
  res.render('cotizacion_detalle', { usuario: req.session.usuario, cot, creada: req.query.creada === '1', enviada: req.query.enviada });
};
