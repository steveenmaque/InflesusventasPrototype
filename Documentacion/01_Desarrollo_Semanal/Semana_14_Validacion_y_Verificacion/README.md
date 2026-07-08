# 13. VALIDACIÓN Y VERIFICACIÓN

> **Semana 14** · Sistema de Gestión de Cotizaciones para InfleSusVentas
> Contenido extraído del documento del proyecto (fuente definitiva).

---

13.1 Objetivo de la semana

Demostrar con evidencia que los requisitos son correctos y completos (validación) y

están bien construidos (verificación), mediante walkthrough, prototipos y casos de aceptación.

13.2 Acta de reunion

Acta de reunión — Semana 14

Fecha / Hora              03/07/2026, 7:00 p.m.
Modalidad                 Presencial en la empresa
Asistentes                R1, R2, R3, R4; Gerente
Objetivo del sprint       Validar los requisitos con el Gerente (walkthrough y prototipos).
Acuerdos y tareas         R4 conduce el walkthrough.
R3 presenta los prototipos.
El Gerente ejecuta los casos de aceptación.
Impedimentos              Ninguno.
Proxima reunion           Cierre del proyecto

13.3 Walkthrough (checklist por requisito)

Criterio                       RF-01           RF-17      RF-28         RF-44       RNF-04
Claro y sin ambigüedad            Si            Si           Si           Si           Si
Completo                          Si            Si           Si           Si           Si
Verificable/medible               Si            Si           Si           Si           Si
Consistente                       Si            Si           Si           Si           Si
Factible                          Si            Si           Si           Si           Si

13.4 Casos de aceptación (UAT en Gherkin)

Escenario: Validacion de RUC valido
Dado que el usuario ingresa un RUC válido
Cuando el sistema consulta el servicio de RUC

Entonces se autocompleta la razon social y el campo queda editable

Escenario: Calculo de IGV con descuento
Dado una cotizacion con precio base S/ 1000 y 10% de descuento
Cuando el sistema calcula el subtotal y el IGV del 18%
Entonces el subtotal es S/ 900, el IGV es S/ 162 y el total es S/ 1062

Escenario: Tope de descuento
Dado que el usuario intenta aplicar un 15% de descuento
Cuando el sistema valida el tope
Entonces el descuento se limita al 10%

Escenario: Seguimiento sin respuesta
Dado una cotizacion enviada sin respuesta en el plazo
Cuando vence el plazo de recordatorio
Entonces el sistema la marca En seguimiento y genera un recordatorio

Escenario: Cotizacion rapida sin RUC
Dado que el usuario elige Cotizacion Rapida
Cuando registra los items
Entonces la cotizacion se guarda por separado y la fecha registra solo mes y
año

13.5 Analisis de escenarios de excepcion

Escenario                                         Respuesta esperada
Servicio de RUC caído                             Continuar manualmente sin bloquear (RNF-06)
Correo de envio invalido                          Mensaje de error; no marcar como enviada
Item 'Otros' sin descripcion                      Advertir antes de emitir
Descuento mayor al 10%                            Limitar al 10% (RD-08)
Numero correlativo duplicado                      Impedir duplicidad (RNF-07)

13.6 Prototipos y validacion final

Se validaron con el Gerente wireframes en blanco y negro de las pantallas principales:

inicio de sesion, barra lateral, nueva cotizacion (categoria, medidas y descuento), desglose de

precio e IGV, historial y panel de seguimiento. El Gerente ejecuto los casos de aceptación sobre

el prototipo y confirmo que la solución responde a sus necesidades.

Validación de la semana: El Gerente aprobo la especificación completa; los requisitos

Must quedaron validados como entregable de desarrollo (MVP 1).
