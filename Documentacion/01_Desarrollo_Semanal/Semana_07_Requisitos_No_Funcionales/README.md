# Semana 7 — Requisitos No Funcionales (RNF)
## Sistema de Gestión de Cotizaciones — "InfleSusVentas"

> **Curso:** Ingeniería de Requisitos · **Docente:** Prof. Ciro Rodriguez · UNMSM · Ciclo 5, 2026-I
> **Aporta al entregable:** Cap. 5.2 (catálogo RNF medibles) · **Rúbrica:** 1, 2
> **Estado:**  Con contenido base (derivado del brief del negocio)
> **Navegación:** [ Semana 6](../Semana_06_Requisitos_Funcionales/README.md) · [Índice](../../README.md) · [Semana 9 ](../Semana_09_Requisitos_de_Dominio/README.md)

---

## Objetivo del bloque
Definir los Requisitos No Funcionales **medibles** por categoría.

>  **Regla del profesor:** nada de "rápido/seguro/amigable". Siempre **métrica + valor + condición**.
> Los valores marcados `[objetivo]` deben afinarse con el Gerente.

---

## 7.1 Usabilidad
| ID | Prio. | Requisito (medible) | Verificación |
|---|:--:|---|---|
| RNF-01 | M | Un usuario nuevo debe crear una cotización completa en **≤ [objetivo: 5] min** tras una inducción de 15 min. | Test de usuario |
| RNF-02 | S | La interfaz debe ser **responsive** en pantallas de **≥ 360 px** (móvil) y escritorio. | Prueba en dispositivos |
| RNF-03 | S | Los mensajes de validación (RUC inválido, campos faltantes) deben mostrarse en **español** y junto al campo. | Revisión de UI |

## 7.2 Rendimiento / Eficiencia
| ID | Prio. | Requisito (medible) | Verificación |
|---|:--:|---|---|
| RNF-04 | M | La validación de RUC y autocompletado debe responder en **< 5 s** para el **95 %** de las consultas. | Prueba de tiempos |
| RNF-05 | S | La generación/exportación de PDF o Word debe completarse en **< 10 s**. | Prueba de tiempos |

## 7.3 Confiabilidad / Disponibilidad
| ID | Prio. | Requisito (medible) | Verificación |
|---|:--:|---|---|
| RNF-06 | M | Ante caída del servicio de RUC, el sistema debe permitir **continuar manualmente** (100 % de los casos) sin bloquear la cotización. | Prueba de fallo simulado |
| RNF-07 | S | La numeración correlativa **no debe perderse ni duplicarse** en el **100 %** de los casos, incluso ante fallo. | Prueba de concurrencia |

## 7.4 Seguridad
| ID | Prio. | Requisito (medible) | Verificación |
|---|:--:|---|---|
| RNF-08 | M | El acceso debe requerir **autenticación** (usuario + contraseña); **0** accesos sin credencial. | Prueba de acceso |
| RNF-09 | S | Los datos de clientes/cotizaciones deben respaldarse con periodicidad **≤ 24 h**. | Revisión de backups |
| RNF-10 | C | Registrar **bitácora** de acciones sensibles (envíos, ediciones) con fecha y usuario. | Revisión de logs |

## 7.5 Mantenibilidad / Portabilidad
| ID | Prio. | Requisito (medible) | Verificación |
|---|:--:|---|---|
| RNF-11 | M | **Tarifas** y **% de IGV** deben modificarse por configuración, **sin recompilar** (tiempo de cambio ≤ 5 min). | Prueba de configuración |
| RNF-12 | S | El sistema debe operar vía navegador web estándar (**Chrome/Edge/Firefox** últimas 2 versiones) sin instalación local. | Prueba de compatibilidad |

## 7.6 Compatibilidad / Integración
| ID | Prio. | Requisito (medible) | Verificación |
|---|:--:|---|---|
| RNF-13 | M | Integración con **servicio externo de validación de RUC** (API). | Prueba de integración |
| RNF-14 | M | Integración con **servicio de envío de correo** (SMTP/API). | Prueba de integración |

---

## Checklist de cierre
- [ ] Todo RNF con métrica + valor + condición + método de verificación
- [ ] Valores `[objetivo]` confirmados con el Gerente
- [ ] Sin adjetivos vagos sin número

## Referencias
Guía General de IR §12. Los RNF de calidad se formalizan en ISO 25010 en la [Semana 11](../Semana_11_Requisitos_de_Calidad/README.md).
