import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FieldLeague = () => {
  const [filter, setFilter] = useState('all')
  
  const clubs = [
    {
      id: 1,
      name: 'FC Barcelona',
      logo: '🔵🔴',
      country: 'Spain',
      sport: 'Football',
      description: 'One of the most successful football clubs in the world',
      votes: 8750,
      votePercentage: 24.5,
      trend: 'up'
    },
    {
      id: 2,
      name: 'Manchester City',
      logo: '🔵',
      country: 'England',
      sport: 'Football',
      description: 'Premier League champions seeking global expansion',
      votes: 7230,
      votePercentage: 18.2,
      trend: 'up'
    },
    {
      id: 3,
      name: 'PSG',
      logo: '🔵🔴',
      country: 'France',
      sport: 'Football',
      description: 'Ambitious club with global brand development',
      votes: 6450,
      votePercentage: 12.7,
      trend: 'up'
    },
    {
      id: 4,
      name: 'Padel Club Madrid',
      logo: '🎾',
      country: 'Spain',
      sport: 'Padel',
      description: 'Leading padel club with 24 courts and advanced facilities',
      votes: 3200,
      votePercentage: 7.8,
      trend: 'up'
    },
    {
      id: 5,
      name: 'Toulouse Rugby',
      logo: '🏉',
      country: 'France',
      sport: 'Rugby',
      description: 'Historic rugby club with proud tradition',
      votes: 2900,
      votePercentage: 5.3,
      trend: 'down'
    }
  ]
  
  const filterClubs = () => {
    if (filter === 'all') return clubs
    return clubs.filter(club => club.sport.toLowerCase() === filter)
  }
  
  const totalVotes = clubs.reduce((sum, club) => sum + club.votes, 0)

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="section-title mb-2">FIELD League</h1>
            <p className="text-gray-300">Vote for clubs, boost your favorites, and help them win sponsorship</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <button className="btn-primary">Connect to Vote</button>
          </div>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex overflow-x-auto pb-2 mb-6 space-x-2 glassmorphism p-2 rounded-lg">
          <button 
            className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'} whitespace-nowrap`}
            onClick={() => setFilter('all')}
          >
            All Sports
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${filter === 'football' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'} whitespace-nowrap`}
            onClick={() => setFilter('football')}
          >
            Football ⚽
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${filter === 'padel' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'} whitespace-nowrap`}
            onClick={() => setFilter('padel')}
          >
            Padel 🎾
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${filter === 'rugby' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'} whitespace-nowrap`}
            onClick={() => setFilter('rugby')}
          >
            Rugby 🏉
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${filter === 'basketball' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'} whitespace-nowrap`}
            onClick={() => setFilter('basketball')}
          >
            Basketball 🏀
          </button>
        </div>
        
        {/* Club List */}
        <div className="grid grid-cols-1 gap-6">
          {filterClubs().map((club, index) => (
            <div key={club.id} className="card p-0 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Club info */}
                <div className="p-6 flex-1">
                  <div className="flex items-center mb-2">
                    <div className="text-2xl mr-3">{club.logo}</div>
                    <h3 className="text-xl font-bold">{club.name}</h3>
                    <span className="ml-3 text-xs bg-accent/50 px-2 py-1 rounded">
                      {club.country} • {club.sport}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{club.description}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <Link to={`/league/club/${club.id}`} className="btn-primary text-center">
                      View Club
                    </Link>
                    <button className="px-4 py-2 bg-accent/50 hover:bg-accent/70 rounded-lg transition-all flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      Vote
                    </button>
                    <span className="text-sm text-gray-300">
                      {club.votes.toLocaleString()} votes ({Math.round(club.votes / totalVotes * 100)}%)
                    </span>
                  </div>
                </div>
                
                {/* Progress and ranking */}
                <div className="bg-accent/50 p-6 md:w-64 flex flex-col justify-between">
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold">#{index + 1}</span>
                    <div className="text-sm">Current Rank</div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Votes</span>
                      <span className={club.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                        {club.trend === 'up' ? '↑' : '↓'} {club.votePercentage}%
                      </span>
                    </div>
                    <div className="w-full bg-accent/30 h-2 rounded-full">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${Math.min(100, Math.round(club.votes / clubs[0].votes * 100))}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Info Section */}
        <div className="mt-12 card bg-gradient-to-br from-primary/10 to-accent/20">
          <h3 className="text-xl font-bold mb-4">How the FIELD League Works</h3>
          <p className="mb-4">
            The FIELD League is a community competition allowing clubs from various sports to gain visibility, 
            unite their fans, and receive real financial support distributed by the FIELD community.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="flex items-start gap-3">
              <div className="bg-primary/20 rounded-full p-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">No Tokens Required</h4>
                <p className="text-sm text-gray-300">Anyone can vote with a simple account. Token holders can boost their votes.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/20 rounded-full p-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Monthly Sponsorship</h4>
                <p className="text-sm text-gray-300">Top-ranked clubs receive real financial sponsorship each month.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/20 rounded-full p-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Boosted Impact</h4>
                <p className="text-sm text-gray-300">$FIELD holders can amplify their votes to support their favorite clubs.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/20 rounded-full p-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Tokenization Path</h4>
                <p className="text-sm text-gray-300">Winners gain access to potential club tokenization and further benefits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FieldLeague 