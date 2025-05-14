const Club = require('../models/Club');
const Vote = require('../models/Vote');

// @desc    Get all clubs
// @route   GET /api/clubs
// @access  Public
const getClubs = async (req, res) => {
  try {
    const clubs = await Club.find().select('-__v');

    res.status(200).json({
      status: 'success',
      results: clubs.length,
      data: clubs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// @desc    Get a single club
// @route   GET /api/clubs/:id
// @access  Public
const getClub = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id).select('-__v');

    if (!club) {
      return res.status(404).json({
        status: 'error',
        message: 'Club not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: club,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// @desc    Get club stats
// @route   GET /api/clubs/:id/stats
// @access  Public
const getClubStats = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);

    if (!club) {
      return res.status(404).json({
        status: 'error',
        message: 'Club not found',
      });
    }

    const stats = {
      tvl: club.tvl,
      tokenSymbol: club.tokenSymbol,
      activeVoters: club.activeVoters,
      totalNFTs: club.totalNFTs,
      performanceStats: club.stats,
    };

    res.status(200).json({
      status: 'success',
      data: stats,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// @desc    Get club votes
// @route   GET /api/clubs/:id/votes
// @access  Public
const getClubVotes = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);

    if (!club) {
      return res.status(404).json({
        status: 'error',
        message: 'Club not found',
      });
    }

    const votes = await Vote.find({ 
      club: req.params.id,
      status: { $in: ['active', 'completed'] }
    })
    .select('-ballots')
    .sort({ startDate: -1 });

    res.status(200).json({
      status: 'success',
      results: votes.length,
      data: votes,
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
  getClubs,
  getClub,
  getClubStats,
  getClubVotes,
}; 