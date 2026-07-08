'use strict';
/**
 * Adaptador del servicio de correo — CU-07 (RF-28).
 *
 * Envía la cotización con el PDF adjunto en tres modos, en este orden:
 *   1) REAL  — si hay credenciales SMTP_* (entrega a buzones reales).
 *   2) TEST  — si no hay SMTP: crea una cuenta de prueba Ethereal al vuelo,
 *              hace un envío SMTP real y devuelve una URL de vista previa del
 *              correo (con su adjunto). No entrega a buzones reales: es un
 *              sandbox seguro para demostrar/verificar el envío sin credenciales.
 *   3) SIMULADO — si no hay internet para Ethereal: registra el envío en consola.
 *
 * Variables de entorno (ver .env.example):
 *   SMTP_HOST · SMTP_PORT · SMTP_SECURE · SMTP_USER · SMTP_PASS · SMTP_FROM
 */
const nodemailer = require('nodemailer');
const { EMPRESA } = require('./plantilla');

function correoValido(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(correo || '').trim());
}

/** ¿Hay credenciales SMTP suficientes para entrega real? */
function smtpConfigurado() {
  return !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

let _transporte = null;
let _modo = null; // 'real' | 'test'

/** Prepara (y cachea) el transporte: SMTP real o cuenta de prueba Ethereal. */
async function obtenerTransporte() {
  if (_transporte) return { transporte: _transporte, modo: _modo };

  if (smtpConfigurado()) {
    _transporte = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10) || 587,
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
    });
    _modo = 'real';
  } else {
    // Cuenta de prueba automática (Ethereal): envío SMTP real capturado con vista previa.
    const cuenta = await nodemailer.createTestAccount();
    _transporte = nodemailer.createTransport({
      host: cuenta.smtp.host,
      port: cuenta.smtp.port,
      secure: cuenta.smtp.secure,
      auth: { user: cuenta.user, pass: cuenta.pass },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
    });
    _modo = 'test';
    console.log(`[correo] Cuenta de prueba Ethereal lista: ${cuenta.user} (los envíos se ven por su URL de vista previa).`);
  }
  return { transporte: _transporte, modo: _modo };
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
 * @returns {Promise<{ ok:boolean, error?:string, modo?:string, preview?:string }>}
 */
async function enviarCotizacion(correo, cot, pdfBuffer) {
  if (!correoValido(correo)) {
    return { ok: false, error: 'El correo tiene un formato inválido.' };
  }
  const nombreAdjunto = `Cotizacion_${cot.numero}.pdf`;

  let transporte, modo;
  try {
    ({ transporte, modo } = await obtenerTransporte());
  } catch (e) {
    // Sin transporte (p. ej. sin internet para crear la cuenta de prueba): modo simulado.
    console.log(`[correo:SIMULADO] Cotización #${cot.numero} → ${correo} (adjunto: ${nombreAdjunto}). ${e.message}`);
    return { ok: true, modo: 'simulado' };
  }

  try {
    const info = await transporte.sendMail({
      from: process.env.SMTP_FROM || `${EMPRESA.nombre} <${process.env.SMTP_USER || 'ventas@inflesusventas.com'}>`,
      to: correo,
      subject: `${EMPRESA.asunto} — Cotización N° ${cot.numero}`,
      html: cuerpoHtml(cot),
      attachments: pdfBuffer
        ? [{ filename: nombreAdjunto, content: pdfBuffer, contentType: 'application/pdf' }]
        : [],
    });
    const preview = modo === 'test' ? nodemailer.getTestMessageUrl(info) : null;
    if (modo === 'test') {
      console.log(`[correo:TEST] Cotización #${cot.numero} → ${correo} · vista previa: ${preview}`);
    } else {
      console.log(`[correo] Cotización #${cot.numero} enviada a ${correo}.`);
    }
    return { ok: true, modo, preview };
  } catch (e) {
    console.error(`[correo] Error al enviar #${cot.numero} a ${correo}:`, e.message);
    return { ok: false, error: 'No se pudo enviar el correo: ' + e.message };
  }
}

module.exports = { enviarCotizacion, correoValido, smtpConfigurado };
