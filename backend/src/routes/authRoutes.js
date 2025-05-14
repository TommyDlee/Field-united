const express = require('express');
const router = express.Router();
const { 
  register, 
  login, 
  getMe, 
  updateProfile,
  connectWallet 
} = require('../controllers/authController');

// Routes pour l'authentification
router.post('/register', register);
router.post('/login', login);
router.get('/me', getMe);
router.put('/profile', updateProfile);
router.post('/connect-wallet', connectWallet);

module.exports = router; 