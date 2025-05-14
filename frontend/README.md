# FIELD - Plateforme Web3 d'investissement dans le football

FIELD est la première plateforme qui permet d'investir directement dans le football via la technologie Web3, offrant aux fans une opportunité unique de détenir, d'influencer et de gagner des revenus à partir de véritables clubs de football.

## 🚀 Fonctionnalités

- **Staking crypto** - Stakez vos cryptomonnaies et gagnez des rendements élevés
- **Farming de tokens** - Gagnez des tokens $FIELD grâce à des taux APR compétitifs
- **NFTs utilitaires** - Système à trois niveaux (President, Coach, Player) donnant accès à la gouvernance
- **Gouvernance de vrais clubs** - Votez et influencez les décisions réelles des clubs
- **Redistribution** - Recevez une partie des frais de transaction selon votre niveau de staking

## 🎨 Design

Le design suit une esthétique néo-futuriste avec :
- Thème sombre avec accents verts néon
- Style "glassmorphism" pour les cartes et éléments d'interface
- Interface utilisateur moderne et immersive

## 🔧 Technologies utilisées

### Frontend
- React avec Vite
- TailwindCSS pour le styling
- Structure de composants modulaire

### Backend (développé séparément)
- Node.js avec Express
- MongoDB pour la base de données
- API RESTful

## 🏗️ Structure du projet Frontend

```
frontend/
├── public/             # Ressources statiques
│   └── videos/         # Vidéos d'arrière-plan
├── src/                # Code source
│   ├── assets/         # Logos et images
│   ├── components/     # Composants React
│   └── index.css       # Styles globaux et utilitaires TailwindCSS
├── index.html          # Point d'entrée HTML
├── vite.config.js      # Configuration de Vite
└── tailwind.config.js  # Configuration de TailwindCSS
```

## 📋 Composants principaux

- **Navbar** - Barre de navigation avec logo et menu
- **Hero** - Section principale avec slogan "Invest in Football. Earn from the Game."
- **WhatIsField** - Présentation du concept avec points clés
- **Tokenomics** - Détails sur la tokenomics et le farming
- **NFTs** - Système de NFT à trois niveaux (President, Coach, Player)
- **ClubShowcase** - Présentation des clubs partenaires
- **JoinMovement** - Formulaire d'inscription et avantages
- **Footer** - Liens, mentions légales et informations techniques

## 🚀 Pour démarrer

1. Clonez ce dépôt
2. Installez les dépendances : `npm install`
3. Lancez le serveur de développement : `npm run dev`
4. Construisez pour la production : `npm run build`

## 📝 À faire

- Ajouter la vidéo d'arrière-plan dans `/public/videos/hero-bg.mp4`
- Intégrer avec le backend (développé séparément)
- Ajouter les fonctionnalités de connexion wallet
- Implémenter les appels API réels pour les données des clubs et NFTs 