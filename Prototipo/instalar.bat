@echo off
chcp 65001 >nul 2>&1
title InfleSusVentas — Instalador
color 0E

echo.
echo  ╔══════════════════════════════════════════════════════════╗
echo  ║   InfleSusVentas — Sistema de Gestión de Cotizaciones   ║
echo  ║               Instalador automático                     ║
echo  ╚══════════════════════════════════════════════════════════╝
echo.

:: ─── 1. Verificar Node.js ─────────────────────────────────────
echo  [1/4] Verificando Node.js...
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    color 0C
    echo.
    echo  ╔═══════════════════════════════════════════════════════════╗
    echo  ║  ERROR: Node.js no está instalado o no está en el PATH.  ║
    echo  ║                                                          ║
    echo  ║  Descárgalo desde: https://nodejs.org/                   ║
    echo  ║  Se requiere la versión 22 o superior (LTS).             ║
    echo  ╚═══════════════════════════════════════════════════════════╝
    echo.
    pause
    exit /b 1
)

:: Obtener versión mayor de Node.js
for /f "tokens=1 delims=." %%a in ('node -v') do set NODE_VER=%%a
set NODE_VER=%NODE_VER:v=%

if %NODE_VER% LSS 22 (
    color 0C
    echo.
    echo  ╔═══════════════════════════════════════════════════════════╗
    echo  ║  ERROR: Se requiere Node.js v22 o superior.              ║
    echo  ║  Tu versión actual es:
    node -v
    echo  ║                                                          ║
    echo  ║  Descarga la última LTS desde: https://nodejs.org/       ║
    echo  ╚═══════════════════════════════════════════════════════════╝
    echo.
    pause
    exit /b 1
)

for /f "tokens=*" %%v in ('node -v') do echo         Node.js %%v detectado ✓
echo.

:: ─── 2. Instalar dependencias ─────────────────────────────────
echo  [2/4] Instalando dependencias (npm install)...
echo.
cd /d "%~dp0"
call npm install
if %ERRORLEVEL% NEQ 0 (
    color 0C
    echo.
    echo  ERROR: Falló la instalación de dependencias.
    echo  Verifica tu conexión a internet e inténtalo de nuevo.
    echo.
    pause
    exit /b 1
)
echo.
echo         Dependencias instaladas ✓
echo.

:: ─── 3. Crear .env si no existe ───────────────────────────────
echo  [3/4] Configurando archivo de entorno...
if not exist ".env" (
    if exist ".env.example" (
        copy ".env.example" ".env" >nul
        echo         Archivo .env creado desde .env.example ✓
        echo         (Puedes editarlo después para configurar SMTP y RUC)
    ) else (
        echo         No se encontró .env.example, se omite este paso.
    )
) else (
    echo         Archivo .env ya existe, no se modifica ✓
)
echo.

:: ─── 4. Arrancar el servidor ──────────────────────────────────
echo  [4/4] Iniciando el servidor...
echo.
echo  ╔══════════════════════════════════════════════════════════╗
echo  ║  El servidor se está iniciando...                       ║
echo  ║                                                         ║
echo  ║  Abre tu navegador en:  http://localhost:3000           ║
echo  ║                                                         ║
echo  ║  Usuarios de demostración:                              ║
echo  ║    • gerente    / gerente123    (acceso completo)        ║
echo  ║    • trabajador / trabajador123 (acceso limitado)       ║
echo  ║                                                         ║
echo  ║  Para detener el servidor presiona Ctrl+C               ║
echo  ╚══════════════════════════════════════════════════════════╝
echo.

call npm start
