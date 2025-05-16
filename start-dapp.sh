#!/bin/bash

echo "======================================"
echo "       FIELD United DApp Launcher     "
echo "======================================"

# Aller au répertoire du projet
cd "$(dirname "$0")"

echo "Démarrage du serveur DApp..."
echo ""
echo "Pour démarrer ensuite le frontend, ouvrez un autre terminal et exécutez:"
echo "cd $(pwd)/frontend && npm run dev"
echo ""
echo "Logs du serveur DApp:"
echo "------------------------------------"

# Démarrer le serveur DApp uniquement
cd dapp && npm run dev 