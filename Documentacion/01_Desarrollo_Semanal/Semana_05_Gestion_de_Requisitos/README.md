# Semana 5 — Gestión de Requisitos
## Sistema de Gestión de Cotizaciones — "InfleSusVentas"

> **Curso:** Ingeniería de Requisitos · **Docente:** Prof. Ciro Rodriguez · UNMSM · Ciclo 5, 2026-I
> **Aporta al entregable:** Cap. 8 (atributos, línea base, priorización) · **Rúbrica:** 4
> **Estado:** Con contenido base (derivado del brief del negocio)
> **Navegación:** [Semana 4](../Semana_04_Especificacion_SRS/README.md) · [Índice](../../README.md) · [Semana 6](../Semana_06_Requisitos_Funcionales/README.md)

---

## Objetivo del bloque
Administrar los requisitos: atributos, versiones, línea base y **priorización combinada**
(MoSCoW + Kano + Valor/Costo) que sustenta la definición del **MVP** y su roadmap.

## Artefactos a producir
- Tabla de **atributos** por requisito (ID, fuente, tipo, prioridad, estado, versión).
- **Priorización combinada** (tres técnicas) + **análisis integrado**.
- **Roadmap de MVP** (MVP 1 / MVP 2 / MVP 3).
- Definición de **línea base** y política de versionado.

---

## 1. Atributos de gestión por requisito (plantilla)
| ID | Fuente | Tipo | Prioridad | Estado | Versión |
|---|---|---|:--:|---|:--:|
| RF-01 | Entrevista Gerente | Funcional | Must | Aprobado | 1.0 |
| RF-39 | Entrevista Gerente | Funcional | Should | Propuesto | 0.1 |
| RNF-01 | Análisis técnico | No funcional | Must | Aprobado | 1.0 |

> Estados: Propuesto -> Aprobado -> Implementado -> Verificado.

---

## 2. Priorización de requisitos (enfoque combinado)

Siguiendo el enfoque del curso (Sesión 3), la priorización **no se limita a MoSCoW**: se combinan
**tres técnicas complementarias**, cada una evalúa una dimensión distinta, y su **análisis integrado**
define el MVP:

| Técnica | Qué mide | Categorías |
|---|---|---|
| **MoSCoW** | Criticidad | Must / Should / Could / Won't |
| **Análisis Kano** | Satisfacción del cliente | Básico / Desempeño / Encantamiento |
| **Valor vs Costo** | Optimización de la inversión | Valor (Alto/Medio/Bajo) vs Costo (Alto/Medio/Bajo) -> Prioridad 1/2/3 |

### 2.1 MoSCoW (criticidad)

| Nivel | Funcionalidades (RF) | Justificación |
|---|---|---|
| **Must** | Validar RUC + autocompletar (RF-01..06); catálogo con lógica de medidas (RF-08..16); precio + IGV automático (RF-17..21); numeración y fecha (RF-23..25); exportar PDF/Word (RF-26,27); enviar por correo (RF-28); sidebar + historial (RF-30..33, 35, 36) | Núcleo del negocio: sin esto no hay cotización |
| **Should** | Cotización Rápida (RF-39..42); IGV configurable (RF-22); estado de envío (RF-29); filtros de historial (RF-34); reutilizar cliente (RF-07); reabrir cotización (RF-37) | Aportan agilidad y control, no bloquean el core |
| **Could** | Duplicar cotización (RF-38); convertir rápida->estándar (RF-43); bitácora (RNF-10) | Mejoras deseables |
| **Won't** | Captura automática WhatsApp/Yahoo/web; facturación; inventario; pagos; multi-rol | Fuera del alcance de esta versión |

### 2.2 Análisis Kano (satisfacción del cliente)

| Funcionalidad | Tipo Kano | Explicación |
|---|---|---|
| Validar RUC y autocompletar razón social | Básico | Se espera; su ausencia genera insatisfacción |
| Cálculo automático de precio e IGV | Básico | Fundamental para cotizar |
| Guardar cotización en historial | Básico | Esperado |
| Numeración y fecha automáticas | Básico | Esperado |
| Exportar a PDF/Word | Desempeño | A más formatos/rapidez, más satisfacción |
| Enviar por correo desde la plataforma | Desempeño | Mejora la experiencia frente al envío manual |
| Buscar/filtrar historial | Desempeño | Cuanto mejor, más útil |
| Cotización Rápida | Encantamiento | Extra que agiliza casos ágiles, sorprende positivamente |
| Duplicar / convertir cotización | Encantamiento | Comodidad no esperada |

### 2.3 Valor vs Costo (inversión)

| Funcionalidad | Valor | Costo | Decisión |
|---|:--:|:--:|:--:|
| Cálculo de precio + IGV | Alto | Medio | Prioridad 1 |
| Validación de RUC + autocompletar | Alto | Medio | Prioridad 1 |
| Catálogo con lógica de medidas | Alto | Medio | Prioridad 1 |
| Numeración + fecha automáticas | Alto | Bajo | Prioridad 1 |
| Exportar PDF/Word + enviar correo | Alto | Medio | Prioridad 1 |
| Sidebar + historial + clientes | Alto | Bajo | Prioridad 1 |
| Cotización Rápida | Medio-Alto | Medio | Prioridad 2 |
| Filtros / estado de envío / reutilizar cliente | Medio | Bajo | Prioridad 2 |
| Duplicar / convertir cotización | Medio | Medio | Prioridad 3 |
| Bitácora | Bajo | Medio | Prioridad 3 |

### 2.4 Análisis integrado y priorización final

Cruce de las tres técnicas para asignar cada funcionalidad a una entrega del roadmap:

| Funcionalidad (RF) | MoSCoW | Kano | Valor | Costo | Prioridad sugerida |
|---|:--:|:--:|:--:|:--:|:--:|
| Validar RUC + autocompletar (RF-01..05) | Must | Básico | Alto | Medio | **MVP 1** |
| Registrar/listar clientes (RF-06) | Must | Básico | Alto | Bajo | **MVP 1** |
| Catálogo + lógica de medidas (RF-08..16) | Must | Básico | Alto | Medio | **MVP 1** |
| Precio base + IGV automático (RF-17..21) | Must | Básico | Alto | Medio | **MVP 1** |
| Numeración + fecha (RF-23..25) | Must | Básico | Alto | Bajo | **MVP 1** |
| Exportar PDF/Word (RF-26, 27) | Must | Desempeño | Alto | Medio | **MVP 1** |
| Enviar por correo (RF-28) | Must | Desempeño | Alto | Medio | **MVP 1** |
| Sidebar + historial (RF-30..36) | Must | Básico | Alto | Bajo | **MVP 1** |
| Cotización Rápida (RF-39..42) | Should | Encantamiento | Medio-Alto | Medio | **MVP 2** |
| IGV configurable (RF-22) | Should | Básico | Medio | Bajo | **MVP 2** |
| Estado de envío (RF-29) | Should | Desempeño | Medio | Bajo | **MVP 2** |
| Filtrar historial (RF-34) | Should | Desempeño | Medio | Medio | **MVP 2** |
| Reutilizar cliente (RF-07) | Should | Desempeño | Medio | Bajo | **MVP 2** |
| Reabrir cotización (RF-37) | Should | Desempeño | Medio | Bajo | **MVP 2** |
| Duplicar cotización (RF-38) | Could | Encantamiento | Medio | Medio | **MVP 3** |
| Convertir rápida->estándar (RF-43) | Could | Encantamiento | Medio | Medio | **MVP 3** |
| Bitácora de acciones (RNF-10) | Could | Encantamiento | Bajo | Medio | **MVP 3** |
| Captura automática de canales / facturación | Won't | — | Alto | Alto | Fuera de alcance |

> **Lectura:** MoSCoW aporta la **criticidad**, Kano la **satisfacción del usuario** y Valor/Costo la
> **optimización de la inversión**. Su intersección define un MVP funcional y escalable.

---

## 3. Roadmap de MVP

### MVP 1 — Producto Mínimo Viable (núcleo entregable)
> **Cotización estándar de extremo a extremo:** cliente con **RUC validado**, ítems con **medidas y
> descripción automática**, **cálculo de precio e IGV**, **numeración y fecha automáticas**,
> **exportación a PDF/Word**, **envío por correo** e **historial** consultable.

Entrega el valor esencial: reemplaza el proceso manual de cotización.

### MVP 2 — Agilidad y control
Cotización Rápida, IGV configurable, estado de envío, filtros de historial, reutilización de cliente
y reapertura de cotizaciones.

### MVP 3 — Comodidad y trazabilidad avanzada
Duplicar y convertir cotizaciones, bitácora de acciones sensibles.

---

## 4. Línea base
- Se congela la **línea base 1.0** al cerrar la Semana 7 (RF + RNF aprobados).
- Aprobación: rol **R1 (Líder de Proyecto)** con visto del equipo.
- Cambios posteriores se gestionan vía RFC (ver [Semana 12](../Semana_12_Gestion_de_Cambios/README.md)).

---

## Preguntas de gestión
1. ¿Qué prioridad tiene cada requisito según **cada una** de las tres técnicas?
2. ¿Coinciden MoSCoW, Kano y Valor/Costo? Si no, ¿cómo se resuelve el conflicto?
3. ¿Qué entra en el MVP 1 y por qué?
4. ¿Cuál es la fuente (stakeholder) de cada requisito?
5. ¿Cuándo se congela la línea base y quién la aprueba?

## Herramientas
Trello/JIRA + hoja de cálculo de atributos; matriz de priorización combinada.

## Checklist de cierre
- [ ] Tabla de atributos completa
- [ ] MoSCoW, Kano y Valor/Costo aplicados
- [ ] Análisis integrado y roadmap de MVP (1/2/3) definidos
- [ ] Política de línea base acordada

## Referencias
Guía General de IR §10 · Técnicas de priorización: Sesión 3 (MoSCoW, Kano, Valor/Costo) y Sesión 5
(tabla integrada y roadmap de MVP) del Prof. Ciro Rodriguez.
