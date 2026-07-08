#!/usr/bin/env bash
# ============================================================================
#  InfleSusVentas — Instalador automático (Linux / macOS)
#  Uso:   chmod +x instalar.sh && ./instalar.sh
# ============================================================================
set -euo pipefail

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # Sin color
BOLD='\033[1m'

echo ""
echo -e "${YELLOW}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${YELLOW}║   InfleSusVentas — Sistema de Gestión de Cotizaciones   ║${NC}"
echo -e "${YELLOW}║               Instalador automático                     ║${NC}"
echo -e "${YELLOW}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""

# Directorio del script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# ─── 1. Verificar Node.js ─────────────────────────────────────
echo -e " ${BOLD}[1/4]${NC} Verificando Node.js..."
if ! command -v node &> /dev/null; then
    echo -e " ${RED}ERROR: Node.js no está instalado o no está en el PATH.${NC}"
    echo ""
    echo " Instálalo desde: https://nodejs.org/"
    echo " Se requiere la versión 22 o superior (LTS)."
    echo ""
    echo " En Ubuntu/Debian:"
    echo "   curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -"
    echo "   sudo apt-get install -y nodejs"
    echo ""
    echo " En macOS (con Homebrew):"
    echo "   brew install node@22"
    exit 1
fi

NODE_VERSION=$(node -v | sed 's/v//' | cut -d. -f1)
if [ "$NODE_VERSION" -lt 22 ]; then
    echo -e " ${RED}ERROR: Se requiere Node.js v22 o superior.${NC}"
    echo " Tu versión actual: $(node -v)"
    echo " Descarga la última LTS desde: https://nodejs.org/"
    exit 1
fi

echo -e "       Node.js $(node -v) detectado ${GREEN}✓${NC}"
echo ""

# ─── 2. Instalar dependencias ─────────────────────────────────
echo -e " ${BOLD}[2/4]${NC} Instalando dependencias (npm install)..."
echo ""
npm install
echo ""
echo -e "       Dependencias instaladas ${GREEN}✓${NC}"
echo ""

# ─── 3. Crear .env si no existe ───────────────────────────────
echo -e " ${BOLD}[3/4]${NC} Configurando archivo de entorno..."
if [ ! -f ".env" ]; then
    if [ -f ".env.example" ]; then
        cp .env.example .env
        echo -e "       Archivo .env creado desde .env.example ${GREEN}✓${NC}"
        echo "       (Puedes editarlo después para configurar SMTP y RUC)"
    else
        echo "       No se encontró .env.example, se omite este paso."
    fi
else
    echo -e "       Archivo .env ya existe, no se modifica ${GREEN}✓${NC}"
fi
echo ""

# ─── 4. Arrancar el servidor ──────────────────────────────────
echo -e " ${BOLD}[4/4]${NC} Iniciando el servidor..."
echo ""
echo -e "${YELLOW}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${YELLOW}║${NC}  El servidor se está iniciando...                       ${YELLOW}║${NC}"
echo -e "${YELLOW}║${NC}                                                         ${YELLOW}║${NC}"
echo -e "${YELLOW}║${NC}  Abre tu navegador en:  ${GREEN}http://localhost:3000${NC}           ${YELLOW}║${NC}"
echo -e "${YELLOW}║${NC}                                                         ${YELLOW}║${NC}"
echo -e "${YELLOW}║${NC}  Usuarios de demostración:                              ${YELLOW}║${NC}"
echo -e "${YELLOW}║${NC}    • gerente    / gerente123    (acceso completo)        ${YELLOW}║${NC}"
echo -e "${YELLOW}║${NC}    • trabajador / trabajador123 (acceso limitado)       ${YELLOW}║${NC}"
echo -e "${YELLOW}║${NC}                                                         ${YELLOW}║${NC}"
echo -e "${YELLOW}║${NC}  Para detener el servidor presiona Ctrl+C               ${YELLOW}║${NC}"
echo -e "${YELLOW}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""

npm start
