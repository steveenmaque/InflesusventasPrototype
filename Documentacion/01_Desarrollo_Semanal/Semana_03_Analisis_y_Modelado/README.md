# Semana 3 — Análisis y Modelado (UML)
## Sistema de Gestión de Cotizaciones — "InfleSusVentas"

> **Curso:** Ingeniería de Requisitos · **Docente:** Prof. Ciro Rodriguez · UNMSM · Ciclo 5, 2026-I
> **Aporta al entregable:** Cap. 6 (casos de uso, actividad, secuencia, clases) · **Rúbrica:** 1, 2
> **Estado:**  Pendiente de completar
> **Navegación:** [ Semana 2](../Semana_02_Elicitacion/README.md) · [Índice](../../README.md) · [Semana 4 ](../Semana_04_Especificacion_SRS/README.md)

---

## Objetivo del bloque
Representar los requisitos de InfleSusVentas con modelos UML que faciliten la comprensión y la
detección temprana de errores.

## Artefactos a producir
- Diagrama de **casos de uso** (actores + casos, con «include»/«extend»).
- Diagrama de **actividades** (con particiones/swimlanes) del flujo de cotización.
- Diagrama de **secuencia** de los flujos críticos (validar RUC, generar cotización, enviar correo).
- Diagrama de **clases** del dominio (Cliente, Cotización, Ítem, Tarifa).

---

## 1. Actores del sistema
| Actor | Objetivo |
|---|---|
| **Gerente** | Crear, exportar y enviar cotizaciones; gestionar clientes e historial |
| **Servicio de RUC** (externo) | Validar RUC y devolver razón social |
| **Servicio de Correo** (externo) | Entregar la cotización al cliente |

## 2. Casos de uso candidatos (derivados de la elicitación)
| CU | Actor principal | Relaciones |
|---|---|---|
| CU-01 Registrar/validar cliente | Gerente + Servicio RUC | `<<include>>` Validar RUC |
| CU-02 Crear cotización estándar | Gerente | `<<include>>` CU-01; `<<include>>` Calcular IGV |
| CU-03 Agregar ítem al catálogo de la cotización | Gerente | `<<extend>>` por tipo (globo/arco/carpa/…) |
| CU-04 Calcular precio e IGV | Gerente (sistema) | — |
| CU-05 Exportar cotización (PDF/Word) | Gerente | — |
| CU-06 Enviar cotización por correo | Gerente + Servicio Correo | `<<extend>>` de CU-05 |
| CU-07 Consultar historial / clientes | Gerente | — |
| CU-08 Crear cotización rápida | Gerente | `<<extend>>` de CU-02 (sin validar RUC) |

> Tamaño estimado (sistema medio): 3 actores → **~8 casos de uso** (dentro del rango recomendado).

## 3. Diagramas (insertar en `04_Recursos/imagenes/` y referenciar)
| Diagrama | Estado | Archivo |
|---|:--:|---|
| Casos de uso (general) | Pendiente | `../../04_Recursos/imagenes/[…]` |
| Actividad (flujo de cotización con swimlanes) | Pendiente | `../../04_Recursos/imagenes/[…]` |
| Secuencia (validar RUC → cotizar → enviar) | Pendiente | `../../04_Recursos/imagenes/[…]` |
| Clases del dominio | Pendiente | `../../04_Recursos/imagenes/[…]` |

---

## Preguntas para modelar
1. ¿Qué actores interactúan y qué objetivo persigue cada uno?
2. ¿Qué casos de uso incluyen a otros (`<<include>>`) o son extensiones (`<<extend>>`)?
3. Para *Crear cotización*: ¿flujo principal y alternativos?
4. ¿Quién hace cada paso (define swimlanes del diagrama de actividad)?

## Herramientas
PlantUML (notación del profesor), draw.io, StarUML, Mermaid.

## Checklist de cierre
- [ ] Diagrama de casos de uso con include/extend
- [ ] Diagrama de actividad con particiones
- [ ] Diagrama de secuencia de ≥ 1 flujo crítico
- [ ] Diagrama de clases del dominio

## Referencias
Guía General de IR §8, §20 (catálogo de diagramas).
