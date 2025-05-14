import React, { useState } from 'react';

const NFTs = () => {
  const [activeNft, setActiveNft] = useState('gold');

  return (
    <section id="nfts" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Coach NFT System</h2>
          <p className="subtitle max-w-3xl mx-auto">
            Our Coach NFTs are earned through farming and serve as proof of engagement while providing access to exclusive features.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side - NFT Selection */}
          <div className="md:w-1/3">
            <div className="card space-y-8">
              <h3 className="text-2xl font-bold">Choose your level</h3>
              
              <div 
                className={`p-4 rounded-lg cursor-pointer transition-all ${activeNft === 'platinum' ? 'bg-primary/20 border border-primary/50' : 'bg-accent/30 hover:bg-accent/50'}`}
                onClick={() => setActiveNft('platinum')}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-red-500/20 p-3 rounded-full">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Platinum Coach</h4>
                    <p className="text-sm text-gray-300">Highest governance rights</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-300">
                  Requires farming ≥ 500,000 FIELD points for 360+ days
                </p>
              </div>
              
              <div 
                className={`p-4 rounded-lg cursor-pointer transition-all ${activeNft === 'gold' ? 'bg-primary/20 border border-primary/50' : 'bg-accent/30 hover:bg-accent/50'}`}
                onClick={() => setActiveNft('gold')}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-500/20 p-3 rounded-full">
                    <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Gold Coach</h4>
                    <p className="text-sm text-gray-300">Advanced dashboard and votes</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-300">
                  Requires farming ≥ 300,000 FIELD points for 180-360 days
                </p>
              </div>
              
              <div 
                className={`p-4 rounded-lg cursor-pointer transition-all ${activeNft === 'silver' ? 'bg-primary/20 border border-primary/50' : 'bg-accent/30 hover:bg-accent/50'}`}
                onClick={() => setActiveNft('silver')}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gray-400/20 p-3 rounded-full">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Silver Coach</h4>
                    <p className="text-sm text-gray-300">Insights and early alpha</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-300">
                  Requires farming ≥ 150,000 FIELD points for 90-180 days
                </p>
              </div>
              
              <div 
                className={`p-4 rounded-lg cursor-pointer transition-all ${activeNft === 'bronze' ? 'bg-primary/20 border border-primary/50' : 'bg-accent/30 hover:bg-accent/50'}`}
                onClick={() => setActiveNft('bronze')}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-amber-700/20 p-3 rounded-full">
                    <svg className="w-6 h-6 text-amber-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Bronze Coach</h4>
                    <p className="text-sm text-gray-300">Basic access</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-300">
                  Requires farming ≥ 50,000 FIELD points for 90 days
                </p>
              </div>
              
              <div className="pt-4">
                <button className="btn-primary w-full py-3">Start Farming</button>
              </div>
            </div>
          </div>

          {/* Right side - NFT Display */}
          <div className="md:w-2/3">
            <div className="grid sm:grid-cols-2 gap-8">
              {/* NFT Card */}
              <div className="card relative transform hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-blue-500/30 to-purple-500/30 blur-md rounded-xl"></div>
                <div className="card relative z-10 overflow-hidden bg-gradient-to-br from-accent/80 to-accent/50">
                  <div className="aspect-[3/4] relative">
                    {/* NFT Image Placeholder - Would be a real NFT image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {activeNft === 'platinum' && (
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/50 to-primary/20 flex items-center justify-center mb-4">
                            <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold uppercase">Platinum</h3>
                        </div>
                      )}
                      
                      {activeNft === 'gold' && (
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-yellow-500/50 to-yellow-500/20 flex items-center justify-center mb-4">
                            <svg className="w-16 h-16 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold uppercase">Gold</h3>
                        </div>
                      )}
                      
                      {activeNft === 'silver' && (
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gray-400/50 to-gray-400/20 flex items-center justify-center mb-4">
                            <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold uppercase">Silver</h3>
                        </div>
                      )}
                      
                      {activeNft === 'bronze' && (
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-amber-700/50 to-amber-700/20 flex items-center justify-center mb-4">
                            <svg className="w-16 h-16 text-amber-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold uppercase">Bronze</h3>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* NFT Details */}
              <div className="card">
                <h3 className="text-2xl font-bold mb-4">
                  {activeNft === 'platinum' && 'Platinum Coach Benefits'}
                  {activeNft === 'gold' && 'Gold Coach Benefits'}
                  {activeNft === 'silver' && 'Silver Coach Benefits'}
                  {activeNft === 'bronze' && 'Bronze Coach Benefits'}
                </h3>
                
                <div className="space-y-4">
                  {activeNft === 'platinum' && (
                    <>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Full voting rights on club decisions</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>3x reward multiplier on staking</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Revenue sharing from club operations</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Priority access to club events & matches</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Ability to propose new club initiatives</p>
                      </div>
                    </>
                  )}
                  
                  {activeNft === 'gold' && (
                    <>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-yellow-500 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Voting rights on tactical decisions</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-yellow-500 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>1.5x reward multiplier on staking</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-yellow-500 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Access to exclusive community channels</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-yellow-500 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Discounted match tickets</p>
                      </div>
                    </>
                  )}
                  
                  {activeNft === 'silver' && (
                    <>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-400 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Insights and early alpha</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-400 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>1x reward multiplier on staking</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-400 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Access to exclusive community channels</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-400 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Discounted match tickets</p>
                      </div>
                    </>
                  )}
                  
                  {activeNft === 'bronze' && (
                    <>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber-700 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Basic access</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber-700 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>0.5x reward multiplier on staking</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber-700 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Access to exclusive community channels</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber-700 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Discounted match tickets</p>
                      </div>
                    </>
                  )}

                  <div className="mt-6 pt-4 border-t border-accent/30">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Current Price:</span>
                      <span className="font-bold text-lg text-primary">
                        {activeNft === 'platinum' && '0.5 ETH / 10,000 $FIELD'}
                        {activeNft === 'gold' && 'Lock 2,500 $FIELD for 90 days'}
                        {activeNft === 'silver' && 'Lock 1,000 $FIELD for 90 days'}
                        {activeNft === 'bronze' && 'Free'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* NFT Utility Diagram */}
            <div className="mt-8 card">
              <h3 className="text-xl font-bold mb-4">How NFTs Unlock the FIELD Ecosystem</h3>
              
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold">Governance</h4>
                  <p className="text-sm text-gray-300 mt-2">Vote on club decisions based on NFT tier</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-1l1-1 1-1-.257-.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold">Access</h4>
                  <p className="text-sm text-gray-300 mt-2">Unlock exclusive features and experiences</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-yellow-500/20 flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold">Rewards</h4>
                  <p className="text-sm text-gray-300 mt-2">Earn boosted yields and revenue share</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTs; 