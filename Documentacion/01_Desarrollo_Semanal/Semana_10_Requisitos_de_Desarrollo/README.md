# Semana 10 — Requisitos de Desarrollo
## Sistema de Gestión de Cotizaciones — "InfleSusVentas"

> **Curso:** Ingeniería de Requisitos · **Docente:** Prof. Ciro Rodriguez · UNMSM · Ciclo 5, 2026-I
> **Aporta al entregable:** Cap. 5.5 (entorno, proceso, restricciones) · **Rúbrica:** 2, 6
> **Estado:**  Pendiente de completar
> **Navegación:** [ Semana 9](../Semana_09_Requisitos_de_Dominio/README.md) · [Índice](../../README.md) · [Semana 11 ](../Semana_11_Requisitos_de_Calidad/README.md)

---

## Objetivo del bloque
Definir **cómo** se construirá el sistema: entorno, proceso, herramientas y estándares.

## Artefactos a producir
Tabla de requisitos de desarrollo por fase (identificación → especificación → verificación → gestión de cambios).

---

## 1. Requisitos de desarrollo (propuesta a confirmar)
| Fase | Requisito | Detalle |
|---|---|---|
| Identificación y análisis | Control de versiones | **Git + GitHub** (repo `InflesusventasPrototype`) |
| Especificación | Stack tecnológico | `[definir: p.ej. web app — frontend + backend + BD]` |
| Especificación | Entorno de ejecución | Navegador web; despliegue `[local/nube]` |
| Especificación | Metodología | Híbrido **RUP + Scrum ligero**, sprint = 1 semana (ver Planificación) |
| Verificación | Cobertura de pruebas | `[objetivo, p.ej. ≥ 70 % en lógica de cálculo IGV/medidas]` |
| Gestión de cambios | Proceso RFC/CCB | Ver [Semana 12](../Semana_12_Gestion_de_Cambios/README.md) |

## 2. Restricciones de desarrollo
| ID | Restricción |
|---|---|
| RES-01 | IGV 18 % **configurable** (RES fiscal, ver S1). |
| RES-02 | Tarifas por definir → arquitectura **parametrizable**. |
| RES-03 | Dependencia de servicios externos (RUC, correo). |
| RES-05 | Fines académicos: alcance = especificación + prototipo. |

---

## Preguntas para plasmar requisitos de desarrollo
1. ¿Qué lenguaje/framework/BD se usará y por qué?
2. ¿En qué entornos debe correr (SO, servidor, nube)?
3. ¿Qué metodología y ritmo de trabajo (Scrum, sprints)?
4. ¿Qué estándares de código y guías de estilo?
5. ¿Qué nivel de cobertura de pruebas se exige?

## Herramientas
Git/GitHub, VS Code, pipeline CI (opcional), linters.

## Checklist de cierre
- [ ] Stack tecnológico decidido y justificado
- [ ] Entorno y despliegue definidos
- [ ] Estándares de código acordados
- [ ] Nivel de cobertura de pruebas fijado

## Referencias
Guía General de IR §14.
