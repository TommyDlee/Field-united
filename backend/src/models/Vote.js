const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a vote title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    club: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Club',
      required: true,
    },
    category: {
      type: String,
      enum: ['transfers', 'management', 'marketing', 'operations', 'other'],
      required: [true, 'Please provide a category'],
    },
    options: [{
      text: {
        type: String,
        required: [true, 'Please provide option text'],
      },
      count: {
        type: Number,
        default: 0,
      },
    }],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
      required: [true, 'Please provide an end date'],
    },
    status: {
      type: String,
      enum: ['draft', 'active', 'completed', 'cancelled'],
      default: 'active',
    },
    minNFTLevel: {
      type: String,
      enum: ['player', 'coach', 'president'],
      default: 'player',
    },
    ballots: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      optionIndex: {
        type: Number,
      },
      weight: {
        type: Number,
        default: 1,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    }],
    result: {
      winningOptionIndex: {
        type: Number,
      },
      implementationStatus: {
        type: String,
        enum: ['pending', 'in_progress', 'implemented', 'rejected'],
        default: 'pending',
      },
    },
  },
  {
    timestamps: true,
  }
);

// Méthode pour vérifier si un utilisateur a déjà voté
voteSchema.methods.hasUserVoted = function(userId) {
  return this.ballots.some(ballot => ballot.user.toString() === userId.toString());
};

// Index pour faciliter la recherche de votes par club
voteSchema.index({ club: 1, status: 1, endDate: 1 });

module.exports = mongoose.model('Vote', voteSchema); 