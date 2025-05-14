const express = require('express');
const router = express.Router();
const { 
  getActiveVotes,
  getVote,
  createVote,
  submitVote,
  getVoteResults,
  getUserVotes
} = require('../controllers/governanceController');

// Routes pour la gouvernance
router.get('/votes', getActiveVotes);
router.get('/votes/:id', getVote);
router.post('/votes', createVote);
router.post('/votes/:id/submit', submitVote);
router.get('/votes/:id/results', getVoteResults);
router.get('/user/votes', getUserVotes);

module.exports = router; 