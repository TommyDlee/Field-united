import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  const { user, isAuthenticated, isWeb3Connected, connectWallet, logout } = useAuth();
  
  // Navigation links
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'League', path: '/league' },
    { name: 'Markets', path: '/markets' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Resources', path: '/resources' }
  ];

  const toggleDropdown = (key) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(key);
    }
  };
  
  const handleAuthAction = async () => {
    if (isAuthenticated) {
      // If already authenticated, do nothing when clicking profile
      return;
    }
    
    // If not authenticated, show login modal
    setShowLoginModal(true);
  };
  
  const handleWalletConnect = async () => {
    if (isWeb3Connected) {
      return; // No action if already connected - wallet disconnect is in profile
    }
    
    try {
      await connectWallet();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  return (
    <>
      <nav className="glassmorphism fixed w-full z-50 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-primary font-bold text-xl">FIELD</span>
              {isAuthenticated && <span className="text-xs ml-1 bg-primary/20 text-primary px-2 py-1 rounded">dApp</span>}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <Link to="/profile" className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-accent/30 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm">{user?.name || 'My Profile'}</span>
                </Link>
              ) : (
                <button 
                  onClick={handleAuthAction}
                  className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-accent/30 transition text-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Sign In
                </button>
              )}
              
              {isAuthenticated && isWeb3Connected ? (
                <div className="flex items-center">
                  <div className="flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1 rounded-lg mr-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs">Wallet Connected</span>
                  </div>
                  <button 
                    onClick={logout}
                    className="bg-red-600/20 text-red-400 hover:bg-red-600/30 px-3 py-1 rounded-lg text-xs transition-colors"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <button 
                  className="btn-primary" 
                  onClick={isAuthenticated ? handleWalletConnect : handleAuthAction}
                >
                  {isAuthenticated ? 'Connect Wallet' : 'Get Started'}
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glassmorphism mt-2 py-4 px-6 rounded-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {isAuthenticated ? (
                <Link
                  to="/profile"
                  className="text-white hover:text-primary transition-colors flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  My Profile
                </Link>
              ) : (
                <button 
                  className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowLoginModal(true);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Sign In
                </button>
              )}
              
              {isAuthenticated && !isWeb3Connected && (
                <button 
                  className="btn-primary self-start"
                  onClick={handleWalletConnect}
                >
                  Connect Wallet
                </button>
              )}
              
              {isAuthenticated && isWeb3Connected && (
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs">Wallet Connected</span>
                  </div>
                  <button 
                    className="bg-red-600/20 text-red-400 hover:bg-red-600/30 px-3 py-1 rounded-lg text-xs"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Disconnect
                  </button>
                </div>
              )}
              
              {isAuthenticated && (
                <button 
                  className="text-red-500 hover:text-red-400 self-start mt-4"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                >
                  Log Out
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
      
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </>
  );
};

export default Navbar; 