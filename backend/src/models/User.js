const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    username: {
      type: String,
      required: [true, 'Please provide a username'],
      unique: true,
      trim: true,
      minlength: [3, 'Username must be at least 3 characters'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false, // Ne pas renvoyer le mot de passe dans les requêtes
    },
    walletAddress: {
      type: String,
      unique: true,
      sparse: true, // Permet d'avoir des valeurs nulles
      trim: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    nftsOwned: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'NFT',
    }],
    stake: {
      amount: {
        type: Number,
        default: 0,
      },
      lockUntil: {
        type: Date,
        default: null,
      },
    },
    fieldTokens: {
      type: Number,
      default: 0,
    },
    profileImage: {
      type: String,
      default: null,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Middleware pour hacher le mot de passe avant de l'enregistrer
// Note: dans un projet réel, utilisez bcrypt ici

module.exports = mongoose.model('User', userSchema); 