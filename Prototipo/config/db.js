'use strict';
/**
 * Capa de acceso a datos (BD relacional).
 * Usa el módulo integrado de Node.js `node:sqlite` (sin dependencias nativas).
 * Aquí se crea el esquema (entidades del dominio, §8.5 de la SRS) y los datos semilla.
 */
const { DatabaseSync } = require('node:sqlite');
const path = require('node:path');
const crypto = require('node:crypto');

const DB_PATH = path.join(__dirname, '..', 'data', 'inflesusventas.db');
const db = new DatabaseSync(DB_PATH);
db.exec('PRAGMA foreign_keys = ON;');

/** Hash de contraseña con scrypt (RNF-08 seguridad). Formato: sal:hash (hex). */
function hashPassword(plain) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(plain, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}
function verifyPassword(plain, stored) {
  const [salt, hash] = String(stored).split(':');
  if (!salt || !hash) return false;
  const test = crypto.scryptSync(plain, salt, 64).toString('hex');
  const a = Buffer.from(hash, 'hex');
  const b = Buffer.from(test, 'hex');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function crearEsquema() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS usuario (
      id        INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario   TEXT UNIQUE NOT NULL,
      password  TEXT NOT NULL,
      nombre    TEXT NOT NULL,
      rol       TEXT NOT NULL DEFAULT 'trabajador',
      activo    INTEGER NOT NULL DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS cliente (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      ruc           TEXT,
      razon_social  TEXT NOT NULL,
      correo        TEXT,
      telefono      TEXT,
      creado_en     TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS tarifa (
      id             INTEGER PRIMARY KEY AUTOINCREMENT,
      categoria      TEXT NOT NULL,
      rango          TEXT NOT NULL,          -- Pequeño | Mediano | Grande
      precio_unit    REAL NOT NULL,
      UNIQUE(categoria, rango)
    );

    CREATE TABLE IF NOT EXISTS configuracion (
      id                    INTEGER PRIMARY KEY CHECK (id = 1),
      igv_pct               REAL NOT NULL DEFAULT 18,
      tope_descuento        REAL NOT NULL DEFAULT 10,
      correlativo_inicial   INTEGER NOT NULL DEFAULT 1001,
      plazo_recordatorio    INTEGER NOT NULL DEFAULT 3,
      factor_globo          REAL NOT NULL DEFAULT 0.6
    );

    CREATE TABLE IF NOT EXISTS cotizacion (
      numero        INTEGER PRIMARY KEY,       -- correlativo único (RD-01, desde 1001)
      cliente_id    INTEGER REFERENCES cliente(id),
      usuario_id    INTEGER REFERENCES usuario(id),
      fecha         TEXT NOT NULL,
      tipo          TEXT NOT NULL DEFAULT 'estandar',
      descuento_pct REAL NOT NULL DEFAULT 0,
      descuento_monto REAL NOT NULL DEFAULT 0,
      base          REAL NOT NULL DEFAULT 0,
      subtotal      REAL NOT NULL DEFAULT 0,
      igv           REAL NOT NULL DEFAULT 0,
      total         REAL NOT NULL DEFAULT 0,
      igv_pct       REAL NOT NULL DEFAULT 18,
      estado        TEXT NOT NULL DEFAULT 'Emitida',
      correo_envio  TEXT
    );

    CREATE TABLE IF NOT EXISTS item (
      id             INTEGER PRIMARY KEY AUTOINCREMENT,
      cotizacion_num INTEGER NOT NULL REFERENCES cotizacion(numero) ON DELETE CASCADE,
      categoria      TEXT NOT NULL,
      medidas_json   TEXT NOT NULL,
      rango          TEXT NOT NULL,
      cantidad       INTEGER NOT NULL DEFAULT 1,
      descripcion    TEXT,
      precio_unit    REAL NOT NULL DEFAULT 0,
      precio_base    REAL NOT NULL DEFAULT 0
    );
  `);
}

function poblarSemilla() {
  const nUsuarios = db.prepare('SELECT COUNT(*) c FROM usuario').get().c;
  if (nUsuarios === 0) {
    const ins = db.prepare('INSERT INTO usuario (usuario, password, nombre, rol) VALUES (?,?,?,?)');
    ins.run('gerente', hashPassword('gerente123'), 'Gerente General', 'gerente');
    ins.run('trabajador', hashPassword('trabajador123'), 'Trabajador Encargado', 'trabajador');
  }

  const nConfig = db.prepare('SELECT COUNT(*) c FROM configuracion').get().c;
  if (nConfig === 0) {
    db.prepare(`INSERT INTO configuracion (id, igv_pct, tope_descuento, correlativo_inicial, plazo_recordatorio, factor_globo)
                VALUES (1, 18, 10, 1001, 3, 0.6)`).run();
  }

  const nTarifas = db.prepare('SELECT COUNT(*) c FROM tarifa').get().c;
  if (nTarifas === 0) {
    // Tarifas semilla por categoría + rango de tamaño (RD-07, parametrizables vía CU-11).
    // Valores referenciales en S/ (las tarifas exactas quedaron "por definir" en la SRS).
    const tarifas = [
      ['globo',              'Pequeño', 250], ['globo',              'Mediano', 420], ['globo',              'Grande', 680],
      ['arco',               'Pequeño', 380], ['arco',               'Mediano', 620], ['arco',               'Grande', 950],
      ['carpa_cuadrangular', 'Pequeño', 900], ['carpa_cuadrangular', 'Mediano', 1500],['carpa_cuadrangular', 'Grande', 2400],
      ['carpa_circular',     'Pequeño', 950], ['carpa_circular',     'Mediano', 1600],['carpa_circular',     'Grande', 2600],
      ['totem',              'Pequeño', 300], ['totem',              'Mediano', 480], ['totem',              'Grande', 720],
      ['skydancer',          'Pequeño', 350], ['skydancer',          'Mediano', 550], ['skydancer',          'Grande', 820],
      ['otros',              'Pequeño', 400], ['otros',              'Mediano', 700], ['otros',              'Grande', 1100],
    ];
    const ins = db.prepare('INSERT INTO tarifa (categoria, rango, precio_unit) VALUES (?,?,?)');
    for (const t of tarifas) ins.run(...t);
  }

  // Cliente demo para que el historial no arranque vacío.
  const nClientes = db.prepare('SELECT COUNT(*) c FROM cliente').get().c;
  if (nClientes === 0) {
    db.prepare('INSERT INTO cliente (ruc, razon_social, correo, telefono) VALUES (?,?,?,?)')
      .run('20512345678', 'Publicidad Total S.A.C.', 'contacto@publicidadtotal.com', '01-4567890');
  }
}

crearEsquema();
poblarSemilla();

module.exports = { db, hashPassword, verifyPassword };
