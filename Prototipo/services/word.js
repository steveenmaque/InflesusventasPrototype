'use strict';
/**
 * Generación del documento Word de la cotización — CU-06 (RF-27).
 * Sin dependencias: HTML con cabecera de Word (Word/LibreOffice lo abren como .doc).
 * Replica el formato profesional de la cotización real de InfleSusVentas.
 */
const { EMPRESA, DEFAULTS, DESCRIPCION_MATERIAL, CONDICIONES } = require('./plantilla');

const sol = (n) => 'S/ ' + Number(n).toFixed(2);
const esc = (s) => String(s ?? '').replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

function generarWord(cot) {
  const items = cot.items.map((it, i) => `
    <tr>
      <td style="text-align:center">${String(i + 1).padStart(2, '0')}</td>
      <td style="text-align:center">${it.cantidad}</td>
      <td style="text-align:center">${DEFAULTS.unidad}</td>
      <td>${esc(it.descripcion || it.categoria)}</td>
      <td style="text-align:right">${sol(it.precio_unit)}</td>
      <td style="text-align:right">${sol(it.precio_base)}</td>
    </tr>`).join('');

  const material = DESCRIPCION_MATERIAL.map((p) => `<li>${esc(p)}</li>`).join('');
  const banco = EMPRESA.bancos.map((b) => `${esc(b.etiqueta)}: <b>${esc(b.valor)}</b>`).join(' &nbsp;·&nbsp; ');

  return `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset="utf-8"><title>Cotización ${cot.numero}</title>
<style>
  body{font-family:Calibri,Arial,sans-serif;color:#2E343C;font-size:12px;}
  .hdr{border-bottom:3px solid #EC5F00;padding-bottom:6px;margin-bottom:10px;}
  .hdr h1{color:#0C2871;margin:0;font-size:22px;} .hdr .rubro{color:#616B75;font-size:11px;}
  .num{float:right;background:#0C2871;color:#fff;padding:8px 16px;border-radius:6px;text-align:center;}
  .num b{color:#EC5F00;font-size:18px;display:block;}
  .asunto{color:#0C2871;font-weight:bold;margin:8px 0;}
  table{border-collapse:collapse;width:100%;margin-top:10px;}
  .datos td{border:1px solid #E1E4E8;padding:5px 8px;font-size:11px;background:#F1F3F5;}
  .datos b{color:#616B75;}
  .items th{background:#0C2871;color:#fff;padding:6px;font-size:11px;text-align:left;}
  .items td{border-bottom:1px solid #E1E4E8;padding:6px;font-size:11px;vertical-align:top;}
  .tot{width:50%;margin-left:50%;} .tot td{border:none;text-align:right;padding:3px 6px;}
  .total{background:#EC5F00;color:#fff;font-weight:bold;font-size:14px;}
  .cond{font-size:10px;color:#444;margin-top:4px;} .cond b{color:#0C2871;}
  .banco{font-size:10px;color:#616B75;margin-top:8px;}
  .firma{margin-top:30px;} .firma .l{border-top:1px solid #2E343C;width:200px;padding-top:3px;}
</style></head>
<body>
  <div class="hdr">
    <div class="num">COTIZACIÓN<b>N° ${cot.numero}</b></div>
    <h1>${esc(EMPRESA.nombre)}</h1><div class="rubro">${esc(EMPRESA.rubro)}</div>
  </div>
  <div class="asunto">Asunto: ${esc(EMPRESA.asunto)}</div>

  <table class="datos">
    <tr>
      <td><b>Cliente:</b> ${esc(cot.razon_social || '—')}</td>
      <td><b>Fecha de emisión:</b> ${esc(cot.fecha)}</td>
    </tr>
    <tr>
      <td><b>N.º RUC:</b> ${esc(cot.ruc || '—')}</td>
      <td><b>Condición de pago:</b> ${esc(cot.condicion_pago || DEFAULTS.condicion_pago)}</td>
    </tr>
    <tr>
      <td><b>Atención:</b> ${esc(cot.atencion || '—')}</td>
      <td><b>Tiempo de entrega:</b> ${esc(cot.tiempo_entrega || DEFAULTS.tiempo_entrega)}</td>
    </tr>
    <tr>
      <td><b>Teléfono:</b> ${esc(cot.telefono || '—')}</td>
      <td><b>Incluye IGV 18%:</b> SÍ</td>
    </tr>
  </table>
  <div class="banco">${banco} &nbsp;·&nbsp; Validez: <b>${esc(EMPRESA.validez)}</b></div>

  <table class="items">
    <thead><tr><th>N°</th><th>Cant.</th><th>Unidad</th><th>Descripción</th><th>P. Unit.</th><th>Total S/</th></tr></thead>
    <tbody>${items}</tbody>
  </table>

  <p style="font-size:10px;margin-top:8px"><b style="color:#0C2871">Descripción del material y acabados</b></p>
  <ul style="font-size:10px;color:#444">${material}</ul>

  <table class="tot">
    <tr><td>Precio base</td><td style="width:110px">${sol(cot.base)}</td></tr>
    <tr><td>Descuento (${cot.descuento_pct}%)</td><td>- ${sol(cot.descuento_monto)}</td></tr>
    <tr><td>SUBTOTAL</td><td>${sol(cot.subtotal)}</td></tr>
    <tr><td>IGV (${cot.igv_pct}%)</td><td>${sol(cot.igv)}</td></tr>
    <tr class="total"><td>TOTAL</td><td>${sol(cot.total)}</td></tr>
  </table>

  <p class="cond"><b>Incluye:</b> ${esc(CONDICIONES.incluye)}</p>
  <p class="cond"><b>Tiempo de entrega:</b> ${esc(CONDICIONES.entrega)}</p>
  <p class="cond"><b>Garantía:</b> ${esc(CONDICIONES.garantia)}</p>
  <p class="cond"><b>Artes:</b> ${esc(CONDICIONES.artes)}</p>

  <div class="firma">
    <p style="font-size:10px;font-style:italic;color:#616B75">Soy responsable de la veracidad de los documentos e información. Sin otro particular, quedamos de Uds.</p>
    <div class="l"><b>Atentamente,</b><br>${esc(EMPRESA.responsable)}<br><span style="color:#616B75;font-size:10px">${esc(EMPRESA.nombre)}</span></div>
  </div>
</body></html>`;
}

module.exports = { generarWord };
