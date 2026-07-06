# InfleSusVentas — Sistema de Gestión de Cotizaciones

Proyecto del curso **Ingeniería de Requisitos** (UNMSM · E.P. Ingeniería de Software · Ciclo 5, 2026-I)
para la empresa **InfleSusVentas**, dedicada a inflables publicitarios.

El objetivo es especificar (y prototipar) un **sistema web de gestión de cotizaciones** que reemplace
el proceso manual actual, incorporando cálculo automático de precios e **IGV**, validación de **RUC**,
numeración automática, exportación a **PDF/Word**, envío por correo y un flujo de **cotización rápida**.

---

## Problema
La gestión de cotizaciones es **100 % manual** (WhatsApp / Yahoo Mail / formulario web → plantilla →
PDF), lo que genera lentitud, errores de cálculo de precio/IGV, falta de numeración y **sin historial
centralizado**.

## Objetivo (curso)
Elaborar la **Especificación de Requisitos de Software (SRS)** completa aplicando el proceso de
Ingeniería de Requisitos (elicitación → análisis → especificación → gestión → trazabilidad →
validación), bajo los estándares **IEEE 830 / ISO-IEC-IEEE 29148**.

---

## Estructura del repositorio

```
InflesusventasPrototype/
├── README.md
└── Documentacion/
    ├── README.md                 → índice maestro de la documentación
    ├── 00_Planificacion/         → plan de trabajo, roles, metodología, guía semanal
    ├── 01_Desarrollo_Semanal/    → un bloque por semana (S1–S7, S9–S14)
    ├── 02_Entregable_Final/      → Documento_SRS (ensamblaje final)
    ├── 03_Anexos/                → glosario y anexos
    └── 04_Recursos/imagenes/     → diagramas y capturas
```

 **Punto de entrada:** [`Documentacion/README.md`](Documentacion/README.md)

---

## Avance por semanas
El desarrollo sigue las 13 sesiones del curso (S1–S7, S9–S14). El estado de cada bloque se ve en el
[índice de documentación](Documentacion/README.md#-desarrollo-semanal).

## Equipo
4 integrantes con roles complementarios (Líder, Analista de Elicitación/Dominio, Arquitecto/Modelador,
QA/Trazabilidad). Ver [Plan de Trabajo](Documentacion/00_Planificacion/Plan_de_Trabajo_y_Metodologia.md).

## Estándares y método
IEEE 830 / ISO-29148 · Priorización **MoSCoW** · ISO/IEC 25010 (calidad) · RUP + Scrum ligero.
