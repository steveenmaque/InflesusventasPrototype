# Semana 11 — Requisitos de Calidad (ISO/IEC 25010)
## Sistema de Gestión de Cotizaciones — "InfleSusVentas"

> **Curso:** Ingeniería de Requisitos · **Docente:** Prof. Ciro Rodriguez · UNMSM · Ciclo 5, 2026-I
> **Aporta al entregable:** Cap. 7 (fichas ISO 25010, métricas) · **Rúbrica:** 2
> **Estado:** 🟡 Pendiente de completar
> **Navegación:** [◀ Semana 10](../Semana_10_Requisitos_de_Desarrollo/README.md) · [Índice](../../README.md) · [Semana 12 ▶](../Semana_12_Gestion_de_Cambios/README.md)

---

## 🎯 Objetivo del bloque
Formalizar los RNF como **requisitos de calidad medibles** alineados a **ISO/IEC 25010**.

## 📦 Artefactos a producir
Ficha de calidad por requisito + tabla de métricas por característica.

---

## 1. Ficha de calidad (plantilla del profesor — repetir por requisito)
| Campo | Valor |
|---|---|
| Problema | `[…]` |
| Necesidad | `[…]` |
| Stakeholder | Gerente |
| Característica ISO 25010 | `[eficiencia / seguridad / usabilidad / fiabilidad / mantenibilidad]` |
| Requisito especificado | `[…]` |
| Métrica | `[…]` |
| Valor objetivo | `[…]` |
| Método de verificación | `[…]` |
| Criterio de aceptación | `[…]` |
| Prioridad | `[…]` |

## 2. Ejemplo aplicado (Eficiencia de desempeño)
| Campo | Valor |
|---|---|
| Necesidad | Cotizar sin esperas al validar el RUC |
| Característica ISO 25010 | **Eficiencia de desempeño** (comportamiento temporal) |
| Requisito | El sistema deberá validar el RUC y autocompletar la razón social |
| Métrica | Tiempo de respuesta |
| Valor objetivo | < 5 s en el 95 % de las consultas |
| Verificación | Prueba de tiempos con 30 RUC de muestra |
| Prioridad | Must |

## 3. Mapeo RNF (S7) → característica ISO 25010
| RNF | Característica ISO 25010 |
|---|---|
| RNF-01, RNF-02, RNF-03 | Usabilidad |
| RNF-04, RNF-05 | Eficiencia de desempeño |
| RNF-06, RNF-07 | Fiabilidad |
| RNF-08, RNF-09, RNF-10 | Seguridad |
| RNF-11, RNF-12 | Mantenibilidad / Portabilidad |
| RNF-13, RNF-14 | Compatibilidad |

---

## ❓ Preguntas para plasmar calidad
1. ¿A qué característica ISO 25010 corresponde cada necesidad?
2. ¿Qué métrica la mide objetivamente y cuál es el valor objetivo?
3. ¿Cómo se verifica y cuál es el criterio de aceptación?

## ✅ Checklist de cierre
- [ ] Ficha ISO 25010 por cada RNF relevante
- [ ] Métricas y valores objetivo confirmados
- [ ] Método de verificación definido

## 🔗 Referencias
Guía General de IR §15. Origen de los RNF: [Semana 7](../Semana_07_Requisitos_No_Funcionales/README.md).
