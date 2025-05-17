import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';

// Flags mapping for countries
const countryFlags = {
  'Spain': '🇪🇸',
  'England': '🇬🇧',
  'Germany': '🇩🇪',
  'France': '🇫🇷',
  'Italy': '🇮🇹',
  'Netherlands': '🇳🇱',
  'Portugal': '🇵🇹'
};

// Position medal/emoji mapping
const positionBadges = {
  1: '🥇',
  2: '🥈', 
  3: '🥉',
  default: '🏅'
};

const Standings = () => {
  const { isAuthenticated, connectWallet } = useAuth();
  const [divisionFilter, setDivisionFilter] = useState('national');
  
  // League divisions data structure
  const divisions = {
    national: {
      name: 'National League',
      description: 'Top 10 clubs competing at the national level',
      clubs: [
        { id: 1, name: 'FC Barcelona', logo: '🔵🔴', country: 'Spain', totalPoints: 87500, appVotes: 32450, socialPoints: 28400, fieldVotes: 26650, weeklyActions: 4250, weeklyChangePercent: '+12%', fieldBagAllocation: '15%', trend: 'up' },
        { id: 2, name: 'Real Madrid', logo: '⚪️', country: 'Spain', totalPoints: 85200, appVotes: 31200, socialPoints: 27800, fieldVotes: 26200, weeklyActions: 3980, weeklyChangePercent: '+8%', fieldBagAllocation: '14%', trend: 'up' },
        { id: 3, name: 'Bayern Munich', logo: '🔴', country: 'Germany', totalPoints: 79800, appVotes: 29800, socialPoints: 25500, fieldVotes: 24500, weeklyActions: 3750, weeklyChangePercent: '+5%', fieldBagAllocation: '12%', trend: 'up' },
        { id: 4, name: 'Manchester City', logo: '🔵', country: 'England', totalPoints: 76400, appVotes: 28100, socialPoints: 24800, fieldVotes: 23500, weeklyActions: 3420, weeklyChangePercent: '-2%', fieldBagAllocation: '11%', trend: 'down' },
        { id: 5, name: 'PSG', logo: '🔵🔴', country: 'France', totalPoints: 72300, appVotes: 27500, socialPoints: 23200, fieldVotes: 21600, weeklyActions: 3180, weeklyChangePercent: '+4%', fieldBagAllocation: '10%', trend: 'up' },
        { id: 6, name: 'Liverpool', logo: '🔴', country: 'England', totalPoints: 71500, appVotes: 26700, socialPoints: 22800, fieldVotes: 22000, weeklyActions: 3050, weeklyChangePercent: '+3%', fieldBagAllocation: '9%', trend: 'up' },
        { id: 7, name: 'Juventus', logo: '⚫️⚪️', country: 'Italy', totalPoints: 68200, appVotes: 25400, socialPoints: 21600, fieldVotes: 21200, weeklyActions: 2920, weeklyChangePercent: '-1%', fieldBagAllocation: '8%', trend: 'down' },
        { id: 8, name: 'AC Milan', logo: '🔴⚫️', country: 'Italy', totalPoints: 65100, appVotes: 24500, socialPoints: 20800, fieldVotes: 19800, weeklyActions: 2780, weeklyChangePercent: '+2%', fieldBagAllocation: '7%', trend: 'up' },
        { id: 9, name: 'Atletico Madrid', logo: '🔴⚪️', country: 'Spain', totalPoints: 62400, appVotes: 23200, socialPoints: 19800, fieldVotes: 19400, weeklyActions: 2650, weeklyChangePercent: '-3%', fieldBagAllocation: '6%', trend: 'down' },
        { id: 10, name: 'Borussia Dortmund', logo: '🟡⚫️', country: 'Germany', totalPoints: 60800, appVotes: 22400, socialPoints: 19200, fieldVotes: 19200, weeklyActions: 2520, weeklyChangePercent: '+1%', fieldBagAllocation: '5%', trend: 'up' }
      ]
    },
    regional: {
      name: 'Regional League',
      description: 'Top 20 clubs competing at the regional level',
      clubs: [
        { id: 11, name: 'Valencia CF', logo: '🦇', country: 'Spain', totalPoints: 58100, appVotes: 21500, socialPoints: 18600, fieldVotes: 18000, trend: 'up', weeklyChange: '+4%' },
        { id: 12, name: 'Sevilla FC', logo: '⚪️🔴', country: 'Spain', totalPoints: 57200, appVotes: 21200, socialPoints: 18200, fieldVotes: 17800, trend: 'up', weeklyChange: '+5%' },
        { id: 13, name: 'RB Leipzig', logo: '🔴⚪️', country: 'Germany', totalPoints: 56400, appVotes: 20800, socialPoints: 18000, fieldVotes: 17600, trend: 'down', weeklyChange: '-1%' },
        { id: 14, name: 'Inter Milan', logo: '🔵⚫️', country: 'Italy', totalPoints: 55500, appVotes: 20500, socialPoints: 17700, fieldVotes: 17300, trend: 'up', weeklyChange: '+3%' },
        { id: 15, name: 'AS Roma', logo: '🟡🔴', country: 'Italy', totalPoints: 53700, appVotes: 19800, socialPoints: 17200, fieldVotes: 16700, trend: 'up', weeklyChange: '+2%' },
        { id: 16, name: 'Ajax', logo: '🔴⚪️', country: 'Netherlands', totalPoints: 52300, appVotes: 19300, socialPoints: 16800, fieldVotes: 16200, trend: 'down', weeklyChange: '-2%' },
        { id: 17, name: 'Lyon', logo: '🔴🔵', country: 'France', totalPoints: 50900, appVotes: 18800, socialPoints: 16300, fieldVotes: 15800, trend: 'up', weeklyChange: '+1%' },
        { id: 18, name: 'Marseille', logo: '⚪️🔵', country: 'France', totalPoints: 49500, appVotes: 18300, socialPoints: 15900, fieldVotes: 15300, trend: 'up', weeklyChange: '+3%' },
        { id: 19, name: 'Real Sociedad', logo: '⚪️🔵', country: 'Spain', totalPoints: 48200, appVotes: 17800, socialPoints: 15500, fieldVotes: 14900, trend: 'down', weeklyChange: '-1%' },
        { id: 20, name: 'Napoli', logo: '🔵', country: 'Italy', totalPoints: 47400, appVotes: 17500, socialPoints: 15100, fieldVotes: 14800, trend: 'up', weeklyChange: '+2%' },
        { id: 21, name: 'Bayer Leverkusen', logo: '🔴⚫️', country: 'Germany', totalPoints: 46100, appVotes: 17000, socialPoints: 14800, fieldVotes: 14300, trend: 'up', weeklyChange: '+5%' },
        { id: 22, name: 'Leicester City', logo: '🔵', country: 'England', totalPoints: 45300, appVotes: 16700, socialPoints: 14500, fieldVotes: 14100, trend: 'down', weeklyChange: '-2%' },
        { id: 23, name: 'Villarreal', logo: '🟡', country: 'Spain', totalPoints: 43800, appVotes: 16200, socialPoints: 14000, fieldVotes: 13600, trend: 'down', weeklyChange: '-1%' },
        { id: 24, name: 'Aston Villa', logo: '🟣🔵', country: 'England', totalPoints: 42500, appVotes: 15700, socialPoints: 13600, fieldVotes: 13200, trend: 'up', weeklyChange: '+2%' },
        { id: 25, name: 'West Ham', logo: '⚒️', country: 'England', totalPoints: 41200, appVotes: 15200, socialPoints: 13200, fieldVotes: 12800, trend: 'up', weeklyChange: '+3%' },
        { id: 26, name: 'Everton', logo: '🔵', country: 'England', totalPoints: 39800, appVotes: 14700, socialPoints: 12700, fieldVotes: 12400, trend: 'down', weeklyChange: '-2%' },
        { id: 27, name: 'Monaco', logo: '🔴⚪️', country: 'France', totalPoints: 38500, appVotes: 14200, socialPoints: 12300, fieldVotes: 12000, trend: 'up', weeklyChange: '+1%' },
        { id: 28, name: 'Benfica', logo: '🔴', country: 'Portugal', totalPoints: 38100, appVotes: 14100, socialPoints: 12200, fieldVotes: 11800, trend: 'down', weeklyChange: '-1%' },
        { id: 29, name: 'Sporting CP', logo: '🟢⚪️', country: 'Portugal', totalPoints: 37400, appVotes: 13800, socialPoints: 12000, fieldVotes: 11600, trend: 'up', weeklyChange: '+2%' },
        { id: 30, name: 'Porto', logo: '🔵⚪️', country: 'Portugal', totalPoints: 36200, appVotes: 13400, socialPoints: 11600, fieldVotes: 11200, trend: 'down', weeklyChange: '-2%' }
      ]
    },
    district: {
      name: 'District League',
      description: 'Top 20 clubs competing at the district level',
      clubs: [
        { id: 31, name: 'Fiorentina', logo: '🟣', country: 'Italy', totalPoints: 34900, appVotes: 12900, socialPoints: 11200, fieldVotes: 10800, trend: 'up', weeklyChange: '+3%' },
        { id: 32, name: 'Crystal Palace', logo: '🔴🔵', country: 'England', totalPoints: 33600, appVotes: 12400, socialPoints: 10800, fieldVotes: 10400, trend: 'up', weeklyChange: '+2%' },
        { id: 33, name: 'Nice', logo: '🔴⚫️', country: 'France', totalPoints: 32300, appVotes: 11900, socialPoints: 10400, fieldVotes: 10000, trend: 'down', weeklyChange: '-1%' },
        { id: 34, name: 'Real Betis', logo: '🟢⚪️', country: 'Spain', totalPoints: 31500, appVotes: 11600, socialPoints: 10100, fieldVotes: 9800, trend: 'up', weeklyChange: '+4%' },
        { id: 35, name: 'Brighton', logo: '🔵⚪️', country: 'England', totalPoints: 30200, appVotes: 11200, socialPoints: 9700, fieldVotes: 9300, trend: 'up', weeklyChange: '+2%' },
        { id: 36, name: 'Schalke 04', logo: '🔵', country: 'Germany', totalPoints: 29400, appVotes: 10900, socialPoints: 9400, fieldVotes: 9100, trend: 'down', weeklyChange: '-3%' },
        { id: 37, name: 'Bologna', logo: '🔴🔵', country: 'Italy', totalPoints: 28100, appVotes: 10400, socialPoints: 9000, fieldVotes: 8700, trend: 'up', weeklyChange: '+1%' },
        { id: 38, name: 'Girona', logo: '🔴⚪️', country: 'Spain', totalPoints: 27300, appVotes: 10100, socialPoints: 8700, fieldVotes: 8500, trend: 'up', weeklyChange: '+5%' },
        { id: 39, name: 'Werder Bremen', logo: '🟢⚪️', country: 'Germany', totalPoints: 26500, appVotes: 9800, socialPoints: 8500, fieldVotes: 8200, trend: 'down', weeklyChange: '-1%' },
        { id: 40, name: 'Southampton', logo: '🔴⚪️', country: 'England', totalPoints: 25700, appVotes: 9500, socialPoints: 8200, fieldVotes: 8000, trend: 'down', weeklyChange: '-2%' },
        { id: 41, name: 'Montpellier', logo: '🔵🟠', country: 'France', totalPoints: 24900, appVotes: 9200, socialPoints: 8000, fieldVotes: 7700, trend: 'up', weeklyChange: '+3%' },
        { id: 42, name: 'Celta Vigo', logo: '🔵', country: 'Spain', totalPoints: 23600, appVotes: 8700, socialPoints: 7600, fieldVotes: 7300, trend: 'up', weeklyChange: '+2%' },
        { id: 43, name: 'Watford', logo: '🟡⚫️', country: 'England', totalPoints: 22800, appVotes: 8400, socialPoints: 7300, fieldVotes: 7100, trend: 'down', weeklyChange: '-1%' },
        { id: 44, name: 'Cagliari', logo: '🔴🔵', country: 'Italy', totalPoints: 21500, appVotes: 8000, socialPoints: 6900, fieldVotes: 6600, trend: 'up', weeklyChange: '+1%' },
        { id: 45, name: 'Getafe', logo: '🔵', country: 'Spain', totalPoints: 20700, appVotes: 7700, socialPoints: 6600, fieldVotes: 6400, trend: 'down', weeklyChange: '-2%' },
        { id: 46, name: 'Strasbourg', logo: '🔵', country: 'France', totalPoints: 19400, appVotes: 7200, socialPoints: 6200, fieldVotes: 6000, trend: 'up', weeklyChange: '+3%' },
        { id: 47, name: 'Bournemouth', logo: '🔴⚫️', country: 'England', totalPoints: 18600, appVotes: 6900, socialPoints: 6000, fieldVotes: 5700, trend: 'down', weeklyChange: '-1%' },
        { id: 48, name: 'Sampdoria', logo: '🔵⚪️', country: 'Italy', totalPoints: 17800, appVotes: 6600, socialPoints: 5700, fieldVotes: 5500, trend: 'up', weeklyChange: '+2%' },
        { id: 49, name: 'Mallorca', logo: '🔴', country: 'Spain', totalPoints: 16500, appVotes: 6100, socialPoints: 5300, fieldVotes: 5100, trend: 'down', weeklyChange: '-2%' },
        { id: 50, name: 'Augsburg', logo: '🔴⚪️', country: 'Germany', totalPoints: 15700, appVotes: 5800, socialPoints: 5000, fieldVotes: 4900, trend: 'up', weeklyChange: '+1%' }
      ]
    }
  };

  // Calculate total points in division
  const getTotalDivisionPoints = (division) => {
    return division.clubs.reduce((total, club) => total + club.totalPoints, 0);
  };
  
  // Get current division data based on filter
  const currentDivision = divisions[divisionFilter];
  const divisionTotalPoints = getTotalDivisionPoints(currentDivision);

  const getBadgeForPosition = (position) => {
    return positionBadges[position] || positionBadges.default;
  };

  const getFlag = (country) => {
    return countryFlags[country] || '';
  };

  return (
    <div className="standings-container">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">{currentDivision.name}</h2>
        <p className="text-gray-300">{currentDivision.description}</p>
      </div>
      
      {/* Division selector tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button 
          className={`px-4 py-2 rounded-lg transition-all ${divisionFilter === 'national' ? 'bg-primary text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          onClick={() => setDivisionFilter('national')}
        >
          National
        </button>
        <button 
          className={`px-4 py-2 rounded-lg transition-all ${divisionFilter === 'regional' ? 'bg-primary text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          onClick={() => setDivisionFilter('regional')}
        >
          Regional
        </button>
        <button 
          className={`px-4 py-2 rounded-lg transition-all ${divisionFilter === 'district' ? 'bg-primary text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          onClick={() => setDivisionFilter('district')}
        >
          District
        </button>
      </div>
      
      {/* League table - simplified design */}
      <div className="space-y-3">
        {divisions[divisionFilter].clubs.map((club, index) => {
          const position = index + 1;
          const positionBadge = getBadgeForPosition(position);
          const flag = getFlag(club.country);
          
          return (
            <div 
              key={club.id} 
              className="glassmorphism p-3 rounded-lg hover:bg-gray-800/40 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center">
                {/* Club info */}
                <div className="flex items-center mb-2 md:mb-0 md:w-1/3">
                  <div className="flex items-center justify-center bg-gray-800/70 rounded-full w-8 h-8 mr-3">
                    <span className="text-sm">{positionBadge} {position}</span>
                  </div>
                  <Link to={`/league/club/${club.id}`} className="flex items-center hover:text-primary">
                    <span className="text-xl mr-2">{club.logo}</span>
                    <span className="font-medium">{club.name}</span>
                    <span className="ml-2">{flag}</span>
                  </Link>
                </div>
                
                {/* Stats - simplified */}
                <div className="grid grid-cols-2 gap-2 md:flex md:flex-1 md:justify-between md:items-center">
                  {/* Points display */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-1.5"></div>
                      <span className="text-xs">App: {club.appVotes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-1.5"></div>
                      <span className="text-xs">Social: {club.socialPoints.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-1.5"></div>
                      <span className="text-xs">$FIELD: {club.fieldVotes.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  {/* Weekly stats */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-1.5"></div>
                      <span className="text-xs font-bold">Total: {club.totalPoints.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-1.5" 
                           style={{ backgroundColor: club.trend === 'up' ? '#4ade80' : '#f87171' }}></div>
                      <span className={`text-xs ${club.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        Weekly: {club.weeklyActions.toLocaleString()} ({club.weeklyChangePercent})
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-1.5"></div>
                      <span className="text-xs">Allocation: {club.fieldBagAllocation}</span>
                    </div>
                  </div>
                  
                  {/* Action buttons - improved with text and icons */}
                  <div className="flex items-center justify-end space-x-2 col-span-2 mt-2 md:mt-0">
                    {isAuthenticated ? (
                      <>
                        <button 
                          className="h-9 px-3 flex items-center justify-center rounded-md bg-green-600/20 text-green-500 hover:bg-green-600/40 hover:shadow-lg hover:shadow-green-600/20 transition-all transform hover:scale-105" 
                        >
                          <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                          </svg>
                          <span className="font-medium">Vote</span>
                        </button>
                        <button 
                          className="h-9 px-3 flex items-center justify-center rounded-md bg-blue-500/20 text-blue-400 hover:bg-blue-500/40 hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:scale-105" 
                        >
                          <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                          </svg>
                          <span className="font-medium">Share</span>
                        </button>
                        <button 
                          className="h-9 px-3 flex items-center justify-center rounded-md bg-amber-500/20 text-amber-500 hover:bg-amber-500/40 hover:shadow-lg hover:shadow-amber-500/20 transition-all transform hover:scale-105" 
                        >
                          <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="font-medium">Boost</span>
                        </button>
                      </>
                    ) : (
                      <button 
                        className="h-9 px-3 flex items-center justify-center rounded-md bg-primary/20 text-primary hover:bg-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all transform hover:scale-105" 
                        onClick={connectWallet}
                      >
                        <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 7H7v6h6V7z"></path>
                          <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"></path>
                        </svg>
                        <span className="font-medium">Connect</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Legend - simplified */}
      <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-400 mr-0.5"></div>
          <span>App Votes</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-blue-400 mr-0.5"></div>
          <span>Social Points</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-primary mr-0.5"></div>
          <span>$FIELD Votes</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-blue-400 mr-0.5"></div>
          <span>Total Points</span>
        </div>
      </div>
      
      {/* Voting call to action */}
      {isAuthenticated ? (
        <div className="mt-8 p-4 bg-primary/10 rounded-lg text-center">
          <p className="text-white mb-4">Support your favorite club with $FIELD tokens to boost their ranking</p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center justify-center h-14 px-6 rounded-lg bg-green-600/20 text-green-500 hover:bg-green-600/40 hover:shadow-lg hover:shadow-green-600/20 transition-all transform hover:scale-105 group font-medium">
              <svg className="w-6 h-6 mr-2 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
              </svg>
              Vote Now
            </button>
            <button className="flex items-center justify-center h-14 px-6 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/40 hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:scale-105 group font-medium">
              <svg className="w-6 h-6 mr-2 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
              </svg>
              Share
            </button>
            <button className="flex items-center justify-center h-14 px-6 rounded-lg bg-amber-500/20 text-amber-500 hover:bg-amber-500/40 hover:shadow-lg hover:shadow-amber-500/20 transition-all transform hover:scale-105 group font-medium">
              <svg className="w-6 h-6 mr-2 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
              Boost Your Vote
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-8 p-4 bg-primary/10 rounded-lg text-center">
          <p className="text-white mb-3">Connect your wallet to vote for your favorite club</p>
          <button className="flex items-center justify-center px-5 py-3 rounded-lg bg-primary/20 text-primary hover:bg-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all transform hover:scale-105 mx-auto font-medium" onClick={connectWallet}>
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 7H7v6h6V7z"></path>
              <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"></path>
            </svg>
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default Standings; 