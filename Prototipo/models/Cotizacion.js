'use strict';
/**
 * Modelo Cotizacion + Item (§8.5). Núcleo de CU-03, CU-04, CU-05, CU-08.
 * - Numeración única correlativa desde el correlativo_inicial (RD-01, RF-23/24).
 * - Persistencia de ítems y del desglose calculado.
 */
const { db } = require('../config/db');
const Configuracion = require('./Configuracion');

const Cotizacion = {
  /** Siguiente número correlativo garantizando unicidad (RD-01, RF-24). */
  siguienteNumero() {
    const cfg = Configuracion.obtener();
    const max = db.prepare('SELECT MAX(numero) m FROM cotizacion').get().m;
    return max ? max + 1 : cfg.correlativo_inicial;
  },

  /**
   * Crea una cotización con sus ítems y su desglose, dentro de una transacción.
   * @param cab  { cliente_id, usuario_id, fecha, tipo, correo_envio }
   * @param items [{ categoria, medidas, rango, cantidad, descripcion, precio_unit, precio_base }]
   * @param montos desglose de services/calculo.js
   */
  crear(cab, items, montos) {
    const tx = db.prepare('SELECT 1'); // marcador; usamos exec para transacción manual
    db.exec('BEGIN');
    try {
      const numero = this.siguienteNumero();
      db.prepare(`INSERT INTO cotizacion
        (numero, cliente_id, usuario_id, fecha, tipo, descuento_pct, descuento_monto, base, subtotal, igv, total, igv_pct, estado, correo_envio)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`)
        .run(numero, cab.cliente_id, cab.usuario_id, cab.fecha, cab.tipo || 'estandar',
             montos.descuentoPct, montos.descuentoMonto, montos.base, montos.subtotal,
             montos.igv, montos.total, montos.igvPct, 'Emitida', cab.correo_envio || null);

      const insItem = db.prepare(`INSERT INTO item
        (cotizacion_num, categoria, medidas_json, rango, cantidad, descripcion, precio_unit, precio_base)
        VALUES (?,?,?,?,?,?,?,?)`);
      for (const it of items) {
        insItem.run(numero, it.categoria, JSON.stringify(it.medidas), it.rango,
                    it.cantidad, it.descripcion, it.precio_unit, it.precio_base);
      }
      db.exec('COMMIT');
      return numero;
    } catch (e) {
      db.exec('ROLLBACK');
      throw e;
    }
  },

  porNumero(numero) {
    const cot = db.prepare(`
      SELECT c.*, cl.ruc, cl.razon_social, cl.correo AS cliente_correo, cl.telefono,
             u.nombre AS usuario_nombre
      FROM cotizacion c
      LEFT JOIN cliente cl ON cl.id = c.cliente_id
      LEFT JOIN usuario u ON u.id = c.usuario_id
      WHERE c.numero = ?`).get(numero);
    if (!cot) return null;
    cot.items = db.prepare('SELECT * FROM item WHERE cotizacion_num = ? ORDER BY id').all(numero)
      .map((it) => ({ ...it, medidas: JSON.parse(it.medidas_json) }));
    return cot;
  },

  /** Historial general (CU-08, RF-36) con filtro opcional por texto. */
  listar(filtro = '') {
    const q = `%${String(filtro).trim()}%`;
    return db.prepare(`
      SELECT c.numero, c.fecha, c.total, c.estado, cl.razon_social
      FROM cotizacion c LEFT JOIN cliente cl ON cl.id = c.cliente_id
      WHERE (? = '' OR CAST(c.numero AS TEXT) LIKE ? OR cl.razon_social LIKE ? OR c.fecha LIKE ?)
      ORDER BY c.numero DESC`).all(String(filtro).trim(), q, q, q);
  },

  actualizarEstado(numero, estado) {
    db.prepare('UPDATE cotizacion SET estado=? WHERE numero=?').run(estado, numero);
  },
  registrarEnvio(numero, correo) {
    db.prepare('UPDATE cotizacion SET estado=?, correo_envio=? WHERE numero=?').run('Enviada', correo, numero);
  },

  /** KPIs simples para el dashboard. */
  resumen() {
    const total = db.prepare('SELECT COUNT(*) c, COALESCE(SUM(total),0) s FROM cotizacion').get();
    const clientes = db.prepare('SELECT COUNT(*) c FROM cliente').get().c;
    return { cantidad: total.c, monto: total.s, clientes };
  },
};

module.exports = Cotizacion;
