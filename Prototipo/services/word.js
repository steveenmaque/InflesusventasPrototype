'use strict';
/**
 * Generación del documento Word de la cotización — CU-06 (RF-27).
 * Estrategia sin dependencias: se emite un documento HTML con cabecera de Word;
 * Microsoft Word y LibreOffice lo abren y editan como .doc nativo.
 */
const sol = (n) => 'S/ ' + Number(n).toFixed(2);
const esc = (s) => String(s ?? '').replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

function generarWord(cot) {
  const itemsRows = cot.items.map((it) => `
    <tr>
      <td>${esc(it.descripcion || it.categoria)}</td>
      <td style="text-align:center">${it.cantidad}</td>
      <td style="text-align:right">${sol(it.precio_unit)}</td>
      <td style="text-align:right">${sol(it.precio_base)}</td>
    </tr>`).join('');

  return `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset="utf-8"><title>Cotización ${cot.numero}</title>
<style>
  body{font-family:Calibri,Arial,sans-serif;color:#2E343C;}
  .marca{background:#2E343C;color:#FFCC00;padding:14px 18px;}
  .marca h1{margin:0;font-size:22px;} .marca span{color:#fff;font-size:11px;}
  .num{float:right;text-align:right;color:#FFCC00;font-size:18px;font-weight:bold;}
  table{border-collapse:collapse;width:100%;margin-top:14px;}
  th{background:#FFCC00;color:#2E343C;padding:6px;text-align:left;}
  td{border-bottom:1px solid #E5E7EB;padding:6px;}
  .tot td{border:none;text-align:right;} .total{background:#2E343C;color:#FFCC00;font-weight:bold;}
  .datos p{margin:2px 0;font-size:12px;}
</style></head>
<body>
  <div class="marca">
    <div class="num">N° ${cot.numero}<br><span style="color:#fff;font-weight:normal">${esc(cot.fecha)}</span></div>
    <h1>InfleSusVentas</h1><span>Inflables publicitarios · Cotización</span>
  </div>
  <div class="datos">
    <h3>Cliente</h3>
    <p><b>Razón social:</b> ${esc(cot.razon_social || '—')}</p>
    <p><b>RUC:</b> ${esc(cot.ruc || '—')}</p>
    <p><b>Correo:</b> ${esc(cot.correo_envio || cot.cliente_correo || '—')}</p>
    <p><b>Estado:</b> ${esc(cot.estado)}</p>
  </div>
  <table>
    <thead><tr><th>Descripción</th><th>Cant.</th><th>P. Unit.</th><th>Importe</th></tr></thead>
    <tbody>${itemsRows}</tbody>
  </table>
  <table class="tot" style="margin-top:8px">
    <tr><td>Precio base</td><td style="width:120px">${sol(cot.base)}</td></tr>
    <tr><td>Descuento (${cot.descuento_pct}%)</td><td>- ${sol(cot.descuento_monto)}</td></tr>
    <tr><td>Subtotal</td><td>${sol(cot.subtotal)}</td></tr>
    <tr><td>IGV (${cot.igv_pct}%)</td><td>${sol(cot.igv)}</td></tr>
    <tr class="total"><td>TOTAL</td><td>${sol(cot.total)}</td></tr>
  </table>
  <p style="font-size:10px;color:#616B75;margin-top:20px">Documento generado por el Sistema de Gestión de Cotizaciones de InfleSusVentas.</p>
</body></html>`;
}

module.exports = { generarWord };
