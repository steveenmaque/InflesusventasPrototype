# Semana 14 — Validación y Verificación
## Sistema de Gestión de Cotizaciones — "InfleSusVentas"

> **Curso:** Ingeniería de Requisitos · **Docente:** Prof. Ciro Rodriguez · UNMSM · Ciclo 5, 2026-I
> **Aporta al entregable:** Cap. 9 (walkthrough, UAT, prototipos) · **Rúbrica:** 3
> **Estado:** 🟡 Pendiente de completar
> **Navegación:** [◀ Semana 13](../Semana_13_Trazabilidad/README.md) · [Índice](../../README.md) · [Entregable Final ▶](../../02_Entregable_Final/Documento_SRS.md)

---

## 🎯 Objetivo del bloque
Demostrar con evidencia que los requisitos son **correctos y completos** (validación) y están **bien
construidos** (verificación).

## 📦 Artefactos a producir
- Walkthrough con checklist por requisito.
- Prototipos/wireframes (Figma/Balsamiq).
- Casos de **UAT** en Gherkin.
- Análisis de escenarios (incl. excepciones).
- Informe de hallazgos y correcciones.

---

## 1. Walkthrough — checklist por requisito
| Criterio | RF-01 | RF-17 | RF-28 | RNF-04 |
|---|:--:|:--:|:--:|:--:|
| ¿Claro y sin ambigüedad? | ☐ | ☐ | ☐ | ☐ |
| ¿Completo? | ☐ | ☐ | ☐ | ☐ |
| ¿Verificable/medible? | ☐ | ☐ | ☐ | ☐ |
| ¿Consistente? | ☐ | ☐ | ☐ | ☐ |
| ¿Factible? | ☐ | ☐ | ☐ | ☐ |

## 2. UAT en Gherkin (ejemplos)
```gherkin
Escenario: Validación de RUC válido
  Dado que el gerente ingresa un RUC válido
  Cuando el sistema consulta el servicio de RUC
  Entonces se autocompleta la razón social y el campo queda editable

Escenario: Cálculo de IGV
  Dado una cotización con subtotal S/ 1000
  Cuando el sistema aplica el IGV del 18 %
  Entonces el total mostrado es S/ 1180 con el IGV desglosado (S/ 180)

Escenario: Cotización rápida sin RUC
  Dado que el gerente elige "Cotización Rápida"
  Cuando registra los ítems
  Entonces la cotización se guarda por separado y la fecha registra solo mes y año
```

## 3. Prototipos (wireframes)
Insertar en `04_Recursos/imagenes/` — pantallas: sidebar, nueva cotización, catálogo por tipo, vista de historial.

## 4. Análisis de escenarios de excepción
- Servicio de RUC caído → continuar manualmente (RNF-06).
- Correo de envío inválido → mensaje de error, no se marca como enviada.
- Ítem "Otros" sin descripción → advertencia antes de emitir.

## 5. Informe de hallazgos
| # | Hallazgo | Requisito | Corrección |
|---|---|---|---|
| 1 | `[…]` | `[…]` | `[…]` |

---

## ❓ Preguntas de validación
1. ¿El requisito es claro, completo, verificable, consistente y factible?
2. ¿El prototipo refleja lo que el Gerente esperaba?
3. ¿Los criterios de aceptación son medibles y se cumplen?
4. ¿Qué pasa en escenarios extremos?

## ✅ Checklist de cierre
- [ ] Walkthrough completo
- [ ] Prototipos validados con el Gerente
- [ ] UAT en Gherkin por cada Must
- [ ] Informe de hallazgos y correcciones

## 🔗 Referencias
Guía General de IR §18, §19 (historias de usuario, Gherkin, MVP).
