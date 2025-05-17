import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';

// Sample club data - in a real app, this would come from an API
const clubsData = [
  {
    id: 1,
    name: 'FC Naples',
    country: 'Italy',
    flag: '🇮🇹',
    logo: '⚽',
    tvl: '$699,500',
    supply: '$NAPL',
    bgClass: 'from-blue-500/20 to-purple-500/5',
    status: 'live', // Already live token
    price: '$0.87',
    dayChange: '+3.2%',
    marketCap: '$8.7M',
    volume: '$457K',
    holders: '2,347',
    circulatingSupply: '10,000,000',
    myHoldings: '1,250',
    myHoldingsValue: '$1,087.50',
    description: 'Top Italian club with strong international following and consistent performance.',
    investmentRating: 'A',
    riskLevel: 'Medium'
  },
  {
    id: 2,
    name: 'Pakš FC',
    country: 'Hungary',
    flag: '🇭🇺',
    logo: '⚽',
    tvl: '$92,450',
    supply: '$PAKS',
    bgClass: 'from-green-500/20 to-blue-500/5',
    status: 'live', // Already live token
    price: '$0.32',
    dayChange: '+1.5%',
    marketCap: '$3.2M',
    volume: '$128K',
    holders: '946',
    circulatingSupply: '10,000,000',
    myHoldings: '3,240',
    myHoldingsValue: '$1,036.80',
    description: 'Rising Hungarian club with strong youth academy and growing supporter base.',
    investmentRating: 'B',
    riskLevel: 'Medium-High'
  },
  {
    id: 3,
    name: 'Nice FC',
    country: 'France',
    flag: '🇫🇷',
    logo: '⚽',
    nftCount: 120,
    tvl: '18,500 AVAX',
    tvlUsd: '$2,450,000',
    voters: '76%',
    supply: '$NICE',
    bgClass: 'from-red-500/20 to-blue-500/5',
    status: 'upcoming', // Upcoming token
    launchDate: 'Mar 15, 2023',
    farmingRewards: '3.2x',
    myStaked: '2.5 AVAX',
    estimatedTokens: '~15,000 $NICE',
    description: 'Well-established French club with strong financial backing and growth potential.',
    investmentRating: 'A-',
    riskLevel: 'Low'
  },
  {
    id: 4,
    name: 'Gżira United',
    country: 'Malta',
    flag: '🇲🇹',
    logo: '⚽',
    nftCount: 60,
    tvl: '8,900 AVAX',
    tvlUsd: '$1,175,000',
    voters: '81%',
    supply: '$GŻIR',
    bgClass: 'from-yellow-500/20 to-red-500/5',
    status: 'upcoming', // Upcoming token
    launchDate: 'Apr 2, 2023',
    farmingRewards: '2.5x',
    myStaked: '1.2 AVAX',
    estimatedTokens: '~7,500 $GŻIR',
    description: 'Emerging Maltese club with innovative business model and rapid fan growth.',
    investmentRating: 'B+',
    riskLevel: 'Medium'
  }
];

const TokenizedClubs = () => {
  const [selectedClub, setSelectedClub] = useState(clubsData[0]);
  const [activeTab, setActiveTab] = useState('live');
  const [investAmount, setInvestAmount] = useState('');
  const { isAuthenticated, connectWallet } = useAuth();
  
  const filteredClubs = clubsData.filter(club => 
    activeTab === 'all' || 
    (activeTab === 'live' && club.status === 'live') || 
    (activeTab === 'upcoming' && club.status === 'upcoming')
  );
  
  const handleInvest = () => {
    // In a real app, this would trigger the investment process
    alert(`Investment of ${investAmount || '0'} in ${selectedClub.name} initiated!`);
    setInvestAmount('');
  };
  
  return (
    <div className="py-6">
      <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
        <h2 className="text-2xl font-bold">Club Token Investment</h2>
        <div className="flex space-x-2">
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'all' ? 'bg-primary/30 text-primary' : 'bg-accent/30 hover:bg-accent/50'}`}
            onClick={() => setActiveTab('all')}
          >
            All Clubs
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'live' ? 'bg-primary/30 text-primary' : 'bg-accent/30 hover:bg-accent/50'}`}
            onClick={() => setActiveTab('live')}
          >
            Live Tokens
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'upcoming' ? 'bg-primary/30 text-primary' : 'bg-accent/30 hover:bg-accent/50'}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left side - Club List */}
        <div className="lg:w-1/3">
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Club Options</h3>
              {isAuthenticated && (
                <div className="bg-primary/20 px-3 py-1 rounded-lg">
                  <span className="text-sm">Portfolio: <span className="font-bold text-primary">$2,124.30</span></span>
                </div>
              )}
            </div>
            
            {isAuthenticated ? (
              <div className="space-y-4">
                {filteredClubs.map(club => (
                  <div
                    key={club.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      selectedClub.id === club.id 
                        ? 'bg-primary/20 border border-primary/50' 
                        : 'bg-accent/30 hover:bg-accent/50'
                    }`}
                    onClick={() => setSelectedClub(club)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-xl">
                        {club.logo}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold">{club.name}</h4>
                          <div className="flex items-center">
                            <span className="text-sm mr-2">{club.flag}</span>
                            {club.status === 'live' ? (
                              <span className="text-xs bg-green-500/50 text-green-200 px-2 py-0.5 rounded-full">Live</span>
                            ) : (
                              <span className="text-xs bg-yellow-500/50 text-yellow-200 px-2 py-0.5 rounded-full">Soon</span>
                            )}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-1 mt-2">
                          <div className="text-xs">
                            <span className="text-gray-400">Risk: </span>
                            <span className={
                              club.riskLevel === 'Low' ? 'text-green-400' : 
                              club.riskLevel === 'Medium' ? 'text-yellow-400' : 
                              'text-orange-400'
                            }>{club.riskLevel}</span>
                          </div>
                          <div className="text-xs text-right">
                            <span className="text-gray-400">Rating: </span>
                            <span className="font-bold text-primary">{club.investmentRating}</span>
                          </div>
                        </div>
                        
                        {club.status === 'live' && (
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs">{club.price}</span>
                            <span className={`text-xs font-bold ${club.dayChange.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                              {club.dayChange}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-400 mb-4">Connect your wallet to view club investment options</p>
                <button 
                  className="btn-primary"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right side - Club Details */}
        <div className="lg:w-2/3">
          <div className={`card bg-gradient-to-br ${selectedClub.bgClass}`}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                {/* Club Identity */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/50 flex items-center justify-center text-2xl">
                    {selectedClub.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedClub.name}</h3>
                    <p className="text-sm text-gray-300">{selectedClub.country} {selectedClub.flag}</p>
                    <div className="mt-2">
                      {selectedClub.status === 'live' ? (
                        <div className={`text-sm px-3 py-1 inline-block rounded-full ${selectedClub.dayChange.startsWith('+') ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                          {selectedClub.price} ({selectedClub.dayChange})
                        </div>
                      ) : (
                        <div className="text-sm bg-yellow-500/20 text-yellow-300 px-3 py-1 inline-block rounded-full">
                          Launch: {selectedClub.launchDate}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="mb-6 text-gray-300">{selectedClub.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {selectedClub.status === 'live' ? (
                    <>
                      <div className="bg-accent/30 p-3 rounded-lg">
                        <div className="text-xs text-gray-400">Market Cap</div>
                        <div className="font-bold">{selectedClub.marketCap}</div>
                      </div>
                      <div className="bg-accent/30 p-3 rounded-lg">
                        <div className="text-xs text-gray-400">24h Volume</div>
                        <div className="font-bold">{selectedClub.volume}</div>
                      </div>
                      <div className="bg-accent/30 p-3 rounded-lg">
                        <div className="text-xs text-gray-400">Holders</div>
                        <div className="font-bold">{selectedClub.holders}</div>
                      </div>
                      <div className="bg-accent/30 p-3 rounded-lg">
                        <div className="text-xs text-gray-400">Investment Rating</div>
                        <div className="font-bold text-primary">{selectedClub.investmentRating}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-accent/30 p-3 rounded-lg">
                        <div className="text-xs text-gray-400">Pre-Launch TVL</div>
                        <div className="font-bold">{selectedClub.tvl}</div>
                        <div className="text-xs text-gray-400">{selectedClub.tvlUsd}</div>
                      </div>
                      <div className="bg-accent/30 p-3 rounded-lg">
                        <div className="text-xs text-gray-400">Farming Rewards</div>
                        <div className="font-bold text-yellow-400">{selectedClub.farmingRewards}</div>
                      </div>
                      <div className="bg-accent/30 p-3 rounded-lg">
                        <div className="text-xs text-gray-400">Initial Allocation</div>
                        <div className="font-bold">2,500,000 {selectedClub.supply}</div>
                      </div>
                      <div className="bg-accent/30 p-3 rounded-lg">
                        <div className="text-xs text-gray-400">Investment Rating</div>
                        <div className="font-bold text-primary">{selectedClub.investmentRating}</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Investment Panel */}
              <div className="md:w-1/2 flex flex-col">
                <div className="glassmorphism p-6 rounded-lg flex-1">
                  <h3 className="text-xl font-bold mb-4">
                    {selectedClub.status === 'live' ? 'Invest Now' : 'Pre-Launch Farming'}
                  </h3>
                  
                  {isAuthenticated ? (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="block text-sm">Amount to {selectedClub.status === 'live' ? 'invest' : 'stake'}</label>
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            className="flex-1 px-4 py-3 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder={selectedClub.status === 'live' ? 'Enter USD amount' : 'Enter ETH amount'}
                            value={investAmount}
                            onChange={(e) => setInvestAmount(e.target.value)}
                          />
                          <button className="btn-primary px-6">
                            {selectedClub.status === 'live' ? 'Buy Tokens' : 'Stake Now'}
                          </button>
                        </div>
                      </div>
                      
                      <div className="glassmorphism p-4 rounded-lg bg-accent/30">
                        <div className="flex justify-between items-center mb-2">
                          <span>Estimated returns (APY)</span>
                          <span className="font-bold text-green-400">
                            {selectedClub.status === 'live' ? '18%' : '24%'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span>Lock period</span>
                          <span className="font-bold">
                            {selectedClub.status === 'live' ? 'Optional' : '90 days min.'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Risk level</span>
                          <span className={
                            selectedClub.riskLevel === 'Low' ? 'font-bold text-green-400' : 
                            selectedClub.riskLevel === 'Medium' ? 'font-bold text-yellow-400' : 
                            'font-bold text-orange-400'
                          }>{selectedClub.riskLevel}</span>
                        </div>
                      </div>
                      
                      {selectedClub.status === 'live' && (
                        <div className="flex gap-2">
                          <button className="flex-1 py-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all text-sm">
                            Portfolio
                          </button>
                          <button className="flex-1 py-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-lg hover:bg-purple-500/30 transition-all text-sm">
                            Club DAO
                          </button>
                        </div>
                      )}
                      
                      {selectedClub.status === 'upcoming' && (
                        <div className="flex justify-between items-center px-2 text-sm text-gray-300">
                          <span>Launch progress</span>
                          <span>{Math.floor(Math.random() * 30) + 70}%</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-gray-300 mb-4">Connect your wallet to invest in {selectedClub.name}</p>
                      <button 
                        className="btn-primary"
                        onClick={connectWallet}
                      >
                        Connect Wallet
                      </button>
                    </div>
                  )}
                </div>
                
                {isAuthenticated && (
                  <div className="mt-4 flex justify-between items-center">
                    <button className="text-sm text-gray-300 hover:text-white flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                      </svg>
                      Whitepaper
                    </button>
                    <button className="text-sm text-gray-300 hover:text-white flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                      </svg>
                      Explorer
                    </button>
                    <button className="text-sm text-gray-300 hover:text-white flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                      </svg>
                      Learn More
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Stats Row */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="card text-center cursor-pointer hover:bg-accent/20 transition-all">
          <h3 className="text-3xl font-bold text-primary mb-1">12</h3>
          <p className="text-sm text-gray-400 uppercase tracking-wider">Live Tokens</p>
        </div>
        
        <div className="card text-center cursor-pointer hover:bg-accent/20 transition-all">
          <h3 className="text-3xl font-bold text-primary mb-1">$36.4M</h3>
          <p className="text-sm text-gray-400 uppercase tracking-wider">Total Market Cap</p>
        </div>
        
        <div className="card text-center cursor-pointer hover:bg-accent/20 transition-all">
          <h3 className="text-3xl font-bold text-primary mb-1">18%</h3>
          <p className="text-sm text-gray-400 uppercase tracking-wider">Avg. APY Returns</p>
        </div>
        
        <div className="card text-center cursor-pointer hover:bg-accent/20 transition-all">
          <h3 className="text-3xl font-bold text-primary mb-1">8</h3>
          <p className="text-sm text-gray-400 uppercase tracking-wider">Upcoming Launches</p>
        </div>
      </div>
    </div>
  );
};

export default TokenizedClubs; 