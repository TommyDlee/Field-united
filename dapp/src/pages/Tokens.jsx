import React, { useState } from 'react'

const Tokens = () => {
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
                      <p className="text-sm text-gray-300">4.0x point multiplier, 26% APY</p>
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
                <h3 className="text-xl font-bold mb-4">My Farming Stats</h3>
                
                <div className="space-y-4">
                  <div className="bg-accent/40 p-4 rounded-lg">
                    <div className="text-sm text-gray-400">Total Staked</div>
                    <div className="font-bold text-xl">0 $FIELD</div>
                  </div>
                  
                  <div className="bg-accent/40 p-4 rounded-lg">
                    <div className="text-sm text-gray-400">Pending Rewards</div>
                    <div className="font-bold text-xl">0 $FIELD</div>
                  </div>
                  
                  <div className="bg-accent/40 p-4 rounded-lg">
                    <div className="text-sm text-gray-400">Boost Power</div>
                    <div className="font-bold text-xl">0x</div>
                  </div>
                </div>
                
                <button className="btn-primary w-full mt-4" disabled>Claim Rewards</button>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Farming Benefits</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-accent/30 p-4 rounded-lg">
                  <div className="p-3 bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Regular Rewards</h4>
                  <p className="text-sm text-gray-300">
                    Earn $FIELD tokens as rewards for providing liquidity and supporting the ecosystem
                  </p>
                </div>
                
                <div className="bg-accent/30 p-4 rounded-lg">
                  <div className="p-3 bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Increased Influence</h4>
                  <p className="text-sm text-gray-300">
                    Multiply your voting power in governance and club selection
                  </p>
                </div>
                
                <div className="bg-accent/30 p-4 rounded-lg">
                  <div className="p-3 bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Early Access</h4>
                  <p className="text-sm text-gray-300">
                    Get priority access to club token offerings and infrastructure investments
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* NFTs Tab */}
        {activeTab === 'nfts' && (
          <div>
            <div className="card mb-8">
              <h2 className="text-xl font-bold mb-4">FIELD NFT Collections</h2>
              <p className="mb-4">
                FIELD NFTs provide special access, rewards, and digital collectibles tied to real world clubs and infrastructure.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="card bg-gradient-to-br from-primary/20 to-accent/30 p-0 overflow-hidden">
                  <div className="h-40 bg-accent/50 flex items-center justify-center">
                    <div className="text-6xl">🏆</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">Founders Collection</h3>
                    <p className="text-sm text-gray-300 mb-3">Limited edition NFTs for early adopters</p>
                    <div className="flex justify-between text-sm">
                      <span>Price</span>
                      <span className="font-mono">Coming Soon</span>
                    </div>
                  </div>
                </div>
                
                <div className="card bg-gradient-to-br from-primary/20 to-accent/30 p-0 overflow-hidden">
                  <div className="h-40 bg-accent/50 flex items-center justify-center">
                    <div className="text-6xl">⚽</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">Club Memberships</h3>
                    <p className="text-sm text-gray-300 mb-3">Digital memberships with real benefits</p>
                    <div className="flex justify-between text-sm">
                      <span>Price</span>
                      <span className="font-mono">Varies</span>
                    </div>
                  </div>
                </div>
                
                <div className="card bg-gradient-to-br from-primary/20 to-accent/30 p-0 overflow-hidden">
                  <div className="h-40 bg-accent/50 flex items-center justify-center">
                    <div className="text-6xl">🏟️</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">Infrastructure Certificates</h3>
                    <p className="text-sm text-gray-300 mb-3">Proof of ownership in facilities</p>
                    <div className="flex justify-between text-sm">
                      <span>Price</span>
                      <span className="font-mono">From $500</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button className="btn-primary">Connect to View NFTs</button>
              </div>
            </div>
            
            <div className="card bg-gradient-to-r from-primary/20 to-accent/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">Stay Updated on NFT Drops</h3>
                  <p className="text-gray-300">Get notified when new NFT collections are released</p>
                </div>
                
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="px-4 py-2 bg-accent/50 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                  <button className="btn-primary rounded-l-none">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Tokens 