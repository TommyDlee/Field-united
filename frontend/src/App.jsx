import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsField from './components/WhatIsField';
import FieldLeague from './components/FieldLeague';
import Tokenomics from './components/Tokenomics';
import NFTs from './components/NFTs';
import ClubShowcase from './components/ClubShowcase';
import JoinMovement from './components/JoinMovement';
import Footer from './components/Footer';
import DAppRedirect from './components/DAppRedirect';

// Main content component
const MainContent = () => (
  <>
    <Hero />
    <WhatIsField />
    <FieldLeague />
    <Tokenomics />
    <NFTs />
    <ClubShowcase />
    <JoinMovement />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/dapp" element={<DAppRedirect />} />
            <Route path="/dapp/*" element={<DAppRedirect />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 