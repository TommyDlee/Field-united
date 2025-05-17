import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import LoginModal from '../../components/LoginModal';

const Hero = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuthenticated, isWeb3Connected, connectWallet } = useAuth();

  const handleAuthAction = () => {
    setShowLoginModal(true);
  };

  const handleWalletConnect = async () => {
    try {
      await connectWallet();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  return (
    <section className="relative bg-dark min-h-[90vh] flex items-center">
      {/* Navigation buttons for landing page */}
      <div className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-primary font-bold text-xl">FIELD</span>
          </div>
          <div className="flex gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                {isWeb3Connected ? (
                  <div className="flex items-center">
                    <div className="flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1 rounded-lg mr-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs">Wallet Connected</span>
                    </div>
                  </div>
                ) : (
                  <button 
                    className="btn-primary" 
                    onClick={handleWalletConnect}
                  >
                    Connect Wallet
                  </button>
                )}
              </div>
            ) : (
              <>
                <button 
                  onClick={handleAuthAction}
                  className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-accent/30 transition text-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Sign In
                </button>
                <button 
                  className="btn-primary" 
                  onClick={handleAuthAction}
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 opacity-20 bg-[url('/image1.png')] bg-cover bg-center"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-primary">Tokenize</span> Sports.<br />
            <span className="text-primary">Empower</span> Clubs.<br />
            <span className="text-primary">Unite</span> Fans.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            FIELD is the first sports tokenization platform that connects fans with real club assets and decision-making power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleAuthAction} 
              className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-3 rounded-md font-medium transition duration-300"
            >
              Join the Movement
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark text-lg px-8 py-3 rounded-md font-medium transition duration-300">
              Learn More
            </button>
          </div>
          <div className="mt-12 flex items-center space-x-6">
            <div className="text-gray-400">Trusted by:</div>
            <div className="flex space-x-8">
              <img src="/image2.png" alt="Club 1" className="h-8 opacity-60 hover:opacity-100 transition" />
              <img src="/image3.png" alt="Club 2" className="h-8 opacity-60 hover:opacity-100 transition" />
              <img src="/image4.png" alt="Club 3" className="h-8 opacity-60 hover:opacity-100 transition" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </section>
  );
};

export default Hero; 