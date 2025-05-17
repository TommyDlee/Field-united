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
    myHoldingsValue: '$1,087.50'
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
    myHoldingsValue: '$1,036.80'
  },
  {
    id: 3,
    name: 'Nice FC',
    country: 'France',
    flag: '🇫🇷',
    logo: '⚽',
    nftCount: 120,
    tvl: '$2,450,000',
    voters: '76%',
    supply: '$NICE',
    bgClass: 'from-red-500/20 to-blue-500/5',
    status: 'upcoming', // Upcoming token
    launchDate: 'Mar 15, 2023',
    farmingRewards: '3.2x',
    myStaked: '2.5 ETH',
    estimatedTokens: '~15,000 $NICE'
  },
  {
    id: 4,
    name: 'Gżira United',
    country: 'Malta',
    flag: '🇲🇹',
    logo: '⚽',
    nftCount: 60,
    tvl: '$1,175,000',
    voters: '81%',
    supply: '$GŻIR',
    bgClass: 'from-yellow-500/20 to-red-500/5',
    status: 'upcoming', // Upcoming token
    launchDate: 'Apr 2, 2023',
    farmingRewards: '2.5x',
    myStaked: '1.2 AVAX',
    estimatedTokens: '~7,500 $GŻIR'
  }
];

const TokenizedClubs = () => {
  const [selectedClub, setSelectedClub] = useState(clubsData[0]);
  const [activeTab, setActiveTab] = useState('live');
  const { isAuthenticated, connectWallet } = useAuth();
  
  const filteredClubs = clubsData.filter(club => 
    activeTab === 'all' || 
    (activeTab === 'live' && club.status === 'live') || 
    (activeTab === 'upcoming' && club.status === 'upcoming')
  );
  
  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Tokenized Clubs</h2>
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
            <h3 className="text-xl font-bold mb-6">My Portfolio</h3>
            
            {isAuthenticated ? (
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-accent/30 pb-4">
                  <span className="text-lg">Total Value</span>
                  <span className="text-2xl font-bold text-primary">$2,124.30</span>
                </div>
                
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
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-gray-400">{club.country}</span>
                            {club.status === 'live' ? (
                              <span className="text-xs text-primary">{club.price}</span>
                            ) : (
                              <span className="text-xs text-primary">{club.launchDate}</span>
                            )}
                          </div>
                          {club.status === 'live' && (
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-xs">My Holdings</span>
                              <span className="text-xs font-bold text-primary">{club.myHoldingsValue}</span>
                            </div>
                          )}
                          {club.status === 'upcoming' && (
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-xs">My Stake</span>
                              <span className="text-xs font-bold text-primary">{club.myStaked}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-400 mb-4">Connect your wallet to view your tokenized club portfolio</p>
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
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              {/* Club Identity */}
              <div className="md:w-1/3">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-accent/50 flex items-center justify-center text-4xl mb-4">
                    {selectedClub.logo}
                  </div>
                  <h3 className="text-2xl font-bold">{selectedClub.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">{selectedClub.country} {selectedClub.flag}</p>
                  
                  {selectedClub.status === 'upcoming' ? (
                    <div className="mt-2 bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs">
                      Launch: {selectedClub.launchDate}
                    </div>
                  ) : (
                    <div className={`mt-2 px-3 py-1 rounded-full text-xs ${selectedClub.dayChange.startsWith('+') ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                      {selectedClub.dayChange} (24h)
                    </div>
                  )}
                  
                  <div className="mt-6 space-y-4 w-full">
                    {selectedClub.status === 'upcoming' ? (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">NFT Holders</span>
                          <span className="font-bold">{selectedClub.nftCount}</span>
                        </div>
                        <div className="w-full bg-accent/30 h-2 rounded-full">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${Math.min(100, (selectedClub.nftCount / 200) * 100)}%` }}
                          ></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Active Voters</span>
                          <span className="font-bold">{selectedClub.voters}</span>
                        </div>
                        <div className="w-full bg-accent/30 h-2 rounded-full">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: selectedClub.voters.replace('%', '') }}
                          ></div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between items-center border-b border-accent/30 pb-2">
                          <span className="text-sm font-bold">Token Stats</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Current Price</span>
                          <span className="font-bold">{selectedClub.price}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Market Cap</span>
                          <span className="font-bold">{selectedClub.marketCap}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm">24h Volume</span>
                          <span className="font-bold">{selectedClub.volume}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Holders</span>
                          <span className="font-bold">{selectedClub.holders}</span>
                        </div>
                      </>
                    )}
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Token</span>
                      <span className="font-bold">{selectedClub.supply}</span>
                    </div>
                    
                    {selectedClub.status === 'upcoming' && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Farming Rewards</span>
                        <span className="font-bold text-yellow-400">{selectedClub.farmingRewards}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Club Stats & Dashboard Preview */}
              <div className="md:w-2/3">
                {selectedClub.status === 'live' ? (
                  <>
                    <div className="glassmorphism p-4 rounded-lg mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold">Price Chart</h4>
                        <div className="flex items-center gap-2">
                          <button className="text-xs bg-accent/50 px-2 py-1 rounded hover:bg-accent/70">1D</button>
                          <button className="text-xs bg-primary/50 px-2 py-1 rounded">1W</button>
                          <button className="text-xs bg-accent/50 px-2 py-1 rounded hover:bg-accent/70">1M</button>
                          <button className="text-xs bg-accent/50 px-2 py-1 rounded hover:bg-accent/70">ALL</button>
                        </div>
                      </div>
                      
                      {/* Candlestick Chart - This would be a real chart component in production */}
                      <div className="h-48 w-full bg-accent/20 rounded-lg p-2 overflow-hidden">
                        <div className="h-full w-full relative">
                          {/* Chart grid lines */}
                          <div className="absolute left-0 right-0 top-1/4 border-t border-white/10"></div>
                          <div className="absolute left-0 right-0 top-2/4 border-t border-white/10"></div>
                          <div className="absolute left-0 right-0 top-3/4 border-t border-white/10"></div>
                          
                          {/* Simulated candlesticks */}
                          <div className="absolute bottom-0 left-0 right-0 h-4/5 flex items-end">
                            {[...Array(24)].map((_, i) => {
                              const isGreen = Math.random() > 0.4;
                              const height = 20 + Math.random() * 60;
                              const wickHeight = height + (5 + Math.random() * 15);
                              
                              return (
                                <div key={i} className="flex-1 flex flex-col items-center justify-end mx-0.5">
                                  {/* Wick */}
                                  <div 
                                    className={`w-px ${isGreen ? 'bg-green-500' : 'bg-red-500'}`}
                                    style={{ height: `${wickHeight}%` }}
                                  ></div>
                                  {/* Candle body */}
                                  <div 
                                    className={`w-full ${isGreen ? 'bg-green-500' : 'bg-red-500'}`}
                                    style={{ 
                                      height: `${height}%`,
                                      opacity: i > 20 ? 0.7 : 1
                                    }}
                                  ></div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    {isAuthenticated ? (
                      <div className="grid grid-cols-2 gap-4">
                        <div className="glassmorphism p-4 rounded-lg">
                          <h4 className="font-bold mb-2">My Holdings</h4>
                          <div className="flex justify-between items-center mb-3">
                            <div className="text-sm text-gray-300">Balance</div>
                            <div className="font-bold">{selectedClub.myHoldings} {selectedClub.supply}</div>
                          </div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="text-sm text-gray-300">Value</div>
                            <div className="font-bold text-primary">{selectedClub.myHoldingsValue}</div>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <button className="flex-1 py-2 bg-green-500/20 text-green-300 border border-green-500/30 rounded-lg hover:bg-green-500/30 transition-all text-sm">
                              Buy More
                            </button>
                            <button className="flex-1 py-2 bg-red-500/20 text-red-300 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-all text-sm">
                              Sell
                            </button>
                          </div>
                        </div>
                        
                        <div className="glassmorphism p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Voting Power</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <div className="text-sm">Current Power</div>
                              <div className="font-bold">
                                {parseInt(selectedClub.myHoldings) > 1000 ? 'High' : 'Medium'}
                              </div>
                            </div>
                            <div className="w-full bg-accent/30 h-4 rounded-full overflow-hidden">
                              <div 
                                className="bg-primary h-4" 
                                style={{ width: `${Math.min(100, (parseInt(selectedClub.myHoldings.replace(/,/g, '')) / 100))}%` }}
                              ></div>
                            </div>
                            <button className="w-full py-2 mt-2 text-sm btn-primary">
                              Participate in Club DAO
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="glassmorphism p-6 rounded-lg text-center">
                        <h4 className="font-bold mb-3">Track Your Club Investments</h4>
                        <p className="text-gray-300 mb-4">Connect your wallet to view your holdings and participate in club governance</p>
                        <button 
                          className="btn-primary px-6 py-2"
                          onClick={connectWallet}
                        >
                          Connect Wallet
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  // Upcoming/Pre-launch club display
                  <>
                    <div className="glassmorphism p-4 rounded-lg mb-6">
                      <h4 className="font-bold mb-4">Upcoming Token Launch</h4>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-300">Launch Date</p>
                          <p className="font-bold text-lg">{selectedClub.launchDate}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-between">
                          <span>Token Pre-farming</span>
                          <span className="bg-green-500/30 text-green-300 px-2 py-0.5 rounded text-xs">OPEN</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Current TVL</span>
                          <span className="font-mono text-primary">{selectedClub.tvl}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Initial Allocation</span>
                          <span className="font-mono">2,500,000 {selectedClub.supply}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Farming Rewards Multiplier</span>
                          <span className="font-bold text-yellow-400">{selectedClub.farmingRewards}</span>
                        </div>
                      </div>
                    </div>
                    
                    {isAuthenticated ? (
                      <div className="grid grid-cols-2 gap-4">
                        <div className="glassmorphism p-4 rounded-lg">
                          <h4 className="font-bold mb-2">My Pre-Launch Status</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-300">Current Stake</div>
                              <div className="font-bold">{selectedClub.myStaked}</div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-300">Est. Token Allocation</div>
                              <div className="font-bold text-primary">{selectedClub.estimatedTokens}</div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-300">Multiplier</div>
                              <div className="font-bold text-yellow-400">{selectedClub.farmingRewards}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="glassmorphism p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Pre-Launch Farming</h4>
                          <p className="text-sm text-gray-300 mb-4">
                            Farm {selectedClub.supply} tokens before they launch
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            <button className="w-full py-2 bg-yellow-500/20 text-yellow-300 border border-yellow-500/50 rounded-lg hover:bg-yellow-500/30 transition-all text-xs">
                              Stake ETH
                            </button>
                            <button className="w-full py-2 bg-blue-500/20 text-blue-300 border border-blue-500/50 rounded-lg hover:bg-blue-500/30 transition-all text-xs">
                              Stake AVAX
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="glassmorphism p-6 rounded-lg text-center">
                        <h4 className="font-bold mb-3">Join Pre-Launch Phase</h4>
                        <p className="text-gray-300 mb-4">Connect your wallet to participate in pre-launch farming and secure your allocation</p>
                        <button 
                          className="btn-primary px-6 py-2"
                          onClick={connectWallet}
                        >
                          Connect Wallet
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-4 justify-between items-center">
                {selectedClub.status === 'live' ? (
                  <button className="px-4 py-2 border border-white/30 rounded-lg hover:bg-white/5 transition-all">
                    View on Explorer →
                  </button>
                ) : (
                  <button className="px-4 py-2 bg-yellow-500/20 text-yellow-300 border border-yellow-500/50 rounded-lg hover:bg-yellow-500/30 transition-all">
                    Join Pre-Launch →
                  </button>
                )}
                
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center hover:bg-accent/70 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center hover:bg-accent/70 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Stats Row */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="card text-center">
          <h3 className="text-3xl font-bold text-primary mb-1">12</h3>
          <p className="text-sm text-gray-400 uppercase tracking-wider">Live Tokens</p>
        </div>
        
        <div className="card text-center">
          <h3 className="text-3xl font-bold text-primary mb-1">$36.4M</h3>
          <p className="text-sm text-gray-400 uppercase tracking-wider">Total Market Cap</p>
        </div>
        
        <div className="card text-center">
          <h3 className="text-3xl font-bold text-primary mb-1">$1.7M</h3>
          <p className="text-sm text-gray-400 uppercase tracking-wider">24h Volume</p>
        </div>
        
        <div className="card text-center">
          <h3 className="text-3xl font-bold text-primary mb-1">8</h3>
          <p className="text-sm text-gray-400 uppercase tracking-wider">Upcoming Launches</p>
        </div>
      </div>
    </div>
  );
};

export default TokenizedClubs; 