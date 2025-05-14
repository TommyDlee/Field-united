import React from 'react';

const Tokenomics = () => {
  return (
    <section id="farm" className="py-24 relative bg-gradient-to-b from-transparent to-accent/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Tokenomics & Farming</h2>
          <p className="subtitle max-w-3xl mx-auto">
            FIELD operates on a double-token model with built-in redistribution mechanics to reward participants.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Token Structure */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-6 text-primary">Double Token Model</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-bold">$FIELD</span>
                  <span className="text-sm text-gray-400">Subnet Gas & Utility</span>
                </div>
                <div>
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">Gas + Utility</span>
                  <span className="text-sm text-gray-400">On Subnet</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-bold">$CLUBX</span>
                  <span className="text-sm text-gray-400">Club-specific tokens</span>
                </div>
                <div>
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">Invest-to-Earn</span>
                  <span className="text-sm text-gray-400">Club investment</span>
                </div>
              </div>
              
              <div className="border-t border-accent/30 pt-4 mt-2">
                <h4 className="font-bold mb-2">Tax Distribution</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">$CLUBX Holders</span>
                    <span className="font-bold">50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">FIELD Treasury</span>
                    <span className="font-bold">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Club Partner</span>
                    <span className="font-bold">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Liquidity/Buyback</span>
                    <span className="font-bold">10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Farming Card */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-6 text-primary">Farming Strategy</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-accent/30">
                <div className="font-bold">How It Works</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-primary">1</div>
                <div>Deposit ETH or AVAX</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-primary">2</div>
                <div>Earn FIELD points based on amount & time</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-primary">3</div>
                <div>Redeem for $FIELD tokens at launch</div>
              </div>
              
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-accent/30">
                <div className="font-bold">Duration Bonus</div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="font-medium">90 days</div>
                <div className="text-lg font-mono">1.5x points</div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="font-medium">180 days</div>
                <div className="text-lg font-mono">2.5x points</div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="font-medium">360 days</div>
                <div className="text-lg font-mono">4.0x points</div>
              </div>
            </div>
          </div>
          
          {/* Token Stats */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-6 text-primary">$FIELD Token</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-accent/30">
                <div className="font-bold">Network</div>
                <div className="font-mono">Avalanche Subnet</div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="font-medium">Current TVL</div>
                <div className="font-mono text-primary">$7.2M</div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="font-medium">Active Farmers</div>
                <div className="font-mono">3,450+</div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="font-medium">Farming Launch</div>
                <div className="font-mono">ACTIVE</div>
              </div>
              
              <div className="flex justify-between items-center pt-4 mt-6 border-t border-accent/30">
                <button className="btn-primary w-full py-3">Start Farming</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Donut chart visualization would go here in a real implementation */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="w-64 h-64 relative">
              {/* This would be replaced by a real chart component */}
              <div className="w-full h-full rounded-full border-8 border-primary/30 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full border-8 border-primary/60 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 rounded-full bg-primary flex items-center justify-center text-black font-bold">
                    50%
                  </div>
                </div>
              </div>
              <div className="absolute top-0 -right-24 bg-accent/30 p-3 rounded-lg">
                <p className="font-bold">$CLUBX</p>
                <p className="text-sm text-gray-300">Tax distribution</p>
              </div>
              <div className="absolute bottom-0 -left-24 bg-accent/30 p-3 rounded-lg">
                <p className="font-bold">$FIELD</p>
                <p className="text-sm text-gray-300">Gas token</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">$FIELD Token Allocation</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>Farming Rewards</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-accent/30 h-2 rounded-full mt-1">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>Team & Development</span>
                    <span>20%</span>
                  </div>
                  <div className="w-full bg-accent/30 h-2 rounded-full mt-1">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>Partnerships</span>
                    <span>15%</span>
                  </div>
                  <div className="w-full bg-accent/30 h-2 rounded-full mt-1">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>Liquidity</span>
                    <span>15%</span>
                  </div>
                  <div className="w-full bg-accent/30 h-2 rounded-full mt-1">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>Subnet Operation</span>
                    <span>10%</span>
                  </div>
                  <div className="w-full bg-accent/30 h-2 rounded-full mt-1">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics; 