# Semana 9 — Requisitos de Dominio (RD)
## Sistema de Gestión de Cotizaciones — "InfleSusVentas"

> **Curso:** Ingeniería de Requisitos · **Docente:** Prof. Ciro Rodriguez · UNMSM · Ciclo 5, 2026-I
> **Aporta al entregable:** Cap. 5.3 (RD, reglas de negocio, modelo de datos) · **Rúbrica:** 1
> **Estado:**  Con contenido base (derivado del brief del negocio)
> **Navegación:** [ Semana 7](../Semana_07_Requisitos_No_Funcionales/README.md) · [Índice](../../README.md) · [Semana 10 ](../Semana_10_Requisitos_de_Desarrollo/README.md)

---

## Objetivo del bloque
Capturar las **reglas del negocio** de InfleSusVentas (independientes de la tecnología) y el modelo
de datos del dominio.

---

## 9.1 Reglas de negocio (RD)
| ID | Regla de negocio | Entidad(es) |
|---|---|---|
| RD-01 | El número de cotización es **único, correlativo e irrepetible** (inicia en 1001). | Cotización |
| RD-02 | El **IGV (18 %, configurable)** se calcula sobre la **suma de precios base** (subtotal). | Cotización |
| RD-03 | Las **medidas obligatorias dependen de la categoría** del ítem (ver 9.3). | Ítem |
| RD-04 | La descripción de los ítems estándar es **automática**; la de "Otros" queda **vacía** por defecto. | Ítem |
| RD-05 | En una **Cotización Rápida** la fecha almacena **solo mes y año** y **no** se valida RUC. | Cotización Rápida |
| RD-06 | En **globos**, el **diámetro se deriva de la altura** por un factor de proporción `[definir]`. | Ítem (globo) |
| RD-07 | Las **tarifas** dependen de **tipo de inflable + tamaño** y son **parametrizables**. | Tarifa |

## 9.2 Modelo de datos del dominio (entidades)
| Entidad | Atributos clave |
|---|---|
| **Cliente** | id, RUC, razón social, correo, teléfono, fecha de registro |
| **Cotización** | número (≥1001), fecha de emisión, cliente, tipo (estándar/rápida), subtotal, IGV, total, estado de envío |
| **Ítem de Cotización** | id, cotización, categoría, subtipo (carpa cuadrangular/circular), medidas (alto, ancho, largo, diámetro, altura), descripción, precio base |
| **Tarifa** | categoría, rango de tamaño, precio unitario (parametrizable) |
| **Cotización Rápida** | número, mes/año, cliente (sin validación RUC), ítems, montos — **almacenamiento separado** |
| **Configuración** | % IGV, número inicial de correlativo, credenciales de servicios |

> Sugerido: diagrama Entidad-Relación y de clases en `04_Recursos/imagenes/`.

## 9.3 Lógica de medidas por categoría (regla central del dominio)
| Producto | Medidas requeridas | Descripción automática |
|---|---|:--:|
| **Globo** | Solo **altura** (diámetro por proporción) | Sí |
| **Arco** | **Largo** y **alto** | Sí |
| **Carpa cuadrangular** | **Alto, largo, ancho** | Sí |
| **Carpa circular** | **Diámetro y altura** | Sí |
| **Tótem** | Solo **altura** | Sí |
| **Skydancer** | Solo **altura** | Sí |
| **Otros** | **Alto, ancho, largo** (3 factores) | **No** (campo en blanco) |

## 9.4 Estados de una cotización (ciclo de vida)
`Borrador → Emitida (numerada + fechada) → Enviada → [Aceptada / Rechazada]`

---

## Preguntas para plasmar RD
1. ¿Qué reglas del negocio son obligatorias e inviolables?
2. ¿Qué cálculos propios del negocio existen (IGV, tarifas, proporción del globo)?
3. ¿Qué estados puede tener una cotización y qué transiciones son válidas?
4. ¿Qué eventos disparan procesos (emisión, envío)?

## Checklist de cierre
- [ ] Reglas RD-01..RD-07 validadas con el Gerente
- [ ] Factor de proporción del globo definido (RD-06)
- [ ] Diagrama ER / clases del dominio adjunto
- [ ] Glosario del dominio alimentado (Anexo D)

## Referencias
Guía General de IR §13. Glosario final: [`03_Anexos/Glosario.md`](../../03_Anexos/Glosario.md).
