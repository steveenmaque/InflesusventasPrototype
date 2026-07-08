# 7. REQUISITOS NO FUNCIONALES

> **Semana 7** · Sistema de Gestión de Cotizaciones para InfleSusVentas
> Contenido extraído del documento del proyecto (fuente definitiva).

---

7.1 Objetivo de la semana

Definir los requisitos no funcionales de forma medible (métrica + valor + condición).

7.2 Acta de reunion

Acta de reunión — Semana 7

Fecha / Hora             15/05/2026, 7:00 p.m.
Modalidad                Virtual
Asistentes               R1, R2, R3, R4
Objetivo del sprint      Redactar el catálogo de RNF medibles.
Acuerdos y tareas        R4 redacta los RNF con métrica y verificación.
R3 valida factibilidad técnica.
Impedimentos             Ninguno.
Proxima reunion          22/05/2026

ID          Categoria      Requisito medible                           Verificacion
RNF-01        Usabilidad     Crear una cotizacion completa en <= 5 Test de usuario
min tras inducción
RNF-02        Usabilidad     Interfaz responsive en pantallas >= 360 px Prueba en dispositivos
RNF-03        Usabilidad     Mensajes de validación en español junto Revision de UI
al campo
RNF-04       Rendimiento     Validación de RUC < 5 s en el 95% de Prueba de tiempos
consultas
RNF-05       Rendimiento     Exportación PDF/Word < 10 s                 Prueba de tiempos
RNF-06        Fiabilidad     Continuar manualmente si el servicio de Prueba de fallo
RUC cae (100%)
RNF-07        Fiabilidad     Numeración sin pérdida ni duplicidad Prueba                       de
(100%)                               concurrencia
RNF-08        Seguridad      Autenticación obligatoria; 0 accesos sin Prueba de acceso
credencial

RNF-09       Seguridad     Respaldo de datos con periodicidad <= 24 Revision de backups
h
RNF-10       Seguridad     Bitacora de acciones sensibles con fecha y Revision de logs
usuario
RNF-11    Mantenibilidad Tarifas e IGV configurables             sin Prueba               de
recompilar (<= 5 min)                       configuración
RNF-12      Portabilidad   Operar en Chrome/Edge/Firefox ultimas 2 Prueba                 de
versiones                               compatibilidad
RNF-13    Compatibilidad Integración con el servicio de RUC (API) Prueba de integración
RNF-14    Compatibilidad Integración con el servicio de correo Prueba de integración
(SMTP/API)

Validación de la semana: Los valores objetivo (por ejemplo, < 5 s en la validación de

RUC) se acordaron con el Gerente.
