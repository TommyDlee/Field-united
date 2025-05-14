import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 top-16 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/60"></div>
        <img 
          src="/image1.png" 
          alt="Football stadium" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 py-12 z-10 relative mt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Invest in Football.</span>
              <span className="block mt-2">Earn from the Game.</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              The first Avalanche Subnet dedicated to tokenized football clubs. Exchange club tokens, earn from redistribution and build your influence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Start Staking</button>
              <button className="border border-primary text-primary font-bold py-2 px-6 rounded-lg hover:bg-primary/10 transition-all">
                Get Coach NFT
              </button>
              <button className="border border-white/30 text-white font-bold py-2 px-6 rounded-lg hover:bg-white/10 transition-all">
                Read Whitepaper
              </button>
            </div>

            {/* Mini Navigation */}
            <div className="flex flex-wrap gap-4 mt-12">
              <a href="#what-is-field" className="text-sm bg-accent/30 px-4 py-2 rounded-full hover:bg-accent/50 transition-all">
                What is FIELD?
              </a>
              <a href="#tokenomics" className="text-sm bg-accent/30 px-4 py-2 rounded-full hover:bg-accent/50 transition-all">
                Tokenomics
              </a>
              <a href="#nfts" className="text-sm bg-accent/30 px-4 py-2 rounded-full hover:bg-accent/50 transition-all">
                NFTs
              </a>
              <a href="#clubs" className="text-sm bg-accent/30 px-4 py-2 rounded-full hover:bg-accent/50 transition-all">
                Clubs
              </a>
              <a href="#join" className="text-sm bg-accent/30 px-4 py-2 rounded-full hover:bg-accent/50 transition-all">
                Join
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            {/* Single rounded card with app image */}
            <div className="relative transform hover:scale-[1.01] transition-all duration-300 max-w-md mx-auto">
              <img 
                src="/image3.png" 
                alt="FIELD Mobile App" 
                className="w-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 