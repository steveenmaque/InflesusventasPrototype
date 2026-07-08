'use strict';
/**
 * Generación del PDF de la cotización — CU-06 (RF-26).
 * Reproduce el formato profesional de la cotización real de InfleSusVentas
 * (membrete con logo, datos del cliente/pago, tabla de ítems con descripción de material,
 * subtotal/IGV/total y condiciones/garantía), respetando el desglose RD-02.
 */
const fs = require('node:fs');
const PDFDocument = require('pdfkit');
const { EMPRESA, DEFAULTS, DESCRIPCION_MATERIAL, CONDICIONES } = require('./plantilla');

// Paleta corporativa del logo de InfleSusVentas.
const NARANJA = '#EC5F00';
const AZUL = '#0C2871';
const CARBON = '#2E343C';
const GRIS = '#616B75';
const GRIS_BG = '#F1F3F5';

const sol = (n) => 'S/ ' + Number(n).toFixed(2);
const M = 45;                       // margen
let W;                              // ancho útil (se fija al crear el doc)

function generarPDF(cot) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4', margin: M, bufferPages: true });
    W = doc.page.width - M * 2;
    const chunks = [];
    doc.on('data', (c) => chunks.push(c));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    membrete(doc, cot);
    bloqueCliente(doc, cot);
    tablaItems(doc, cot);
    totales(doc, cot);
    condiciones(doc, cot);
    firma(doc);
    piePagina(doc);

    doc.end();
  });
}

/** Salto de página si no cabe `alto` px más; repite un margen superior. */
function asegurar(doc, alto) {
  if (doc.y + alto > doc.page.height - 60) {
    doc.addPage();
    doc.y = M;
  }
}

function membrete(doc, cot) {
  const top = M;
  // Logo (si existe el archivo).
  try {
    if (fs.existsSync(EMPRESA.logo)) doc.image(EMPRESA.logo, M, top, { width: 130 });
  } catch (_) { /* sin logo */ }

  // Bloque de título a la derecha.
  const bx = M + W - 190;
  doc.roundedRect(bx, top, 190, 62, 6).fill(AZUL);
  doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(15).text('COTIZACIÓN', bx, top + 9, { width: 190, align: 'center' });
  doc.fillColor(NARANJA).fontSize(20).text(`N° ${cot.numero}`, bx, top + 30, { width: 190, align: 'center' });

  doc.fillColor(CARBON).font('Helvetica-Bold').fontSize(12).text(EMPRESA.nombre, M, top + 66);
  doc.fillColor(GRIS).font('Helvetica').fontSize(9).text(EMPRESA.rubro, M, top + 82);

  doc.y = top + 100;
  doc.moveTo(M, doc.y).lineTo(M + W, doc.y).lineWidth(2).strokeColor(NARANJA).stroke();
  doc.moveDown(0.6);
  doc.fillColor(AZUL).font('Helvetica-Bold').fontSize(11).text(`Asunto: ${EMPRESA.asunto}`, M, doc.y);
  doc.moveDown(0.5);
}

function bloqueCliente(doc, cot) {
  const y0 = doc.y;
  const colW = W / 2 - 6;
  const izq = [
    ['Cliente', cot.razon_social || '—'],
    ['N.º RUC', cot.ruc || '—'],
    ['Atención', cot.atencion || '—'],
    ['Teléfono', cot.telefono || '—'],
  ];
  const der = [
    ['Fecha de emisión', cot.fecha],
    ['Condición de pago', cot.condicion_pago || DEFAULTS.condicion_pago],
    ['Tiempo de entrega', cot.tiempo_entrega || DEFAULTS.tiempo_entrega],
    ['Incluye IGV 18%', 'SÍ'],
  ];
  const alto = 18 * 4 + 12;
  doc.roundedRect(M, y0, colW, alto, 5).fillAndStroke(GRIS_BG, '#E1E4E8');
  doc.roundedRect(M + colW + 12, y0, colW, alto, 5).fillAndStroke(GRIS_BG, '#E1E4E8');

  const pintaCol = (filas, x) => {
    let y = y0 + 8;
    for (const [k, v] of filas) {
      doc.font('Helvetica-Bold').fontSize(9).fillColor(GRIS).text(`${k}:`, x + 8, y, { width: 95, continued: false });
      doc.font('Helvetica').fontSize(9).fillColor(CARBON).text(v, x + 105, y, { width: colW - 112 });
      y += 18;
    }
  };
  pintaCol(izq, M);
  pintaCol(der, M + colW + 12);
  doc.y = y0 + alto + 8;

  // Datos bancarios (información por defecto).
  const banco = EMPRESA.bancos.map((b) => `${b.etiqueta}: ${b.valor}`).join('   ·   ');
  doc.font('Helvetica').fontSize(8).fillColor(GRIS)
    .text(`${banco}   ·   Validez: ${EMPRESA.validez}`, M, doc.y, { width: W });
  doc.moveDown(0.6);
}

function tablaItems(doc, cot) {
  const cols = { n: M, cant: M + 32, unid: M + 72, desc: M + 140, punit: M + W - 150, tot: M + W - 75 };
  const anchoDesc = cols.punit - cols.desc - 8;

  // Cabecera
  asegurar(doc, 24);
  let y = doc.y;
  doc.rect(M, y, W, 20).fill(AZUL);
  doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(8.5);
  doc.text('N°', cols.n + 4, y + 6);
  doc.text('CANT.', cols.cant, y + 6);
  doc.text('UNIDAD', cols.unid, y + 6);
  doc.text('DESCRIPCIÓN', cols.desc, y + 6);
  doc.text('P. UNIT.', cols.punit, y + 6, { width: 70, align: 'right' });
  doc.text('TOTAL S/', cols.tot, y + 6, { width: 70, align: 'right' });
  y += 20;

  // Filas de ítems
  doc.font('Helvetica').fontSize(9).fillColor(CARBON);
  cot.items.forEach((it, i) => {
    const desc = it.descripcion || it.categoria;
    const h = Math.max(doc.heightOfString(desc, { width: anchoDesc }), 12) + 8;
    asegurar(doc, h);
    y = doc.y;
    if (i % 2 === 1) doc.rect(M, y, W, h).fill(GRIS_BG);
    doc.fillColor(CARBON).font('Helvetica-Bold').fontSize(9)
      .text(String(i + 1).padStart(2, '0'), cols.n + 2, y + 4, { width: 28 });
    doc.font('Helvetica')
      .text(String(it.cantidad), cols.cant, y + 4, { width: 34 })
      .text(DEFAULTS.unidad, cols.unid, y + 4, { width: 60 })
      .text(desc, cols.desc, y + 4, { width: anchoDesc })
      .text(sol(it.precio_unit), cols.punit, y + 4, { width: 70, align: 'right' })
      .text(sol(it.precio_base), cols.tot, y + 4, { width: 70, align: 'right' });
    doc.y = y + h;
    doc.moveTo(M, doc.y).lineTo(M + W, doc.y).lineWidth(0.5).strokeColor('#E1E4E8').stroke();
  });

  // Bloque de descripción de material (fijo del ejemplo real).
  doc.moveDown(0.4);
  asegurar(doc, 70);
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(AZUL).text('Descripción del material y acabados', M, doc.y);
  doc.moveDown(0.2);
  doc.font('Helvetica').fontSize(8).fillColor(GRIS);
  for (const p of DESCRIPCION_MATERIAL) {
    asegurar(doc, 26);
    doc.text('• ' + p, M, doc.y, { width: W });
    doc.moveDown(0.15);
  }
  doc.moveDown(0.4);
}

function totales(doc, cot) {
  asegurar(doc, 72);
  const bx = M + W - 230;
  const filas = [
    ['Precio base', sol(cot.base)],
    [`Descuento (${cot.descuento_pct}%)`, '- ' + sol(cot.descuento_monto)],
    ['SUBTOTAL', sol(cot.subtotal)],
    [`IGV (${cot.igv_pct}%)`, sol(cot.igv)],
  ];
  let y = doc.y;
  doc.font('Helvetica').fontSize(9.5).fillColor(CARBON);
  for (const [k, v] of filas) {
    doc.text(k, bx, y, { width: 150, align: 'right' });
    doc.text(v, bx + 155, y, { width: 75, align: 'right' });
    y += 17;
  }
  doc.rect(bx, y + 2, 230, 26).fill(NARANJA);
  doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(12);
  doc.text('TOTAL', bx + 8, y + 10, { width: 140, align: 'right' });
  doc.text(sol(cot.total), bx + 148, y + 10, { width: 74, align: 'right' });
  doc.y = y + 40;
}

function condiciones(doc, cot) {
  doc.moveDown(0.5);
  const bloques = [
    ['Incluye', CONDICIONES.incluye],
    ['Tiempo de entrega', cot.tiempo_entrega ? `${cot.tiempo_entrega}. ${CONDICIONES.entrega}` : CONDICIONES.entrega],
    ['Garantía', CONDICIONES.garantia],
    ['Artes', CONDICIONES.artes],
  ];
  for (const [t, txt] of bloques) {
    asegurar(doc, 30);
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(AZUL).text(t + ': ', M, doc.y, { continued: true });
    doc.font('Helvetica').fontSize(8.5).fillColor(GRIS).text(txt, { width: W });
    doc.moveDown(0.25);
  }
}

function firma(doc) {
  doc.moveDown(1.2);
  asegurar(doc, 60);
  doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(GRIS)
    .text('Soy responsable de la veracidad de los documentos e información. Sin otro particular, quedamos de Uds.', M, doc.y, { width: W });
  doc.moveDown(1.4);
  const x = M;
  doc.moveTo(x, doc.y).lineTo(x + 180, doc.y).lineWidth(0.8).strokeColor(CARBON).stroke();
  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(CARBON).text('Atentamente,', x, doc.y);
  doc.font('Helvetica').fontSize(9.5).fillColor(CARBON).text(EMPRESA.responsable, x, doc.y + 2);
  doc.fillColor(GRIS).fontSize(8).text(`${EMPRESA.nombre} · ${EMPRESA.rubro}`, x, doc.y + 2);
}

function piePagina(doc) {
  const range = doc.bufferedPageRange();          // { start, count } con bufferPages activo
  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i);
    const prev = doc.page.margins.bottom;
    doc.page.margins.bottom = 0;                   // evita que el pie provoque una página nueva
    doc.fontSize(7.5).fillColor(GRIS)
      .text(`Documento generado por el Sistema de Gestión de Cotizaciones de InfleSusVentas.   ·   Página ${i + 1} de ${range.count}`,
        M, doc.page.height - 30, { width: W, align: 'center' });
    doc.page.margins.bottom = prev;
  }
}

module.exports = { generarPDF };
