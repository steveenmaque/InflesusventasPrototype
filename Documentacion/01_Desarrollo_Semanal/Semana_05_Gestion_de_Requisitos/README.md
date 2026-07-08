# 5. GESTIÓN DE REQUISITOS Y PRIORIZACIÓN

> **Semana 5** · Sistema de Gestión de Cotizaciones para InfleSusVentas
> Contenido extraído del documento del proyecto (fuente definitiva).

---

5.1 Objetivo de la semana

Administrar los requisitos (atributos, linea base) y priorizarlos con MoSCoW, Kano y

Valor/Costo para definir el MVP. El entregable de desarrollo del proyecto son los requisitos

Must.

5.2 Acta de reunion

Acta de reunión — Semana 5

Fecha / Hora                01/05/2026, 7:00 p.m.
Modalidad                   Virtual
Asistentes                  R1, R2, R3, R4
Objetivo del sprint         Priorizar los requisitos y definir el MVP.
Acuerdos y tareas           R1 define atributos y línea base.
R2 aplica MoSCoW y Kano.
R4 calcula Valor/Costo.
El equipo consolida el análisis integrado y el roadmap de MVP.
Impedimentos                Ninguno.
Proxima reunion             08/05/2026

5.3 Atributos de gestion

ID                 Fuente                       Tipo          Prioridad    Estado        Version
RF-01      Entrevista 2 / Escenario 1          Funcional          Must      Aprobado         1.0
RF-44      Entrevista 1 / Escenario 2          Funcional          Must      Aprobado         1.0
RF-48      Escenario 2                         Funcional         Should     Propuesto        0.1
RNF-04 Analisis tecnico                       No funcional         Must      Aprobado         1.0
RD-08      Entrevista 1                         Dominio           Must      Aprobado         1.0

Línea base: se congela la línea base 1.0 al aprobar los RF y RNF; los cambios posteriores

se gestionan mediante RFC/CCB (Semana 12).

5.4 MoSCoW

Nivel   Funcionalidades
Must    Autenticacion (RF-46,47); RUC (RF-01-06); catalogo+medidas (RF-08-16);
descuento (RF-44,45); precio+IGV (RF-17-21); numeracion+fecha (RF-23-25);
exportar (RF-26,27); enviar (RF-28); sidebar+historial (RF-30-33,35,36)
Should Cotizacion rapida (RF-39-42); seguimiento (RF-48-50); IGV configurable (RF-22);
estado de envio (RF-29); filtros (RF-34); reutilizar (RF-07); reabrir (RF-37)
Could    Duplicar (RF-38); convertir rapida->estandar (RF-43); bitácora (RNF-10)
Won't    Captura automática de canales; facturacion; inventario; pagos; multi-rol

El entregable de desarrollo (MVP 1) corresponde a todos los requisitos Must,

cubiertos por los casos de uso CU-01 a CU-08.

5.5 Analisis Kano

Funcionalidad                           Tipo Kano      Explicacion
Autenticacion del gerente                 Básico       Esperado: sin acceso seguro no se opera
Validar RUC y autocompletar               Básico       Se espera;       su   ausencia   genera
insatisfacción
Cálculo de precio e IGV                   Básico       Fundamental para cotizar
Numeración y fecha automáticas            Básico       Esperado
Guardar en historial                      Básico       Esperado
Descuento (máx 10% por cantidad)        Desempeño      Ayuda a cerrar ventas; a mejor manejo,
más conversion
Exportar a PDF/Word                     Desempeño      A más formatos        y    rapidez, mas
satisfaccion
Enviar por correo                       Desempeño      Mejora la experiencia frente al envio
manual
Buscar/filtrar historial                Desempeño      Cuanto mejor, más útil
Cotizacion rapida                     Encantamiento Extra que agiliza casos urgentes

Seguimiento              (estados      y Encantamiento Recupera ventas que se enfriaran
recordatorios)
Duplicar/convertir cotización            Encantamiento Comodidad no esperada

5.6 Valor vs Costo

Funcionalidad                                      Valor              Costo           Prioridad
Cálculo de precio + IGV                             Alto              Medio              1
Validacion de RUC + autocompletar                   Alto              Medio              1
Catalogo + logica de medidas                        Alto              Medio              1
Numeracion + fecha                                  Alto              Bajo               1
Exportar + enviar                                   Alto              Medio              1
Sidebar + historial                                 Alto              Bajo               1
Autenticacion                                       Alto              Bajo               1
Descuento (<=10%)                                   Alto              Bajo               1
Cotizacion rapida                                Medio-Alto           Medio              2
Seguimiento                                         Alto              Medio              2
Duplicar / convertir; bitácora                     Medio              Medio              3

5.7 Análisis integrado y roadmap de MVP

Funcionalidad (RF)                   MoSCoW       Kano        Valor           Costo      MVP
Autenticacion (RF-46,47)              Must       Básico       Alto            Bajo       MVP 1
Validar RUC (RF-01-05)                Must       Básico       Alto            Medio      MVP 1
Clientes (RF-06)                      Must       Básico       Alto            Bajo       MVP 1
Catalogo         +        medidas     Must       Básico       Alto            Medio      MVP 1
(RF-08-16)
Descuento (RF-44,45)                  Must     Desempeño      Alto            Bajo       MVP 1
Precio + IGV (RF-17-21)               Must       Básico       Alto            Medio      MVP 1
Numeracion           +       fecha    Must       Básico       Alto            Bajo       MVP 1
(RF-23-25)
Exportar (RF-26,27)                   Must     Desempeño      Alto            Medio      MVP 1

Enviar (RF-28)                     Must      Desempeño     Alto       Medio       MVP 1
Sidebar    +           historial   Must        Básico      Alto       Bajo        MVP 1
(RF-30-36)
Cotizacion               rapida    Should    Encantamie Medio-Alto    Medio       MVP 2
(RF-39-42)                                      nto
Seguimiento (RF-48-50)             Should    Encantamie    Alto       Medio       MVP 2
nto
Duplicar/convertir                 Could     Encantamie   Medio       Medio       MVP 3
(RF-38,43); bitacora                            nto

- MVP 1 (entregable): acceso autenticado y cotizacion estándar de extremo a extremo (CU-01

a CU-08).

- MVP 2: cotización rápida y seguimiento.

- MVP 3: duplicar/convertir y bitácora.

Validación de la semana: El equipo y el Gerente aprobaron el MVP 1 (requisitos Must)

como entregable de desarrollo.
