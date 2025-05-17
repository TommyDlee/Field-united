import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import './App.css';

// Components
import Navbar from './components/Navbar';

// Landing Page
import LandingPage from './landing/LandingPage';

// DApp Features
import Dashboard from './features/dashboard';
import { FieldLeague, ClubDetailPage } from './features/league';
import Infrastructure from './features/infrastructure';
import Markets from './features/markets';
import Resources from './features/resources';
import ProfilePage from './features/profile';
import { Footer } from './features/common';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, authLoading } = useAuth();
  
  if (authLoading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  return <div className="dapp-container">{children}</div>;
};

function App() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  
  return (
    <div className="min-h-screen bg-dark">
      {(!isLandingPage || isAuthenticated) && <Navbar />}
      
      <Routes>
        {/* Home route - shows marketing content or dashboard based on auth state */}
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <LandingPage />} 
        />
        
        {/* Protected DApp routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/league" element={<ProtectedRoute><FieldLeague /></ProtectedRoute>} />
        <Route path="/league/club/:id" element={<ProtectedRoute><ClubDetailPage /></ProtectedRoute>} />
        <Route path="/markets" element={<ProtectedRoute><Markets /></ProtectedRoute>} />
        <Route path="/infrastructure" element={<ProtectedRoute><Infrastructure /></ProtectedRoute>} />
        <Route path="/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      </Routes>
      
      {!isAuthenticated && <Footer />}
    </div>
  );
}

export default App; 