const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a club name'],
      unique: true,
      trim: true,
    },
    country: {
      type: String,
      required: [true, 'Please provide a country'],
      trim: true,
    },
    flag: {
      type: String, // Emoji drapeau ou URL d'image
      required: [true, 'Please provide a flag'],
    },
    logo: {
      type: String, // URL de l'image du logo
      required: [true, 'Please provide a logo'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    tvl: {
      type: Number,
      default: 0,
    },
    tokenSymbol: {
      type: String,
      required: [true, 'Please provide a token symbol'],
      unique: true,
    },
    activeVoters: {
      type: Number,
      default: 0,
    },
    totalNFTs: {
      type: Number,
      default: 0,
    },
    stats: {
      wins: { type: Number, default: 0 },
      draws: { type: Number, default: 0 },
      losses: { type: Number, default: 0 },
    },
    socialLinks: {
      website: { type: String, default: null },
      twitter: { type: String, default: null },
      instagram: { type: String, default: null },
    },
    activeVotes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vote',
    }],
    backgroundClass: {
      type: String,
      default: 'from-primary/20 to-accent/5',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Club', clubSchema); 