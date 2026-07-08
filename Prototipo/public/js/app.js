'use strict';
/* Lógica de cliente del formulario de cotización:
   - Renderiza medidas dinámicas por categoría (RD-03).
   - Valida el RUC vía /api/ruc (CU-02) y autocompleta la razón social.
   - Recalcula el desglose en vivo vía /api/calcular (CU-05). */

const ETIQ = { altura: 'Altura (m)', alto: 'Alto (m)', largo: 'Largo (m)', ancho: 'Ancho (m)', diametro: 'Diámetro (m)' };
const cont = document.getElementById('items');
let seq = 0;

function opcionesCategorias(sel) {
  return Object.entries(window.CATEGORIAS)
    .map(([k, v]) => `<option value="${k}" ${k === sel ? 'selected' : ''}>${v.etiqueta}</option>`).join('');
}

function camposMedida(categoria) {
  const cat = window.CATEGORIAS[categoria];
  if (!cat) return '';
  return cat.medidas.map((m) => `
    <div>
      <label>${ETIQ[m] || m}</label>
      <input type="number" step="0.01" min="0" class="m-${m}" data-campo="${m}" placeholder="0.00">
    </div>`).join('');
}

function nuevoItem() {
  const id = ++seq;
  const div = document.createElement('div');
  div.className = 'item-row';
  div.dataset.id = id;
  const cat = 'arco';
  div.innerHTML = `
    <button type="button" class="quitar" title="Quitar">×</button>
    <div class="fila">
      <div>
        <label>Categoría</label>
        <select class="cat">${opcionesCategorias(cat)}</select>
      </div>
      <div>
        <label>Cantidad</label>
        <input type="number" class="cant" min="1" step="1" value="1">
      </div>
    </div>
    <div class="fila medidas">${camposMedida(cat)}</div>
    <div class="desc-otros" style="display:none">
      <label>Descripción (Otros)</label>
      <input type="text" class="desc" placeholder="Descripción libre del inflable personalizado">
    </div>`;
  cont.appendChild(div);

  const sel = div.querySelector('.cat');
  sel.addEventListener('change', () => {
    div.querySelector('.medidas').innerHTML = camposMedida(sel.value);
    div.querySelector('.desc-otros').style.display = sel.value === 'otros' ? 'block' : 'none';
    bindInputs(div); recalcular();
  });
  div.querySelector('.quitar').addEventListener('click', () => { div.remove(); recalcular(); });
  bindInputs(div);
  recalcular();
}

function bindInputs(scope) {
  scope.querySelectorAll('input, select').forEach((el) => {
    el.removeEventListener('input', recalcular);
    el.addEventListener('input', recalcular);
  });
}

function leerItems() {
  const items = [];
  cont.querySelectorAll('.item-row').forEach((row) => {
    const categoria = row.querySelector('.cat').value;
    const cantidad = parseInt(row.querySelector('.cant').value, 10) || 1;
    const medidas = {};
    let completo = true;
    row.querySelectorAll('.medidas input').forEach((inp) => {
      const v = parseFloat(inp.value);
      if (!Number.isFinite(v) || v <= 0) completo = false;
      medidas[inp.dataset.campo] = v;
    });
    const descripcion = categoria === 'otros' ? (row.querySelector('.desc')?.value || '') : '';
    if (completo) items.push({ categoria, cantidad, medidas, descripcion });
  });
  return items;
}

const fmt = (n) => 'S/ ' + Number(n || 0).toFixed(2);

async function recalcular() {
  const items = leerItems();
  const descuento_pct = document.getElementById('descuento_pct').value;
  if (items.length === 0) { pintar({ base: 0, descuentoMonto: 0, subtotal: 0, igv: 0, total: 0 }); return; }
  try {
    const r = await fetch('/api/calcular', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items, descuento_pct }),
    });
    const data = await r.json();
    if (data.ok) pintar(data.montos);
  } catch (e) { /* silencioso: cálculo en vivo */ }
}

function pintar(m) {
  document.getElementById('d_base').textContent = fmt(m.base);
  document.getElementById('d_desc').textContent = '- ' + fmt(m.descuentoMonto);
  document.getElementById('d_sub').textContent = fmt(m.subtotal);
  document.getElementById('d_igv').textContent = fmt(m.igv);
  document.getElementById('d_total').textContent = fmt(m.total);
}

// --- CU-02: validación de RUC ---
document.getElementById('btnRuc').addEventListener('click', async () => {
  const ruc = document.getElementById('ruc').value.trim();
  const msg = document.getElementById('rucMsg');
  msg.textContent = 'Consultando servicio de RUC…'; msg.style.color = '';
  try {
    const r = await fetch('/api/ruc', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ruc }) });
    const data = await r.json();
    if (data.ok) {
      document.getElementById('razon_social').value = data.razonSocial;
      msg.textContent = '✓ Razón social autocompletada (editable).'; msg.style.color = 'var(--ok)';
    } else {
      msg.textContent = data.mensaje; msg.style.color = 'var(--naranja)';
    }
  } catch (e) {
    msg.textContent = 'Servicio no disponible: ingrese la razón social manualmente (RNF-06).'; msg.style.color = 'var(--naranja)';
  }
});

// --- Envío: empaqueta los ítems ---
document.getElementById('formCot').addEventListener('submit', (e) => {
  const items = leerItems();
  if (items.length === 0) {
    e.preventDefault();
    alert('Agregue al menos un ítem con todas sus medidas obligatorias (RF-08).');
    return;
  }
  document.getElementById('items_json').value = JSON.stringify(items);
});

document.getElementById('btnAddItem').addEventListener('click', nuevoItem);
document.getElementById('descuento_pct').addEventListener('input', recalcular);
nuevoItem(); // primer ítem por defecto
