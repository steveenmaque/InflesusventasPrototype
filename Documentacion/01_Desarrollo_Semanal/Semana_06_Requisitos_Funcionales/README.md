# Semana 6 — Requisitos Funcionales (RF)
## Sistema de Gestión de Cotizaciones — "InfleSusVentas"

> **Curso:** Ingeniería de Requisitos · **Docente:** Prof. Ciro Rodriguez · UNMSM · Ciclo 5, 2026-I
> **Aporta al entregable:** Cap. 5.1 (catálogo RF, necesidad→requisito) · **Rúbrica:** 1
> **Estado:**  Con contenido base (derivado del brief del negocio)
> **Navegación:** [ Semana 5](../Semana_05_Gestion_de_Requisitos/README.md) · [Índice](../../README.md) · [Semana 7 ](../Semana_07_Requisitos_No_Funcionales/README.md)

---

## Objetivo del bloque
Derivar el **catálogo de Requisitos Funcionales** del sistema de cotizaciones a partir de las
necesidades del Gerente (necesidad → requisito).

> **Prioridad MoSCoW:** M = Must · S = Should · C = Could · W = Won't (por ahora)

---

## 6.1 Gestión de Clientes y Validación de RUC
| ID | Prio. | Requisito |
|---|:--:|---|
| RF-01 | M | El sistema debe permitir ingresar el **RUC** del cliente al crear una cotización estándar. |
| RF-02 | M | Al ingresar el RUC, el sistema debe **validarlo** contra el servicio externo. |
| RF-03 | M | Si el RUC es **válido**, debe **extraer y autocompletar la Razón Social** automáticamente. |
| RF-04 | M | Si el RUC **no es válido**, el campo Razón Social **no se autocompleta**. |
| RF-05 | M | El campo **Razón Social debe ser siempre editable** por el usuario. |
| RF-06 | M | El sistema debe **registrar y listar los clientes** cotizados. |
| RF-07 | S | El sistema debe reutilizar datos de un cliente existente en una nueva cotización. |

## 6.2 Creación de Cotizaciones (Ítems y Medidas)
| ID | Prio. | Requisito |
|---|:--:|---|
| RF-08 | M | Crear una **Nueva Cotización** con uno o varios ítems. |
| RF-09 | M | Ofrecer las categorías: **globos, arcos, carpas, tótems, skydancers y otros**. |
| RF-10 | M | **Globos:** solicitar solo **altura**; calcular diámetro por proporción. |
| RF-11 | M | **Arcos:** solicitar **largo** y **alto**. |
| RF-12 | M | **Carpas:** elegir **cuadrangular** (alto, largo, ancho) o **circular** (diámetro, altura). |
| RF-13 | M | **Tótems y skydancers:** solicitar solo **altura**. |
| RF-14 | M | **Otros:** solicitar los **3 factores** (alto, ancho, largo). |
| RF-15 | M | **Generar automáticamente la descripción** de todos los ítems estándar. |
| RF-16 | M | Para **otros**, la descripción queda **en blanco y editable** por el Gerente. |

## 6.3 Cálculo de Precios e IGV
| ID | Prio. | Requisito |
|---|:--:|---|
| RF-17 | M | Calcular el **precio base** de cada ítem según **tipo y tamaño**. |
| RF-18 | M | Arquitectura de precios **parametrizable** (tarifas configurables). |
| RF-19 | M | **Sumar los precios base (sin IGV)** de todos los ítems (subtotal). |
| RF-20 | M | **Aplicar el IGV automáticamente** sobre el subtotal. |
| RF-21 | M | **Desglosar** Subtotal, IGV y **Total** en la cotización. |
| RF-22 | S | El porcentaje de IGV debe ser **configurable**. |

## 6.4 Numeración, Fechas y Generación
| ID | Prio. | Requisito |
|---|:--:|---|
| RF-23 | M | **Auto-numerar** cada cotización de forma incremental (ej. inicia en **1001**). |
| RF-24 | M | El número de cotización debe ser **único y no reutilizable**. |
| RF-25 | M | La **fecha de emisión** se coloca **automáticamente**. |

## 6.5 Exportación y Envío
| ID | Prio. | Requisito |
|---|:--:|---|
| RF-26 | M | **Descargar** la cotización en **PDF**. |
| RF-27 | M | **Descargar** la cotización en **Word**. |
| RF-28 | M | **Ingresar el correo** del cliente y **enviar la cotización** desde la plataforma. |
| RF-29 | S | Registrar el **estado de envío** (enviado / no enviado). |

## 6.6 Interfaz y Navegación (Sidebar)
| ID | Prio. | Requisito |
|---|:--:|---|
| RF-30 | M | Incluir una **barra lateral (sidebar)** de navegación. |
| RF-31 | M | Acceso a **Historial general por cotización**. |
| RF-32 | M | **Lista de clientes** cotizados. |
| RF-33 | M | Botón/sección **"Nueva Cotización"**. |
| RF-34 | S | Buscar/filtrar historial por número, cliente o fecha. |

## 6.7 Trazabilidad e Historial
| ID | Prio. | Requisito |
|---|:--:|---|
| RF-35 | M | **Guardar cada cotización** con todos sus datos (cliente, ítems, montos, fecha, número). |
| RF-36 | M | Mostrar el **historial general** de cotizaciones. |
| RF-37 | S | **Reabrir/consultar** una cotización histórica. |
| RF-38 | C | **Duplicar** una cotización previa como base para otra. |

## 6.8 Cotización Rápida (flujo alterno)
| ID | Prio. | Requisito |
|---|:--:|---|
| RF-39 | S | Ofrecer un flujo alterno de **"Cotización Rápida"**. |
| RF-40 | S | En Cotización Rápida **NO** hay validación de RUC. |
| RF-41 | S | La fecha registra **solo el mes** (no el día exacto). |
| RF-42 | S | Las cotizaciones rápidas se **almacenan por separado** (apartado distinto). |
| RF-43 | C | Permitir **convertir** una Cotización Rápida en estándar. |

---

## Necesidad → Requisito (trazabilidad de origen)
| Necesidad del negocio (S1: RN) | RF asociados |
|---|---|
| RN-01 Agilizar generación | RF-08..RF-25 |
| RN-02 Precio e IGV automáticos | RF-17..RF-22 |
| RN-03 Numerar y fechar | RF-23..RF-25 |
| RN-04 Historial único | RF-06, RF-30..RF-37 |
| RN-05 Validar RUC | RF-01..RF-05 |
| RN-06 Exportar y enviar | RF-26..RF-29 |
| RN-07 Cotización rápida | RF-39..RF-43 |

## Checklist de cierre
- [ ] Cada RF con actor, regla y criterio de aceptación (ver plantilla del Documento_SRS §6.1)
- [ ] Cada RF principal vinculado a un caso de uso (S3/S4)
- [ ] Prioridad MoSCoW asignada

## Referencias
Guía General de IR §11, §3 (necesidad vs requisito). Origen del brief: [Semana 1](../Semana_01_Introduccion/README.md).
