'use strict';
/**
 * Datos por defecto de la cotización de InfleSusVentas.
 * Reproduce la información fija que la empresa maneja hoy en su plantilla de cotización
 * (ver ejemplo real: "COTIZACION DE 03 CARPAS Y 02 GLOBOS. UCV TRUJILLO"), para que el
 * documento generado se vea profesional y completo.
 */
const path = require('node:path');

const EMPRESA = {
  nombre: 'InfleSusVentas S.R.L.',
  rubro: 'Inflables Publicitarios',
  asunto: 'Cotización de Inflables Publicitarios',
  logo: path.join(__dirname, '..', 'public', 'img', 'logo.png'),
  responsable: 'Dennys Maque',
  // Datos bancarios por defecto (información que se maneja actualmente).
  bancos: [
    { etiqueta: 'Cuenta corriente BBVA Continental', valor: '0011 0346 0100006733' },
    { etiqueta: 'Cuenta de detracción Banco de la Nación', valor: '00-006-038646' },
    { etiqueta: 'CCI', valor: '011 346 00010000673348' },
  ],
  validez: '30 días',
};

// Valores por defecto de la cabecera de la cotización (editables por cotización).
const DEFAULTS = {
  condicion_pago: 'Factura',
  tiempo_entrega: '10 a 12 días',
  unidad: 'UNIDAD',
};

// Descripción de material estándar (bloque fijo del ejemplo real).
const DESCRIPCION_MATERIAL = [
  'Confeccionado con lona pesada plastificada impermeable. Costura recta doble, con hilo poliéster 20/3. Material resistente a la intemperie.',
  'Lona nacional: lino pesado con protección UV, PVC, plastificantes orgánicos primarios de 0.95 mm de espesor, peso 420 gr/m lineal, resistencia a tracción 130, desgarros 60%.',
  'Impresión de logotipos a 1440 dpi. Cierre centralizado en la base con hebillas industriales.',
  'Incluye: juego de cuerdas para anclaje (superiores e inferiores), juego de estacas, bolsa de empaque/transporte con dos asas, y MOTOR soplador importado 220v · 60hz · 1 HP (marca AIR BOSS).',
];

// Textos legales/condiciones del pie (información por defecto).
const CONDICIONES = {
  incluye: 'Motor soplador, bolsa de empaque, estacas e impresión de logotipos a 1440 dpi (dos caras). Se trabaja a partir de la orden de compra; artes en Corel o Illustrator.',
  entrega: 'Tiempo de entrega unitario: 8 días una vez recibida la orden. Entrega vía terrestre si es a provincia.',
  garantia: '12 meses por la confección del inflable y falla del motor. No cubre golpes, mal uso ni fuertes vientos. Se requiere un punto de corriente fijo en el lugar de instalación.',
  artes: 'Enviar los artes en formato Corel o Illustrator.',
};

module.exports = { EMPRESA, DEFAULTS, DESCRIPCION_MATERIAL, CONDICIONES };
