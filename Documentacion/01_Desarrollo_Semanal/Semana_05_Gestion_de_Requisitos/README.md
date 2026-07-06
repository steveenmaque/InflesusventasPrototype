# Semana 5 — Gestión de Requisitos
## Sistema de Gestión de Cotizaciones — "InfleSusVentas"

> **Curso:** Ingeniería de Requisitos · **Docente:** Prof. Ciro Rodriguez · UNMSM · Ciclo 5, 2026-I
> **Aporta al entregable:** Cap. 8 (atributos, línea base, priorización) · **Rúbrica:** 4
> **Estado:** 🟡 Pendiente de completar
> **Navegación:** [◀ Semana 4](../Semana_04_Especificacion_SRS/README.md) · [Índice](../../README.md) · [Semana 6 ▶](../Semana_06_Requisitos_Funcionales/README.md)

---

## 🎯 Objetivo del bloque
Administrar los requisitos: atributos, versiones, línea base y priorización MoSCoW.

## 📦 Artefactos a producir
- Tabla de **atributos** por requisito (ID, fuente, tipo, prioridad, estado, versión).
- Definición de **línea base** y política de versionado.
- **Priorización MoSCoW** consolidada + definición de **MVP**.

---

## 1. Atributos de gestión por requisito (plantilla)
| ID | Fuente | Tipo | Prioridad | Estado | Versión |
|---|---|---|:--:|---|:--:|
| RF-01 | Entrevista Gerente | Funcional | Must | Aprobado | 1.0 |
| RF-39 | Entrevista Gerente | Funcional | Should | Propuesto | 0.1 |
| RNF-01 | Análisis técnico | No funcional | Must | Aprobado | 1.0 |

> Estados: Propuesto → Aprobado → Implementado → Verificado.

## 2. Priorización MoSCoW (consolidada)

### Must Have (MVP)
- Validación RUC + autocompletado editable (RF-01..RF-06).
- Catálogo con lógica de medidas (RF-08..RF-16).
- Precio base + IGV automático desglosado (RF-17..RF-21).
- Auto-numeración y fecha automática (RF-23..RF-25).
- Exportación PDF/Word + envío por correo (RF-26..RF-28).
- Sidebar (Historial, Clientes, Nueva Cotización) (RF-30..RF-33).
- Persistencia y trazabilidad (RF-35, RF-36).

### Should Have
- Cotización Rápida (RF-39..RF-42), IGV configurable, estado de envío, filtros, reutilización de cliente.

### Could Have
- Duplicar cotización, convertir rápida→estándar, bitácora, interfaz WhatsApp.

### Won't Have (por ahora)
- Captura automática desde WhatsApp/Yahoo/web, facturación, inventario, pagos, multi-rol.

## 3. Definición de MVP
> **MVP:** crear una cotización estándar completa (cliente con RUC validado, ítems con medidas y
> descripción automática, cálculo de IGV, numeración y fecha), exportarla a PDF y enviarla por correo,
> con historial consultable.

## 4. Línea base
- Se congela la **línea base 1.0** al cerrar la Semana 7 (RF + RNF aprobados).
- Aprobación: rol **R1 (Líder de Proyecto)** con visto del equipo.
- Cambios posteriores se gestionan vía RFC (ver [Semana 12](../Semana_12_Gestion_de_Cambios/README.md)).

---

## ❓ Preguntas de gestión
1. ¿Qué prioridad MoSCoW tiene cada requisito y por qué?
2. ¿Cuál es la fuente (stakeholder) de cada requisito?
3. ¿Qué requisitos son dependientes entre sí?
4. ¿Cuándo se congela la línea base y quién la aprueba?

## 🛠️ Herramientas
Trello/JIRA + hoja de cálculo de atributos.

## ✅ Checklist de cierre
- [ ] Tabla de atributos completa
- [ ] MoSCoW consolidado
- [ ] MVP definido
- [ ] Política de línea base acordada

## 🔗 Referencias
Guía General de IR §10.
