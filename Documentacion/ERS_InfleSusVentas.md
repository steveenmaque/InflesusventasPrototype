# Especificación de Requisitos de Software (ERS)
## Sistema de Gestión de Cotizaciones — "InfleSusVentas"

| Campo | Detalle |
|---|---|
| **Empresa** | InfleSusVentas |
| **Rubro** | Inflables publicitarios |
| **Producto** | Sistema Web de Gestión y Generación de Cotizaciones |
| **Documento** | Especificación de Requisitos de Software (ERS) |
| **Versión** | 1.0 |
| **Fecha de emisión** | 06/07/2026 |
| **Estándar de referencia** | IEEE 830 / ISO-IEC-IEEE 29148 |
| **Priorización** | MoSCoW (Must / Should / Could / Won't) |

---

## Sección 1: Introducción

### 1.1 Propósito
Este documento define, organiza y prioriza todos los niveles de requisitos del sistema de gestión de cotizaciones para InfleSusVentas. Sirve como contrato técnico entre el negocio (Gerente) y el equipo de desarrollo, y como base para el diseño arquitectónico, la implementación y las pruebas de aceptación.

### 1.2 Alcance
El sistema reemplazará el proceso manual de cotización actual (WhatsApp / correo / plantilla) por una plataforma web centralizada capaz de:
- Registrar clientes y validar su RUC contra un servicio externo.
- Generar cotizaciones auto-numeradas con cálculo automático de precios e IGV según el tipo y medida del inflable.
- Exportar cotizaciones en PDF y Word, y enviarlas por correo desde la plataforma.
- Mantener historial y trazabilidad por cotización y por cliente.
- Ofrecer un flujo alterno de "Cotización Rápida".

### 1.3 Definiciones, acrónimos y abreviaturas
| Término | Definición |
|---|---|
| **IGV** | Impuesto General a las Ventas (18% en Perú). |
| **RUC** | Registro Único de Contribuyentes. |
| **Razón Social** | Nombre legal de la persona natural o jurídica asociado al RUC. |
| **Cotización estándar** | Cotización completa con validación de RUC y trazabilidad total. |
| **Cotización rápida** | Flujo simplificado, sin validación de RUC y con fecha a nivel de mes. |
| **Skydancer** | Inflable danzante tipo "tubo con brazos" (bailarín de aire). |
| **Tótem** | Inflable vertical publicitario. |
| **ERS** | Especificación de Requisitos de Software. |
| **MoSCoW** | Método de priorización: Must / Should / Could / Won't have. |

### 1.4 Actores del sistema
| Actor | Descripción |
|---|---|
| **Gerente (usuario principal)** | Crea, edita, exporta y envía cotizaciones; gestiona clientes e historial. |
| **Cliente (actor externo)** | Solicita cotización (vía WhatsApp/correo/web) y recibe el PDF/Word por correo. No opera el sistema. |
| **Servicio de Validación de RUC (sistema externo)** | API que valida el RUC y devuelve la Razón Social. |
| **Servicio de Correo (sistema externo)** | Proveedor SMTP/API que envía la cotización al cliente. |

---

## Sección 2: Descripción General

### 2.1 Perspectiva del producto
Sistema web autónomo con base de datos propia, que se integra con dos servicios externos: validación de RUC (ej. SUNAT / API intermediaria) y envío de correo. Sustituye la plantilla manual y consolida la información dispersa (WhatsApp, Yahoo Mail, formulario web).

### 2.2 Flujo de negocio actual (contexto)
1. La solicitud llega por WhatsApp, correo (Yahoo Mail) o formulario de `inflesusventas.com` (que también redirige a WhatsApp).
2. El Gerente cotiza manualmente con una plantilla.
3. Envía el PDF por correo o WhatsApp.
4. Espera la confirmación del cliente.

**Problema:** proceso 100% manual, sin numeración automática, sin historial centralizado, propenso a errores de cálculo (precio/IGV) y sin trazabilidad.

### 2.3 Catálogo de productos y lógica de medidas
| Producto | Medidas requeridas | Descripción automática |
|---|---|---|
| **Globo** | Solo **altura** (el diámetro se calcula por proporción). | Sí |
| **Arco** | **Largo** y **alto**. | Sí |
| **Carpa cuadrangular** | **Alto**, **largo** y **ancho**. | Sí |
| **Carpa circular** | **Diámetro** y **altura**. | Sí |
| **Tótem** | Solo **altura**. | Sí |
| **Skydancer** | Solo **altura**. | Sí |
| **Otros** (forma personalizada) | **Alto**, **ancho** y **largo** (3 factores). | **No** — campo en blanco, lo llena el Gerente. |

### 2.4 Restricciones
- El IGV vigente es del 18% (Perú); debe ser configurable.
- Las tarifas exactas por tipo/tamaño se definirán posteriormente; la arquitectura debe soportarlas de forma parametrizable.
- El sistema no controla los canales de entrada (WhatsApp/Yahoo); la solicitud se ingresa manualmente al crear la cotización.

### 2.5 Suposiciones y dependencias
- Existe un servicio de validación de RUC disponible y estable.
- El Gerente cuenta con conexión a internet y un navegador moderno.
- Se dispondrá de credenciales de un servicio de envío de correo.

---

## Sección 3: Requisitos Funcionales

> **Prioridad:** M = Must Have · S = Should Have · C = Could Have · W = Won't Have (por ahora)

### 3.1 Gestión de Clientes y Validación de RUC
| ID | Prioridad | Requisito |
|---|---|---|
| RF-01 | **M** | El sistema debe permitir ingresar el **RUC** del cliente al crear una cotización estándar. |
| RF-02 | **M** | Al ingresar el RUC, el sistema debe **validarlo** contra el servicio externo. |
| RF-03 | **M** | Si el RUC es **válido**, el sistema debe **extraer y autocompletar la Razón Social** automáticamente. |
| RF-04 | **M** | Si el RUC **no es válido**, el campo Razón Social **no se autocompleta** (queda vacío/editable). |
| RF-05 | **M** | El campo **Razón Social debe ser siempre editable/modificable** por el usuario, incluso tras autocompletarse. |
| RF-06 | **M** | El sistema debe **registrar y listar los clientes** a los que se ha cotizado. |
| RF-07 | **S** | El sistema debe reutilizar datos de un cliente existente al iniciar una nueva cotización. |

### 3.2 Creación de Cotizaciones (Ítems y Medidas)
| ID | Prioridad | Requisito |
|---|---|---|
| RF-08 | **M** | El sistema debe permitir crear una **Nueva Cotización** con uno o varios ítems. |
| RF-09 | **M** | El sistema debe ofrecer las categorías: **globos, arcos, carpas, tótems, skydancers y otros**. |
| RF-10 | **M** | Para **globos**, debe solicitar solo la **altura** y calcular el diámetro por proporción. |
| RF-11 | **M** | Para **arcos**, debe solicitar **largo** y **alto**. |
| RF-12 | **M** | Para **carpas**, debe permitir elegir **cuadrangular** (alto, largo, ancho) o **circular** (diámetro, altura). |
| RF-13 | **M** | Para **tótems** y **skydancers**, debe solicitar solo la **altura**. |
| RF-14 | **M** | Para **otros**, debe solicitar los **3 factores** (alto, ancho, largo). |
| RF-15 | **M** | El sistema debe **generar automáticamente la descripción** de todos los ítems estándar. |
| RF-16 | **M** | Para la categoría **otros**, el campo descripción debe quedar **en blanco y editable** por el Gerente. |

### 3.3 Cálculo de Precios e IGV
| ID | Prioridad | Requisito |
|---|---|---|
| RF-17 | **M** | El sistema debe **calcular el precio base** de cada ítem según su **tipo y tamaño**. |
| RF-18 | **M** | La arquitectura de precios debe ser **parametrizable** (tarifas configurables sin recompilar). |
| RF-19 | **M** | El sistema debe **sumar los precios base (sin IGV)** de todos los ítems (subtotal). |
| RF-20 | **M** | El sistema debe **aplicar el IGV automáticamente** sobre el subtotal. |
| RF-21 | **M** | El sistema debe **desglosar** en la cotización: Subtotal, IGV y **Total**. |
| RF-22 | **S** | El porcentaje de IGV debe ser **configurable** por el administrador. |

### 3.4 Numeración, Fechas y Generación
| ID | Prioridad | Requisito |
|---|---|---|
| RF-23 | **M** | El sistema debe **auto-numerar** cada cotización de forma incremental (ej. inicia en **1001**). |
| RF-24 | **M** | El número de cotización debe ser **único y no reutilizable**. |
| RF-25 | **M** | La **fecha de emisión** debe colocarse **automáticamente**. |

### 3.5 Exportación y Envío
| ID | Prioridad | Requisito |
|---|---|---|
| RF-26 | **M** | El sistema debe permitir **descargar la cotización en PDF**. |
| RF-27 | **M** | El sistema debe permitir **descargar la cotización en Word**. |
| RF-28 | **M** | El sistema debe permitir **ingresar el correo del cliente** y **enviar la cotización directamente** desde la plataforma. |
| RF-29 | **S** | El sistema debe registrar el **estado de envío** (enviado / no enviado) de cada cotización. |

### 3.6 Interfaz y Navegación (Sidebar)
| ID | Prioridad | Requisito |
|---|---|---|
| RF-30 | **M** | La interfaz debe incluir una **barra lateral (sidebar)** de navegación. |
| RF-31 | **M** | El sidebar debe incluir el acceso a **Historial general por cotización**. |
| RF-32 | **M** | El sidebar debe incluir la **lista de clientes** cotizados. |
| RF-33 | **M** | El sidebar debe incluir el botón/sección **"Nueva Cotización"**. |
| RF-34 | **S** | El historial debe permitir **buscar/filtrar** por número, cliente o fecha. |

### 3.7 Trazabilidad e Historial
| ID | Prioridad | Requisito |
|---|---|---|
| RF-35 | **M** | El sistema debe **guardar cada cotización** con todos sus datos (cliente, ítems, montos, fecha, número). |
| RF-36 | **M** | El sistema debe mostrar el **historial general** de todas las cotizaciones. |
| RF-37 | **S** | El sistema debe permitir **reabrir/consultar** una cotización histórica. |
| RF-38 | **C** | El sistema debe permitir **duplicar** una cotización previa como base para una nueva. |

### 3.8 Cotización Rápida (Flujo Alterno)
| ID | Prioridad | Requisito |
|---|---|---|
| RF-39 | **S** | El sistema debe ofrecer un flujo alterno de **"Cotización Rápida"**. |
| RF-40 | **S** | En Cotización Rápida **NO** debe estar presente la validación de RUC. |
| RF-41 | **S** | La fecha de una Cotización Rápida debe registrar **solo el mes** (no el día exacto). |
| RF-42 | **S** | Las cotizaciones rápidas deben **almacenarse/registrarse por separado** (apartado distinto al de las estándar). |
| RF-43 | **C** | El sistema debe permitir **convertir** una Cotización Rápida en una estándar. |

---

## Sección 4: Requisitos No Funcionales

### 4.1 Usabilidad
| ID | Prioridad | Requisito |
|---|---|---|
| RNF-01 | **M** | La interfaz debe ser intuitiva para un usuario único no técnico (el Gerente), con el mínimo de clics para crear una cotización. |
| RNF-02 | **S** | El sistema debe ser **responsive** (usable desde escritorio y móvil/tablet). |
| RNF-03 | **S** | Los mensajes de validación (RUC inválido, campos faltantes) deben ser claros y en español. |

### 4.2 Rendimiento
| ID | Prioridad | Requisito |
|---|---|---|
| RNF-04 | **M** | La validación de RUC y el autocompletado no deben superar los **5 segundos** en condiciones normales. |
| RNF-05 | **S** | La generación/exportación de PDF o Word no debe superar los **10 segundos**. |

### 4.3 Confiabilidad y Disponibilidad
| ID | Prioridad | Requisito |
|---|---|---|
| RNF-06 | **M** | Si el servicio de RUC no responde, el sistema debe permitir **continuar manualmente** (ingresar la Razón Social) sin bloquear la cotización. |
| RNF-07 | **S** | El sistema debe garantizar que la numeración correlativa **no se pierda ni se duplique** ante fallos. |

### 4.4 Seguridad
| ID | Prioridad | Requisito |
|---|---|---|
| RNF-08 | **M** | El acceso al sistema debe requerir **autenticación** (usuario y contraseña). |
| RNF-09 | **S** | Los datos de clientes y cotizaciones deben almacenarse de forma **protegida** (respaldos periódicos). |
| RNF-10 | **C** | El sistema debe registrar una **bitácora** de acciones sensibles (envíos, ediciones). |

### 4.5 Mantenibilidad y Portabilidad
| ID | Prioridad | Requisito |
|---|---|---|
| RNF-11 | **M** | Las **tarifas** y el **% de IGV** deben poder modificarse por configuración, sin cambiar código. |
| RNF-12 | **S** | El sistema debe ser accesible vía navegador web estándar, sin instalación local. |

### 4.6 Compatibilidad / Integración
| ID | Prioridad | Requisito |
|---|---|---|
| RNF-13 | **M** | El sistema debe integrarse con un **servicio externo de validación de RUC**. |
| RNF-14 | **M** | El sistema debe integrarse con un **servicio de envío de correo** (SMTP/API). |

---

## Sección 5: Requisitos de Datos

### 5.1 Entidades principales
| Entidad | Atributos clave |
|---|---|
| **Cliente** | id, RUC, razón social, correo, teléfono, fecha de registro. |
| **Cotización** | número (correlativo, ≥1001), fecha de emisión, cliente, tipo (estándar/rápida), subtotal, IGV, total, estado de envío. |
| **Ítem de Cotización** | id, cotización, categoría (globo/arco/carpa/tótem/skydancer/otro), subtipo (carpa cuadrangular/circular), medidas (alto, ancho, largo, diámetro, altura), descripción, precio base. |
| **Tarifa** | categoría, rango de tamaño, precio unitario (parametrizable). |
| **Cotización Rápida** | número, mes/año, cliente (sin validación RUC), ítems, montos — **almacenamiento separado**. |
| **Configuración** | % IGV, número inicial de correlativo, credenciales de servicios. |

### 5.2 Reglas de datos
| ID | Regla |
|---|---|
| RD-01 | El número de cotización es único, correlativo e irrepetible. |
| RD-02 | El IGV se calcula sobre la suma de precios base (subtotal). |
| RD-03 | Las medidas obligatorias dependen de la categoría del ítem (ver Sección 2.3). |
| RD-04 | La descripción de "Otros" se almacena vacía por defecto. |
| RD-05 | La fecha de la Cotización Rápida almacena solo mes y año. |

---

## Sección 6: Requisitos de Interfaces Externas

| ID | Prioridad | Requisito |
|---|---|---|
| RIE-01 | **M** | **Interfaz de validación de RUC:** entrada RUC → salida Razón Social / estado de validez. |
| RIE-02 | **M** | **Interfaz de correo:** envío del PDF/Word adjunto al correo del cliente. |
| RIE-03 | **C** | **Interfaz con WhatsApp** para envío directo (evolución futura; hoy el envío es manual). |

---

## Sección 7: Resumen de Priorización (MoSCoW)

### 7.1 Must Have (imprescindible para la primera versión)
- Validación de RUC + autocompletado editable de Razón Social (RF-01 a RF-06).
- Catálogo con lógica de medidas por categoría (RF-08 a RF-16).
- Cálculo de precios base + IGV automático y desglosado (RF-17 a RF-21).
- Auto-numeración y fecha automática (RF-23 a RF-25).
- Exportación PDF y Word + envío por correo (RF-26 a RF-28).
- Sidebar con Historial, Clientes y Nueva Cotización (RF-30 a RF-33).
- Persistencia y trazabilidad (RF-35, RF-36).
- Parametrización de tarifas e IGV, autenticación, tolerancia a fallo de RUC (RNF-06, RNF-08, RNF-11).

### 7.2 Should Have (deseable — Cotización Rápida)
- Flujo de Cotización Rápida sin RUC, fecha por mes y almacenamiento separado (RF-39 a RF-42).
- IGV configurable, estado de envío, filtros de historial, reutilización de clientes (RF-07, RF-22, RF-29, RF-34).
- Responsive, mensajes claros, integridad de correlativo (RNF-02, RNF-03, RNF-07).

### 7.3 Could Have (opcional / futuro)
- Duplicar cotización (RF-38), convertir rápida→estándar (RF-43), bitácora (RNF-10), interfaz WhatsApp (RIE-03).

### 7.4 Won't Have (fuera de alcance en esta versión)
- Automatización de captura desde WhatsApp/Yahoo/formulario web (ingreso sigue siendo manual).
- Módulo de facturación electrónica / contabilidad.
- Multi-usuario con roles diferenciados (por ahora un solo usuario: el Gerente).

---

## Sección 8: Trazabilidad Necesidad → Requisito

| Necesidad del negocio | Requisitos asociados |
|---|---|
| Eliminar cotización manual con plantilla | RF-08 a RF-25 |
| Calcular precio e IGV sin errores | RF-17 a RF-22, RD-02 |
| Medidas correctas por tipo de inflable | RF-10 a RF-16, RD-03 |
| Numerar y fechar automáticamente | RF-23 a RF-25, RD-01 |
| Entregar al cliente (PDF/Word/correo) | RF-26 a RF-29, RIE-02 |
| Validar identidad del cliente (RUC) | RF-01 a RF-05, RIE-01 |
| Centralizar historial y clientes | RF-06, RF-30 a RF-37 |
| Cotizar rápido sin fricción | RF-39 a RF-43 |

---

*Fin del documento — ERS v1.0 · InfleSusVentas · 06/07/2026*
