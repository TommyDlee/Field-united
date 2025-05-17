import React, { createContext, useState, useContext, useEffect } from 'react';

// Context for authentication
export const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isWeb3Connected, setIsWeb3Connected] = useState(false);
  const [wallet, setWallet] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  
  // Initialize auth state
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check for stored session
        const storedUser = localStorage.getItem('fieldUser');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
        
        // Check for stored wallet connection
        const storedWallet = localStorage.getItem('fieldWallet');
        if (storedWallet) {
          setWallet(JSON.parse(storedWallet));
          setIsWeb3Connected(true);
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setAuthLoading(false);
      }
    };
    
    checkAuth();
  }, []);
  
  // Web2 Login
  const loginWithCredentials = async (email, password) => {
    setAuthLoading(true);
    try {
      // Simulate API call
      // In a real app, this would be an API request to your backend
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock user data
      const userData = {
        id: 'user123',
        name: email.split('@')[0],
        email,
        role: 'user',
        authMethod: 'credentials'
      };
      
      setUser(userData);
      localStorage.setItem('fieldUser', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message || 'Login failed' };
    } finally {
      setAuthLoading(false);
    }
  };
  
  // Register with credentials
  const registerWithCredentials = async (name, email, password) => {
    setAuthLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const userData = {
        id: 'user' + Math.floor(Math.random() * 1000),
        name,
        email,
        role: 'user',
        authMethod: 'credentials'
      };
      
      setUser(userData);
      localStorage.setItem('fieldUser', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: error.message || 'Registration failed' };
    } finally {
      setAuthLoading(false);
    }
  };
  
  // Web3 Login with wallet
  const connectWallet = async () => {
    setAuthLoading(true);
    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum === 'undefined') {
        throw new Error('MetaMask is not installed. Please install it to continue.');
      }
      
      // Request account access
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      
      // Get the current chain ID
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      
      // Save wallet info
      const walletData = {
        address: account,
        chainId,
        connectedAt: new Date().toISOString()
      };
      
      setWallet(walletData);
      setIsWeb3Connected(true);
      localStorage.setItem('fieldWallet', JSON.stringify(walletData));
      
      // If no user is logged in, create a wallet-based user
      if (!user) {
        const walletUser = {
          id: `wallet_${account.substring(2, 8)}`,
          name: `${account.substring(0, 6)}...${account.substring(38)}`,
          authMethod: 'wallet',
          walletAddress: account
        };
        
        setUser(walletUser);
        localStorage.setItem('fieldUser', JSON.stringify(walletUser));
      }
      
      return { success: true, address: account };
    } catch (error) {
      console.error('Wallet connection error:', error);
      return { success: false, error: error.message || 'Failed to connect wallet' };
    } finally {
      setAuthLoading(false);
    }
  };
  
  // Disconnect wallet
  const disconnectWallet = () => {
    setWallet(null);
    setIsWeb3Connected(false);
    localStorage.removeItem('fieldWallet');
    
    // If user was only authenticated via wallet, log them out
    if (user && user.authMethod === 'wallet') {
      logout();
    }
    
    return { success: true };
  };
  
  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('fieldUser');
    
    // Also disconnect wallet if connected
    if (isWeb3Connected) {
      disconnectWallet();
    }
    
    return { success: true };
  };
  
  // AuthContext value
  const authContextValue = {
    user,
    wallet,
    isAuthenticated: !!user,
    isWeb3Connected,
    authLoading,
    loginWithCredentials,
    registerWithCredentials,
    connectWallet,
    disconnectWallet,
    logout
  };
  
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; 