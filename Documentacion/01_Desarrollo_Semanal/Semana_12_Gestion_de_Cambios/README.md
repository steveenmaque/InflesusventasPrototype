# Semana 12 — Gestión de Cambios
## Sistema de Gestión de Cotizaciones — "InfleSusVentas"

> **Curso:** Ingeniería de Requisitos · **Docente:** Prof. Ciro Rodriguez · UNMSM · Ciclo 5, 2026-I
> **Aporta al entregable:** Cap. 8 (RFC, impacto, CCB) · **Rúbrica:** 4
> **Estado:** 🟡 Pendiente de completar
> **Navegación:** [◀ Semana 11](../Semana_11_Requisitos_de_Calidad/README.md) · [Índice](../../README.md) · [Semana 13 ▶](../Semana_13_Trazabilidad/README.md)

---

## 🎯 Objetivo del bloque
Definir el **proceso de control de cambios** y analizar el impacto de un cambio real.

## 📦 Artefactos a producir
Flujo RFC → análisis de impacto → **CCB** → nueva línea base; formato de solicitud; **1 caso** gestionado.

---

## 1. Flujo de gestión de cambios
```
Solicitud (RFC) → Análisis de impacto (alcance/costo/cronograma/riesgo)
   → Decisión CCB (Aprobar/Rechazar) → Actualizar línea base y comunicar
```
- **Quién puede solicitar:** Gerente o cualquier integrante del equipo.
- **CCB (comité):** rol **R1 (Líder)** + rol **R4 (QA)**.

## 2. Formato de solicitud de cambio (RFC)
| Campo | Contenido |
|---|---|
| ID de cambio | RFC-01 |
| Solicitante | `[…]` |
| Descripción | `[…]` |
| Requisitos afectados | `[…]` |
| Análisis de impacto | `[alcance / costo / cronograma / riesgo]` |
| Decisión CCB | Aprobado / Rechazado |

## 3. Caso de ejemplo gestionado
| Campo | Contenido |
|---|---|
| ID | RFC-01 |
| Descripción | Añadir **descuento por volumen** al cálculo de precio |
| Requisitos afectados | RF-17, RF-19, RD-02 |
| Impacto | Alcance: medio · Cronograma: +1 sprint · Riesgo: recalcular IGV sobre subtotal con descuento |
| Decisión CCB | `[Aprobado/Rechazado]` |

---

## ❓ Preguntas para gestionar cambios
1. ¿Cómo se solicita un cambio y quién lo puede pedir?
2. ¿Quién evalúa el impacto y quién aprueba/rechaza?
3. ¿Qué requisitos/diseños/pruebas se ven afectados?
4. ¿Cómo se versiona y comunica el cambio?

## ✅ Checklist de cierre
- [ ] Flujo RFC/CCB documentado
- [ ] Formato de RFC definido
- [ ] ≥ 1 cambio gestionado de ejemplo

## 🔗 Referencias
Guía General de IR §16. Línea base definida en [Semana 5](../Semana_05_Gestion_de_Requisitos/README.md).
