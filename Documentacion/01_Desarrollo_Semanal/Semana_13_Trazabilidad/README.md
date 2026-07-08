# 12. TRAZABILIDAD DE REQUISITOS

> **Semana 13** · Sistema de Gestión de Cotizaciones para InfleSusVentas
> Contenido extraído del documento del proyecto (fuente definitiva).

---

12.1 Objetivo de la semana

Construir la matriz de trazabilidad bidireccional y analizar la cobertura.

12.2 Acta de reunión

Acta de reunión — Semana 13

Fecha / Hora            27/06/2026, 7:00 p.m.
Modalidad               Virtual
Asistentes              R1, R2, R3, R4
Objetivo del sprint     Construir la matriz de trazabilidad.
Acuerdos y tareas       R4 arma la matriz requisito-CU-componente-prueba.
R1 analiza cobertura y sobrediseño.
Impedimentos            Ninguno.
Proxima reunion         03/07/2026

12.3 Necesidad -> Requisito

Necesidad                                         Requisitos
RN-01 Agilizar generación                         RF-08 a RF-25
RN-02 Precio, descuento e IGV                     RF-17 a RF-22, RF-44, RF-45
RN-03 Numerar y fechar                            RF-23 a RF-25
RN-04 Historial unico                             RF-06, RF-30 a RF-37
RN-05 Validar RUC                                 RF-01 a RF-05
RN-06 Exportar y enviar                           RF-26 a RF-29
RN-07 Cotizacion rapida                           RF-39 a RF-43
RN-08 Seguimiento                                 RF-48 a RF-50

12.4 Matriz de trazabilidad (Requisito - CU - Componente - Prueba)

Requisito      Caso de uso        Componente                 Prueba             Estado

RF-01   CU-02   Gestion de Clientes       CP-01   Por verificar
RF-02   CU-02   Gestión de Clientes       CP-02   Por verificar
RF-03   CU-02   Gestión de Clientes       CP-03   Por verificar
RF-04   CU-02   Gestión de Clientes       CP-04   Por verificar
RF-05   CU-02   Gestión de Clientes       CP-05   Por verificar
RF-06   CU-08   Historial/UI              CP-06   Por verificar
RF-07   CU-02   Gestión de Clientes       CP-07   Por verificar
RF-08   CU-03   Gestión de Cotizaciones   CP-08   Por verificar
RF-09   CU-03   Gestión de Cotizaciones   CP-09   Por verificar
RF-10   CU-03   Gestión de Cotizaciones   CP-10   Por verificar
RF-11   CU-03   Gestión de Cotizaciones   CP-11   Por verificar
RF-12   CU-03   Gestión de Cotizaciones   CP-12   Por verificar
RF-13   CU-03   Gestión de Cotizaciones   CP-13   Por verificar
RF-14   CU-03   Gestión de Cotizaciones   CP-14   Por verificar
RF-15   CU-03   Gestión de Cotizaciones   CP-15   Por verificar
RF-16   CU-03   Gestión de Cotizaciones   CP-16   Por verificar
RF-17   CU-05   Servicio de Cálculo       CP-17   Por verificar
RF-18   CU-05   Servicio de Calculo       CP-18   Por verificar
RF-19   CU-05   Servicio de Calculo       CP-19   Por verificar
RF-20   CU-05   Servicio de Calculo       CP-20   Por verificar
RF-21   CU-05   Servicio de Calculo       CP-21   Por verificar
RF-22   CU-05   Servicio de Calculo       CP-22   Por verificar
RF-23   CU-03   Gestión de Cotizaciones   CP-23   Por verificar
RF-24   CU-03   Gestión de Cotizaciones   CP-24   Por verificar
RF-25   CU-03   Gestión de Cotizaciones   CP-25   Por verificar
RF-26   CU-06   Exportador                CP-26   Por verificar
RF-27   CU-06   Exportador                CP-27   Por verificar
RF-28   CU-07   Adaptador Correo          CP-28   Por verificar
RF-29   CU-07   Adaptador Correo          CP-29   Por verificar
RF-30   CU-08   Historial/UI              CP-30   Por verificar
RF-31   CU-08   Historial/UI              CP-31   Por verificar

RF-32            CU-08       Historial/UI                 CP-32          Por verificar
RF-33            CU-08       Historial/UI                 CP-33          Por verificar
RF-34            CU-08       Historial/UI                 CP-34          Por verificar
RF-35            CU-08       Historial/UI                 CP-35          Por verificar
RF-36            CU-08       Historial/UI                 CP-36          Por verificar
RF-37            CU-08       Historial/UI                 CP-37          Por verificar
RF-38            CU-08       Historial/UI                 CP-38          Por verificar
RF-39            CU-09       Gestión de Cotizaciones      CP-39          Por verificar
RF-40            CU-09       Gestión de Cotizaciones      CP-40          Por verificar
RF-41            CU-09       Gestión de Cotizaciones      CP-41          Por verificar
RF-42            CU-09       Gestión de Cotizaciones      CP-42          Por verificar
RF-43            CU-09       Gestión de Cotizaciones      CP-43          Por verificar
RF-44            CU-04       Servicio de Cálculo          CP-44          Por verificar
RF-45            CU-04       Servicio de Cálculo          CP-45          Por verificar
RF-46            CU-01       Autenticacion                CP-46          Por verificar
RF-47            CU-01       Autenticacion                CP-47          Por verificar
RF-48            CU-10       Servicio de Seguimiento      CP-48          Por verificar
RF-49            CU-10       Servicio de Seguimiento      CP-49          Por verificar
RF-50            CU-10       Servicio de Seguimiento      CP-50          Por verificar

12.5 Analisis de cobertura

- Cobertura directa: cada RF se vincula a un caso de uso, un componente y un caso de prueba.

- Cobertura inversa: cada componente y prueba se justifica en al menos un requisito (sin

sobrediseño).

- Los RNF se trazan a las características ISO 25010 (Semana 11).

Validación de la semana: La matriz mostró cobertura del 100% de los requisitos Must;

no se detectó sobrediseño.
