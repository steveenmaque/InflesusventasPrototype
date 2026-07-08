'use strict';
/**
 * Lógica de medidas por categoría (SRS §8.4, reglas RD-03, RD-04, RD-06).
 * - Define qué medidas son obligatorias por categoría.
 * - Deriva el rango de tamaño (Pequeño/Mediano/Grande) para elegir la tarifa (RD-07).
 * - Genera la descripción automática de ítems estándar; 'Otros' queda en blanco (RD-04).
 * - En globos, el diámetro se deriva de la altura por un factor (RD-06).
 */

/** Catálogo de categorías (RF-09) y sus medidas obligatorias (RF-10..RF-14, RD-03). */
const CATEGORIAS = {
  globo:              { etiqueta: 'Globo',              medidas: ['altura'],                  autoDesc: true,  dimTamano: 'altura' },
  arco:               { etiqueta: 'Arco',               medidas: ['largo', 'alto'],           autoDesc: true,  dimTamano: 'largo' },
  carpa_cuadrangular: { etiqueta: 'Carpa cuadrangular', medidas: ['alto', 'largo', 'ancho'],  autoDesc: true,  dimTamano: 'largo' },
  carpa_circular:     { etiqueta: 'Carpa circular',     medidas: ['diametro', 'altura'],      autoDesc: true,  dimTamano: 'diametro' },
  totem:              { etiqueta: 'Tótem',              medidas: ['altura'],                  autoDesc: true,  dimTamano: 'altura' },
  skydancer:          { etiqueta: 'Skydancer',          medidas: ['altura'],                  autoDesc: true,  dimTamano: 'altura' },
  otros:              { etiqueta: 'Otros',              medidas: ['alto', 'ancho', 'largo'],  autoDesc: false, dimTamano: 'largo' },
};

const ETIQUETA_MEDIDA = {
  altura: 'Altura', alto: 'Alto', largo: 'Largo', ancho: 'Ancho', diametro: 'Diámetro',
};

/** Umbrales (en metros) del rango de tamaño. Determina la tarifa a aplicar (RD-07). */
function rangoPorTamano(valor) {
  const v = Number(valor) || 0;
  if (v <= 3) return 'Pequeño';
  if (v <= 6) return 'Mediano';
  return 'Grande';
}

/**
 * Valida y normaliza las medidas de un ítem según su categoría (RD-03).
 * Devuelve { ok, error, medidas, rango }.
 * En globo agrega el diámetro derivado de la altura por el factor (RD-06).
 */
function procesarMedidas(categoria, medidasEntrada, factorGlobo = 0.6) {
  const cat = CATEGORIAS[categoria];
  if (!cat) return { ok: false, error: 'Categoría no válida.' };

  const medidas = {};
  for (const campo of cat.medidas) {
    const num = Number(medidasEntrada[campo]);
    if (!Number.isFinite(num) || num <= 0) {
      return { ok: false, error: `Falta la medida obligatoria "${ETIQUETA_MEDIDA[campo]}" para ${cat.etiqueta}.` };
    }
    medidas[campo] = Math.round(num * 100) / 100;
  }

  // RD-06: en globos el diámetro se deriva de la altura (el usuario NO lo ingresa).
  if (categoria === 'globo') {
    medidas.diametro = Math.round(medidas.altura * factorGlobo * 100) / 100;
  }

  const rango = rangoPorTamano(medidas[cat.dimTamano]);
  return { ok: true, medidas, rango };
}

/** Descripción automática de ítems estándar (RD-04, RF-15). 'Otros' → cadena vacía (RF-16). */
function descripcionAutomatica(categoria, medidas) {
  const cat = CATEGORIAS[categoria];
  if (!cat || !cat.autoDesc) return '';
  const partes = cat.medidas.map((m) => `${ETIQUETA_MEDIDA[m]} ${medidas[m]} m`);
  if (categoria === 'globo' && medidas.diametro) {
    partes.push(`Ø ${medidas.diametro} m`);
  }
  return `${cat.etiqueta} — ${partes.join(' × ')}`;
}

module.exports = { CATEGORIAS, ETIQUETA_MEDIDA, rangoPorTamano, procesarMedidas, descripcionAutomatica };
