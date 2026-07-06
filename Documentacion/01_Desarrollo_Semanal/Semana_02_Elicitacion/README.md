# Semana 2 — Elicitación de Requisitos
## Sistema de Gestión de Cotizaciones — "InfleSusVentas"

> **Curso:** Ingeniería de Requisitos · **Docente:** Prof. Ciro Rodriguez · UNMSM · Ciclo 5, 2026-I
> **Aporta al entregable:** Cap. 3–4 (stakeholders, instrumentos, necesidad→requisito) · **Rúbrica:** 1
> **Estado:** Con contenido base (entrevistas y cuestionario de muestra; reemplazar por evidencia real del equipo)
> **Navegación:** [Semana 1](../Semana_01_Introduccion/README.md) · [Índice](../../README.md) · [Semana 3](../Semana_03_Analisis_y_Modelado/README.md)

---

## Objetivo del bloque
Recoger las necesidades reales de InfleSusVentas con **≥ 3 técnicas de elicitación** (Sesión 2) y
traducirlas a requisitos trazables (necesidad → requisito → caso de uso), siguiendo el **formato del
profesor**: entrevista narrativa + ideas clave → cuestionario con porcentajes → interpretación del analista.

## Artefactos a producir
- Análisis de stakeholders (lista + poder/interés).
- Guion y **entrevistas** (mínimo 3–4) con testimonios e ideas clave.
- **Cuestionario** (≥ 5 preguntas) con tabulación en porcentajes.
- Interpretación del analista y tabla **necesidad → requisito**.

---

## 1. Análisis de stakeholders

| Stakeholder | Tipo | Interés principal | Poder | Interés |
|---|---|---|:--:|:--:|
| **Gerente** | Usuario principal / Sponsor | Cotizar rápido y sin errores; cerrar más ventas | Alto | Alto |
| **Trabajador encargado** | Usuario secundario (autenticado) | Atender cotizaciones cuando el gerente no está | Medio | Alto |
| **Cliente** | Actor externo | Recibir cotización clara, rápida y por correo | Bajo | Alto |
| **Servicio de validación de RUC** | Sistema externo | Disponibilidad de la API | Bajo | Bajo |
| **Servicio de correo** | Sistema externo | Entrega confiable del envío | Bajo | Bajo |

> Matriz Poder/Interés: **Gerente** = *Gestionar de cerca*; **Trabajador encargado** = *Mantener
> satisfecho/informado*; **Cliente** = *Mantener informado*.

## 2. Técnicas de elicitación empleadas (Sesión 2)

| Técnica | A quién / cuántos | Por qué |
|---|---|---|
| **Entrevista semiestructurada** | Gerente, trabajador encargado, cliente frecuente | Profundizar el proceso as-is y las expectativas |
| **Cuestionario** | 20 clientes frecuentes | Datos cuantitativos sobre canal, rapidez, seguimiento y descuento |
| **Análisis de documentos** | Plantilla de cotización actual, correos de Yahoo | Extraer campos, reglas de cálculo (IGV) y formato |
| **Observación** | Bandeja de WhatsApp y formulario web | Ver cómo llegan y se atienden las solicitudes |

---

## 3. Entrevistas (formato del profesor)

### Entrevista N.º 1 — Gerente
- **Proyecto:** Sistema de Gestión de Cotizaciones InfleSusVentas
- **Entrevistado:** Gerente (dueño) · **Entrevistador:** `[Integrante]` · **Fecha:** `[ ]`
- **Objetivo:** Comprender cómo cotiza hoy y qué necesita del sistema.

> "Yo mismo cotizo todo. Me llegan pedidos por WhatsApp y al correo de Yahoo, y también del
> formulario de la web, pero al final todo termina en WhatsApp. Uso una plantilla en Word, calculo el
> precio según el tipo de inflable y el tamaño, y le **sumo el IGV a mano**; a veces me equivoco con
> el 18 % o con el total. **Numero las cotizaciones a ojo** y después no sé cuántas hice ni a quién.
> Lo que más me duele es que **mando la cotización y el cliente no responde; me olvido de insistir y
> ahí se pierde la venta**. Cuando el cliente compra harto le doy un **descuento, pero nunca más del
> 10 %**."

**Ideas clave:** cotización manual con plantilla; cálculo de IGV a mano con errores; sin numeración ni
historial; **el seguimiento se olvida → se pierden ventas**; **descuento por cantidad, tope 10 %**.

### Entrevista N.º 2 — Trabajador encargado (vendedor)
- **Entrevistado:** Trabajador de ventas · **Entrevistador:** `[Integrante]` · **Fecha:** `[ ]`
- **Objetivo:** Entender el uso compartido y las trabas operativas.

> "A veces yo atiendo las cotizaciones cuando el gerente no está. Necesitaría **entrar con mi
> usuario**, porque no es bueno que cualquiera vea los precios. Lo más tedioso es **escribir la razón
> social**; si pudiera poner el **RUC y que salga solo**, ahorraría tiempo. También quisiera
> **reenviar** la cotización y **saber si el cliente ya respondió**."

**Ideas clave:** **acceso con usuario/contraseña** (sistema solo para personal autorizado);
autocompletar razón social por **RUC**; **reenvío** y **estado** de la cotización.

### Entrevista N.º 3 — Cliente frecuente
- **Entrevistado:** Encargado de marketing de una empresa cliente · **Entrevistador:** `[Integrante]`
- **Objetivo:** Conocer las expectativas del cliente.

> "Pido arcos y skydancers para campañas. Quiero que me manden la cotización **rápido y clara, con el
> IGV separado**, y **por correo** para reenviarla a mi jefe. Si se demoran, **cotizo con otro
> proveedor**. Y si pido varias unidades, espero algún **descuento**."

**Ideas clave:** rapidez; **IGV desglosado**; **envío por correo**; competencia por demora; descuento
por cantidad.

### Entrevista N.º 4 — Asistente contable
- **Entrevistado:** Apoyo contable externo · **Entrevistador:** `[Integrante]`
- **Objetivo:** Requisitos de formalidad y cálculo.

> "Para la parte contable necesito que el **IGV esté bien calculado y desglosado**, y que **cada
> cotización tenga número y fecha**. Si aplican un descuento, debe verse aparte."

**Ideas clave:** IGV correcto y desglosado; **numeración y fecha**; descuento visible en el desglose.

---

## 4. Cuestionario (insumo del caso)

Se aplicó un cuestionario a **20 clientes frecuentes**. Resultados relevantes:

| Resultado | % |
|---|:--:|
| Recibió su cotización por **WhatsApp** | 80 % |
| Prefiere recibir la cotización **por correo en PDF** | 70 % |
| Considera la **rapidez** un factor decisivo de compra | 65 % |
| Alguna vez pidió **descuento por cantidad** | 55 % |
| **No recibió seguimiento** tras la primera cotización | 60 % |
| Le gustaría ver el **IGV desglosado** en la cotización | 75 % |

**Conclusión:** existe una clara necesidad de **agilizar y digitalizar** la entrega, **desglosar el
IGV**, **dar seguimiento** para no perder ventas y **soportar descuentos por cantidad** (con tope).

---

## 5. Interpretación del analista

A partir de las entrevistas y el cuestionario:

- **Actores identificados:** Gerente, Trabajador encargado, Cliente (externo), Servicio de RUC,
  Servicio de Correo.
- **Relaciones entre casos de uso:**
  - *Crear cotización* **`<<include>>`** *Autenticarse* (paso obligatorio: sistema de usuario único).
  - *Crear cotización* **`<<include>>`** *Validar RUC*.
  - *Enviar cotización* **`<<extend>>`** *Dar seguimiento* (cuando no hay respuesta).
  - *Cotización rápida* **`<<extend>>`** *Crear cotización* (sin validación de RUC).
  - **Generalización:** *Gerente* y *Trabajador encargado* se agrupan en **Usuario del sistema**.
- **Funcionalidades clave (→ casos de uso):** Autenticarse, Registrar/validar cliente (RUC), Crear
  cotización (medidas + descripción), Aplicar descuento (≤ 10 %), Calcular IGV, Exportar/Enviar,
  Dar seguimiento.

### 5.1 Requisitos derivados y justificados por evidencia (mín. 5 RF y 3 RNF)

| ID | Requisito | Tipo | Evidencia |
|---|---|---|---|
| RF-46 | El sistema debe requerir **inicio de sesión** del usuario autorizado | Funcional | Entrevista 2 ("entrar con mi usuario") |
| RF-01 | El sistema debe **validar el RUC** y autocompletar la razón social | Funcional | Entrevista 2 ("poner el RUC y que salga solo") |
| RF-44 | El sistema debe permitir **aplicar un descuento** sobre el precio base | Funcional | Entrevistas 1 y 3; 55 % del cuestionario |
| RF-45 | El descuento **no debe superar el 10 %**, según la cantidad | Funcional | Entrevista 1 ("nunca más del 10 %") |
| RF-20 | El sistema debe **calcular y desglosar el IGV** automáticamente | Funcional | Entrevistas 1 y 4; 75 % del cuestionario |
| RF-48 | El sistema debe **dar seguimiento** (estado + recordatorio) a la cotización | Funcional | Entrevista 1; 60 % sin seguimiento |
| RNF-04 | La validación de RUC debe responder en **< 5 s** (95 % de casos) | No funcional | Entrevistas 2 y 3 (rapidez) |
| RNF-08 | El acceso debe requerir **autenticación**; uso exclusivo del personal autorizado | No funcional | Entrevista 2 ("no es bueno que cualquiera vea los precios") |
| RNF-05 | La exportación/envío en PDF debe completarse en **< 10 s** | No funcional | 70 % prefiere PDF por correo |

## 6. Necesidad → Requisito (tabla clave del profesor)

| Actor | Necesidad (voz del usuario) | Requisito (traducido) | CU asociado |
|---|---|---|---|
| Gerente | "El precio y el IGV que se calculen solos" | El sistema debe calcular precio, descuento e IGV automáticamente | CU-Cotizar |
| Trabajador | "Entrar con mi usuario" | El sistema debe autenticar al usuario autorizado | CU-Autenticarse |
| Trabajador | "Poner el RUC y que salga la razón social" | El sistema debe validar RUC y autocompletar razón social | CU-RegistrarCliente |
| Gerente | "Dar descuento, pero no más del 10 %" | El sistema debe aplicar descuento con tope de 10 % según cantidad | CU-AplicarDescuento |
| Gerente | "Que no se me pierda la venta si no responden" | El sistema debe dar seguimiento (estado + recordatorio) | CU-Seguimiento |
| Cliente | "Recibirla rápido y por correo" | El sistema debe exportar (PDF/Word) y enviar por correo | CU-EnviarCotizacion |

> El catálogo completo de RF derivados se desarrolla en la [Semana 6](../Semana_06_Requisitos_Funcionales/README.md);
> la priorización (MoSCoW + Kano + Valor/Costo) en la [Semana 5](../Semana_05_Gestion_de_Requisitos/README.md).

---

## Preguntas de elicitación (guion mixto)
| Pregunta | Objetivo | Tipo |
|---|---|---|
| ¿Cómo cotiza hoy, paso a paso? | Flujo as-is | Abierta |
| ¿Cuántas cotizaciones emite por semana? | Volumen | Cerrada |
| ¿Qué regla aplica para el precio de cada tipo de inflable? | Regla de negocio | Cerrada |
| ¿Hasta qué % de descuento otorga y según qué? | Regla de negocio (descuento) | Cerrada |
| ¿Qué hace cuando el cliente no responde? | Seguimiento | Abierta |
| ¿Quién debe poder usar el sistema? | Acceso/seguridad | Cerrada |
| ¿Qué es lo que más le molesta del proceso actual? | Dolor | Abierta |

## Herramientas
Google Forms (cuestionario), Docs (transcripción), grabadora con permiso.

## Checklist de cierre
- [ ] ≥ 3 técnicas aplicadas y justificadas
- [ ] ≥ 3 entrevistas transcritas con ideas clave
- [ ] Cuestionario tabulado en porcentajes
- [ ] Interpretación del analista (actores, relaciones, funcionalidades)
- [ ] Tabla necesidad → requisito completa

## Referencias
Guía General de IR §7 · Teoría Sesión 2 (técnicas de elicitación) · Casos de práctica del Prof. Ciro
(SIGOE, VozMatric) como formato de entrevista + cuestionario + interpretación.
