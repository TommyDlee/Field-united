# Configuration du Backend FIELD

Ce document décrit comment configurer et exécuter le backend de la plateforme FIELD, qui est développé séparément du frontend.

## Structure recommandée

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
├── .env                # Variables d'environnement
├── package.json        # Dépendances
└── README.md           # Documentation
```

## Modèles suggérés

Le backend devrait inclure les modèles suivants :

1. **User** - Informations utilisateur et authentification
2. **Club** - Données sur les clubs partenaires
3. **NFT** - Définitions des NFTs (President, Coach, Player)
4. **Transaction** - Historique des transactions et staking
5. **Vote** - Système de gouvernance et votes

## Configuration

1. Cloner le dépôt backend (séparé)
2. Installer les dépendances : `npm install`
3. Créer un fichier `.env` avec les variables suivantes :

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/field
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

4. Configurer MongoDB :
   - Installer MongoDB localement ou utiliser MongoDB Atlas
   - Créer une base de données "field"

## Exécution

- Développement : `npm run dev`
- Production : `npm start`

## API Endpoints suggérés

### Authentification
- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion
- `GET /api/auth/me` - Infos utilisateur actuel

### Clubs
- `GET /api/clubs` - Liste des clubs
- `GET /api/clubs/:id` - Détails d'un club

### NFTs
- `GET /api/nfts` - Liste des NFTs disponibles
- `POST /api/nfts/mint` - Minter un nouveau NFT
- `GET /api/nfts/owned` - NFTs possédés par l'utilisateur

### Staking
- `POST /api/staking/deposit` - Déposer des tokens
- `POST /api/staking/withdraw` - Retirer des tokens
- `GET /api/staking/balance` - Voir le solde actuel

### Gouvernance
- `GET /api/governance/votes` - Votes actifs
- `POST /api/governance/vote` - Voter sur une proposition

## Sécurité

Le backend devrait implémenter :
- JWT pour l'authentification
- Validation des entrées avec express-validator
- Protection CORS
- Limitation de débit avec express-rate-limit
- Hachage des mots de passe avec bcrypt

## Intégration avec le Frontend

Pour connecter avec le frontend Vite/React :

1. Le frontend doit appeler l'API backend à l'adresse `http://localhost:5000/api/...`
2. Configurer CORS sur le backend pour autoriser les requêtes depuis `http://localhost:3000`
3. Utiliser axios ou fetch pour les appels API depuis le frontend 