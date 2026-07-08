# InfleSusVentas — Sistema de Gestión de Cotizaciones

Proyecto del curso **Ingeniería de Requisitos** (UNMSM · E.P. Ingeniería de Software · Ciclo 5, 2026-I)
para la empresa **InfleSusVentas**, dedicada a inflables publicitarios.

El objetivo es especificar (y prototipar) un **sistema web de gestión de cotizaciones** que reemplace
el proceso manual actual, incorporando cálculo automático de precios e **IGV**, validación de **RUC**,
numeración automática, exportación a **PDF/Word**, envío por correo y un flujo de **cotización rápida**.

---

## 🚀 Instalación rápida

### Requisitos
- **[Node.js ≥ 22](https://nodejs.org/)** (versión LTS)
- **Git** para clonar el repositorio

### Windows (un solo clic)

```cmd
git clone https://github.com/steveenmaque/InflesusventasPrototype.git
cd InflesusventasPrototype\Prototipo
instalar.bat
```

O simplemente **haz doble clic** en `Prototipo\instalar.bat` después de clonar.

### Linux / macOS

```bash
git clone https://github.com/steveenmaque/InflesusventasPrototype.git
cd InflesusventasPrototype/Prototipo
chmod +x instalar.sh
./instalar.sh
```

### Manual (cualquier OS)

```bash
git clone https://github.com/steveenmaque/InflesusventasPrototype.git
cd InflesusventasPrototype/Prototipo
npm install
npm start
# Abrir http://localhost:3000
```

**Usuarios de demostración:**
| Usuario      | Contraseña      | Rol        |
|--------------|-----------------|------------|
| `gerente`    | `gerente123`    | gerente    |
| `trabajador` | `trabajador123` | trabajador |

> 📌 No se necesita instalar SQLite ni bases de datos externas. Todo se genera automáticamente.

---

## Problema
La gestión de cotizaciones es **100 % manual** (WhatsApp / Yahoo Mail / formulario web → plantilla →
PDF), lo que genera lentitud, errores de cálculo de precio/IGV, falta de numeración y **sin historial
centralizado**.

## Objetivo (curso)
Elaborar la **Especificación de Requisitos de Software (SRS)** completa aplicando el proceso de
Ingeniería de Requisitos (elicitación → análisis → especificación → gestión → trazabilidad →
validación), bajo los estándares **IEEE 830 / ISO-IEC-IEEE 29148**.

---

## Estructura del repositorio

```
InflesusventasPrototype/
├── README.md
├── Prototipo/                → Código fuente del prototipo funcional (MVC)
│   ├── instalar.bat          → Instalador automático para Windows
│   ├── instalar.sh           → Instalador automático para Linux/macOS
│   ├── server.js             → Punto de entrada del servidor
│   ├── package.json          → Dependencias y scripts
│   ├── .env.example          → Variables de entorno (SMTP, RUC)
│   ├── config/               → Inicialización de BD
│   ├── controllers/          → Controladores MVC
│   ├── models/               → Modelos de datos
│   ├── services/             → Lógica de negocio
│   ├── views/                → Plantillas EJS
│   ├── public/               → CSS y JS del cliente
│   └── routes/               → Definición de rutas
└── Documentacion/
    ├── 00_Planificacion/     → Plan de trabajo, roles, metodología
    ├── 01_Desarrollo_Semanal/→ Bloques semanales (S1–S7, S9–S14)
    ├── 02_Entregable_Final/  → Documento SRS final
    ├── 03_Anexos/            → Glosario y anexos
    └── 04_Recursos/imagenes/ → Diagramas y capturas
```

**Punto de entrada de la documentación:** [`Documentacion/README.md`](Documentacion/README.md)

---

## Avance por semanas
El desarrollo sigue las 13 sesiones del curso (S1–S7, S9–S14). El estado de cada bloque se ve en el
[índice de documentación](Documentacion/README.md#-desarrollo-semanal).

## Equipo
4 integrantes con roles complementarios (Líder, Analista de Elicitación/Dominio, Arquitecto/Modelador,
QA/Trazabilidad). Ver [Plan de Trabajo](Documentacion/00_Planificacion/Plan_de_Trabajo_y_Metodologia.md).

## Estándares y método
IEEE 830 / ISO-29148 · Priorización **MoSCoW** · ISO/IEC 25010 (calidad) · RUP + Scrum ligero.

