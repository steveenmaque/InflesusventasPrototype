'use strict';
/** Modelo Tarifa (§8.5, RD-07). Precio unitario por categoría + rango de tamaño. */
const { db } = require('../config/db');

const Tarifa = {
  listar() {
    return db.prepare("SELECT * FROM tarifa ORDER BY categoria, CASE rango WHEN 'Pequeño' THEN 1 WHEN 'Mediano' THEN 2 ELSE 3 END").all();
  },
  /** Devuelve el precio unitario para una categoría/rango, o null si no está definida (→ CU-11). */
  precioUnitario(categoria, rango) {
    const t = db.prepare('SELECT precio_unit FROM tarifa WHERE categoria=? AND rango=?').get(categoria, rango);
    return t ? t.precio_unit : null;
  },
  actualizar(id, precio_unit) {
    db.prepare('UPDATE tarifa SET precio_unit=? WHERE id=?').run(precio_unit, id);
  },
  /** Alta de una tarifa nueva (flujo alternativo 2a de CU-11). */
  upsert(categoria, rango, precio_unit) {
    db.prepare(`INSERT INTO tarifa (categoria, rango, precio_unit) VALUES (?,?,?)
                ON CONFLICT(categoria, rango) DO UPDATE SET precio_unit=excluded.precio_unit`)
      .run(categoria, rango, precio_unit);
  },
};

module.exports = Tarifa;
