# 10. REQUISITOS DE CALIDAD (ISO/IEC 25010)

> **Semana 11** · Sistema de Gestión de Cotizaciones para InfleSusVentas
> Contenido extraído del documento del proyecto (fuente definitiva).

---

10.1 Objetivo de la semana

Formalizar los RNF como requisitos de calidad medibles según ISO/IEC 25010.

10.2 Acta de reunion

Acta de reunión — Semana 11

Fecha / Hora             13/06/2026, 7:00 p.m.
Modalidad                Virtual
Asistentes               R1, R2, R3, R4
Objetivo del sprint      Elaborar las fichas de calidad ISO 25010.
Acuerdos y tareas        R3 mapea RNF a caracteristicas.
R4 redacta las fichas y métricas.
Impedimentos             Ninguno.
Proxima reunion          20/06/2026

10.3 Mapeo RNF - característica

RNF                                              Caracteristica ISO 25010
RNF-01, RNF-02, RNF-03                           Usabilidad
RNF-04, RNF-05                                   Eficiencia de desempeño
RNF-06, RNF-07                                   Fiabilidad
RNF-08, RNF-09, RNF-10                           Seguridad
RNF-11                                           Mantenibilidad
RNF-12                                           Portabilidad
RNF-13, RNF-14                                   Compatibilidad

10.4 Fichas de calidad

Caracteristica            Eficiencia del desempeño (comportamiento temporal)
Necesidad                 Cotizar sin esperas al validar el RUC

Requisito                 Validar el RUC y autocompletar
Metrica                   Tiempo de respuesta
Valor objetivo            < 5 s en el 95% de las consultas
Verificacion              Prueba de tiempos con 30 RUC de muestra
Prioridad                 Must

Caracteristica            Seguridad (confidencialidad, autenticidad)
Necesidad                 Que solo el personal autorizado use el sistema
Requisito                 Autenticación obligatoria
Metrica                   Accesos no autorizados
Valor objetivo            0 accesos sin credencial válida
Verificacion              Prueba de acceso e intento sin credencial
Prioridad                 Must

Validación de la semana: Las fichas se revisaron contra los valores objetivo definidos en

la Semana 7.
