import React, { useState } from 'react';

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
    circulatingSupply: '10,000,000'
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
    circulatingSupply: '10,000,000'
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
    farmingRewards: '3.2x'
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
    farmingRewards: '2.5x'
  }
];

const ClubShowcase = () => {
  const [selectedClub, setSelectedClub] = useState(clubsData[0]);
  
  return (
    <section id="clubs" className="py-24 relative bg-gradient-to-b from-transparent to-accent/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Club Examples in the Dapp</h2>
          <p className="subtitle max-w-3xl mx-auto">
            Explore how football clubs are represented in our FIELD ecosystem, with some already active and others in pre-launch phase.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Club List */}
          <div className="lg:w-1/3">
            <div className="card">
              <h3 className="text-2xl font-bold mb-6">League Clubs</h3>
              
              <div className="space-y-4">
                {clubsData.map(club => (
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
                            <span className="text-xs text-primary">{club.tvl}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                          
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Circulating</span>
                            <span className="font-bold">{selectedClub.circulatingSupply}</span>
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
                        
                        {/* Candlestick Chart */}
                        <div className="h-48 w-full bg-accent/20 rounded-lg p-2 overflow-hidden">
                          <div className="h-full w-full relative">
                            {/* This would be a real candlestick chart - for now a visual representation */}
                            <div className="absolute top-0 left-0 right-0 bottom-0">
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
                              
                              {/* Price indicators */}
                              <div className="absolute top-1/4 left-2 text-xs text-gray-400">$0.95</div>
                              <div className="absolute top-2/4 left-2 text-xs text-gray-400">$0.85</div>
                              <div className="absolute top-3/4 left-2 text-xs text-gray-400">$0.75</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="glassmorphism p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Daily Volume</h4>
                          <div className="h-24 w-full bg-accent/20 rounded-lg p-2 overflow-hidden mb-4">
                            <div className="h-full w-full relative">
                              {/* Volume bars */}
                              <div className="absolute bottom-0 left-0 right-0 h-full flex items-end">
                                {[...Array(7)].map((_, i) => (
                                  <div 
                                    key={i} 
                                    className="flex-1 bg-primary/70 mx-0.5"
                                    style={{ 
                                      height: `${20 + Math.random() * 80}%`
                                    }}
                                  ></div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center text-xs text-gray-400">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>
                          </div>
                        </div>
                        
                        <div className="glassmorphism p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Trading</h4>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-xs text-gray-400 mb-1">
                                <span>Balance: 0 {selectedClub.supply}</span>
                                <span>≈ $0.00</span>
                              </div>
                              <div className="flex gap-2">
                                <button className="flex-1 py-2 bg-green-500/20 text-green-300 border border-green-500/30 rounded-lg hover:bg-green-500/30 transition-all text-sm">
                                  Buy
                                </button>
                                <button className="flex-1 py-2 bg-red-500/20 text-red-300 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-all text-sm">
                                  Sell
                                </button>
                              </div>
                            </div>
                            
                            <button className="w-full py-2 text-sm btn-primary">
                              View on DEX
                            </button>
                          </div>
                        </div>
                      </div>
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
                      
                      <div className="glassmorphism p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Pre-Launch Farming</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Farm {selectedClub.supply} tokens before they launch by depositing ETH or AVAX now. Early farmers receive bonus multipliers.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <button className="w-full py-3 bg-yellow-500/20 text-yellow-300 border border-yellow-500/50 rounded-lg hover:bg-yellow-500/30 transition-all">
                              Farm with ETH
                            </button>
                            <button className="w-full py-3 bg-blue-500/20 text-blue-300 border border-blue-500/50 rounded-lg hover:bg-blue-500/30 transition-all">
                              Farm with AVAX
                            </button>
                          </div>
                          
                          <div className="flex items-center gap-2 justify-center text-xs text-gray-300">
                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <span>Points will be redeemable for {selectedClub.supply} at launch</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-4 justify-between items-center">
                  {selectedClub.status === 'live' ? (
                    <button className="px-4 py-2 border border-white/30 rounded-lg hover:bg-white/5 transition-all">
                      Token Analytics →
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
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
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
        
        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="card text-center">
            <h3 className="text-3xl font-bold text-primary mb-1">12.4%</h3>
            <p className="text-sm text-gray-400 uppercase tracking-wider">Average APR</p>
          </div>
          
          <div className="card text-center">
            <h3 className="text-3xl font-bold text-primary mb-1">$29M</h3>
            <p className="text-sm text-gray-400 uppercase tracking-wider">Total Value Locked</p>
          </div>
          
          <div className="card text-center">
            <h3 className="text-3xl font-bold text-primary mb-1">11</h3>
            <p className="text-sm text-gray-400 uppercase tracking-wider">Partner Clubs</p>
          </div>
          
          <div className="card text-center">
            <h3 className="text-3xl font-bold text-primary mb-1">2,580</h3>
            <p className="text-sm text-gray-400 uppercase tracking-wider">FIELD Governors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubShowcase; 