'use strict';
/**
 * Adaptador del servicio de correo — CU-07 (RF-28).
 *
 * Envío REAL por SMTP con nodemailer cuando hay credenciales configuradas
 * (variables SMTP_* del entorno / .env). Adjunta el PDF de la cotización.
 * Si no hay credenciales, cae a un modo "simulado" que registra el envío en
 * consola, para que el prototipo siga funcionando en demos (RNF-06).
 *
 * Variables de entorno (ver .env.example):
 *   SMTP_HOST    host SMTP (p. ej. smtp.gmail.com)
 *   SMTP_PORT    puerto (465 con SSL, 587 con STARTTLS)
 *   SMTP_SECURE  'true' para SSL directo (puerto 465)
 *   SMTP_USER    usuario/cuenta
 *   SMTP_PASS    contraseña o "App Password"
 *   SMTP_FROM    remitente mostrado (p. ej. "InfleSusVentas <ventas@...>")
 */
const nodemailer = require('nodemailer');
const { EMPRESA } = require('./plantilla');

function correoValido(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(correo || '').trim());
}

/** ¿Hay credenciales SMTP suficientes para enviar de verdad? */
function smtpConfigurado() {
  return !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

let _transporte = null;
function transporte() {
  if (!_transporte) {
    _transporte = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10) || 587,
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      connectionTimeout: 10000,   // no colgar la petición si el SMTP no responde
      greetingTimeout: 10000,
    });
  }
  return _transporte;
}

/** Cuerpo HTML de marca para el correo de la cotización. */
function cuerpoHtml(cot) {
  const fmt = (n) => 'S/ ' + Number(n || 0).toFixed(2);
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;color:#21252B;max-width:560px;margin:0 auto">
    <div style="background:#312E81;color:#fff;padding:18px 22px;border-radius:8px 8px 0 0">
      <h2 style="margin:0;font-size:18px">${EMPRESA.nombre}</h2>
      <div style="font-size:12px;color:#c7c4ef">${EMPRESA.rubro}</div>
    </div>
    <div style="border:1px solid #E0E2E4;border-top:none;padding:22px;border-radius:0 0 8px 8px">
      <p>Estimado cliente${cot.razon_social ? ' <b>' + cot.razon_social + '</b>' : ''}:</p>
      <p>Adjuntamos la <b>Cotización N° ${cot.numero}</b> con fecha ${cot.fecha}.</p>
      <table style="border-collapse:collapse;margin:14px 0;font-size:14px">
        <tr><td style="padding:4px 14px 4px 0;color:#666E70">Total</td>
            <td style="padding:4px 0;font-weight:bold;color:#312E81">${fmt(cot.total)}</td></tr>
        <tr><td style="padding:4px 14px 4px 0;color:#666E70">Validez de la oferta</td>
            <td style="padding:4px 0">${EMPRESA.validez}</td></tr>
      </table>
      <p style="font-size:13px;color:#666E70">Ante cualquier consulta, quedamos a su disposición.</p>
      <p style="font-size:13px">Atentamente,<br><b>${EMPRESA.responsable}</b><br>${EMPRESA.nombre}</p>
    </div>
  </div>`;
}

/**
 * Envía la cotización al cliente con el PDF adjunto.
 * @param {string} correo    destinatario
 * @param {object} cot       cotización (para asunto y cuerpo)
 * @param {Buffer} pdfBuffer adjunto PDF (opcional)
 * @returns {Promise<{ ok:boolean, error?:string, simulado?:boolean }>}
 */
async function enviarCotizacion(correo, cot, pdfBuffer) {
  if (!correoValido(correo)) {
    return { ok: false, error: 'El correo tiene un formato inválido.' };
  }
  const nombreAdjunto = `Cotizacion_${cot.numero}.pdf`;

  if (!smtpConfigurado()) {
    console.log(`[correo:SIMULADO] Cotización #${cot.numero} → ${correo} (adjunto: ${nombreAdjunto}). Configure SMTP_* en .env para envío real.`);
    return { ok: true, simulado: true };
  }

  try {
    await transporte().sendMail({
      from: process.env.SMTP_FROM || `${EMPRESA.nombre} <${process.env.SMTP_USER}>`,
      to: correo,
      subject: `${EMPRESA.asunto} — Cotización N° ${cot.numero}`,
      html: cuerpoHtml(cot),
      attachments: pdfBuffer
        ? [{ filename: nombreAdjunto, content: pdfBuffer, contentType: 'application/pdf' }]
        : [],
    });
    console.log(`[correo] Cotización #${cot.numero} enviada a ${correo}.`);
    return { ok: true };
  } catch (e) {
    console.error(`[correo] Error al enviar #${cot.numero} a ${correo}:`, e.message);
    return { ok: false, error: 'No se pudo enviar el correo: ' + e.message };
  }
}

module.exports = { enviarCotizacion, correoValido, smtpConfigurado };
