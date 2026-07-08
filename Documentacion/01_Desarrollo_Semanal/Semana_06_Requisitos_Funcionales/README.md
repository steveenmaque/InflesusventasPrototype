# 6. REQUISITOS FUNCIONALES

> **Semana 6** · Sistema de Gestión de Cotizaciones para InfleSusVentas
> Contenido extraído del documento del proyecto (fuente definitiva).

---

6.1 Objetivo de la semana

Consolidar el catálogo completo de requisitos funcionales derivados de la elicitación, con

su prioridad MoSCoW (M=Must, S=Should, C=Could).

6.2 Acta de reunion

Acta de reunión — Semana 6

Fecha / Hora              08/05/2026, 7:00 p.m.
Modalidad                 Virtual
Asistentes                R1, R2, R3, R4
Objetivo del sprint       Redactar el catálogo de requisitos funcionales.
Acuerdos y tareas         R2 redacta los RF por modulo.
R4 asigna prioridad y criterio de aceptación.
R1 verifica la trazabilidad con las necesidades.
Impedimentos              Ninguno.
Proxima reunion           15/05/2026

6.3 Acceso y seguridad

ID        Prio. Requisito
RF-46        M    El sistema debe requerir el inicio de sesión (usuario y contraseña) del
gerente/trabajador.
RF-47        M    El sistema debe permitir el uso exclusivo del usuario autorizado, validando la
sesión y permitiendo cerrarla.

6.4 Gestión de clientes y validación de RUC

ID        Prio. Requisito
RF-01        M    El sistema debe permitir ingresar el RUC del cliente al crear una cotización
estándar.
RF-02        M    El sistema debe validar el RUC contra el servicio externo.

RF-03      M    El sistema debe autocompletar la razón social cuando el RUC sea válido.
RF-04      M    El sistema no debe autocompletar la razón social cuando el RUC no sea
válido.
RF-05      M    El sistema debe permitir que la razón social sea siempre editable por el
usuario.
RF-06      M    El sistema debe registrar y listar los clientes cotizados.
RF-07      S    El sistema debería permitir reutilizar los datos de un cliente existente.

6.5 Creación de cotizaciones y catálogo

ID     Prio. Requisito
RF-08      M    El sistema debe permitir crear una cotización con uno o varios ítems.
RF-09      M    El sistema debe ofrecer las categorías globos, arcos, carpas, tótems,
skydancers y otros.
RF-10      M    El sistema debe solicitar solo la altura para globos, derivando el diámetro por
proporción.
RF-11      M    El sistema debe solicitar el largo y el alto para arcos.
RF-12      M    El sistema debe solicitar alto, largo y ancho (cuadrangular) o diámetro y
altura (circular) para carpas.
RF-13      M    El sistema debe solicitar solo la altura para tótems y skydancers.
RF-14      M    El sistema debe solicitar alto, ancho y largo para la categoría "Otros".
RF-15      M    El sistema debe generar automáticamente la descripción de los ítems
estándar.
RF-16      M    El sistema debe dejar en blanco y editable la descripción cuando el ítem sea
"Otros".

6.6 Precios, descuento e IGV

ID     Prio. Requisito
RF-17      M    El sistema debe calcular el precio base según el tipo y el tamaño del ítem.
RF-18      M    El sistema debe permitir tarifas parametrizables.
RF-44      M    El sistema debe permitir aplicar un descuento sobre el precio base.
RF-45      M    El sistema debe validar que el descuento no supere el 10% según la cantidad.

RF-19      M    El sistema debe sumar los precios base y aplicar el descuento para obtener el
subtotal.
RF-20      M    El sistema debe aplicar el IGV sobre el subtotal ya con descuento.
RF-21      M    El sistema debe desglosar el precio, el descuento, el subtotal, el IGV y el
total.
RF-22      S    El sistema debería permitir configurar el porcentaje de IGV.

6.7 Numeración, exportación, envío e interfaz

ID     Prio. Requisito
RF-23     M    El sistema debe numerar automáticamente cada cotización de forma
incremental (desde 1001).
RF-24     M    El sistema debe garantizar que el número de cotización sea único e irrepetible.
RF-25     M    El sistema debe registrar automáticamente la fecha de emisión.
RF-26     M    El sistema debe permitir descargar la cotización en PDF.
RF-27     M    El sistema debe permitir descargar la cotización en Word.
RF-28     M    El sistema debe permitir ingresar el correo del cliente y enviar la cotización.
RF-29      S   El sistema debería registrar el estado de envío.
RF-30     M    El sistema debe mostrar una barra lateral (sidebar) de navegación.
RF-31     M    El sistema debe permitir el acceso al historial por cotización.
RF-32     M    El sistema debe mostrar la lista de clientes.
RF-33     M    El sistema debe mostrar el botón "Nueva Cotización".
RF-34      S   El sistema debería permitir buscar y filtrar el historial.
RF-35     M    El sistema debe guardar cada cotización con todos sus datos.
RF-36     M    El sistema debe mostrar el historial general.
RF-37      S   El sistema debería permitir reabrir y consultar una cotización histórica.
RF-38     C    El sistema podría permitir duplicar una cotización previa.

6.8 Cotizacion rapida y seguimiento

ID     Prio. Requisito
RF-39     S    El sistema debería ofrecer un flujo alterno de cotización rápida.

RF-40      S     El sistema debería omitir la validación de RUC en la cotización rápida.
RF-41      S     El sistema debería registrar solo el mes en la fecha de la cotización rápida.
RF-42      S     El sistema debería almacenar las cotizaciones rápidas de forma separada.
RF-43      C     El sistema podría permitir convertir una cotización rápida en estándar.
RF-48      S     El sistema debería registrar y           actualizar   el   estado   (Enviada/En
seguimiento/Aceptada/Rechazada).
RF-49      S     El sistema debería generar un recordatorio cuando no haya respuesta.
RF-50      S     El sistema debería registrar las interacciones y negociaciones (descuento,
reenvíos, notas).

Validacion de la semana: El Gerente verifico que el catalogo refleja todas sus

necesidades; se confirmaron las prioridades Must del entregable.
