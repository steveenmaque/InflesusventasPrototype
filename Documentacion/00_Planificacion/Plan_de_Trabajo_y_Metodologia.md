# Plan de Trabajo y Metodología
## Proyecto: Sistema de Gestión de Cotizaciones — "InfleSusVentas"

> **Universidad:** UNMSM — Facultad de Ingeniería de Sistemas e Informática · E.P. Ingeniería de Software
> **Curso:** Ingeniería de Requisitos · **Docente:** Prof. Ciro Rodriguez · Ciclo 5, 2026-I

---

## 1. Equipo y roles (4 integrantes)

| Rol | Integrante | Código | Lidera | Semanas de mayor carga |
|---|---|---|---|---|
| **R1 · Líder de Proyecto / Comunicación** | `[Integrante 1]` | `[código]` | Gestión, cronograma, cambios, presentación | S5, S12 |
| **R2 · Analista de Elicitación y Dominio** | `[Integrante 2]` | `[código]` | Entrevistas, RF, RD | S2, S6, S9 |
| **R3 · Arquitecto / Modelador** | `[Integrante 3]` | `[código]` | UML/BPMN, SRS, calidad | S3, S4, S11 |
| **R4 · QA / Validación y Trazabilidad** | `[Integrante 4]` | `[código]` | RNF, validación, trazabilidad | S7, S13, S14 |

### Matriz RACI
| Actividad | R1 | R2 | R3 | R4 |
|---|:--:|:--:|:--:|:--:|
| Elicitación | C | **R/A** | C | C |
| Catálogo RF / RD | I | **R** | C | C |
| Catálogo RNF / Calidad | I | C | C | **R** |
| Modelado UML / BPMN | C | C | **R/A** | C |
| Especificación SRS | C | C | **R** | C |
| Trazabilidad y cambios | **A** | I | C | **R** |
| Validación (UAT) | C | C | C | **R/A** |
| Documento y presentación | **R/A** | C | C | C |

---

## 2. Metodología (RUP + Scrum ligero)

Enfoque **híbrido** iterativo e incremental, alineado a **una reunión semanal**:

- **Sprint = 1 semana**, alineado a cada sesión del curso (S1 → S14). Cada sprint produce **un artefacto**.
- **Reunión semanal** (60–90 min) que concentra 3 ceremonias:

| Momento | Qué se hace | Duración |
|---|---|:--:|
| Revisión (Review) | Mostrar el artefacto de la semana anterior | 20 min |
| Retrospectiva | Qué salió bien / qué mejorar | 10 min |
| Planificación | Objetivo y reparto de tareas de la semana | 30 min |

- **Entre reuniones:** avance asíncrono; coordinación por `[WhatsApp/Discord]` y tablero `[Trello/JIRA]`.
- **Definition of Done:** artefacto redactado + revisado por otro rol + registrado + reflejado en trazabilidad.

---

## 3. Cronograma / Backlog semanal

| Semana | Tema | Artefacto (sprint) | Rol líder | Carpeta |
|:--:|---|---|:--:|---|
| 1 | Introducción / encuadre | Ficha, problema, objetivo, alcance | R1 | [S1](../01_Desarrollo_Semanal/Semana_01_Introduccion/) |
| 2 | Elicitación | Entrevistas + cuestionario + necesidad→req | R2 | [S2](../01_Desarrollo_Semanal/Semana_02_Elicitacion/) |
| 3 | Análisis y modelado | Casos de uso, actividad, secuencia | R3 | [S3](../01_Desarrollo_Semanal/Semana_03_Analisis_y_Modelado/) |
| 4 | Especificación (SRS) | Casos de uso detallados | R3 | [S4](../01_Desarrollo_Semanal/Semana_04_Especificacion_SRS/) |
| 5 | Gestión de requisitos | Atributos, línea base, MoSCoW | R1 | [S5](../01_Desarrollo_Semanal/Semana_05_Gestion_de_Requisitos/) |
| 6 | Requisitos Funcionales | Catálogo RF | R2 | [S6](../01_Desarrollo_Semanal/Semana_06_Requisitos_Funcionales/) |
| 7 | Requisitos No Funcionales | Catálogo RNF medibles | R4 | [S7](../01_Desarrollo_Semanal/Semana_07_Requisitos_No_Funcionales/) |
| 9 | Requisitos de Dominio | Reglas de negocio + datos | R2 | [S9](../01_Desarrollo_Semanal/Semana_09_Requisitos_de_Dominio/) |
| 10 | Requisitos de Desarrollo | Entorno, proceso, estándares | R3 | [S10](../01_Desarrollo_Semanal/Semana_10_Requisitos_de_Desarrollo/) |
| 11 | Requisitos de Calidad | Fichas ISO 25010 | R3 | [S11](../01_Desarrollo_Semanal/Semana_11_Requisitos_de_Calidad/) |
| 12 | Gestión de Cambios | Proceso RFC/CCB + 1 caso | R1 | [S12](../01_Desarrollo_Semanal/Semana_12_Gestion_de_Cambios/) |
| 13 | Trazabilidad | Matriz bidireccional | R4 | [S13](../01_Desarrollo_Semanal/Semana_13_Trazabilidad/) |
| 14 | Validación | Walkthrough, prototipos, UAT | R4 | [S14](../01_Desarrollo_Semanal/Semana_14_Validacion_y_Verificacion/) |

> **Nota:** la **Semana 8** no forma parte del temario del curso (no disponible).

---

## 4. Acta de reunión semanal (plantilla — repetir cada semana en el Anexo E)

```
Acta de Reunión — Semana [N]
Fecha: [ ]      Hora: [ ]      Modalidad: [presencial/virtual]
Asistentes: [ ]
Objetivo del sprint: [ ]
Acuerdos y tareas:
  - [Tarea] → Responsable: [ ] → Fecha límite: [ ]
Impedimentos: [ ]
Próxima reunión: [ ]
```

---

## 5. Documentos relacionados
- Guía completa semana a semana: [`Guia_Estructura_Semanal.md`](Guia_Estructura_Semanal.md)
- Plantilla del entregable final: [`../02_Entregable_Final/Documento_SRS.md`](../02_Entregable_Final/Documento_SRS.md)
