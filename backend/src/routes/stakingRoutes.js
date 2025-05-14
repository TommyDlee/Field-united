const express = require('express');
const router = express.Router();
const { 
  getStakingInfo,
  stake,
  unstake,
  getRewards,
  claimRewards,
  getStakingHistory
} = require('../controllers/stakingController');

// Routes pour le staking
router.get('/info', getStakingInfo);
router.post('/stake', stake);
router.post('/unstake', unstake);
router.get('/rewards', getRewards);
router.post('/claim', claimRewards);
router.get('/history', getStakingHistory);

module.exports = router; 