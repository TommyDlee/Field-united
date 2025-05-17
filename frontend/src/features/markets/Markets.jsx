import React, { useState } from 'react'
import TokenizedClubs from './TokenizedClubs';

const MarketsPage = () => {
  const [activeTab, setActiveTab] = useState('market')
  
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <h1 className="section-title mb-8">FIELD Markets</h1>
        
        {/* Tab Navigation */}
        <div className="flex overflow-x-auto pb-2 mb-8 glassmorphism p-2 rounded-lg">
          <button 
            className={`px-6 py-3 rounded-lg ${activeTab === 'market' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'}`}
            onClick={() => setActiveTab('market')}
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
            NFT Assets
          </button>
        </div>
        
        {/* $FIELD Token Tab */}
        {activeTab === 'market' && (
          <div>
            {/* ... existing market tab content ... */}
          </div>
        )}
        
        {/* Farming Tab */}
        {activeTab === 'farming' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2 card">
                <h2 className="text-xl font-bold mb-4">Farm AVAX to Earn $FIELD</h2>
                <p className="mb-4">
                  Stake your AVAX to earn $FIELD rewards and boost your club voting power. 
                  Choose the farming pool and lock period that works best for you:
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">Choose Farming Pool</h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <button className="px-4 py-2 bg-primary/30 text-primary rounded-lg">AVAX</button>
                    <button className="px-4 py-2 bg-accent/30 hover:bg-accent/50 rounded-lg">ETH</button>
                    <button className="px-4 py-2 bg-accent/30 hover:bg-accent/50 rounded-lg">USDC</button>
                    <button className="px-4 py-2 bg-accent/30 hover:bg-accent/50 rounded-lg">FIELD-AVAX LP</button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-primary/20 to-accent/30 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-4 md:mb-0">
                      <h4 className="font-bold text-lg">90-Day AVAX Lock</h4>
                      <p className="text-sm text-gray-300">1.5x point multiplier, 15% APY in $FIELD</p>
                    </div>
                    <div className="flex gap-4">
                      <input 
                        type="text" 
                        placeholder="AVAX Amount" 
                        className="px-4 py-2 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                      />
                      <button className="btn-primary">Farm</button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/20 to-accent/30 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-4 md:mb-0">
                      <h4 className="font-bold text-lg">180-Day AVAX Lock</h4>
                      <p className="text-sm text-gray-300">2.5x point multiplier, 22% APY in $FIELD</p>
                    </div>
                    <div className="flex gap-4">
                      <input 
                        type="text" 
                        placeholder="AVAX Amount" 
                        className="px-4 py-2 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                      />
                      <button className="btn-primary">Farm</button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/20 to-accent/30 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-4 md:mb-0">
                      <h4 className="font-bold text-lg">360-Day AVAX Lock</h4>
                      <p className="text-sm text-gray-300">4.0x point multiplier, 30% APY in $FIELD</p>
                    </div>
                    <div className="flex gap-4">
                      <input 
                        type="text" 
                        placeholder="AVAX Amount" 
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
                    <div className="flex justify-between">
                      <div className="text-2xl font-bold">0 AVAX</div>
                      <div className="text-sm text-gray-400 self-end">≈ $0.00 USD</div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-accent/30 rounded-lg">
                    <div className="text-sm text-gray-400">Pending Rewards</div>
                    <div className="flex justify-between">
                      <div className="text-2xl font-bold text-primary">0 $FIELD</div>
                      <div className="text-sm text-gray-400 self-end">≈ $0.00 USD</div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-accent/30 rounded-lg flex justify-between">
                    <div>
                      <div className="text-sm text-gray-400">Boost Multiplier</div>
                      <div className="text-2xl font-bold">1.0x</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Current APY</div>
                      <div className="text-2xl font-bold text-green-500">15%</div>
                    </div>
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
                      <th className="text-left py-3 px-4 border-b border-accent/30">APY in $FIELD</th>
                      <th className="text-left py-3 px-4 border-b border-accent/30">Total Value Locked</th>
                      <th className="text-left py-3 px-4 border-b border-accent/30">My Stake</th>
                      <th className="text-left py-3 px-4 border-b border-accent/30">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <div className="flex items-center">
                          <div className="mr-3 text-xl">⚡</div>
                          <div>
                            <div className="font-bold">AVAX Stake</div>
                            <div className="text-xs text-gray-400">90 Days</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 border-b border-accent/30 text-green-500">15%</td>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <div className="font-bold">17,500 AVAX</div>
                        <div className="text-xs text-gray-400">≈ $2.3M USD</div>
                      </td>
                      <td className="py-4 px-4 border-b border-accent/30">-</td>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <button className="btn-primary text-sm px-3 py-1">Stake</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <div className="flex items-center">
                          <div className="mr-3 text-xl">🔥</div>
                          <div>
                            <div className="font-bold">AVAX Stake</div>
                            <div className="text-xs text-gray-400">180 Days</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 border-b border-accent/30 text-green-500">22%</td>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <div className="font-bold">28,450 AVAX</div>
                        <div className="text-xs text-gray-400">≈ $3.8M USD</div>
                      </td>
                      <td className="py-4 px-4 border-b border-accent/30">-</td>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <button className="btn-primary text-sm px-3 py-1">Stake</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <div className="flex items-center">
                          <div className="mr-3 text-xl">💎</div>
                          <div>
                            <div className="font-bold">AVAX Stake</div>
                            <div className="text-xs text-gray-400">360 Days</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 border-b border-accent/30 text-green-500">30%</td>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <div className="font-bold">42,180 AVAX</div>
                        <div className="text-xs text-gray-400">≈ $5.6M USD</div>
                      </td>
                      <td className="py-4 px-4 border-b border-accent/30">-</td>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <button className="btn-primary text-sm px-3 py-1">Stake</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <div className="flex items-center">
                          <div className="mr-3 text-xl">🌊</div>
                          <div>
                            <div className="font-bold">FIELD-AVAX LP</div>
                            <div className="text-xs text-gray-400">No lock</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 border-b border-accent/30 text-green-500">35%</td>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <div className="font-bold">18,240 AVAX</div>
                        <div className="text-xs text-gray-400">≈ $2.4M USD</div>
                      </td>
                      <td className="py-4 px-4 border-b border-accent/30">-</td>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <button className="btn-primary text-sm px-3 py-1">Add LP</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <div className="flex items-center">
                          <div className="mr-3 text-xl">⛓️</div>
                          <div>
                            <div className="font-bold">ETH Stake</div>
                            <div className="text-xs text-gray-400">90 Days</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 border-b border-accent/30 text-green-500">12%</td>
                      <td className="py-4 px-4 border-b border-accent/30">
                        <div className="font-bold">485 ETH</div>
                        <div className="text-xs text-gray-400">≈ $1.6M USD</div>
                      </td>
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
            {/* ... existing NFT tab content ... */}
          </div>
        )}
      </div>
    </section>
  )
}

export default MarketsPage 