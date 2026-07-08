# 1. CONCEPTOS FUNDAMENTALES: ENCUADRE DEL PROBLEMA

> **Semana 1** · Sistema de Gestión de Cotizaciones para InfleSusVentas
> Contenido extraído del documento del proyecto (fuente definitiva).

---

1.1 Objetivo de la semana

Definir el problema, el objetivo, el alcance y el modelo de proceso del sistema de

cotizaciones de InfleSusVentas, distinguiendo el espacio del problema del espacio de la solución.

1.2 Acta de reunion

Acta de reunión — Semana 1

Fecha / Hora            04/04/2026, 7:00 p.m.
Modalidad               Virtual (videollamada)
Asistentes              R1 (lider), R2 (elicitacion), R3 (modelado), R4 (QA); reunion inicial
con el Gerente
Objetivo del sprint     Encuadrar el problema y definir la ficha del proyecto.
Acuerdos y tareas       R1 redacta la ficha del proyecto y objetivos.
R2 prepara el guión de la entrevista.
R3 elabora el diagrama de contexto (AS-IS/TO-BE).
R4 recopila restricciones y limitaciones.
Impedimentos            Las tarifas exactas por tipo/tamaño aún no están definidas.
Próxima reunion         11/04/2026

1.3 Contexto del negocio y situación actual (AS-IS)

InfleSusVentas fabrica y vende inflables publicitarios (globos, arcos, carpas, totems,

skydancers y formas personalizadas). Hoy gestiona sus cotizaciones de forma completamente

manual: las solicitudes llegan por WhatsApp, correo Yahoo y un formulario web que redirige a

WhatsApp; el gerente cotiza con una plantilla, calcula el precio y el IGV a mano, genera un PDF

y lo envia, sin un seguimiento sistemático.

1.4 Enunciado del problema

La gestión de cotizaciones es completamente manual, lo que genera lentitud, errores de

cálculo de precios e IGV, ausencia de numeración y fechado automáticos, falta de historial

centralizado y ausencia de seguimiento, por lo que muchas cotizaciones sin respuesta se enfrían

y se pierden ventas.

1.5 Necesidades de negocio y puntos de dolor

ID        Necesidad de negocio                                                     Dolor origen
RN-01       Agilizar y centralizar la generación de cotizaciones                            D1
RN-02       Calcular precios, descuento e IGV automaticamente                               D2
RN-03       Numerar y fechar automáticamente                                                D3
RN-04       Historial unico de cotizaciones y clientes                                      D4
RN-05       Validar RUC y autocompletar razón social                                        D5
RN-06       Exportar (PDF/Word) y enviar la cotización                                      D6
RN-07       Ofrecer cotizacion rapida                                                       D1
RN-08       Dar seguimiento para cerrar más ventas                                          D7

ID     Dolor actual                                      Consecuencia
D1     Cotizacion manual con plantilla                   Lento; el cliente puede irse a la
competencia
D2     Cálculo manual de precio e IGV                    Errores e inconsistencias
D3     Sin numeración ni fecha automáticas               Control y trazabilidad difíciles
D4     Informacion dispersa (WhatsApp/Yahoo/web) Sin historial único
D5     Sin validación de RUC                             Razón social a mano, con errores
D6     Envío manual del PDF                              Sin registro de envío
D7     Sin seguimiento sistemático                       Se enfrían las cotizaciones; se pierden
ventas

1.6 Objetivos

Objetivo general: elaborar la SRS del sistema de cotizaciones de InfleSusVentas

aplicando el proceso de Ingeniería de Requisitos, con requisitos trazables y validados.

- Encuadrar el problema (contexto, objetivos, alcance y modelo de proceso).

- Elicitar necesidades con múltiples técnicas y escenarios.

- Construir los catalogos completos de requisitos.

- Modelar el sistema con UML y priorizar con MoSCoW, Kano y Valor/Costo.

- Gestionar cambios, trazar y validar los requisitos.

1.7 Alcance y restricciones

Dentro del alcance: acceso autenticado; clientes con validación de RUC; catálogo con

lógica de medidas; precio, descuento (máx 10% por cantidad) e IGV; numeración, fecha,

exportacion, envio, historial, cotizacion rapida y seguimiento. Fuera del alcance: captura

automática de canales, facturación, inventario, pagos y multi-rol.

ID          Tipo      Restriccion
RES-01        Fiscal     IGV 18% configurable
RES-02       Negocio     Tarifas por definir; arquitectura parametrizable
RES-03       Tecnica     Depende de servicios externos de RUC y correo
RES-04      Operativa    El sistema no controla los canales de entrada
RES-05     Académica     Alcance limitado a especificación y prototipo
RES-06      Tiempo     El desarrollo se ajusta al ciclo del curso
1.8 Modelo de proceso de software

Se adopta un modelo Incremental basado en RUP (iterativo e incremental) con

ceremonias ágiles ligeras. RUP aporta fases (Inicio, Elaboración, Construcción, Transición),

documentación y trazabilidad; los incrementos permiten entregar valor de forma progresiva. Se

descartaron cascada (rígido), espiral (alto riesgo) y un enfoque puramente ágil (el dominio ya

está bastante definido).

1.9 Flujo de negocio (BPMN AS-IS y TO-BE)

Figura 1. Proceso manual de cotizacion (AS-IS).

Figura 2. Proceso de cotización con el sistema (TO-BE).
Ambos flujos son reproducibles en PlantUML (ver los diagramas de actividades de la

Semana 3).

Validación de la semana: El Gerente revisó la ficha del proyecto y confirmó el

problema, el alcance y los objetivos; se aprobó el encuadre y el modelo de proceso.
