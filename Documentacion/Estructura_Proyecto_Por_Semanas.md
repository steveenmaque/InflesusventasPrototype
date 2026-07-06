# 🗓️ Estructura del Proyecto Final — Semana a Semana (Ingeniería de Requisitos)

> **Universidad:** UNMSM — Facultad de Ingeniería de Sistemas e Informática · E.P. Ingeniería de Software
> **Curso:** Ingeniería de Requisitos · **Docente:** Prof. Ciro Rodriguez · Ciclo 5, 2026-I
> **Equipo:** 4 integrantes (San Marcos) — ver [Roles del equipo](#-roles-del-equipo-4-integrantes)
>
> Esta estructura ordena el proyecto **por los temas realizados semana a semana** (S1 → S14),
> exactamente como el profesor desarrolló el curso. Cada semana aporta un **capítulo/artefacto** al
> entregable final y trae su **banco de preguntas de elicitación** para plasmar requisitos.
> Es **complementaria** a [`Estructura_Proyecto_Final.md`](Estructura_Proyecto_Final.md) (vista por
> criterios de la rúbrica). Se apoya en la [Guía General de IR](../Guia_General_IR/README.md).

> ⚠️ **Nota:** el problema/empresa aún no está definido. Por eso, cada semana incluye **preguntas
> genéricas y plantillas** `[proceso]`, `[entidad]`, `[actor]`, `[dato]` que sirven para **cualquier
> dominio**: al responderlas, obtienes directamente los requisitos. Cuando definan la empresa, solo
> reemplazan los marcadores.

---

## 📑 Índice

- [Roles del equipo (4 integrantes)](#-roles-del-equipo-4-integrantes)
- [Cómo trabajar cada semana](#-cómo-trabajar-cada-semana)
- [Mapa semana → entregable → rúbrica](#-mapa-semana--entregable--rúbrica)
- [Semana 1 — Conceptos: encuadre del problema](#semana-1--conceptos-fundamentales-encuadre-del-problema)
- [Semana 2 — Elicitación](#semana-2--elicitación-de-requisitos)
- [Semana 3 — Análisis y modelado](#semana-3--análisis-y-modelado)
- [Semana 4 — Especificación (SRS)](#semana-4--especificación-de-requisitos-srs)
- [Semana 5 — Gestión de requisitos](#semana-5--gestión-de-requisitos)
- [Semana 6 — Requisitos Funcionales](#semana-6--requisitos-funcionales-rf)
- [Semana 7 — Requisitos No Funcionales](#semana-7--requisitos-no-funcionales-rnf)
- [Semana 9 — Requisitos de Dominio](#semana-9--requisitos-de-dominio-rd)
- [Semana 10 — Requisitos de Desarrollo](#semana-10--requisitos-de-desarrollo)
- [Semana 11 — Requisitos de Calidad (ISO 25010)](#semana-11--requisitos-de-calidad-iso-25010)
- [Semana 12 — Gestión de Cambios](#semana-12--gestión-de-cambios)
- [Semana 13 — Trazabilidad](#semana-13--trazabilidad)
- [Semana 14 — Validación y Verificación](#semana-14--validación-y-verificación)
- [🎯 Banco maestro de preguntas para plasmar requisitos](#-banco-maestro-de-preguntas-para-plasmar-requisitos)
- [Estructura final del documento entregable](#-estructura-final-del-documento-entregable)

---

## 👥 Roles del equipo (4 integrantes)

Se recomiendan **4 roles complementarios** (todos participan en todo, pero cada uno **lidera** un frente):

| Rol | Integrante | Lidera | Semanas de mayor carga |
|-----|-----------|--------|------------------------|
| **R1 · Líder de Proyecto / Comunicación** | `[Integrante 1]` | Gestión, cronograma, gestión de cambios, presentación | S5, S12, presentación |
| **R2 · Analista de Elicitación y Dominio** | `[Integrante 2]` | Entrevistas, cuestionarios, RF, RD | S2, S6, S9 |
| **R3 · Arquitecto / Modelador** | `[Integrante 3]` | UML/BPMN, especificación SRS, calidad | S3, S4, S11 |
| **R4 · QA / Validación y Trazabilidad** | `[Integrante 4]` | RNF, validación, trazabilidad, herramientas | S7, S13, S14 |

**Matriz RACI resumida** (R=Responsable, A=Aprueba, C=Consultado, I=Informado):

| Actividad | R1 | R2 | R3 | R4 |
|-----------|:--:|:--:|:--:|:--:|
| Elicitación (entrevistas/cuestionarios) | C | **R/A** | C | C |
| Catálogo RF / RD | I | **R** | C | C |
| Catálogo RNF / Calidad | I | C | C | **R** |
| Modelado UML / BPMN | C | C | **R/A** | C |
| Especificación SRS | C | C | **R** | C |
| Trazabilidad y gestión de cambios | **A** | I | C | **R** |
| Validación (walkthrough/UAT) | C | C | C | **R/A** |
| Documento y presentación | **R/A** | C | C | C |

---

## 🔁 Cómo trabajar cada semana

Cada bloque de semana tiene el mismo formato para que sea fácil de ejecutar:

1. **🎯 Objetivo en el proyecto** — qué logra esta semana en el entregable.
2. **📦 Artefactos a producir** — entregables concretos (tablas, diagramas, matrices).
3. **❓ Preguntas de elicitación** — para plasmar requisitos del tema de esa semana.
4. **🛠️ Herramientas** sugeridas.
5. **✅ Criterio de rúbrica** que cubre + **🔗 sección de la Guía**.

---

## 🗺️ Mapa semana → entregable → rúbrica

| Semana | Tema del profesor | Aporta al entregable | Criterio rúbrica |
|:------:|-------------------|----------------------|:----------------:|
| 1 | Conceptos fundamentales | Cap. 1–2 (encuadre, objetivos, alcance) | 1 |
| 2 | Elicitación | Cap. 3–4 (stakeholders, instrumentos) | 1 |
| 3 | Análisis y modelado | Cap. 6 (casos de uso, actividad, secuencia) | 1, 2 |
| 4 | Especificación (SRS) | Cap. 7 (SRS, casos de uso detallados) | 2 |
| 5 | Gestión de requisitos | Cap. 8 (atributos, línea base, plan) | 4 |
| 6 | Requisitos Funcionales | Cap. 5.1 (catálogo RF, necesidad→requisito) | 1 |
| 7 | Requisitos No Funcionales | Cap. 5.2 (catálogo RNF medibles) | 1, 2 |
| 8 | *No disponible* | — | — |
| 9 | Requisitos de Dominio | Cap. 5.3 (RD, reglas de negocio) | 1 |
| 10 | Requisitos de Desarrollo | Cap. 5.5 (entorno, proceso, restricciones) | 2, 6 |
| 11 | Requisitos de Calidad | Cap. 7 (fichas ISO 25010, métricas) | 2 |
| 12 | Gestión de Cambios | Cap. 8 (RFC, impacto, CCB) | 4 |
| 13 | Trazabilidad | Cap. 8 (matriz bidireccional) | 4, 6 |
| 14 | Validación | Cap. 9 (walkthrough, UAT, prototipos) | 3 |

---

# Semana 1 — Conceptos fundamentales: encuadre del problema

**🎯 Objetivo en el proyecto:** definir el **problema**, el **objetivo** (meta, no requisito), el
**alcance** y el tipo de sistema; distinguir *espacio del problema* vs *espacio de la solución*.

**📦 Artefactos a producir:**
- Ficha del proyecto (empresa, problema, objetivo, alcance in/out).
- Enunciado del problema (situación actual "as-is" y dolores).
- Justificación de la **metodología/ceremonia** (RUP/ágil según criticidad del dominio).
- Clasificación preliminar de requisitos esperados (RF / RNF / Restricciones).

**❓ Preguntas de elicitación (encuadre):**
1. ¿Cuál es el **proceso de negocio** que hoy causa más problemas y por qué?
2. ¿Cuál es el **objetivo** del sistema en una frase? (¿es medible o es solo una meta?)
3. ¿Qué queda **dentro** y qué queda **fuera** del alcance?
4. ¿Quién es el **sponsor** (quién paga/decide) y quiénes los **usuarios finales**?
5. ¿El dominio es **crítico/regulado** (exige alta ceremonia) o **incierto** (favorece agilidad)?
6. ¿Qué pasaría si el proyecto **no** se hace? (justificación / costo de no actuar)
7. ¿Existe un **sistema actual**? ¿Se reemplaza, integra o parte de cero?

**🛠️ Herramientas:** documento de visión, diagrama de contexto (draw.io / PlantUML).
**✅ Rúbrica:** 1 · **🔗 Guía [§1](../Guia_General_IR/README.md#1-marco-conceptual-qué-es-la-ingeniería-de-requisitos), [§6](../Guia_General_IR/README.md#6-el-proceso-de-ir-rup-ciclos-de-vida-y-ceremonia).**

---

# Semana 2 — Elicitación de requisitos

**🎯 Objetivo:** recoger necesidades reales con ≥ 3 técnicas y traducirlas a requisitos.

**📦 Artefactos:**
- Plan de elicitación (técnica por stakeholder).
- **Guion de entrevista** (tabla `Pregunta | Objetivo | Tipo`).
- **Cuestionario** (≥ 5 preguntas) + tabulación de resultados.
- Registro de necesidades (voz del usuario, sin traducir).
- Tabla **necesidad → requisito** (estilo S6).

**❓ Preguntas de elicitación (estructura mixta cerrada/abierta):**

| Pregunta (plantilla) | Objetivo | Tipo |
|----------------------|----------|------|
| ¿Actualmente `[proceso]` se hace con papel, correo o sistema? | Estado actual | Cerrada |
| ¿Cuántas veces al día/semana se ejecuta `[proceso]`? | Volumen/carga | Cerrada |
| ¿Hay momentos pico (horario/fecha) donde se satura? | Rendimiento (RNF) | Cerrada |
| ¿Qué **regla** obliga o prohíbe algo en `[proceso]`? (plazos, cupos, montos) | Regla de negocio (RD) | Cerrada |
| ¿Quién puede hacer `[acción]` y quién NO? | Actor y permiso | Cerrada |
| ¿Qué datos se registran hoy sobre `[entidad]`? | Modelo de datos | Cerrada |
| ¿Se necesitan reportes? ¿Cuáles y cada cuánto? | Reporting | Cerrada |
| ¿Qué es lo que **más le molesta** del proceso actual? | Dolor explícito | **Abierta** |
| Si pudiera agregar **una** función mágica, ¿cuál sería? | Expectativa prioritaria | **Abierta** |
| Cuénteme paso a paso cómo hace hoy `[proceso]` de inicio a fin. | Flujo real | **Abierta** |

**🛠️ Herramientas:** Google Forms (cuestionario), Docs (transcripción), grabadora (con permiso).
**✅ Rúbrica:** 1 · **🔗 Guía [§7](../Guia_General_IR/README.md#7-semana-2--elicitación-de-requisitos).**

---

# Semana 3 — Análisis y modelado

**🎯 Objetivo:** representar los requisitos con modelos UML que faciliten comprensión y detección de errores.

**📦 Artefactos:**
- Diagrama de **casos de uso** (actores + casos, con «include»/«extend»).
- Diagrama de **actividades** (con particiones/swimlanes).
- Diagrama de **secuencia** de los flujos críticos.
- (Opcional) diagrama de **clases** del dominio.

**❓ Preguntas para modelar:**
1. ¿Qué **actores** interactúan con el sistema y qué objetivo persigue cada uno?
2. ¿Cuáles son los **casos de uso** principales (verbos de negocio)?
3. ¿Qué casos de uso **incluyen** a otros o son **extensiones** (excepciones)?
4. Para `[caso de uso]`: ¿cuál es el **flujo principal** y los **alternativos**?
5. En `[proceso]`, ¿quién hace cada paso? (define las particiones del diagrama de actividad)
6. ¿Qué **objetos/servicios** intervienen en el flujo y en qué orden se llaman?

**🛠️ Herramientas:** PlantUML (notación del profesor), Lucidchart, StarUML, draw.io.
**✅ Rúbrica:** 1, 2 · **🔗 Guía [§8](../Guia_General_IR/README.md#8-semana-3--análisis-y-modelado-uml-mermaid--plantuml), [§20](../Guia_General_IR/README.md#20-catálogo-de-diagramas-mermaid--plantuml).**

---

# Semana 4 — Especificación de requisitos (SRS)

**🎯 Objetivo:** documentar los requisitos de forma clara, completa y con estándar.

**📦 Artefactos:**
- **Casos de uso detallados** (plantilla: actor, precondición, flujo principal, alternativos, postcondición).
- Documento **SRS** (estructura IEEE 830 / ISO 29148).
- Relación explícita **modelo visual ↔ especificación textual**.

**❓ Preguntas para especificar:**
1. Para `[caso de uso]`: ¿cuál es la **precondición** y la **postcondición**?
2. ¿Qué **validaciones** ocurren en cada paso?
3. ¿Qué pasa en el **flujo alternativo** (error, cancelación, sin datos)?
4. ¿Qué **entradas** y **salidas** exactas tiene cada función?
5. ¿El requisito está redactado sin **ambigüedad** («El sistema deberá…»)?
6. ¿Cada requisito tiene un **criterio de aceptación** demostrable?

**🛠️ Herramientas:** plantilla SRS en Markdown/Docs, PlantUML.
**✅ Rúbrica:** 2 · **🔗 Guía [§9](../Guia_General_IR/README.md#9-semana-4--especificación-de-requisitos-srs).**

---

# Semana 5 — Gestión de requisitos

**🎯 Objetivo:** administrar los requisitos (atributos, versiones, línea base, herramientas).

**📦 Artefactos:**
- Tabla de **atributos** por requisito (ID, fuente, tipo, prioridad, estado, versión).
- Definición de **línea base** y política de versionado.
- Backlog/priorización (MoSCoW) en la herramienta elegida.

**❓ Preguntas de gestión:**
1. ¿Qué **prioridad** (MoSCoW) tiene cada requisito y por qué?
2. ¿Cuál es la **fuente** (stakeholder) de cada requisito? (para trazabilidad inversa)
3. ¿Qué requisitos son **dependientes** entre sí?
4. ¿Cuándo se congela la **línea base**? ¿Quién la aprueba?
5. ¿Qué **estado** tiene hoy cada requisito (propuesto/aprobado/implementado/verificado)?

**🛠️ Herramientas:** JIRA / Azure DevOps / Trello + hoja de cálculo.
**✅ Rúbrica:** 4, 6 · **🔗 Guía [§10](../Guia_General_IR/README.md#10-semana-5--gestión-de-requisitos).**

---

# Semana 6 — Requisitos Funcionales (RF)

**🎯 Objetivo:** derivar el **catálogo de RF** a partir de las necesidades (necesidad → requisito).

**📦 Artefactos:**
- Tabla **necesidad → requisito** por stakeholder.
- **Catálogo de RF** con ficha completa por requisito.

**❓ Preguntas para plasmar RF** (responderlas genera RF directamente):
1. ¿Qué debe **permitir hacer** el sistema a `[actor]`? (registrar, consultar, generar, aprobar…)
2. ¿Qué **información** debe registrar/almacenar sobre `[entidad]`?
3. ¿Qué **cálculos** o transformaciones debe realizar? (totales, descuentos, penalidades)
4. ¿Qué debe **mostrar/reportar** y a quién?
5. ¿Qué **notificaciones/alertas** debe enviar y ante qué evento?
6. ¿Qué debe hacer el sistema cuando `[condición de excepción]`? (fallback)
7. ¿Con qué **sistemas externos** debe integrarse (pago, correo, SMS, otro)?
8. ¿Qué **búsquedas/filtros** necesita el usuario?

> **Formato de salida (por cada respuesta):** «El sistema debe **[verbo]** … [con qué datos] …
> [bajo qué regla]». Añade actor, criterio de aceptación y prioridad MoSCoW.

**🛠️ Herramientas:** tabla de RF, backlog en JIRA.
**✅ Rúbrica:** 1 · **🔗 Guía [§11](../Guia_General_IR/README.md#11-semana-6--requisitos-funcionales), [§3](../Guia_General_IR/README.md#3-necesidad-vs-requisito--requisito-vs-característica-vs-objetivo).**

---

# Semana 7 — Requisitos No Funcionales (RNF)

**🎯 Objetivo:** definir RNF **medibles** por categoría.

**📦 Artefactos:** catálogo de RNF con métrica, valor objetivo y método de verificación.

**❓ Preguntas para plasmar RNF (por categoría):**

| Categoría | Preguntas para el stakeholder |
|-----------|-------------------------------|
| **Rendimiento/Eficiencia** | ¿En cuántos segundos debe responder `[operación]`? ¿Con cuántos usuarios simultáneos? ¿Qué volumen de datos maneja? |
| **Disponibilidad/Fiabilidad** | ¿Qué % de tiempo debe estar operativo? ¿Se puede caer en horario X? ¿Cada cuánto tolera fallos? |
| **Seguridad** | ¿Qué datos son sensibles? ¿Quién accede a qué? ¿Requiere cifrado, auditoría, autenticación fuerte? ¿Normativa aplicable? |
| **Usabilidad** | ¿Qué tan rápido debe aprender un usuario nuevo? ¿Accesibilidad? ¿Cuántos clics máximo para `[tarea]`? |
| **Compatibilidad/Portabilidad** | ¿En qué dispositivos/navegadores/SO debe funcionar? ¿Debe integrarse con `[sistema]`? |
| **Mantenibilidad** | ¿En cuánto tiempo debe corregirse un defecto? ¿Qué tan seguido cambia? |

> **Regla del profesor:** nada de «rápido/seguro/amigable». Siempre **métrica + valor + condición**:
> «Responder en **< 2 s** para el **95 %** de las consultas con **500 usuarios** concurrentes».

**🛠️ Herramientas:** JMeter/k6 (rendimiento), checklist OWASP (seguridad).
**✅ Rúbrica:** 1, 2 · **🔗 Guía [§12](../Guia_General_IR/README.md#12-semana-7--requisitos-no-funcionales).**

---

# Semana 9 — Requisitos de Dominio (RD)

**🎯 Objetivo:** capturar las **reglas del negocio** del *espacio del problema*, independientes de la tecnología.

**📦 Artefactos:** tabla RF/RNF/**RD**; catálogo de reglas de negocio; glosario del dominio.

**❓ Preguntas para plasmar RD:**
1. ¿Qué **reglas del negocio** son **obligatorias** en `[dominio]`? (p. ej. "no matricular sin prerrequisito")
2. ¿Qué **entidades del negocio** existen y cómo se relacionan? (clientes, productos, cuentas…)
3. ¿Qué **restricciones legales/normativas** aplican al dominio?
4. ¿Qué **cálculos propios del negocio** existen (tasas, penalidades, tarifas)?
5. ¿Qué **estados** puede tener `[entidad]` y qué transiciones son válidas?
6. ¿Qué operaciones del **mundo real** debe reflejar el sistema (transferencia, reserva, despacho)?
7. ¿Qué eventos del negocio disparan procesos (fin de mes, vencimiento, umbral)?

> Pista del profesor: el **dominio es lo más estable**; ancla el análisis aquí antes que en la UI.

**🛠️ Herramientas:** glosario, diagrama de clases/ER del dominio (PlantUML).
**✅ Rúbrica:** 1 · **🔗 Guía [§13](../Guia_General_IR/README.md#13-semana-9--requisitos-de-dominio).**

---

# Semana 10 — Requisitos de Desarrollo

**🎯 Objetivo:** definir **cómo** se construirá el sistema (entorno, proceso, herramientas, estándares).

**📦 Artefactos:** tabla de requisitos de desarrollo por fase (identificación → especificación →
verificación → gestión de cambios).

**❓ Preguntas para plasmar requisitos de desarrollo:**
1. ¿Qué **lenguaje/framework/BD** se usará y por qué?
2. ¿En qué **entornos** debe correr (SO, servidor, nube)?
3. ¿Qué **metodología** de trabajo (Scrum, duración de sprints, ceremonias)?
4. ¿Qué **herramientas** de desarrollo, control de versiones y CI/CD?
5. ¿Qué **estándares de código** y guías de estilo se aplican?
6. ¿Qué nivel de **cobertura de pruebas** se exige?
7. ¿Qué requisitos de **formación/seguridad** del equipo (p. ej. OWASP)?

**🛠️ Herramientas:** Git/GitHub, VS Code, pipeline CI, linters.
**✅ Rúbrica:** 2, 6 · **🔗 Guía [§14](../Guia_General_IR/README.md#14-semana-10--requisitos-de-desarrollo).**

---

# Semana 11 — Requisitos de Calidad (ISO 25010)

**🎯 Objetivo:** especificar los RNF como **requisitos de calidad medibles** alineados a ISO/IEC 25010.

**📦 Artefactos:**
- Ficha de calidad por requisito (plantilla de modelamiento: problema, necesidad, stakeholder,
  característica ISO 25010, requisito, métrica, valor objetivo, verificación, criterio, prioridad).
- Tabla de **métricas** por característica.

**❓ Preguntas para plasmar requisitos de calidad:**
1. ¿A qué **característica ISO 25010** corresponde esta necesidad? (eficiencia, seguridad, usabilidad…)
2. ¿Qué **métrica** la mide objetivamente? (tiempo de respuesta, MTBF, % de éxito…)
3. ¿Cuál es el **valor objetivo** aceptable?
4. ¿Cómo se **verifica** (prueba de carga, pentest, test de usuario)?
5. ¿Cuál es el **criterio de aceptación** exacto?
6. ¿Qué **prioridad** tiene frente a otros requisitos de calidad? (riesgo/impacto)

> **Plantilla general:** «El sistema deberá **[acción]** bajo **[condición]**, cumpliendo
> **[valor medible]**, para satisfacer **[necesidad del stakeholder]**.»

**🛠️ Herramientas:** matriz de calidad en Sheets, ISO 25010 como checklist.
**✅ Rúbrica:** 2 · **🔗 Guía [§15](../Guia_General_IR/README.md#15-semana-11--requisitos-de-calidad-isoiec-25010).**

---

# Semana 12 — Gestión de Cambios

**🎯 Objetivo:** definir el **proceso de control de cambios** y analizar impacto.

**📦 Artefactos:** flujo RFC → análisis de impacto → **CCB** → línea base; formato de solicitud de
cambio; ejemplo de **1 cambio** gestionado.

**❓ Preguntas para gestionar cambios:**
1. ¿Cómo se **solicita** un cambio? ¿Quién lo puede pedir?
2. ¿Quién **evalúa el impacto** (alcance, costo, cronograma, riesgo)?
3. ¿Quién **aprueba/rechaza** (comité CCB)?
4. ¿Qué requisitos/diseños/pruebas se ven **afectados** por el cambio `[X]`?
5. ¿Cómo se **versiona** y se comunica el cambio al equipo?
6. ¿Cómo se **negocian conflictos** entre stakeholders con intereses opuestos?

**🛠️ Herramientas:** issues/workflow en JIRA, control de versiones.
**✅ Rúbrica:** 4 · **🔗 Guía [§16](../Guia_General_IR/README.md#16-semana-12--gestión-de-cambios).**

---

# Semana 13 — Trazabilidad

**🎯 Objetivo:** construir la **matriz de trazabilidad bidireccional** requisito ↔ diseño ↔ código ↔ prueba.

**📦 Artefactos:** matriz de trazabilidad (directa e inversa) + diagrama de trazabilidad + análisis
de **cobertura** y **sobrediseño**.

**❓ Preguntas de trazabilidad:**
1. ¿Cada RF/RNF está vinculado a un **caso de uso**, un **diseño**, un **componente** y una **prueba**?
2. **Directa:** para `[requisito]`, ¿dónde se implementa y cómo se prueba?
3. **Inversa:** para `[componente/prueba]`, ¿qué requisito lo justifica?
4. ¿Hay algún requisito **sin prueba** asociada? (hueco de cobertura)
5. ¿Hay algún componente **sin requisito**? (sobrediseño)
6. Si cambia `[requisito]`, ¿qué otros artefactos hay que actualizar?

**🛠️ Herramientas:** matriz en Excel/Sheets, JIRA (links), HP ALM.
**✅ Rúbrica:** 4, 6 · **🔗 Guía [§17](../Guia_General_IR/README.md#17-semana-13--trazabilidad-de-requisitos).**

---

# Semana 14 — Validación y Verificación

**🎯 Objetivo:** demostrar con evidencia que los requisitos son **correctos y completos**.

**📦 Artefactos:**
- **Walkthrough** con checklist por requisito.
- **Prototipos/wireframes** (Figma/Balsamiq).
- Casos de **UAT** en Gherkin (Dado/Cuando/Entonces).
- **Análisis de escenarios** (incluye excepciones/DILO).
- Informe de hallazgos y correcciones.

**❓ Preguntas de validación:**
1. ¿El requisito es **claro, completo, verificable, consistente y factible**? (checklist walkthrough)
2. ¿El **prototipo** refleja lo que el usuario esperaba? ¿Qué cambiaría?
3. ¿Los **criterios de aceptación** son medibles y los cumple la solución?
4. ¿Qué pasa en escenarios **extremos** (fallo de red, datos inválidos, cancelación a mitad)?
5. ¿Estamos construyendo el **producto correcto** (validación) y **correctamente** (verificación)?
6. ¿Qué hallazgos surgieron y cómo se **corrigieron**?

**🛠️ Herramientas:** Figma/Balsamiq (prototipos), Google Forms (UAT), checklist.
**✅ Rúbrica:** 3 · **🔗 Guía [§18](../Guia_General_IR/README.md#18-semana-14--validación-y-verificación), [§19](../Guia_General_IR/README.md#19-historias-de-usuario-criterios-de-aceptación-gherkin-y-mvp).**

---

# 🎯 Banco maestro de preguntas para plasmar requisitos

> Úsenlo en las entrevistas/cuestionarios cuando definan el problema. Está organizado **por tipo de
> requisito**, de modo que **cada respuesta se convierte directamente en un requisito**. Son
> genéricas: reemplacen `[proceso]`, `[actor]`, `[entidad]`, `[dato]`, `[evento]`.

### A. Para descubrir el problema y el contexto (S1)
1. ¿Cuál es el **objetivo de negocio** detrás de este sistema?
2. ¿Qué **problema concreto** resuelve y a quién afecta hoy?
3. ¿Cómo miden **hoy** el éxito/fracaso de `[proceso]`?
4. ¿Qué **restricciones** (presupuesto, plazo, tecnología, ley) existen desde el inicio?

### B. Para Requisitos Funcionales — RF (S6)
5. ¿Qué acciones debe **permitir** el sistema a cada actor? (crear, leer, actualizar, eliminar, aprobar)
6. ¿Qué **reglas** condicionan cada acción? (solo si…, no cuando…)
7. ¿Qué **documentos/comprobantes** debe generar?
8. ¿Qué **integraciones** externas necesita?
9. ¿Qué **roles** existen y qué puede hacer cada uno? (permisos)
10. ¿Qué **estados** atraviesa `[entidad]` y quién los cambia?

### C. Para Requisitos No Funcionales — RNF (S7, S11)
11. **Rendimiento:** ¿tiempo máximo de respuesta? ¿usuarios concurrentes? ¿volumen?
12. **Disponibilidad:** ¿% de uptime? ¿ventanas de mantenimiento?
13. **Seguridad:** ¿datos sensibles? ¿cifrado? ¿auditoría? ¿normativa (protección de datos)?
14. **Usabilidad:** ¿tiempo de aprendizaje? ¿accesibilidad? ¿idiomas?
15. **Compatibilidad:** ¿dispositivos, navegadores, SO?
16. **Mantenibilidad:** ¿tiempo de corrección de defectos aceptable?

### D. Para Requisitos de Dominio — RD (S9)
17. ¿Qué **reglas del negocio** nunca se pueden violar?
18. ¿Qué **entidades** del negocio existen y cómo se relacionan?
19. ¿Qué **cálculos propios** del dominio hay (tarifas, penalidades, impuestos)?
20. ¿Qué **eventos del negocio** disparan procesos automáticos?

### E. Para Requisitos de Desarrollo (S10)
21. ¿Qué **tecnología/entorno** se impone o prefiere?
22. ¿Qué **metodología** y ritmo de trabajo?
23. ¿Qué **estándares** de calidad de código y pruebas?

### F. Para Restricciones
24. ¿Qué **límites** de presupuesto, tiempo o infraestructura hay?
25. ¿Qué **normativas legales** o políticas internas aplican?

### G. Para Validación (S14)
26. ¿Cómo sabremos que un requisito está **bien cumplido**? (criterio de aceptación)
27. ¿Qué escenario **haría fallar** al sistema y cómo debe reaccionar?
28. ¿Quién **aprueba** finalmente que el requisito es correcto?

> **Técnica de redacción:** convierte cada respuesta al patrón
> **«El sistema deberá [acción] [objeto/datos] [bajo qué regla/condición], cumpliendo [criterio
> medible]»**, y agrega: `ID`, `tipo`, `actor/fuente`, `prioridad (MoSCoW)`, `criterio de aceptación`.

---

# 📄 Estructura final del documento entregable

Cuando completen las 14 semanas, el **documento SRS final** (`Documento_SRS_[SISTEMA].md`) se arma
con los artefactos producidos, en este orden:

```
1. Portada UNMSM + integrantes (4) + rol de cada uno
2. Índice
3. Introducción (S1)          → problema, objetivo, alcance, metodología/ceremonia
4. Contexto de la empresa (S1) → as-is + diagrama de contexto
5. Stakeholders (S2)          → lista + matriz poder/interés
6. Elicitación (S2)           → técnicas + guiones + resultados + necesidad→requisito
7. Catálogo de requisitos
     7.1 RF (S6)
     7.2 RNF (S7)
     7.3 Requisitos de Calidad ISO 25010 (S11)
     7.4 Requisitos de Dominio (S9)
     7.5 Requisitos de Desarrollo (S10)
     7.6 Restricciones
     7.7 Priorización MoSCoW + MVP
8. Modelado (S3, S4)          → casos de uso (diagrama + detallados), actividad, secuencia, clases, ER, BPMN
9. Especificación SRS (S4)    → estructura IEEE 830 / ISO 29148
10. Gestión de requisitos (S5) → atributos, línea base
11. Gestión de cambios (S12)   → proceso RFC/CCB + 1 caso
12. Trazabilidad (S13)         → matriz bidireccional + cobertura
13. Validación y verificación (S14) → walkthrough, prototipos, UAT, escenarios, hallazgos
14. Herramientas utilizadas    → tabla + evidencias (Anexo B)
15. Plan, roles y cronograma   → RACI + Gantt
16. Conclusiones
17. Anexos (A: instrumentos, B: capturas de herramientas, C: catálogo completo, D: glosario)
```

> **Antes de entregar:** pasar el [checklist "Excelente" de la estructura por criterios](Estructura_Proyecto_Final.md#-checklist-para-nivel-excelente-90-100)
> y pegar al inicio la [matriz rúbrica ↔ secciones](Estructura_Proyecto_Final.md#-matriz-de-trazabilidad-rúbrica--secciones-del-documento).

---

> **Fuentes:** rúbrica oficial ([`RubricaProyectoFInal.docx`](../RubricaProyectoFInal.docx)),
> [Guía General de IR](../Guia_General_IR/README.md), teoría ([`teoria/`](../teoria/), 14 semanas) y
> práctica ([`practica/`](../practica/)) del Prof. Ciro Rodriguez.
