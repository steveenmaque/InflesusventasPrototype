'use strict';
/**
 * Generación del PDF de la cotización — CU-06 (RF-26).
 * Usa pdfkit (JS puro). Respeta el desglose RD-02 (precio, descuento, subtotal, IGV, total).
 */
const PDFDocument = require('pdfkit');

// Colores de marca InfleSusVentas (tomados de inflesusventas.com).
const AMARILLO = '#FFCC00';
const CARBON = '#2E343C';
const GRIS = '#616B75';

const sol = (n) => 'S/ ' + Number(n).toFixed(2);

/** Devuelve un Buffer con el PDF de la cotización. */
function generarPDF(cot) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    const chunks = [];
    doc.on('data', (c) => chunks.push(c));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    // Encabezado de marca
    doc.rect(0, 0, doc.page.width, 90).fill(CARBON);
    doc.rect(0, 90, doc.page.width, 6).fill(AMARILLO);
    doc.fillColor(AMARILLO).fontSize(24).font('Helvetica-Bold').text('InfleSusVentas', 50, 28);
    doc.fillColor('#FFFFFF').fontSize(10).font('Helvetica').text('Inflables publicitarios · Cotización', 50, 58);
    doc.fillColor(AMARILLO).fontSize(18).font('Helvetica-Bold')
      .text(`N° ${cot.numero}`, 0, 30, { align: 'right', width: doc.page.width - 50 });
    doc.fillColor('#FFFFFF').fontSize(10).font('Helvetica')
      .text(cot.fecha, 0, 58, { align: 'right', width: doc.page.width - 50 });

    doc.moveDown(4);
    let y = 120;

    // Datos del cliente
    doc.fillColor(CARBON).fontSize(12).font('Helvetica-Bold').text('Cliente', 50, y);
    y += 18;
    doc.fillColor(GRIS).fontSize(10).font('Helvetica');
    doc.text(`Razón social: ${cot.razon_social || '—'}`, 50, y); y += 14;
    doc.text(`RUC: ${cot.ruc || '—'}`, 50, y); y += 14;
    doc.text(`Correo: ${cot.correo_envio || cot.cliente_correo || '—'}`, 50, y); y += 14;
    doc.text(`Estado: ${cot.estado}`, 50, y); y += 24;

    // Tabla de ítems
    const x = { desc: 50, cant: 330, unit: 390, sub: 470 };
    doc.rect(50, y, doc.page.width - 100, 20).fill(AMARILLO);
    doc.fillColor(CARBON).fontSize(10).font('Helvetica-Bold');
    doc.text('Descripción', x.desc + 5, y + 6);
    doc.text('Cant.', x.cant, y + 6, { width: 40, align: 'right' });
    doc.text('P. Unit.', x.unit, y + 6, { width: 60, align: 'right' });
    doc.text('Importe', x.sub, y + 6, { width: 75, align: 'right' });
    y += 22;

    doc.font('Helvetica').fillColor(CARBON);
    for (const it of cot.items) {
      const desc = it.descripcion || it.categoria;
      const h = doc.heightOfString(desc, { width: 270 });
      doc.text(desc, x.desc + 5, y + 2, { width: 270 });
      doc.text(String(it.cantidad), x.cant, y + 2, { width: 40, align: 'right' });
      doc.text(sol(it.precio_unit), x.unit, y + 2, { width: 60, align: 'right' });
      doc.text(sol(it.precio_base), x.sub, y + 2, { width: 75, align: 'right' });
      y += Math.max(h, 12) + 8;
      doc.moveTo(50, y - 4).lineTo(doc.page.width - 50, y - 4).strokeColor('#E5E7EB').stroke();
    }

    // Totales (desglose RD-02)
    y += 10;
    const filas = [
      ['Precio base', sol(cot.base)],
      [`Descuento (${cot.descuento_pct}%)`, '- ' + sol(cot.descuento_monto)],
      ['Subtotal', sol(cot.subtotal)],
      [`IGV (${cot.igv_pct}%)`, sol(cot.igv)],
    ];
    doc.fontSize(10).font('Helvetica').fillColor(GRIS);
    for (const [k, v] of filas) {
      doc.text(k, 330, y, { width: 120, align: 'right' });
      doc.text(v, 455, y, { width: 90, align: 'right' });
      y += 16;
    }
    doc.rect(330, y + 2, 215, 24).fill(CARBON);
    doc.fillColor(AMARILLO).font('Helvetica-Bold').fontSize(12);
    doc.text('TOTAL', 335, y + 9, { width: 115, align: 'right' });
    doc.text(sol(cot.total), 455, y + 9, { width: 85, align: 'right' });

    // Pie
    doc.fillColor(GRIS).font('Helvetica').fontSize(8)
      .text('Documento generado por el Sistema de Gestión de Cotizaciones de InfleSusVentas.',
        50, doc.page.height - 60, { align: 'center', width: doc.page.width - 100 });

    doc.end();
  });
}

module.exports = { generarPDF };
