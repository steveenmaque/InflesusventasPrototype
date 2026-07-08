'use strict';
/**
 * Adaptador del servicio de correo — CU-07 (RF-28).
 *
 * En producción usaría SMTP/API (RNF-14). En el prototipo el envío se simula:
 * valida el formato del correo y registra el "envío" en la consola. Devuelve el
 * resultado para que el controlador actualice el estado a 'Enviada'.
 */

function correoValido(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(correo || '').trim());
}

/**
 * "Envía" la cotización al cliente.
 * @returns { ok, error }
 */
function enviarCotizacion(correo, numero, adjuntoNombre) {
  if (!correoValido(correo)) {
    return { ok: false, error: 'El correo tiene un formato inválido.' };
  }
  // Simulación de entrega (RNF-14). Aquí iría el transporte SMTP real.
  console.log(`[correo] Cotización #${numero} enviada a ${correo} (adjunto: ${adjuntoNombre}).`);
  return { ok: true };
}

module.exports = { enviarCotizacion, correoValido };
