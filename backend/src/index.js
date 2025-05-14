const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import des configurations
const connectDB = require('./config/db');

// Chargement des variables d'environnement
dotenv.config();

// Connexion à la base de données
connectDB();

// Création de l'application Express
const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Définition du port
const PORT = process.env.PORT || 5000;

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/clubs', require('./routes/clubRoutes'));
app.use('/api/nfts', require('./routes/nftRoutes'));
app.use('/api/staking', require('./routes/stakingRoutes'));
app.use('/api/governance', require('./routes/governanceRoutes'));

// Route de santé pour les vérifications
app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'FIELD API is running',
    timestamp: new Date().toISOString(),
  });
});

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: err.message || 'Something went wrong!',
  });
});

// Gestion des routes non trouvées
app.use('*', (req, res) => {
  res.status(404).json({ 
    status: 'error',
    message: 'Route not found' 
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Pour les tests
module.exports = app; 