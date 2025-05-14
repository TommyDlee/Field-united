const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      enum: ['stake', 'unstake', 'reward', 'mint', 'transfer', 'vote'],
      required: [true, 'Please provide a transaction type'],
    },
    amount: {
      type: Number,
      required: [true, 'Please provide an amount'],
    },
    currency: {
      type: String,
      enum: ['ETH', 'FIELD', 'CLUB_TOKEN'],
      required: [true, 'Please provide a currency'],
    },
    club: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Club',
    },
    nft: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'NFT',
    },
    txHash: {
      type: String, // Hash de transaction blockchain
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending',
    },
    description: {
      type: String,
    },
    metadata: {
      type: Object, // Pour stocker des infos supplémentaires spécifiques au type
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

// Index pour faciliter la recherche d'historique par utilisateur
transactionSchema.index({ user: 1, createdAt: -1 });

module.exports = mongoose.model('Transaction', transactionSchema); 