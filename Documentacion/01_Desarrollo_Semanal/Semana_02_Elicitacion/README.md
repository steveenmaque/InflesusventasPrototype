# 2. ELICITACIÓN DE REQUISITOS

> **Semana 2** · Sistema de Gestión de Cotizaciones para InfleSusVentas
> Contenido extraído del documento del proyecto (fuente definitiva).

---

2.1 Objetivo de la semana

Recoger las necesidades reales con al menos tres técnicas (entrevista, cuestionario,

análisis de documentos y observación) y traducirlas a requisitos, usando escenarios para

descubrir flujos y excepciones.

2.2 Acta de reunion

Acta de reunión — Semana 2

Fecha / Hora             11/04/2026, 7:00 p.m.
Modalidad                Presencial en la empresa
Asistentes               R1, R2, R3, R4; Gerente y Trabajador encargado
Objetivo del sprint      Elicitar requisitos y aplicar los instrumentos.
Acuerdos y tareas        R2 entrevista al Gerente y al Trabajador encargado.
R2 aplica el cuestionario a 20 clientes.
R4 tabula resultados y arma la tabla necesidad-requisito.
R3 define los escenarios.
Impedimentos             Disponibilidad limitada de clientes para el cuestionario.
Próxima reunión          18/04/2026

2.3 Análisis de stakeholders

Stakeholder     Tipo                   Interés                                  Poder   Interés
Gerente         Usuario principal / Cotizar rápido y cerrar ventas               Alto    Alto
Sponsor
Trabajador      Usuario secundario     Atender cotizaciones                     Medio    Alto
encargado
Cliente         Actor externo          Cotización clara y rápida por correo      Bajo    Alto
Servicio     de Sistema externo        Disponibilidad de la API                  Bajo    Bajo
RUC
Servicio     de Sistema externo        Entrega del envio                         Bajo    Bajo
correo

2.4 Guión de entrevista aplicado

Pregunta                                                            Objetivo            Tipo
Cuénteme paso a paso cómo cotiza hoy                                Flujo as-is        Abierta
¿Cuántas cotizaciones emite por semana?                             Volumen            Cerrada
¿Qué regla usa para el precio de cada tipo?                         Regla de negocio   Cerrada
¿Hasta que % de descuento otorga y según que?                       Descuento          Cerrada
¿Qué hace cuando el cliente no responde?                            Seguimiento        Abierta
¿Quién debe poder usar el sistema?                                  Acceso/seguridad   Cerrada
¿Qué es lo que más le molesta del proceso actual?                   Dolor              Abierta

2.5 Entrevistas (testimonios)

Entrevista 1 - Gerente. “Yo mismo cotizo todo. Uso una plantilla, calculo el precio según

el tipo y el tamaño, y le sumo el IGV a mano; a veces me equivoco. Número a ojo y después no

sé cuántas hice. Lo que más me duele es que mando la cotización y el cliente no responde; me

olvido de insistir y ahí se pierde la venta. Cuando compra harto le doy un descuento, pero nunca

más del 10%.”

Ideas clave: cotización manual; IGV con errores; sin numeración ni historial;

seguimiento que se olvida; descuento por cantidad con tope del 10%.

Entrevista 2 - Trabajador encargado. “A veces atiendo cuando el gerente no está.

Necesitaría entrar con mi usuario, porque no es bueno que cualquiera vea los precios. Lo más

tedioso es escribir la razón social; si pudiera poner el RUC y que salga solo, ahorraría tiempo.

También quisiera reenviar la cotización y saber si el cliente respondió.”

Ideas clave: acceso con usuario; autocompletar por RUC; reenvío y estado.

Entrevista 3 - Cliente frecuente. “Pido arcos y sky dancers para campanas. Quiero la

cotización rápido y clara, con el IGV separado, y por correo. Si se demoran, cotizo con otro. Y si

pido varias unidades, espero un descuento.”

Ideas clave: rapidez; IGV desglosado; envío por correo; competencia; descuento por

cantidad.

2.6 Cuestionario aplicado (preguntas y respuestas)

Se aplicó a 20 clientes frecuentes. A continuación las preguntas realizadas y la

distribución de respuestas.

N.    Pregunta realizada                              Respuestas (distribucion)
1     ¿Por qué canal suele recibir su cotización?     WhatsApp 80% / Correo 15% / Otro 5%
2     ¿Cómo preferiría recibirla?                     Correo en PDF 70% / WhatsApp 25% /
Impreso 5%
3     ¿Qué tan importante es la rapidez de Muy importante 65% / Importante 30% /
respuesta?                           Poco 5%
4     ¿Ha pedido descuento por comprar varias Si 55% / No 45%
unidades?
5     Tras una cotización sin comprar, le dieron No 60% / Si 40%
seguimiento?
6     ¿Le gustaría ver el IGV desglosado?             Si 75% / Indiferente 25%
7     ¿Qué inflables suele solicitar?                 Arcos 35% / Globos 25% / Sky dancers
20% / Carpas 15% / Otros 5%

Conclusión: se requiere agilizar y digitalizar la entrega, desglosar el IGV, dar seguimiento

para no perder ventas y soportar descuentos por cantidad con tope.

2.7 Escenarios de elicitación (ficticios)

Escenario 1 - Cotización estándar urgente. 'Publicidad Total S.A.C.' pide por WhatsApp 3

arcos de 6 x 4 m para una campana en dos días. El trabajador inicia sesión, ingresa el RUC (se

autocompleta la razón social), agrega los arcos, aplica 8% de descuento por cantidad, el sistema

calcula el IGV, asigna el número 1001 y la fecha, exporta el PDF y lo envía. (RF-46, RF-01 a

RF-05, RF-08 a RF-16, RF-44/45, RF-17 a RF-28.)

Escenario 2 - Seguimiento para cerrar la venta. Tres días después la cotización 1001 sigue

sin respuesta; el sistema marca 'En seguimiento' y genera un recordatorio; el gerente reenvía con

10% de descuento y registra la negociación; el cliente acepta. (RF-48 a RF-50, RF-44/45,

RD-10.)

Escenario 3 - Cotización rápida sin RUC. Un cliente de mostrador pide el precio de un

globo de 3 m; se usa la cotización rápida, sin validar RUC, con fecha por mes y almacenamiento

separado. (RF-39 a RF-43.)

Escenario 4 - Servicio de RUC no disponible. El servicio de RUC no responde; el sistema

permite continuar ingresando la razón social manualmente. (RF-04, RNF-06.)

Escenario 5 - Carpa e inflable personalizado. Se pide una carpa cuadrangular 5 x 5 x 3 m

y un inflable con forma de mascota ('Otros'), cuya descripción queda en blanco para completar.

(RF-12, RF-14, RF-16.)

2.8 Necesidad -> Requisito -> Caso de uso

Actor           Necesidad (voz del usuario)                   Requisito                   CU
Gerente      Que el precio y el IGV se Calcular precio, descuento e IGV                 CU-05
calculen solos
Trabajador Entrar con mi usuario                Autenticar al usuario autorizado        CU-01
Trabajador Poner el RUC y que salga la Validar RUC y autocompletar                      CU-02
razón social
Gerente      Dar descuento, pero no más del Aplicar descuento con tope de 10%           CU-04
10%

Gerente      Que no se pierda la venta si no Dar    seguimiento        (estado   +    CU-10
responden                       recordatorio)
Cliente      Recibirla rápido y por correo     Exportar (PDF/Word) y enviar por CU-06/07
correo

Validación de la semana: El Gerente y el Trabajador validaron las ideas clave y la tabla

necesidad-requisito; se confirmó el tope de descuento del 10% y la necesidad de seguimiento.
