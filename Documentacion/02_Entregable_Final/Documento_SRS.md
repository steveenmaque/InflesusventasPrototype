<!--
  PLANTILLA DEL ENTREGABLE FINAL (SRS) — Ingeniería de Requisitos
  Reemplaza los [MARCADORES] y completa las tablas.
  Los bloques marcados con "> 💡 Ejemplo ilustrativo" son SOLO guía: bórralos o
  sustitúyelos por el contenido real de tu empresa.
  La sección de ELICITACIÓN sigue EXACTAMENTE el formato de los casos del Prof. Ciro.
-->

# 📄 Especificación de Requisitos de Software (SRS)
## Proyecto: `[NOMBRE DEL SISTEMA]`

> **Universidad Nacional Mayor de San Marcos** — Facultad de Ingeniería de Sistemas e Informática
> Escuela Profesional de Ingeniería de Software · Curso: **Ingeniería de Requisitos**
> Docente: **Prof. Ciro Rodriguez** · Ciclo 5, 2026-I

| Rol | Integrante | Código |
|-----|-----------|--------|
| Líder de Proyecto / Comunicación | `[Integrante 1]` | `[código]` |
| Analista de Elicitación y Dominio | `[Integrante 2]` | `[código]` |
| Arquitecto / Modelador | `[Integrante 3]` | `[código]` |
| QA / Validación y Trazabilidad | `[Integrante 4]` | `[código]` |

**Control de versiones del documento**

| Versión | Fecha | Autor | Cambios |
|:-------:|:-----:|-------|---------|
| 0.1 | `[fecha]` | Equipo | Estructura inicial |
| 1.0 | `[fecha]` | Equipo | Línea base aprobada |

---

## Índice

1. [Metodología de trabajo (reunión semanal)](#1-metodología-de-trabajo-reunión-semanal)
2. [Introducción](#2-introducción)
3. [Contexto de la empresa](#3-contexto-de-la-empresa)
4. [Análisis de stakeholders](#4-análisis-de-stakeholders)
5. [Elicitación de requisitos (formato del profesor)](#5-elicitación-de-requisitos-formato-del-profesor)
6. [Catálogo de requisitos](#6-catálogo-de-requisitos)
7. [Casos de uso: ¿cuántos y cómo se relacionan?](#7-casos-de-uso-cuántos-y-cómo-se-relacionan)
8. [Modelado (UML + BPMN)](#8-modelado-uml--bpmn)
9. [Especificación de calidad (ISO/IEC 25010)](#9-especificación-de-calidad-isoiec-25010)
10. [Gestión de requisitos y cambios](#10-gestión-de-requisitos-y-cambios)
11. [Trazabilidad](#11-trazabilidad)
12. [Validación y verificación](#12-validación-y-verificación)
13. [Herramientas y tecnologías](#13-herramientas-y-tecnologías)
14. [Conclusiones](#14-conclusiones)
15. [Anexos](#15-anexos)

---

## 1. Metodología de trabajo (reunión semanal)

Adoptamos un enfoque **híbrido RUP + Scrum ligero** que respeta el marco del profesor (RUP,
iterativo e incremental) y se adapta a **una única reunión por semana** del equipo.

- **Sprint = 1 semana**, alineado a cada **sesión del curso** (S1 → S14). Cada sprint produce **un
  artefacto** del entregable.
- **Una reunión semanal fija** (día y hora acordados, p. ej. `[día] 7:00 p. m.`, 60–90 min) que
  concentra **3 ceremonias Scrum en una**:

| Momento de la reunión | Qué se hace | Duración |
|-----------------------|-------------|:--------:|
| **Revisión (Review)** | Mostrar el artefacto de la semana anterior; validar con el equipo | 20 min |
| **Retrospectiva corta** | Qué salió bien / qué mejorar | 10 min |
| **Planificación (Planning)** | Definir el objetivo y repartir tareas de la semana entrante | 30 min |

- **Entre reuniones:** cada integrante avanza su parte de forma asíncrona; se coordina por
  `[WhatsApp/Discord]` y el tablero en `[Trello/JIRA]`. Un **canal de "impedimentos"** sustituye al
  daily.
- **Definition of Done (DoD)** de cada sprint: artefacto redactado + revisado por otro rol +
  registrado en el documento + reflejado en la matriz de trazabilidad.

### 1.1 Cadencia semanal (backlog del proyecto)

| Semana | Sesión / Tema | Objetivo del sprint (artefacto) | Rol líder |
|:------:|---------------|----------------------------------|-----------|
| 1 | Conceptos | Ficha del proyecto, problema, objetivo, alcance | R1 |
| 2 | Elicitación | Entrevistas + cuestionario + interpretación | R2 |
| 3 | Análisis y modelado | Diagramas de casos de uso, actividad, secuencia | R3 |
| 4 | Especificación (SRS) | Casos de uso detallados + estructura SRS | R3 |
| 5 | Gestión de requisitos | Atributos, línea base, backlog priorizado | R1 |
| 6 | Requisitos Funcionales | Catálogo de RF (necesidad→requisito) | R2 |
| 7 | Requisitos No Funcionales | Catálogo de RNF medibles | R4 |
| 9 | Requisitos de Dominio | Reglas de negocio + glosario del dominio | R2 |
| 10 | Requisitos de Desarrollo | Entorno, proceso, estándares | R3 |
| 11 | Requisitos de Calidad | Fichas ISO 25010 + métricas | R3 |
| 12 | Gestión de Cambios | Proceso RFC/CCB + 1 caso de cambio | R1 |
| 13 | Trazabilidad | Matriz bidireccional + cobertura | R4 |
| 14 | Validación | Walkthrough, prototipos, UAT | R4 |

### 1.2 Acta de reunión semanal (plantilla — repetir cada semana)

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

> 🔗 *Fundamento: Guía [§6](../Guia_General_IR/README.md#6-el-proceso-de-ir-rup-ciclos-de-vida-y-ceremonia) (RUP, ceremonia). Estructura semanal fiel en
> [`Estructura_Proyecto_Por_Semanas.md`](Estructura_Proyecto_Por_Semanas.md).*

---

## 2. Introducción

- **2.1 Propósito del documento:** `[describir]`
- **2.2 Alcance del sistema:** qué **SÍ** cubre / qué **NO** cubre `[…]`
- **2.3 Definiciones y acrónimos:** ver [Glosario (Anexo D)](#15-anexos)
- **2.4 Objetivo del sistema (meta, no requisito):** `[…]`
- **2.5 Objetivos específicos:** `[…]`

> 💡 *Ejemplo ilustrativo (bórralo):* «El propósito es especificar los requisitos del sistema
> **[SISTEMA]** que automatizará el proceso de **[proceso]** de la empresa **[EMPRESA]**, hoy
> realizado de forma manual, reduciendo errores y tiempos de atención.»

---

## 3. Contexto de la empresa

- **3.1 Descripción de `[EMPRESA]`:** rubro, tamaño, misión.
- **3.2 Proceso actual ("as-is")** y sus dolores: `[…]`
- **3.3 Problema a resolver:** `[…]`
- **3.4 Justificación y beneficios esperados:** `[…]`

**Artefacto — Diagrama de contexto del negocio (as-is):** `[insertar en imagenes/ y referenciar]`

---

## 4. Análisis de stakeholders

**4.1 Lista de stakeholders**

| Stakeholder | Tipo (usuario/cliente/regulador…) | Interés principal |
|-------------|------------------------------------|-------------------|
| `[…]` | `[…]` | `[…]` |

**4.2 Matriz Poder / Interés** — `[insertar; ver plantilla quadrantChart en Guía §2]`

**4.3 Necesidades de calidad por stakeholder**

| Stakeholder | Necesidad de calidad |
|-------------|----------------------|
| `[…]` | `[…]` |

> 💡 *Ejemplo (hospital, referencia del profesor):* Médicos → rapidez; Pacientes → privacidad;
> Administradores → disponibilidad.

---

## 5. Elicitación de requisitos (formato del profesor)

> **Este apartado sigue EXACTAMENTE la estructura que el Prof. Ciro usa en sus casos** (SIGOE,
> Hospital, VozMatric): **datos de la entrevista → texto narrativo/cita → ideas clave →
> cuestionario con porcentajes → interpretación del analista**.

### 5.1 Técnicas empleadas y justificación

| Técnica | A quién / cuántos | Por qué |
|---------|-------------------|---------|
| Entrevista semiestructurada | `[actores]` | Profundizar necesidades |
| Cuestionario | `[N] usuarios` | Datos cuantitativos |
| Observación / análisis de documentos | `[…]` | Requisitos implícitos y reglas |

### 5.2 Entrevistas

> Repetir esta ficha por cada actor entrevistado (mínimo 3–4, como en SIGOE).

#### Entrevista N.º 1 — `[Cargo / Actor]`

- **Proyecto:** `[SISTEMA]`
- **Entrevistado:** `[cargo]`
- **Entrevistador:** `[Integrante]`
- **Fecha:** `[ ]`
- **Objetivo de la entrevista:** Comprender cómo funciona actualmente `[proceso]` y qué
  funcionalidades debería tener el nuevo sistema.

**Texto narrativo de la entrevista:**

> «`[Transcripción o cita textual del entrevistado, en primera persona, describiendo el proceso
> actual, sus problemas y lo que espera del sistema.]`»

**Ideas clave:** `[idea 1]`, `[idea 2]`, `[idea 3]`.

---

#### Entrevista N.º 2 — `[Cargo / Actor]`
*(misma ficha)*

> 💡 **Ejemplo ilustrativo de una entrevista (formato SIGOE) — bórralo:**
>
> **Entrevista N.º 1 — Estudiante**
> - Proyecto: Sistema de Gestión de Trámites SIGOE
> - Entrevistado: Estudiante de pregrado · Entrevistador: [Integrante 2]
> - Objetivo: Entender los problemas del proceso de inscripción y emisión de certificados.
>
> **Texto narrativo:** «Muchas veces no logro inscribirme porque el sistema falla o no entiendo si
> ya estoy matriculado. También necesito sacar certificados, pero a veces la impresora no funciona
> y tengo que regresar otro día. Sería mejor si pudiera recibirlo por correo.»
>
> **Ideas clave:** confusión entre inscripción y matrícula; problemas técnicos; necesidad de opción
> digital.

### 5.3 Cuestionario (insumo del caso)

Se aplicó un cuestionario a **`[N]`** `[tipo de usuarios]`. Resultados relevantes:

| Resultado | % |
|-----------|:--:|
| `[hallazgo 1]` | `[__%]` |
| `[hallazgo 2]` | `[__%]` |
| `[hallazgo 3]` | `[__%]` |

**Conclusión:** existe una clara necesidad de `[…]`.

> 💡 *Ejemplo (SIGOE):* 78% tuvo problemas al inscribirse; 65% no entiende la diferencia entre
> matrícula e inscripción; 72% prefiere certificados por correo; 60% reporta fallas de impresión.
> → Necesidad de: mejorar usabilidad, integrar procesos, ofrecer alternativas digitales.

### 5.4 Interpretación del analista

A partir de las entrevistas y el cuestionario:

- **Actores identificados:** `[Actor 1]`, `[Actor 2]`, …, `[Sistema de notificaciones]`.
- **Relaciones entre casos de uso:**
  - `[Caso A]` **`<<include>>`** `[Caso B]` (paso común obligatorio).
  - `[Caso C]` **`<<extend>>`** `[Caso D]` (paso opcional/excepcional).
  - Generalización: `[Actores X e Y]` se agrupan en un actor general `[Z]`.
- **Funcionalidades clave (→ se vuelven casos de uso):** `[Func 1]`, `[Func 2]`, …

**Requisitos derivados y justificados por evidencia** (mínimo **5 RF** y **3 RNF**, como pide el
profesor):

| ID | Requisito | Tipo | Evidencia (entrevista/cuestionario) |
|----|-----------|------|--------------------------------------|
| RF-01 | El sistema debe `[…]` | Funcional | Entrevista N.º `[x]` / `[__%]` del cuestionario |
| RF-02 | El sistema debe `[…]` | Funcional | `[…]` |
| RNF-01 | El sistema debe `[…]` (medible) | No funcional | `[…]` |

### 5.5 Necesidad → Requisito → Caso de uso (tabla clave del profesor)

| Actor / Usuario | Necesidad (voz del usuario) | Requisito (traducido) | Caso de uso asociado |
|-----------------|------------------------------|------------------------|----------------------|
| `[…]` | `[…]` | El sistema debe `[…]` | `[CU-xx]` |

> 💡 *Ejemplo:* Estudiante — «Ver mis notas sin ir a la Facultad» → «El sistema debe permitir al
> estudiante consultar notas por Internet» → **CU-05 Consultar notas**.

---

## 6. Catálogo de requisitos

### 6.1 Requisitos Funcionales (RF)

> Ficha completa por requisito. Cada **RF principal tendrá su caso de uso** (ver §7).

| ID | Nombre | Descripción («El sistema debe…») | Actor | Regla de negocio | Criterio de aceptación | Prioridad (MoSCoW) | CU |
|----|--------|----------------------------------|-------|------------------|------------------------|:------------------:|:--:|
| RF-01 | `[…]` | `[…]` | `[…]` | `[…]` | `[…]` | Must | CU-01 |
| RF-02 | `[…]` | `[…]` | `[…]` | `[…]` | `[…]` | Should | CU-02 |

### 6.2 Requisitos No Funcionales (RNF) — **medibles**

| ID | Categoría | Requisito (con métrica + valor + condición) | Método de verificación | Prioridad |
|----|-----------|----------------------------------------------|------------------------|:---------:|
| RNF-01 | Rendimiento | El sistema deberá responder en **< [x] s** para el **[y]%** con **[z] usuarios** concurrentes | Prueba de carga | Alta |
| RNF-02 | Seguridad | `[…]` | `[…]` | Alta |

> ⚠️ **Prohibido** "rápido/seguro/amigable" sin número. Regla del profesor: métrica + valor + condición.

### 6.3 Requisitos de Dominio (RD)

| ID | Regla de negocio (independiente de tecnología) | Entidad(es) |
|----|------------------------------------------------|-------------|
| RD-01 | `[…]` | `[…]` |

### 6.4 Restricciones

| ID | Restricción | Tipo (tecnológica/legal/presupuestal/física) |
|----|-------------|-----------------------------------------------|
| RES-01 | `[…]` | `[…]` |

### 6.5 Requisitos de Desarrollo

| Fase | Requisito | Detalle |
|------|-----------|---------|
| Identificación y análisis | `[…]` | `[…]` |
| Especificación | `[…]` | Entorno, sprints, herramientas |
| Verificación | `[…]` | Revisiones, pruebas |
| Gestión de cambios | `[…]` | `[…]` |

### 6.6 Priorización MoSCoW y MVP

| Nivel | Requisitos | 
|-------|-----------|
| **Must (MVP)** | `[RF-.., RF-..]` |
| Should | `[…]` |
| Could | `[…]` |
| Won't (por ahora) | `[…]` |

**MVP definido:** `[describir el incremento mínimo que entrega valor]`.

---

## 7. Casos de uso: ¿cuántos y cómo se relacionan?

> El profesor trabaja el principio: **cada funcionalidad clave / RF principal = un caso de uso**.
> Los pasos comunes se factorizan con **`<<include>>`** y los opcionales/excepcionales con
> **`<<extend>>`**.

### 7.1 ¿Cuántos casos de uso realizar? (cómo estimarlo)

1. Lista las **funcionalidades clave** que salieron de la elicitación (§5.4).
2. Cada funcionalidad principal → **1 caso de uso**.
3. Agrupa varios RF muy relacionados en **un** CU si comparten actor y objetivo.
4. Extrae pasos **comunes obligatorios** como CU `<<include>>` (p. ej. *Autenticarse*,
   *Consultar disponibilidad*).
5. Extrae pasos **opcionales/excepcionales** como CU `<<extend>>` (p. ej. *Reservar aula* dentro de
   *Crear curso*).

**Regla práctica de tamaño (proyecto de curso):**

| Complejidad del sistema | Actores típicos | Casos de uso esperados |
|-------------------------|:---------------:|:----------------------:|
| Sencillo | 2–3 | 5–8 |
| **Medio (recomendado)** | 4–6 | **8–15** |
| Complejo | 7+ | 15–25 |

> 💡 **Ejemplo real del profesor (caso Hospital, S4):** 7 actores (Paciente, Recepcionista, Médico,
> Personal de laboratorio, Cajero, Administrador, Sistema de notificaciones) → **~10-11 casos de
> uso**: *Registrar paciente, Actualizar datos, Programar cita, Consultar disponibilidad, Atender
> consulta, Registrar diagnóstico, Solicitar exámenes, Registrar resultados, Procesar pago, Enviar
> confirmación, Generar reportes.*

### 7.2 Relación RF ↔ Caso de uso (tabla)

| Caso de uso | Actor principal | RF que agrupa | Relaciones |
|-------------|-----------------|---------------|-----------|
| CU-01 `[…]` | `[…]` | RF-01, RF-02 | `<<include>>` CU-00 (Autenticarse) |
| CU-02 `[…]` | `[…]` | RF-03 | `<<extend>>` CU-01 |

### 7.3 Especificación de caso de uso detallado (plantilla — repetir por CU principal)

```
Caso de uso:        CU-xx  [nombre]
Actor principal:    [ ]
Actores secundarios:[ ]
Precondición:       [ ]
Disparador:         [ ]
Flujo principal:
  1. [ ]
  2. [ ]
Flujos alternativos:
  Na. [condición] → [acción]
Postcondición:      [ ]
Requisitos asociados: [RF-..]
```

> 💡 *Ejemplo (Programar cita médica):* Actor: Paciente/Recepcionista · Precondición: paciente
> registrado · Flujo: 1) seleccionar especialidad, 2) sistema muestra disponibilidad, 3) elegir
> horario, 4) registrar cita y notificar · Alternativo 2a) sin disponibilidad → sugerir otra fecha.

---

## 8. Modelado (UML + BPMN)

Insertar los diagramas propios en [`imagenes/`](imagenes/) y referenciarlos. Entregar en
**PlantUML** (notación del profesor) y/o Mermaid — plantillas en la
[Guía §20](../Guia_General_IR/README.md#20-catálogo-de-diagramas-mermaid--plantuml).

| Diagrama | Estado | Archivo |
|----------|:------:|---------|
| Casos de uso (general) | ☐ | `imagenes/[…]` |
| Actividad (con particiones) | ☐ | `imagenes/[…]` |
| Secuencia (flujos críticos) | ☐ | `imagenes/[…]` |
| Clases (dominio) | ☐ | `imagenes/[…]` |
| Estados (entidad con ciclo de vida) | ☐ | `imagenes/[…]` |
| Entidad-Relación | ☐ | `imagenes/[…]` |
| Componentes / Despliegue | ☐ | `imagenes/[…]` |
| BPMN (proceso to-be) | ☐ | `imagenes/[…]` |

---

## 9. Especificación de calidad (ISO/IEC 25010)

Ficha por cada requisito de calidad (plantilla de modelamiento del profesor):

| Campo | Valor |
|-------|-------|
| Problema | `[…]` |
| Necesidad | `[…]` |
| Stakeholder | `[…]` |
| Característica ISO 25010 | `[…]` |
| Requisito especificado | `[…]` |
| Métrica | `[…]` |
| Valor objetivo | `[…]` |
| Método de verificación | `[…]` |
| Criterio de aceptación | `[…]` |
| Prioridad | `[…]` |

---

## 10. Gestión de requisitos y cambios

- **10.1 Atributos gestionados:** ID, fuente, tipo, prioridad, estado, versión.
- **10.2 Línea base:** `[cuándo se congela / quién aprueba]`.
- **10.3 Proceso de gestión de cambios:** RFC → análisis de impacto → **CCB** → línea base
  (ver flujo en [Guía §16](../Guia_General_IR/README.md#16-semana-12--gestión-de-cambios)).

**Formato de solicitud de cambio (RFC):**

| Campo | Contenido |
|-------|-----------|
| ID de cambio | `[RFC-01]` |
| Solicitante | `[…]` |
| Descripción | `[…]` |
| Requisitos afectados | `[…]` |
| Análisis de impacto (alcance/costo/cronograma/riesgo) | `[…]` |
| Decisión CCB | Aprobado / Rechazado |

---

## 11. Trazabilidad

**Matriz de trazabilidad bidireccional** (directa e inversa):

| Req ID | Necesidad/Fuente | Caso de uso | Diseño | Módulo/Código | Caso de prueba | Estado | ¿Cumple? |
|--------|------------------|-------------|--------|---------------|----------------|--------|:--------:|
| RF-01 | `[…]` | CU-01 | `[…]` | `[…]` | `[…]` | `[…]` | ☐ |
| RNF-01 | `[…]` | — | `[…]` | `[…]` | `[…]` | `[…]` | ☐ |

**Análisis de cobertura:** ¿algún requisito sin prueba? ¿algún componente sin requisito (sobrediseño)?

---

## 12. Validación y verificación

- **12.1 Walkthrough** — checklist por requisito:

| Criterio | RF-01 | RF-02 | RNF-01 |
|----------|:-----:|:-----:|:------:|
| ¿Claro y sin ambigüedades? | ☐ | ☐ | ☐ |
| ¿Completo? | ☐ | ☐ | ☐ |
| ¿Verificable/medible? | ☐ | ☐ | ☐ |
| ¿Consistente? | ☐ | ☐ | ☐ |
| ¿Factible? | ☐ | ☐ | ☐ |

- **12.2 Prototipos (wireframes):** `[Figma/Balsamiq — insertar en imagenes/]`
- **12.3 UAT (criterios de aceptación en Gherkin):**

```gherkin
Escenario: [nombre]
  Dado [contexto]
  Cuando [acción]
  Entonces [resultado medible]
```

- **12.4 Análisis de escenarios (incl. excepciones):** `[…]`
- **12.5 Informe de hallazgos y correcciones:** `[…]`

---

## 13. Herramientas y tecnologías

| Fase | Herramienta | Evidencia (Anexo B) |
|------|-------------|---------------------|
| Backlog / gestión | `[JIRA/Trello]` | `[captura]` |
| Modelado | `[PlantUML/Lucidchart]` | `[…]` |
| Prototipado | `[Figma/Balsamiq]` | `[…]` |
| Trazabilidad | `[Excel/Sheets/JIRA]` | `[…]` |
| Documentación | `[Markdown/Docs]` | `[…]` |

---

## 14. Conclusiones

- Cumplimiento de objetivos: `[…]`
- Lecciones aprendidas: `[…]`
- Trabajo futuro (roadmap post-MVP): `[…]`

---

## 15. Anexos

- **Anexo A** — Instrumentos de elicitación completos (guiones, cuestionarios, transcripciones).
- **Anexo B** — Capturas de herramientas (tablero, prototipos, matriz).
- **Anexo C** — Catálogo completo de requisitos (si es extenso).
- **Anexo D** — Glosario del dominio de `[EMPRESA]`.
- **Anexo E** — Actas de las reuniones semanales (ver plantilla §1.2).

---

> ✅ **Antes de entregar:** completa el
> [checklist "Excelente"](Estructura_Proyecto_Final.md#-checklist-para-nivel-excelente-90-100) y pega
> al inicio la [matriz rúbrica ↔ secciones](Estructura_Proyecto_Final.md#-matriz-de-trazabilidad-rúbrica--secciones-del-documento).
>
> **Fuentes:** rúbrica ([`RubricaProyectoFInal.docx`](../RubricaProyectoFInal.docx)),
> [Guía General](../Guia_General_IR/README.md), teoría ([`teoria/`](../teoria/)) y práctica
> ([`practica/`](../practica/)) del Prof. Ciro Rodriguez.
