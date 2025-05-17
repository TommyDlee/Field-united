/**
 * This is a mock hook to provide compatibility with the shared Navbar component
 * In the frontend, authentication is not actually implemented, but this allows the navbar
 * to function properly and redirect users to the DApp for actual authentication
 */

import { useState, useEffect } from 'react';

export const useNavbar = () => {
  // Mock values that mimic the AuthContext but don't actually authenticate
  return {
    isAuthenticated: false,
    user: null,
    isWeb3Connected: false,
    authLoading: false,
    
    // These functions will not be called directly in the frontend
    // since the navbar redirects to the dapp for auth actions
    loginWithCredentials: () => ({ success: false, error: 'Not implemented in frontend' }),
    registerWithCredentials: () => ({ success: false, error: 'Not implemented in frontend' }),
    connectWallet: () => ({ success: false, error: 'Not implemented in frontend' }),
    disconnectWallet: () => ({ success: false }),
    logout: () => ({ success: false })
  };
};

export default useNavbar; 