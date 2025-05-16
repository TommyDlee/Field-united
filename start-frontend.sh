#!/bin/bash

echo "======================================"
echo "   FIELD United Frontend Launcher    "
echo "======================================"

# Aller au répertoire du projet
cd "$(dirname "$0")"

echo "Démarrage du serveur Frontend..."
echo ""
echo "Pour accéder à la DApp, assurez-vous que le serveur DApp est démarré."
echo "Si ce n'est pas le cas, ouvrez un autre terminal et exécutez:"
echo "cd $(pwd) && ./start-dapp.sh"
echo ""
echo "Logs du serveur Frontend:"
echo "------------------------------------"

# Démarrer le serveur Frontend uniquement
cd frontend && npm run dev 