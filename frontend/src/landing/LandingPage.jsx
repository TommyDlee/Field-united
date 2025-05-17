import React from 'react';
import Hero from './components/Hero';
import WhatIsField from './components/WhatIsField';
import FieldLeague from './components/FieldLeague';
import Tokenomics from './components/Tokenomics';
import NFTs from './components/NFTs';
import ClubShowcase from './components/ClubShowcase';
import JoinMovement from './components/JoinMovement';

const LandingPage = () => {
  return (
    <main className="pt-navbar">
      <Hero />
      <WhatIsField />
      <FieldLeague />
      <Tokenomics />
      <NFTs />
      <ClubShowcase />
      <JoinMovement />
    </main>
  );
};

export default LandingPage; 