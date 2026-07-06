# Semana 4 — Especificación de Requisitos (SRS)
## Sistema de Gestión de Cotizaciones — "InfleSusVentas"

> **Curso:** Ingeniería de Requisitos · **Docente:** Prof. Ciro Rodriguez · UNMSM · Ciclo 5, 2026-I
> **Aporta al entregable:** Cap. 7 (SRS, casos de uso detallados) · **Rúbrica:** 2
> **Estado:** 🟡 Pendiente de completar
> **Navegación:** [◀ Semana 3](../Semana_03_Analisis_y_Modelado/README.md) · [Índice](../../README.md) · [Semana 5 ▶](../Semana_05_Gestion_de_Requisitos/README.md)

---

## 🎯 Objetivo del bloque
Documentar los requisitos de forma clara, completa y con estándar **IEEE 830 / ISO-29148**, y
detallar los casos de uso principales.

## 📦 Artefactos a producir
- Casos de uso **detallados** (actor, precondición, flujo principal, alternativos, postcondición).
- Estructura SRS enlazada con el modelo visual de la Semana 3.

---

## 1. Plantilla de caso de uso detallado (repetir por CU principal)

```
Caso de uso:         CU-xx  [nombre]
Actor principal:     [ ]
Actores secundarios: [ ]
Precondición:        [ ]
Disparador:          [ ]
Flujo principal:
  1. [ ]
Flujos alternativos:
  Na. [condición] → [acción]
Postcondición:       [ ]
Requisitos asociados:[RF-..]
```

## 2. Ejemplo aplicado — CU-02 Crear cotización estándar

```
Caso de uso:         CU-02  Crear cotización estándar
Actor principal:     Gerente
Actores secundarios: Servicio de RUC
Precondición:        Gerente autenticado; cliente identificado por RUC
Disparador:          El gerente pulsa "Nueva Cotización"
Flujo principal:
  1. El gerente ingresa el RUC del cliente.
  2. El sistema valida el RUC y autocompleta la razón social (editable).
  3. El gerente agrega uno o más ítems (tipo + medidas según categoría).
  4. El sistema genera descripción automática y calcula el precio base por ítem.
  5. El sistema suma subtotales, aplica y desglosa el IGV, y muestra el total.
  6. El sistema asigna número correlativo y fecha de emisión automáticos.
  7. El gerente guarda la cotización.
Flujos alternativos:
  2a. RUC inválido → no se autocompleta; el gerente ingresa la razón social manualmente.
  3a. Ítem "Otros" → la descripción queda en blanco para edición manual.
Postcondición:       Cotización almacenada en el historial, lista para exportar/enviar.
Requisitos asociados: RF-01..RF-05, RF-08..RF-25
```

## 3. Relación modelo ↔ especificación
| Caso de uso (S3) | Especificación detallada (S4) | RF asociados |
|---|---|---|
| CU-01 Registrar/validar cliente | ☐ | RF-01..RF-06 |
| CU-02 Crear cotización estándar | ✔️ ejemplo | RF-08..RF-25 |
| CU-05/06 Exportar y enviar | ☐ | RF-26..RF-29 |
| CU-08 Cotización rápida | ☐ | RF-39..RF-43 |

---

## ❓ Preguntas para especificar
1. ¿Precondición y postcondición de cada CU?
2. ¿Qué validaciones ocurren en cada paso?
3. ¿Qué pasa en el flujo alternativo (RUC inválido, sin datos, cancelación)?
4. ¿Cada requisito tiene criterio de aceptación demostrable?

## 🛠️ Herramientas
Plantilla SRS en Markdown, PlantUML.

## ✅ Checklist de cierre
- [ ] CU principales detallados
- [ ] Flujos alternativos cubiertos
- [ ] Trazabilidad CU ↔ RF establecida

## 🔗 Referencias
Guía General de IR §9 · Plantilla maestra: [`02_Entregable_Final/Documento_SRS.md`](../../02_Entregable_Final/Documento_SRS.md).
