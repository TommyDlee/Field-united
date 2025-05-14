import React, { useState } from 'react';

const JoinMovement = () => {
  const [email, setEmail] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleWalletChange = (e) => {
    setWalletAddress(e.target.value);
  };
  
  const connectWallet = () => {
    // In a real app, this would connect to MetaMask or other wallet
    setIsWalletConnected(true);
    setWalletAddress('0x71C7...F5a2');
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    alert(`Joined with ${email} and wallet ${walletAddress}`);
  };
  
  return (
    <section id="join" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Join the Movement</h2>
            <p className="subtitle max-w-3xl mx-auto">
              Become a digital club president and help shape the future of football.
            </p>
          </div>
          
          <div className="card bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
                <p className="text-gray-300 mb-6">
                  Join the FIELD community and gain early access to exclusive investment opportunities, governance rights, and token rewards.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-accent/30 border border-accent/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="your@email.com"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="wallet" className="block text-sm font-medium mb-1">Wallet Address</label>
                    <div className="flex">
                      <input
                        type="text"
                        id="wallet"
                        className="flex-1 bg-accent/30 border border-accent/50 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="0x..."
                        value={walletAddress}
                        onChange={handleWalletChange}
                        disabled={isWalletConnected}
                        required
                      />
                      <button
                        type="button"
                        onClick={connectWallet}
                        className="bg-primary/20 border border-primary/50 text-primary px-4 py-2 rounded-r-lg hover:bg-primary/30 transition-all"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button type="submit" className="btn-primary w-full py-3">
                      Join Waitlist
                    </button>
                  </div>
                </form>
                
                <div className="mt-6 text-center text-sm text-gray-400">
                  By joining, you agree to our Terms of Service and Privacy Policy
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Exclusive Presale Access</h4>
                      <p className="text-sm text-gray-300">
                        Early investors get premium allocation and bonus tokens
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Community Membership</h4>
                      <p className="text-sm text-gray-300">
                        Join our active community of football and crypto enthusiasts
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">First Access to New Clubs</h4>
                      <p className="text-sm text-gray-300">
                        Get priority access when new clubs join the FIELD ecosystem
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-accent/30">
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a 
                      href="https://discord.com/channels/1369771903669108856/1369777061736218765" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-accent/30 hover:bg-accent/50 px-4 py-2 rounded-lg transition-all"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 71 55" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
                      </svg>
                      Discord
                    </a>
                    
                    <a 
                      href="https://x.com/FieldUnitedLabs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-accent/30 hover:bg-accent/50 px-4 py-2 rounded-lg transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      X
                    </a>
                    
                    <a 
                      href="https://mirror.xyz/field" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-accent/30 hover:bg-accent/50 px-4 py-2 rounded-lg transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3-10c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3z" />
                      </svg>
                      Mirror Blog
                    </a>
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

export default JoinMovement; 