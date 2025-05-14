const User = require('../models/User');

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const userExists = await User.findOne({ 
      $or: [{ email }, { username }] 
    });

    if (userExists) {
      return res.status(400).json({
        status: 'error',
        message: 'User already exists',
      });
    }

    // Créer l'utilisateur
    const user = await User.create({
      email,
      username,
      password, // Dans un projet réel, hacher le mot de passe avec bcrypt
    });

    if (user) {
      // Dans un projet réel, génération de token JWT ici
      res.status(201).json({
        status: 'success',
        data: {
          _id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
        message: 'User registered successfully',
      });
    } else {
      res.status(400).json({
        status: 'error',
        message: 'Invalid user data',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid credentials',
      });
    }

    // Dans un projet réel, comparaison du mot de passe avec bcrypt
    const isMatch = password === user.password;

    if (!isMatch) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid credentials',
      });
    }

    // Dans un projet réel, génération de token JWT ici
    res.status(200).json({
      status: 'success',
      data: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      message: 'Logged in successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  try {
    // Dans un projet réel, middleware auth pour récupérer l'utilisateur du token
    // Pour la démo, on simule la récupération de l'utilisateur depuis l'ID
    const userId = req.headers['user-id'];
    
    if (!userId) {
      return res.status(401).json({
        status: 'error',
        message: 'Not authorized, no token',
      });
    }

    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        walletAddress: user.walletAddress,
        nftsOwned: user.nftsOwned,
        stake: user.stake,
        fieldTokens: user.fieldTokens,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
const updateProfile = async (req, res) => {
  try {
    // Dans un projet réel, middleware auth pour récupérer l'utilisateur du token
    const userId = req.headers['user-id'];
    
    if (!userId) {
      return res.status(401).json({
        status: 'error',
        message: 'Not authorized, no token',
      });
    }

    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    // Mise à jour des champs autorisés
    const { username, profileImage } = req.body;
    
    if (username) user.username = username;
    if (profileImage) user.profileImage = profileImage;

    const updatedUser = await user.save();

    res.status(200).json({
      status: 'success',
      data: {
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        profileImage: updatedUser.profileImage,
      },
      message: 'Profile updated successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// @desc    Connect wallet
// @route   POST /api/auth/connect-wallet
// @access  Private
const connectWallet = async (req, res) => {
  try {
    // Dans un projet réel, middleware auth pour récupérer l'utilisateur du token
    const userId = req.headers['user-id'];
    
    if (!userId) {
      return res.status(401).json({
        status: 'error',
        message: 'Not authorized, no token',
      });
    }

    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    const { walletAddress } = req.body;

    // Vérifier si l'adresse wallet est déjà utilisée
    const walletExists = await User.findOne({ walletAddress });

    if (walletExists && walletExists._id.toString() !== userId) {
      return res.status(400).json({
        status: 'error',
        message: 'Wallet address already connected to another account',
      });
    }

    user.walletAddress = walletAddress;
    const updatedUser = await user.save();

    res.status(200).json({
      status: 'success',
      data: {
        _id: updatedUser._id,
        username: updatedUser.username,
        walletAddress: updatedUser.walletAddress,
      },
      message: 'Wallet connected successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login,
  getMe,
  updateProfile,
  connectWallet,
}; 