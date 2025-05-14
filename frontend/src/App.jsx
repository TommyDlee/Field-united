import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsField from './components/WhatIsField';
import Tokenomics from './components/Tokenomics';
import NFTs from './components/NFTs';
import ClubShowcase from './components/ClubShowcase';
import JoinMovement from './components/JoinMovement';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhatIsField />
        <Tokenomics />
        <NFTs />
        <ClubShowcase />
        <JoinMovement />
      </main>
      <Footer />
    </div>
  );
}

export default App; 