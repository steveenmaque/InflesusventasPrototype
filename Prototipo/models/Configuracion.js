'use strict';
/** Modelo Configuracion (§8.5). Soporta CU-11 (parámetros e IGV, tope, correlativo, factor). */
const { db } = require('../config/db');

const Configuracion = {
  obtener() {
    return db.prepare('SELECT * FROM configuracion WHERE id = 1').get();
  },
  actualizar({ igv_pct, tope_descuento, correlativo_inicial, plazo_recordatorio, factor_globo }) {
    db.prepare(`UPDATE configuracion
                SET igv_pct=?, tope_descuento=?, correlativo_inicial=?, plazo_recordatorio=?, factor_globo=?
                WHERE id = 1`)
      .run(igv_pct, tope_descuento, correlativo_inicial, plazo_recordatorio, factor_globo);
    return this.obtener();
  },
};

module.exports = Configuracion;
