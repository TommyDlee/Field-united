#!/bin/bash

echo "Installing root dependencies..."
npm install

echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo "Installing dapp dependencies..."
cd dapp
npm install
cd ..

echo "Setup complete! You can now run 'npm start' to start both applications." 