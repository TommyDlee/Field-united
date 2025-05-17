import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ProfileSidebar from './components/ProfileSidebar';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [cryptoBalance, setCryptoBalance] = useState({
    btc: 0.00,
    euro: 0.00
  });
  const [currentStep, setCurrentStep] = useState(1);

  const { user, wallet, isAuthenticated, isWeb3Connected, connectWallet, disconnectWallet, logout } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/', { replace: true });
      return;
    }
  }, [isAuthenticated, navigate]);
  
  const handleWalletConnect = async () => {
    if (isWeb3Connected) {
      disconnectWallet();
    } else {
      await connectWallet();
    }
  };
  
  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  // Mock data
  const userId = user?.id || "1112176502";
  const userName = user?.name || "User-edb48";
  
  return (
    <div>
      {/* User info header at the top */}
      <div className="px-6 py-6 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="relative">
                <img 
                  src={user?.avatar || 'https://placehold.co/80x80/2a2a2a/CCCCCC?text=U'} 
                  alt="User Avatar" 
                  className="h-16 w-16 rounded-full border-2 border-accent/30"
                />
                <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              
              <div>
                <h1 className="text-xl font-bold">{userName}</h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                  <div className="flex items-center text-gray-400">
                    <span className="mr-1">UID</span>
                    <span>{userId}</span>
                    <button className="ml-1 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="flex items-center text-gray-400">
                    <span className="mr-1">VIP Level</span>
                    <span>Standard User</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Link to="/resources" className="px-4 py-2 border border-accent/30 rounded-lg hover:bg-accent/10 text-sm transition">
                Help Center
              </Link>
              <button 
                onClick={handleLogout}
                className="px-4 py-2 border border-red-500/30 text-red-500 rounded-lg hover:bg-red-500/10 text-sm transition"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content with sidebar and profile info */}
      <div className="flex">
        <ProfileSidebar />
        
        <div className="flex-1 p-6">
          {/* Onboarding steps */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold mb-6">Get Started</h2>
            
            <div className="flex flex-wrap gap-4">
              <div className={`w-full lg:flex-1 border ${currentStep === 1 ? 'border-primary' : 'border-accent/30'} rounded-lg p-6 relative`}>
                <div className={`absolute -top-3 -left-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${currentStep === 1 ? 'bg-primary text-black' : 'bg-accent text-white'}`}>
                  1
                </div>
                
                <h3 className="text-lg font-bold mb-4">Verify Account</h3>
                <p className="text-gray-400 mb-4">
                  Please complete identity verification to access all FIELD services
                </p>
                
                <div className="flex justify-center mb-4">
                  <img 
                    src="https://placehold.co/120x80/2a2a2a/CCCCCC?text=ID+CARD" 
                    alt="ID Verification" 
                    className="h-20"
                  />
                </div>
                
                <button className="w-full py-2 px-4 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition">
                  Verify
                </button>
              </div>
              
              <div className={`w-full lg:flex-1 border border-accent/30 rounded-lg p-6 relative ${currentStep < 2 ? 'opacity-60' : ''}`}>
                <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
                  2
                </div>
                
                <h3 className="text-lg font-bold mb-4">Deposit</h3>
                <p className="text-gray-400 mb-4">
                  Deposit cryptocurrencies or fiat to start trading
                </p>
                
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                
                <div className="text-center text-gray-400 mb-4">
                  <span className="inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Pending
                  </span>
                </div>
                
                <button 
                  className="w-full py-2 px-4 bg-accent/50 text-white font-medium rounded-lg hover:bg-accent/60 transition"
                  disabled={currentStep < 2}
                >
                  Deposit
                </button>
              </div>
              
              <div className={`w-full lg:flex-1 border border-accent/30 rounded-lg p-6 relative ${currentStep < 3 ? 'opacity-60' : ''}`}>
                <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
                  3
                </div>
                
                <h3 className="text-lg font-bold mb-4">Trade</h3>
                <p className="text-gray-400 mb-4">
                  Buy, sell and exchange cryptocurrencies
                </p>
                
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                
                <div className="text-center text-gray-400 mb-4">
                  <span className="inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Pending
                  </span>
                </div>
                
                <button 
                  className="w-full py-2 px-4 bg-accent/50 text-white font-medium rounded-lg hover:bg-accent/60 transition"
                  disabled={currentStep < 3}
                >
                  Trade
                </button>
              </div>
            </div>
          </div>
          
          {/* Balance */}
          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold flex items-center">
                Estimated Balance
                <button className="ml-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-14-14a1 1 0 00-1.414 0zM17.707 3.707a1 1 0 010 1.414L10.414 12l7.293 7.293a1 1 0 11-1.414 1.414L9 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L7.586 12 .293 4.707a1 1 0 011.414-1.414L9 10.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </h2>
              
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-accent/30 rounded-lg hover:bg-accent/40 text-sm transition">
                  Deposit
                </button>
                <button className="px-4 py-2 bg-accent/30 rounded-lg hover:bg-accent/40 text-sm transition">
                  Withdraw
                </button>
                <div className="relative">
                  <button className="px-4 py-2 bg-accent/30 rounded-lg hover:bg-accent/40 text-sm transition">
                    Fiat
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-baseline">
                <h3 className="text-3xl font-bold mr-2">0.00</h3>
                <div className="flex items-center gap-2">
                  <span className="font-bold">BTC</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-400">≈ $0.00</p>
            </div>
            
            <div className="flex items-center text-sm text-gray-400">
              <span>24h PnL</span>
              <div className="flex items-center ml-2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="ml-2">+ $0.00 (0.00%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 