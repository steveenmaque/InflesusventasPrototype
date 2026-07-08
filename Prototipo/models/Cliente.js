'use strict';
/** Modelo Cliente (§8.5). Soporta CU-02 (registrar/validar) y CU-08 (listar). */
const { db } = require('../config/db');

const Cliente = {
  listar() {
    return db.prepare('SELECT * FROM cliente ORDER BY razon_social').all();
  },
  porId(id) {
    return db.prepare('SELECT * FROM cliente WHERE id = ?').get(id);
  },
  porRuc(ruc) {
    return db.prepare('SELECT * FROM cliente WHERE ruc = ?').get(ruc);
  },
  /** Crea o actualiza el cliente (RF-06 registra y lista). Reutiliza por RUC si existe (RF-07). */
  guardar({ ruc, razon_social, correo, telefono }) {
    const existente = ruc ? this.porRuc(ruc) : null;
    if (existente) {
      db.prepare('UPDATE cliente SET razon_social=?, correo=COALESCE(?,correo), telefono=COALESCE(?,telefono) WHERE id=?')
        .run(razon_social, correo || null, telefono || null, existente.id);
      return this.porId(existente.id);
    }
    const info = db.prepare('INSERT INTO cliente (ruc, razon_social, correo, telefono) VALUES (?,?,?,?)')
      .run(ruc || null, razon_social, correo || null, telefono || null);
    return this.porId(Number(info.lastInsertRowid));
  },
};

module.exports = Cliente;
