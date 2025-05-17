import React, { useState } from 'react'
import TokenizedClubs from './TokenizedClubs';

const TokensPage = () => {
  const [activeTab, setActiveTab] = useState('token')
  
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <h1 className="section-title mb-8">FIELD Tokens</h1>
        
        {/* Tab Navigation */}
        <div className="flex overflow-x-auto pb-2 mb-8 glassmorphism p-2 rounded-lg">
          <button 
            className={`px-6 py-3 rounded-lg ${activeTab === 'token' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'}`}
            onClick={() => setActiveTab('token')}
          >
            $FIELD Token
          </button>
          <button 
            className={`px-6 py-3 rounded-lg ${activeTab === 'farming' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'}`}
            onClick={() => setActiveTab('farming')}
          >
            Farming
          </button>
          <button 
            className={`px-6 py-3 rounded-lg ${activeTab === 'clubs' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'}`}
            onClick={() => setActiveTab('clubs')}
          >
            Tokenized Clubs
          </button>
          <button 
            className={`px-6 py-3 rounded-lg ${activeTab === 'nfts' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'}`}
            onClick={() => setActiveTab('nfts')}
          >
            NFTs
          </button>
        </div>
        
        {/* $FIELD Token Tab */}
        {activeTab === 'token' && (
          <div>
            <div className="card mb-8 bg-gradient-to-br from-primary/20 to-accent/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold mb-2">$FIELD</div>
                  <div className="text-3xl font-bold text-primary">$0.052</div>
                  <div className="text-sm text-green-500">+5.2% (24h)</div>
                </div>
                
                <div className="md:col-span-2">
                  <h2 className="text-xl font-bold mb-4">Utility & Governance Token</h2>
                  <p className="mb-4">
                    $FIELD is the native token powering the FIELD ecosystem. It enables community 
                    governance, revenue sharing, and special access to platform features.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-accent/50 p-3 rounded-lg">
                      <div className="text-sm text-gray-400">Max Supply</div>
                      <div className="font-bold">100,000,000</div>
                    </div>
                    <div className="bg-accent/50 p-3 rounded-lg">
                      <div className="text-sm text-gray-400">Circulating</div>
                      <div className="font-bold">24,350,000</div>
                    </div>
                  </div>
                  
                  <button className="btn-primary">Get $FIELD</button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="card">
                <div className="p-4 bg-primary/20 rounded-full mb-4 w-14 h-14 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Governance</h3>
                <p className="text-gray-300">
                  Vote on platform decisions, club inclusion, and fund allocation for infrastructure.
                </p>
              </div>
              
              <div className="card">
                <div className="p-4 bg-primary/20 rounded-full mb-4 w-14 h-14 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Revenue Sharing</h3>
                <p className="text-gray-300">
                  Earn a portion of platform fees and infrastructure revenues.
                </p>
              </div>
              
              <div className="card">
                <div className="p-4 bg-primary/20 rounded-full mb-4 w-14 h-14 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Boost Power</h3>
                <p className="text-gray-300">
                  Amplify your votes in FIELD League and gain early access to club tokens.
                </p>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Tokenomics</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="text-left py-3 px-4 border-b border-accent/30">Allocation</th>
                      <th className="text-left py-3 px-4 border-b border-accent/30">Percentage</th>
                      <th className="text-left py-3 px-4 border-b border-accent/30">Amount</th>
                      <th className="text-left py-3 px-4 border-b border-accent/30">Vesting</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-accent/30">Community & Ecosystem</td>
                      <td className="py-2 px-4 border-b border-accent/30">40%</td>
                      <td className="py-2 px-4 border-b border-accent/30">40,000,000</td>
                      <td className="py-2 px-4 border-b border-accent/30">Linear, 4 years</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-accent/30">Team & Advisors</td>
                      <td className="py-2 px-4 border-b border-accent/30">20%</td>
                      <td className="py-2 px-4 border-b border-accent/30">20,000,000</td>
                      <td className="py-2 px-4 border-b border-accent/30">1 year cliff, 3 years linear</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-accent/30">Initial Offering</td>
                      <td className="py-2 px-4 border-b border-accent/30">15%</td>
                      <td className="py-2 px-4 border-b border-accent/30">15,000,000</td>
                      <td className="py-2 px-4 border-b border-accent/30">Various</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-accent/30">Treasury</td>
                      <td className="py-2 px-4 border-b border-accent/30">15%</td>
                      <td className="py-2 px-4 border-b border-accent/30">15,000,000</td>
                      <td className="py-2 px-4 border-b border-accent/30">Locked, governance controlled</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-accent/30">Liquidity</td>
                      <td className="py-2 px-4 border-b border-accent/30">10%</td>
                      <td className="py-2 px-4 border-b border-accent/30">10,000,000</td>
                      <td className="py-2 px-4 border-b border-accent/30">Initial DEX offering</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* Farming Tab */}
        {activeTab === 'farming' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2 card">
                <h2 className="text-xl font-bold mb-4">Start Earning $FIELD</h2>
                <p className="mb-4">
                  Lock your tokens to earn $FIELD rewards and boost your club voting power. 
                  Choose a farming strategy that works for you:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-primary/20 to-accent/30 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-4 md:mb-0">
                      <h4 className="font-bold text-lg">90-Day Lock</h4>
                      <p className="text-sm text-gray-300">1.5x point multiplier, 12% APY</p>
                    </div>
                    <div className="flex gap-4">
                      <input 
                        type="text" 
                        placeholder="Amount" 
                        className="px-4 py-2 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                      />
                      <button className="btn-primary">Farm</button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/20 to-accent/30 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-4 md:mb-0">
                      <h4 className="font-bold text-lg">180-Day Lock</h4>
                      <p className="text-sm text-gray-300">2.5x point multiplier, 18% APY</p>
                    </div>
                    <div className="flex gap-4">
                      <input 
                        type="text" 
                        placeholder="Amount" 
                        className="px-4 py-2 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                      />
                      <button className="btn-primary">Farm</button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/20 to-accent/30 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-4 md:mb-0">
                      <h4 className="font-bold text-lg">360-Day Lock</h4>
                      <p className="text-sm text-gray-300">4.0x point multiplier, 24% APY</p>
                    </div>
                    <div className="flex gap-4">
                      <input 
                        type="text" 
                        placeholder="Amount" 
                        className="px-4 py-2 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                      />
                      <button className="btn-primary">Farm</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Your Stats</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-accent/30 rounded-lg">
                    <div className="text-sm text-gray-400">Total Staked</div>
                    <div className="text-2xl font-bold">0 $FIELD</div>
                  </div>
                  
                  <div className="p-4 bg-accent/30 rounded-lg">
                    <div className="text-sm text-gray-400">Pending Rewards</div>
                    <div className="text-2xl font-bold text-primary">0 $FIELD</div>
                  </div>
                  
                  <div className="p-4 bg-accent/30 rounded-lg">
                    <div className="text-sm text-gray-400">Boost Multiplier</div>
                    <div className="text-2xl font-bold">1.0x</div>
                  </div>
                  
                  <button className="btn-primary w-full">Connect Wallet</button>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Active Farms</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="text-left py-3 px-4 border-b border-accent/30">Pool</th>
                      <th className="text-left py-3 px-4 border-b border-accent/30">APY</th>
                      <th className="text-left py-3 px-4 border-b border-accent/30">Total Value Locked</th>
                      <th className="text-left py-3 px-4 border-b border-accent/30">My Stake</th>
                      <th className="text-left py-3 px-4 border-b border-accent/30">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <div className="flex items-center">
                          <div className="mr-3 text-xl">🏆</div>
                          <div>
                            <div className="font-bold">FIELD Single Stake</div>
                            <div className="text-xs text-gray-400">90 Days</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 border-b border-accent/30 text-green-500">12%</td>
                      <td className="py-4 px-4 border-b border-accent/30">1,245,000 FIELD</td>
                      <td className="py-4 px-4 border-b border-accent/30">-</td>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <button className="btn-primary text-sm px-3 py-1">Stake</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <div className="flex items-center">
                          <div className="mr-3 text-xl">🥈</div>
                          <div>
                            <div className="font-bold">FIELD Single Stake</div>
                            <div className="text-xs text-gray-400">180 Days</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 border-b border-accent/30 text-green-500">18%</td>
                      <td className="py-4 px-4 border-b border-accent/30">2,890,000 FIELD</td>
                      <td className="py-4 px-4 border-b border-accent/30">-</td>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <button className="btn-primary text-sm px-3 py-1">Stake</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <div className="flex items-center">
                          <div className="mr-3 text-xl">🥇</div>
                          <div>
                            <div className="font-bold">FIELD Single Stake</div>
                            <div className="text-xs text-gray-400">360 Days</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 border-b border-accent/30 text-green-500">24%</td>
                      <td className="py-4 px-4 border-b border-accent/30">4,350,000 FIELD</td>
                      <td className="py-4 px-4 border-b border-accent/30">-</td>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <button className="btn-primary text-sm px-3 py-1">Stake</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* Tokenized Clubs Tab */}
        {activeTab === 'clubs' && (
          <TokenizedClubs />
        )}
        
        {/* NFTs Tab */}
        {activeTab === 'nfts' && (
          <div>
            <div className="card mb-8 bg-gradient-to-r from-primary/20 to-accent/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">FIELD NFT Collection</h2>
                  <p className="mb-4">
                    Exclusive digital collectibles commemorating clubs, players, and iconic moments in sports. 
                    FIELD NFTs provide unique benefits within our ecosystem.
                  </p>
                  <button className="btn-primary">Browse Marketplace</button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <img 
                      src="https://placehold.co/300x300/141d26/CCCCCC?text=FC+BARCELONA" 
                      alt="Club NFT" 
                      className="w-full h-auto rounded-lg mb-2" 
                    />
                    <div className="font-bold">FC Barcelona NFT</div>
                    <div className="text-xs text-gray-400">Floor: 0.25 ETH</div>
                  </div>
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <img 
                      src="https://placehold.co/300x300/141d26/CCCCCC?text=PLAYER+CARD" 
                      alt="Player NFT" 
                      className="w-full h-auto rounded-lg mb-2" 
                    />
                    <div className="font-bold">Superstar Player Card</div>
                    <div className="text-xs text-gray-400">Floor: 0.15 ETH</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="card">
                <div className="p-4 bg-primary/20 rounded-full mb-4 w-14 h-14 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Exclusive Access</h3>
                <p className="text-gray-300">
                  Get VIP tickets, meet & greets, and special events access with club NFTs.
                </p>
              </div>
              
              <div className="card">
                <div className="p-4 bg-primary/20 rounded-full mb-4 w-14 h-14 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Revenue Share</h3>
                <p className="text-gray-300">
                  Earn a share of merchandise sales and licensing with player collectibles.
                </p>
              </div>
              
              <div className="card">
                <div className="p-4 bg-primary/20 rounded-full mb-4 w-14 h-14 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Community Status</h3>
                <p className="text-gray-300">
                  Gain special status in FIELD communities and private discussion channels.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Upcoming Drops</h3>
                
                <div className="space-y-4">
                  <div className="bg-accent/30 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-bold">Premier League Collection</div>
                      <div className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">In 3 days</div>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">
                      Limited edition collectibles featuring top Premier League clubs.
                    </p>
                    <button className="btn-primary text-sm">Set Reminder</button>
                  </div>
                  
                  <div className="bg-accent/30 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-bold">Legendary Moments</div>
                      <div className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">In 7 days</div>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">
                      Historic goals, saves, and plays tokenized as collectible moments.
                    </p>
                    <button className="btn-primary text-sm">Set Reminder</button>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-4">NFT Staking</h3>
                <p className="mb-4">
                  Stake your FIELD NFTs to earn additional rewards and utility within the platform.
                </p>
                
                <div className="bg-accent/30 p-4 rounded-lg mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold">Club Collection NFTs</div>
                    <div className="text-green-500">+5% $FIELD Boost</div>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Stake club NFTs to increase your staking rewards and voting power.
                  </p>
                  <button className="btn-primary text-sm">Stake NFTs</button>
                </div>
                
                <div className="bg-accent/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold">Player Card NFTs</div>
                    <div className="text-green-500">Special Perks</div>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Stake player cards for exclusive merchandise discounts and experiences.
                  </p>
                  <button className="btn-primary text-sm">Stake NFTs</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default TokensPage 