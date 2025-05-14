const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema(
  {
    tokenId: {
      type: String,
      required: [true, 'Please provide a token ID'],
      unique: true,
    },
    type: {
      type: String,
      enum: ['president', 'coach', 'player'],
      required: [true, 'Please provide an NFT type'],
    },
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    club: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Club',
    },
    image: {
      type: String, // URL de l'image NFT
      required: [true, 'Please provide an image URL'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    benefits: [{
      type: String,
    }],
    rarity: {
      type: String,
      enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'],
      default: 'common',
    },
    boost: {
      type: Number, // Multiplicateur de récompense
      default: 1,
    },
    votingPower: {
      type: Number, // Puissance de vote (en pourcentage)
      default: 1,
    },
    price: {
      amount: {
        type: Number,
        default: 0,
      },
      currency: {
        type: String,
        enum: ['ETH', 'FIELD'],
        default: 'FIELD',
      },
    },
    mintedAt: {
      type: Date,
      default: Date.now,
    },
    metadataURI: {
      type: String, // URI IPFS pour les métadonnées complètes
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('NFT', nftSchema); 