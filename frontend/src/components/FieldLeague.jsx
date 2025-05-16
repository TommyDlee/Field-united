import React from 'react';

const FieldLeague = () => {
  return (
    <section id="field-league" className="py-24 relative bg-gradient-to-b from-accent/5 to-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title flex items-center justify-center gap-3">
            <span>FIELD League</span>
            <span className="text-3xl">⚽️</span>
          </h2>
          <p className="subtitle max-w-3xl mx-auto">
            Sponsor clubs. Help your favorites win.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="card relative z-10 overflow-hidden">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-primary">How It Works 🎯</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg min-w-[40px] text-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold">Clubs join the League</h4>
                    <p className="text-gray-300">Free of charge, through our app</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg min-w-[40px] text-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold">Fans vote for their favorite club</h4>
                    <p className="text-gray-300">With a simple account, or by boosting their vote with $FIELD tokens</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg min-w-[40px] text-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold">Monthly sponsorship for top supported clubs</h4>
                    <p className="text-gray-300">The more votes a club receives, the higher it ranks and the more support it gets</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg min-w-[40px] text-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold">Winners take their club to the next level</h4>
                    <p className="text-gray-300">Dedicated page, visibility, rewards, and potential for club tokenization</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-accent/30">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>Everyone Wins</span>
                  <span>🤝</span>
                </h3>
                
                <ul className="space-y-2 list-disc pl-5 text-gray-300">
                  <li>Clubs gain visibility and funding</li>
                  <li>Fans participate, influence and build the future</li>
                  <li>FIELD identifies promising clubs and guides them toward the new model: sports tokenization</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <p className="text-lg mb-6">
              The FIELD League is a community competition open to all. It allows football, padel, rugby, basketball, and other sports clubs to gain visibility, unite their fans... and receive real financial support, distributed by the FIELD community.
            </p>
            
            <div className="card bg-gradient-to-br from-primary/10 to-accent/20 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>No Tokens Required to Participate</span>
                <span>🔓</span>
              </h3>
              <p className="text-gray-300">
                But the more engaged you are, the more impact you have.
                Staking, sharing, NFTs... everything counts to make your club shine.
              </p>
            </div>
            
            <div className="card bg-gradient-to-br from-accent/20 to-primary/10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>Join the FIELD League</span>
                <span>🚀</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Participate in the competition. Give strength to your club.
                And perhaps thanks to you, it will be the next to enter the future of sport.
              </p>
              
              <button className="btn-primary w-full py-3">
                Join the League
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldLeague; 