# Diagramas fuente (editables)

Archivos fuente de los diagramas del proyecto. Se versionan aquí; sus **exportaciones a imagen**
(`.png`) van en [`../imagenes/`](../imagenes/).

## BPMN 2.0 (importables en Bizagi Modeler)

| Archivo | Proceso | Referenciado en |
|---|---|---|
| `bpmn_asis.bpmn` | Flujo de cotización **manual** (AS-IS) | Semana 1 §3.5 |
| `bpmn_tobe.bpmn` | Flujo de cotización **con el sistema** (TO-BE) | Semana 1 §3.6 |

### Cómo abrirlos
- Son **BPMN 2.0 (XML estándar)**. Se importan en **Bizagi Modeler** (`Archivo → Importar → BPMN 2.0`),
  o se abren en **Camunda Modeler**, **draw.io** (bpmn.io) o cualquier herramienta compatible.
- En Linux, donde Bizagi Modeler no se instala, se pueden abrir/editar en **camunda-modeler** o en
  [demo.bpmn.io](https://demo.bpmn.io) y luego exportar el `.png` a `../imagenes/`.

> Alcance del TO-BE: incluye el **inicio de sesión** del gerente (uso exclusivo del usuario autorizado),
> el **botón de descuento (máx 10% según cantidad)** y el **seguimiento** (estados, recordatorios y
> registro de negociación) para cerrar la venta.
