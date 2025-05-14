const express = require('express');
const router = express.Router();
const { 
  getClubs,
  getClub,
  getClubStats,
  getClubVotes
} = require('../controllers/clubController');

// Routes pour les clubs
router.get('/', getClubs);
router.get('/:id', getClub);
router.get('/:id/stats', getClubStats);
router.get('/:id/votes', getClubVotes);

module.exports = router; 