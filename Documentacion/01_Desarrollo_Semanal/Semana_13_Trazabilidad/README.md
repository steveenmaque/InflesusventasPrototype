# Semana 13 — Trazabilidad
## Sistema de Gestión de Cotizaciones — "InfleSusVentas"

> **Curso:** Ingeniería de Requisitos · **Docente:** Prof. Ciro Rodriguez · UNMSM · Ciclo 5, 2026-I
> **Aporta al entregable:** Cap. 8 (matriz bidireccional) · **Rúbrica:** 4, 6
> **Estado:** 🟡 Pendiente de completar
> **Navegación:** [◀ Semana 12](../Semana_12_Gestion_de_Cambios/README.md) · [Índice](../../README.md) · [Semana 14 ▶](../Semana_14_Validacion_y_Verificacion/README.md)

---

## 🎯 Objetivo del bloque
Construir la **matriz de trazabilidad bidireccional**: requisito ↔ caso de uso ↔ diseño ↔ código ↔ prueba.

## 📦 Artefactos a producir
Matriz directa e inversa + análisis de **cobertura** y **sobrediseño**.

---

## 1. Matriz de trazabilidad (plantilla, a completar)
| Req ID | Necesidad/Fuente | Caso de uso | Diseño | Módulo/Código | Caso de prueba | Estado | ¿Cumple? |
|---|---|---|---|---|---|---|:--:|
| RF-01 | RN-05 (validar RUC) | CU-01 | `[…]` | `[…]` | CP-01 | `[…]` | ☐ |
| RF-17 | RN-02 (precio) | CU-04 | `[…]` | `[…]` | CP-04 | `[…]` | ☐ |
| RF-20 | RN-02 (IGV) | CU-04 | `[…]` | `[…]` | CP-05 | `[…]` | ☐ |
| RF-28 | RN-06 (envío) | CU-06 | `[…]` | `[…]` | CP-08 | `[…]` | ☐ |
| RNF-04 | Eficiencia | — | `[…]` | `[…]` | CP-RNF-04 | `[…]` | ☐ |

## 2. Análisis de cobertura
- **Directa:** para cada requisito → ¿dónde se implementa y cómo se prueba?
- **Inversa:** para cada componente/prueba → ¿qué requisito lo justifica?
- **Huecos:** ¿algún requisito **sin** prueba?
- **Sobrediseño:** ¿algún componente **sin** requisito?

---

## ❓ Preguntas de trazabilidad
1. ¿Cada RF/RNF está vinculado a un CU, un diseño, un componente y una prueba?
2. ¿Hay requisitos sin prueba (hueco de cobertura)?
3. ¿Hay componentes sin requisito (sobrediseño)?
4. Si cambia un requisito, ¿qué otros artefactos se actualizan?

## ✅ Checklist de cierre
- [ ] Matriz directa completa
- [ ] Matriz inversa completa
- [ ] Cobertura al 100 % de requisitos Must
- [ ] Sin sobrediseño detectado

## 🔗 Referencias
Guía General de IR §17.
