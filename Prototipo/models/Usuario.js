'use strict';
/** Modelo Usuario (entidad del dominio §8.5). Soporta CU-01 Autenticarse. */
const { db, verifyPassword } = require('../config/db');

const Usuario = {
  porUsuario(usuario) {
    return db.prepare('SELECT * FROM usuario WHERE usuario = ?').get(usuario);
  },
  porId(id) {
    return db.prepare('SELECT id, usuario, nombre, rol, activo FROM usuario WHERE id = ?').get(id);
  },
  /** Autenticación (CU-01). Devuelve el usuario si las credenciales son válidas y está activo. */
  autenticar(usuario, password) {
    const u = this.porUsuario(usuario);
    if (!u) return { ok: false, motivo: 'credenciales' };
    if (!u.activo) return { ok: false, motivo: 'inactivo' };       // Excepción 3b (CU-01)
    if (!verifyPassword(password, u.password)) return { ok: false, motivo: 'credenciales' };
    return { ok: true, usuario: { id: u.id, usuario: u.usuario, nombre: u.nombre, rol: u.rol } };
  },
};

module.exports = Usuario;
