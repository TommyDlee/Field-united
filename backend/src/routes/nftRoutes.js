const express = require('express');
const router = express.Router();
const { 
  getNFTs,
  getNFT,
  mintNFT,
  getUserNFTs,
  transferNFT,
  getNFTsByType
} = require('../controllers/nftController');

// Routes pour les NFTs
router.get('/', getNFTs);
router.get('/type/:type', getNFTsByType);
router.get('/owned', getUserNFTs);
router.get('/:id', getNFT);
router.post('/mint', mintNFT);
router.post('/transfer', transferNFT);

module.exports = router; 