# Semana 2 — Elicitación de Requisitos
## Sistema de Gestión de Cotizaciones — "InfleSusVentas"

> **Curso:** Ingeniería de Requisitos · **Docente:** Prof. Ciro Rodriguez · UNMSM · Ciclo 5, 2026-I
> **Aporta al entregable:** Cap. 3–4 (stakeholders, instrumentos, necesidad→requisito) · **Rúbrica:** 1
> **Estado:**  Pendiente de completar
> **Navegación:** [ Semana 1](../Semana_01_Introduccion/README.md) · [Índice](../../README.md) · [Semana 3 ](../Semana_03_Analisis_y_Modelado/README.md)

---

## Objetivo del bloque
Recoger las necesidades reales del negocio InfleSusVentas con **≥ 3 técnicas de elicitación** y
traducirlas a requisitos trazables (necesidad → requisito → caso de uso).

## Artefactos a producir
- Plan de elicitación (técnica por stakeholder).
- Guion de entrevista (`Pregunta | Objetivo | Tipo`).
- Cuestionario (≥ 5 preguntas) + tabulación de resultados.
- Registro de necesidades (voz del usuario, sin traducir).
- Tabla **necesidad → requisito**.

---

## 1. Análisis de stakeholders

| Stakeholder | Tipo | Interés principal | Poder | Interés |
|---|---|---|:--:|:--:|
| **Gerente de InfleSusVentas** | Usuario principal / Sponsor | Cotizar rápido y sin errores; centralizar historial | Alto | Alto |
| **Cliente final** | Actor externo | Recibir cotización clara y a tiempo | Bajo | Alto |
| **Servicio de validación de RUC** | Sistema externo | Disponibilidad de la API | Bajo | Bajo |
| **Servicio de correo** | Sistema externo | Entrega confiable del envío | Bajo | Bajo |
| **Equipo de desarrollo (curso)** | Ejecutor | Especificar y construir el sistema | Medio | Alto |

> Matriz Poder/Interés: el **Gerente** es *Gestionar de cerca*; el **Cliente** *Mantener informado*.

## 2. Técnicas de elicitación empleadas

| Técnica | A quién / cuántos | Por qué |
|---|---|---|
| Entrevista semiestructurada | Gerente | Profundizar el proceso de cotización as-is y sus dolores |
| Análisis de documentos | Plantilla de cotización actual + correos | Extraer reglas de cálculo, campos y formato |
| Observación del canal | WhatsApp / formulario web / Yahoo Mail | Entender cómo llegan las solicitudes |

## 3. Entrevista N.º 1 — Gerente *(a completar con evidencia real)*

- **Proyecto:** Sistema de Gestión de Cotizaciones InfleSusVentas
- **Entrevistado:** Gerente · **Entrevistador:** `[Integrante]` · **Fecha:** `[ ]`
- **Objetivo:** Comprender el proceso actual de cotización y las funciones esperadas del sistema.

**Texto narrativo:** `[transcripción/cita del gerente]`

**Ideas clave (base del brief actual):** cotización manual con plantilla; cálculo de IGV a mano;
sin numeración automática; información dispersa en WhatsApp/Yahoo/web; necesidad de validar RUC;
necesidad de exportar PDF/Word y enviar por correo; deseo de una "cotización rápida".

## 4. Cuestionario *(insumo cuantitativo — a aplicar)*

| Resultado esperado | % |
|---|:--:|
| `[hallazgo 1]` | `[__%]` |
| `[hallazgo 2]` | `[__%]` |

## 5. Necesidad → Requisito (tabla clave)

| Actor | Necesidad (voz del usuario) | Requisito (traducido) | CU asociado |
|---|---|---|---|
| Gerente | "Que el precio y el IGV se calculen solos" | El sistema debe calcular precio base e IGV automáticamente | CU-Cotizar |
| Gerente | "No quiero copiar la razón social a mano" | El sistema debe validar el RUC y autocompletar la razón social | CU-RegistrarCliente |
| Gerente | "Necesito enviar la cotización sin salir del sistema" | El sistema debe exportar (PDF/Word) y enviar por correo | CU-EnviarCotizacion |
| Gerente | "A veces necesito cotizar rapidísimo" | El sistema debe ofrecer un flujo de cotización rápida | CU-CotizacionRapida |

> El catálogo completo de RF derivados se desarrolla en la [Semana 6](../Semana_06_Requisitos_Funcionales/README.md).

---

## Preguntas de elicitación (guion mixto)
| Pregunta | Objetivo | Tipo |
|---|---|---|
| ¿Cómo cotiza hoy, paso a paso? | Flujo as-is | Abierta |
| ¿Cuántas cotizaciones emite por semana? | Volumen | Cerrada |
| ¿Qué regla aplica para el precio de cada tipo de inflable? | Regla de negocio | Cerrada |
| ¿Qué es lo que más le molesta del proceso actual? | Dolor | Abierta |
| Si pudiera automatizar una sola cosa, ¿cuál sería? | Prioridad | Abierta |

## Herramientas
Google Forms (cuestionario), Docs (transcripción), grabadora con permiso.

## Checklist de cierre
- [ ] ≥ 3 técnicas aplicadas y justificadas
- [ ] ≥ 1 entrevista transcrita con ideas clave
- [ ] Cuestionario tabulado
- [ ] Tabla necesidad → requisito completa

## Referencias
Guía General de IR §7 · Formato de casos del Prof. Ciro (SIGOE/Hospital/VozMatric).
