import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const ClubDetail = () => {
  const { id } = useParams()
  const [club, setClub] = useState(null)
  const [loading, setLoading] = useState(true)
  
  // Simulated club data (would come from API)
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const clubData = {
        id: parseInt(id),
        name: 'FC Barcelona',
        logo: '🔵🔴',
        country: 'Spain',
        sport: 'Football',
        description: 'One of the most successful football clubs in the world with a rich history and global fanbase. Founded in 1899, the club has grown to become a symbol of Catalan culture and sporting excellence. FC Barcelona is renowned for its distinctive style of play, La Masia youth academy, and motto "Més que un club" (More than a club).',
        votes: 8750,
        votePercentage: 24.5,
        trend: 'up',
        website: 'https://www.fcbarcelona.com',
        socialLinks: {
          twitter: 'https://twitter.com/FCBarcelona',
          instagram: 'https://www.instagram.com/fcbarcelona/',
          facebook: 'https://www.facebook.com/fcbarcelona'
        },
        currentRank: 1,
        lastMonthRank: 2,
        memberCount: 143000,
        tokenizationStatus: 'In progress',
        news: [
          {
            id: 1,
            title: 'Club announces new training facilities',
            date: '2023-11-15',
            excerpt: 'State-of-the-art training complex will open next season.'
          },
          {
            id: 2,
            title: 'Youth team wins international tournament',
            date: '2023-11-02',
            excerpt: 'U19 squad demonstrates promising talent for the future.'
          },
          {
            id: 3,
            title: 'Community outreach program expands',
            date: '2023-10-21',
            excerpt: 'New initiatives to engage with local supporters and youth development.'
          }
        ]
      }
      
      setClub(clubData)
      setLoading(false)
    }, 500)
  }, [id])
  
  if (loading) {
    return (
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-accent/50 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-accent/30 rounded w-2/3 mx-auto mb-12"></div>
            <div className="h-64 bg-accent/20 rounded-xl w-full mb-8"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="mb-6">
          <Link to="/league" className="flex items-center text-gray-300 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to FIELD League
          </Link>
        </div>
        
        <div className="card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{club.logo}</span>
                <div>
                  <h1 className="text-3xl font-bold">{club.name}</h1>
                  <div className="flex items-center space-x-3 mt-1">
                    <span className="text-sm bg-accent/50 px-2 py-1 rounded">{club.country}</span>
                    <span className="text-sm bg-accent/50 px-2 py-1 rounded">{club.sport}</span>
                    <a href={club.website} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                      Official Website
                    </a>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                {club.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <a href={club.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <svg className="w-5 h-5 mr-2 inline-block" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Follow
                </a>
                <a href={club.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <svg className="w-5 h-5 mr-2 inline-block" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.504.344 1.858.182.466.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.064A5.135 5.135 0 0017.135 12 5.135 5.135 0 0012 17.135 5.135 5.135 0 006.865 12 5.135 5.135 0 0012 6.865zm0 8.468A3.333 3.333 0 018.667 12 3.333 3.333 0 0112 8.667 3.333 3.333 0 0115.333 12 3.333 3.333 0 0112 15.333zm6.538-8.671a1.2 1.2 0 10-2.4 0 1.2 1.2 0 002.4 0z" />
                  </svg>
                  Instagram
                </a>
              </div>
              
              {/* Latest News */}
              <div>
                <h3 className="text-xl font-bold mb-4">Latest Club News</h3>
                <div className="space-y-4">
                  {club.news.map(item => (
                    <div key={item.id} className="bg-accent/30 p-4 rounded-lg">
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-gray-300 text-sm my-2">{item.excerpt}</p>
                      <div className="text-xs text-gray-400">{item.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              {/* Voting and Stats */}
              <div className="card bg-gradient-to-br from-accent/30 to-primary/10 mb-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold">#{club.currentRank}</div>
                  <div className="text-sm">
                    Current Rank
                    {club.lastMonthRank > club.currentRank ? (
                      <span className="text-green-500 ml-2">▲ {club.lastMonthRank - club.currentRank}</span>
                    ) : club.lastMonthRank < club.currentRank ? (
                      <span className="text-red-500 ml-2">▼ {club.currentRank - club.lastMonthRank}</span>
                    ) : (
                      <span className="text-gray-400 ml-2">-</span>
                    )}
                  </div>
                </div>
                
                <div className="bg-accent/40 p-4 rounded-lg mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Votes</span>
                    <span className="font-bold">{club.votes.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-accent/30 h-2 rounded-full mb-4">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${club.votePercentage}%` }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Weekly change</span>
                    <span className={club.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                      {club.trend === 'up' ? '↑' : '↓'} {club.votePercentage}%
                    </span>
                  </div>
                </div>
                
                <button className="btn-primary w-full mb-3 py-3 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  Vote for this Club
                </button>
                
                <button className="w-full py-3 flex items-center justify-center bg-accent/50 hover:bg-accent/70 rounded-lg transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Boost with $FIELD
                </button>
              </div>
              
              {/* Club Stats */}
              <div className="card bg-accent/30">
                <h3 className="text-xl font-bold mb-4">Club Stats</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Members</span>
                    <span className="font-mono">{club.memberCount.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Founded</span>
                    <span className="font-mono">1899</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Tokenization</span>
                    <span className="text-yellow-400 font-mono">{club.tokenizationStatus}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Shared Votes Callout */}
        <div className="card bg-gradient-to-r from-primary/20 to-accent/30">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Earn $FIELD by sharing this club</h3>
              <p className="text-gray-300">Get rewarded when others vote through your shared link</p>
            </div>
            <div className="flex gap-3">
              <button className="btn-primary flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
              <button className="bg-accent/50 hover:bg-accent/70 px-4 py-2 rounded-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClubDetail 