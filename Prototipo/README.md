# Prototipo — Sistema de Gestión de Cotizaciones · InfleSusVentas (MVP 1)

Prototipo funcional del **MVP 1 (requisitos _Must_)** del sistema de cotizaciones de
**InfleSusVentas**, construido sobre una arquitectura **Modelo–Vista–Controlador (MVC)**.
Cubre de extremo a extremo el flujo **CU-01 a CU-08 + CU-11** especificado en la SRS del curso
_Ingeniería de Requisitos_ (UNMSM, Grupo 6).

La identidad visual usa los **colores de marca de inflesusventas.com**:
amarillo dorado `#FFCC00` / `#FFDB49`, carbón `#2E343C` / `#3E3E3E` y naranja de acento `#EC5F00`.

---

## Cómo ejecutar

Requiere **Node.js ≥ 22** (usa el módulo integrado `node:sqlite`, sin dependencias nativas).

```bash
cd Prototipo
npm install
npm start
# Abrir http://localhost:3000
```

**Usuarios de demostración**

| Usuario      | Contraseña      | Rol        | Acceso a Tarifas/Parámetros (CU-11) |
|--------------|-----------------|------------|-------------------------------------|
| `gerente`    | `gerente123`    | gerente    | Sí                                  |
| `trabajador` | `trabajador123` | trabajador | No                                  |

> La base de datos SQLite se crea y puebla automáticamente en `data/inflesusventas.db`
> en el primer arranque (esquema + tarifas semilla + usuarios demo).

---

## Arquitectura MVC

```
Prototipo/
├── server.js              # Punto de entrada: Express, sesión, montaje de rutas
├── routes/index.js        # Mapeo Ruta → Controlador
├── controllers/           # (C) Orquestan casos de uso
│   ├── authController.js         → CU-01
│   ├── cotizacionController.js   → CU-02, CU-03, CU-04, CU-05
│   ├── historialController.js    → CU-08 (dashboard, historial, clientes)
│   ├── exportController.js       → CU-06, CU-07
│   └── configController.js       → CU-11
├── models/                # (M) Entidades del dominio (§8.5 SRS) sobre node:sqlite
│   ├── Usuario.js  Cliente.js  Cotizacion.js  Tarifa.js  Configuracion.js
├── services/              # Lógica de dominio / adaptadores externos
│   ├── calculo.js         → CU-05: precio, descuento e IGV (RD-02, RD-08)
│   ├── medidas.js         → medidas por categoría (RD-03/04/06)
│   ├── rucService.js      → adaptador RUC con fallback manual (RNF-06)
│   ├── correoService.js   → adaptador de correo (RF-28)
│   ├── pdf.js             → exportación PDF (pdfkit)
│   └── word.js            → exportación Word (.doc)
├── views/                 # (V) Plantillas EJS
├── public/                # CSS de marca + JS de cliente (cálculo en vivo)
├── middleware/auth.js     # Control de acceso (RD-09, RNF-08)
└── config/db.js           # Esquema y datos semilla
```

**Capas**: la Vista (EJS) nunca accede a la BD; los Controladores coordinan Modelos y
Servicios; los Modelos encapsulan el acceso a datos; los Servicios contienen las reglas de
negocio (cálculo, medidas) y los adaptadores a servicios externos (RUC, correo).

---

## Cobertura de requisitos (MVP _Must_)

| Caso de uso | Requisitos | Implementación |
|-------------|------------|----------------|
| **CU-01** Autenticarse            | RF-46, RF-47                     | `authController`, scrypt, sesión, logout |
| **CU-02** Registrar/validar cliente | RF-01–06                       | `rucService` + `/api/ruc`, razón social editable |
| **CU-03** Crear cotización        | RF-08–16, RF-23–25               | ítems, medidas por categoría, descripción automática, N° desde 1001 |
| **CU-04** Aplicar descuento       | RF-44, RF-45                     | tope 10% aplicado en `calculo.js` |
| **CU-05** Calcular precio e IGV   | RF-17–21                         | IGV sobre subtotal con descuento (RD-02) |
| **CU-06** Exportar                | RF-26, RF-27                     | PDF (pdfkit) y Word (.doc) |
| **CU-07** Enviar                  | RF-28                            | `correoService`, estado → Enviada |
| **CU-08** Historial y clientes    | RF-30–33, RF-35, RF-36           | sidebar, historial con búsqueda, lista de clientes |
| **CU-11** Tarifas y parámetros    | RF-18, RF-22, RNF-11             | edición sin recompilar, solo Gerente |

**Reglas de dominio verificadas**: RD-01 (numeración única desde 1001), RD-02 (IGV sobre
subtotal con descuento), RD-03 (medidas obligatorias por categoría), RD-04 (descripción
automática; «Otros» en blanco), RD-06 (diámetro del globo derivado de la altura), RD-07
(tarifas por tipo+tamaño parametrizables), RD-08 (descuento ≤ 10%), RD-09 (uso autenticado).

**Criterio de aceptación de CU-05** (SRS): base 1000 + 10% de descuento + IGV 18% → **total 1062**.
El motor `calculo.js` reproduce exactamente esta fórmula (`(base − descuento) × 1.18`).

---

## Alcance del prototipo

Incluye los requisitos **Must (MVP 1)**. Los servicios externos reales (API SUNAT de RUC y
SMTP de correo) se resuelven con **adaptadores**: la validación de RUC usa un padrón de
demostración con _fallback_ manual (RNF-06) y el envío de correo se simula registrando el
estado. Los casos **Should** (CU-09 cotización rápida, CU-10 seguimiento) quedan fuera de esta
etapa, conforme al plan de incrementos de la SRS.
