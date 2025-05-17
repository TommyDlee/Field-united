import React, { useState } from 'react';

const NFTs = () => {
  const [activeNft, setActiveNft] = useState('gold');

  return (
    <section id="nfts" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Invest in Coach NFTs</h2>
          <p className="subtitle max-w-3xl mx-auto">
            Secure your position in the ecosystem with revenue-generating NFTs that provide governance rights and exclusive benefits.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side - NFT Selection */}
          <div className="md:w-1/3">
            <div className="card space-y-6">
              <h3 className="text-2xl font-bold">Choose your investment tier</h3>
              
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
                    <h4 className="font-bold text-lg">Platinum Tier</h4>
                    <p className="text-sm text-primary">24% APY + Revenue Share</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <span className="text-sm">Investment: 500,000 FIELD</span>
                  <span className="text-sm text-green-400">Highest Returns</span>
                </div>
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
                    <h4 className="font-bold text-lg">Gold Tier</h4>
                    <p className="text-sm text-primary">18% APY + Voting Rights</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <span className="text-sm">Investment: 300,000 FIELD</span>
                  <span className="text-sm text-yellow-400">Popular Choice</span>
                </div>
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
                    <h4 className="font-bold text-lg">Silver Tier</h4>
                    <p className="text-sm text-primary">12% APY + Early Access</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <span className="text-sm">Investment: 150,000 FIELD</span>
                  <span className="text-sm text-gray-400">Balanced Option</span>
                </div>
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
                    <h4 className="font-bold text-lg">Bronze Tier</h4>
                    <p className="text-sm text-primary">8% APY + Basic Access</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <span className="text-sm">Investment: 50,000 FIELD</span>
                  <span className="text-sm text-amber-700">Entry Level</span>
                </div>
              </div>
              
              <div className="pt-4">
                <button className="btn-primary w-full py-3">Invest Now</button>
              </div>
            </div>
          </div>

          {/* Right side - NFT Investment Benefits */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* NFT Card */}
              <div className="card relative transform hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-blue-500/30 to-purple-500/30 blur-md rounded-xl"></div>
                <div className="card relative z-10 overflow-hidden bg-gradient-to-br from-accent/80 to-accent/50">
                  <div className="aspect-[4/3] relative flex items-center justify-center p-6">
                    {activeNft === 'platinum' && (
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-red-500/50 to-red-500/20 flex items-center justify-center mb-4">
                          <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold uppercase">Platinum</h3>
                        <div className="mt-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm inline-block">24% APY</div>
                      </div>
                    )}
                    
                    {activeNft === 'gold' && (
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-yellow-500/50 to-yellow-500/20 flex items-center justify-center mb-4">
                          <svg className="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold uppercase">Gold</h3>
                        <div className="mt-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm inline-block">18% APY</div>
                      </div>
                    )}
                    
                    {activeNft === 'silver' && (
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gray-400/50 to-gray-400/20 flex items-center justify-center mb-4">
                          <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold uppercase">Silver</h3>
                        <div className="mt-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm inline-block">12% APY</div>
                      </div>
                    )}
                    
                    {activeNft === 'bronze' && (
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-amber-700/50 to-amber-700/20 flex items-center justify-center mb-4">
                          <svg className="w-12 h-12 text-amber-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold uppercase">Bronze</h3>
                        <div className="mt-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm inline-block">8% APY</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Investment Benefits */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4">
                  {activeNft === 'platinum' && 'Platinum Investment Benefits'}
                  {activeNft === 'gold' && 'Gold Investment Benefits'}
                  {activeNft === 'silver' && 'Silver Investment Benefits'}
                  {activeNft === 'bronze' && 'Bronze Investment Benefits'}
                </h3>
                
                <div className="space-y-4">
                  {activeNft === 'platinum' && (
                    <>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>24% APY base rewards</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Full revenue sharing from club operations</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Maximum governance voting power</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>VIP access to all club events and matches</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Ability to propose new investment initiatives</p>
                      </div>
                    </>
                  )}
                  
                  {activeNft === 'gold' && (
                    <>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-yellow-500 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>18% APY base rewards</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-yellow-500 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Partial revenue sharing from club operations</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-yellow-500 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Advanced governance voting rights</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-yellow-500 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Priority access to club events</p>
                      </div>
                    </>
                  )}
                  
                  {activeNft === 'silver' && (
                    <>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-400 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>12% APY base rewards</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-400 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Early access to new club token offerings</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-400 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Basic governance voting rights</p>
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
                        <p>8% APY base rewards</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber-700 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Access to community investment channels</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber-700 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Basic governance participation</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber-700 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <p>Entry-level platform benefits</p>
                      </div>
                    </>
                  )}

                  <div className="mt-6 pt-4 border-t border-accent/30">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Lock Period:</span>
                      <span className="font-bold text-lg text-primary">
                        {activeNft === 'platinum' && '360 days'}
                        {activeNft === 'gold' && '180 days'}
                        {activeNft === 'silver' && '90 days'}
                        {activeNft === 'bronze' && '90 days'}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button className="w-full py-2 btn-primary">Calculate Returns</button>
                    </div>
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

export default NFTs; 