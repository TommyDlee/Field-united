import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Standings from './components/Standings';

const StandingsPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="section-title mb-2">FIELD League Standings</h1>
            <p className="text-gray-300">View current standings of all clubs across divisions</p>
          </div>
          
          <div className="flex gap-3 mt-4 md:mt-0">
            <Link to="/league" className="btn-secondary">
              Back to League
            </Link>
          </div>
        </div>
        
        {/* League explanation */}
        <div className="glassmorphism p-6 rounded-lg mb-10">
          <h2 className="text-xl font-semibold text-white mb-4">League Structure</h2>
          <p className="text-gray-300 mb-4">
            The FIELD League is structured in a hierarchical system with 50 clubs competing across three divisions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-primary mb-2">National Division</h3>
              <p>The top 10 clubs compete at the national level. The top performers earn the highest rewards and prestige.</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-primary mb-2">Regional Division</h3>
              <p>20 clubs battling at the regional level. Top 3 teams are promoted to National, while bottom 3 are relegated.</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-primary mb-2">District Division</h3>
              <p>20 clubs competing at the district level. Top 3 teams are promoted to Regional division.</p>
            </div>
          </div>
        </div>
        
        {/* Standings component */}
        <Standings />
        
        {/* Call to action */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Join the FIELD League Revolution</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Become part of the first decentralized sports league where clubs are tokenized and fans have real ownership and voting power.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/league" className="btn-primary">
              Explore Clubs
            </Link>
            {isAuthenticated ? (
              <Link to="/markets" className="btn-secondary">
                Trade Club Tokens
              </Link>
            ) : (
              <button className="btn-secondary" onClick={() => window.scrollTo(0, 0)}>
                Learn More
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandingsPage; 