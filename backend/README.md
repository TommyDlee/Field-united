# FIELD Backend

API backend pour la plateforme Web3 d'investissement dans le football FIELD.

## Structure du projet

```
backend/
├── src/
│   ├── config/         # Configuration (DB, environnement)
│   ├── controllers/    # Contrôleurs pour la logique métier
│   ├── models/         # Modèles MongoDB/Mongoose
│   ├── routes/         # Routes API
│   ├── middleware/     # Middleware personnalisé
│   ├── utils/          # Fonctions utilitaires
│   └── index.js        # Point d'entrée du serveur
├── .env                # Variables d'environnement (à créer)
├── .env.example        # Exemple de variables d'environnement
├── package.json        # Dépendances
└── README.md           # Documentation
```

## Modèles de données

- **User** - Gestion des utilisateurs et authentification
- **Club** - Données des clubs partenaires
- **NFT** - NFTs President, Coach et Player
- **Transaction** - Historique des transactions et staking
- **Vote** - Système de gouvernance et votes

## API Endpoints

### Authentification
- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion
- `GET /api/auth/me` - Infos utilisateur actuel
- `PUT /api/auth/profile` - Mise à jour du profil
- `POST /api/auth/connect-wallet` - Connexion d'un wallet

### Clubs
- `GET /api/clubs` - Liste des clubs
- `GET /api/clubs/:id` - Détails d'un club
- `GET /api/clubs/:id/stats` - Statistiques d'un club
- `GET /api/clubs/:id/votes` - Votes actifs d'un club

### NFTs
- `GET /api/nfts` - Liste des NFTs disponibles
- `GET /api/nfts/type/:type` - Liste des NFTs par type
- `GET /api/nfts/owned` - NFTs possédés par l'utilisateur
- `GET /api/nfts/:id` - Détails d'un NFT
- `POST /api/nfts/mint` - Minter un nouveau NFT
- `POST /api/nfts/transfer` - Transférer un NFT

### Staking
- `GET /api/staking/info` - Informations sur le staking
- `POST /api/staking/stake` - Déposer des tokens
- `POST /api/staking/unstake` - Retirer des tokens
- `GET /api/staking/rewards` - Voir les récompenses disponibles
- `POST /api/staking/claim` - Réclamer les récompenses
- `GET /api/staking/history` - Historique de staking

### Gouvernance
- `GET /api/governance/votes` - Liste des votes actifs
- `GET /api/governance/votes/:id` - Détails d'un vote
- `POST /api/governance/votes` - Créer un nouveau vote
- `POST /api/governance/votes/:id/submit` - Soumettre un vote
- `GET /api/governance/votes/:id/results` - Résultats d'un vote
- `GET /api/governance/user/votes` - Votes de l'utilisateur

## Installation

1. Clonez ce dépôt
2. Installez les dépendances : `npm install`
3. Copiez `.env.example` vers `.env` et configurez les variables d'environnement
4. Lancez le serveur de développement : `npm run dev`

## Configuration requise

- Node.js v14+
- MongoDB
- Un client frontend (comme le projet FIELD frontend) 