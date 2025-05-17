import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const ClubDetailPage = () => {
  const { id } = useParams()
  const [club, setClub] = useState(null)
  const [loading, setLoading] = useState(true)
  const [voteAmount, setVoteAmount] = useState(100)
  
  const { user, isAuthenticated, connectWallet } = useAuth()
  
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
        totalPoints: 87500,
        appVotes: 32450,
        socialPoints: 28400,
        fieldVotes: 26650,
        trend: 'up',
        weeklyChange: '+12%',
        status: 'trending',
        website: 'https://www.fcbarcelona.com',
        socialLinks: {
          twitter: 'https://twitter.com/FCBarcelona',
          instagram: 'https://www.instagram.com/fcbarcelona/',
          facebook: 'https://www.facebook.com/fcbarcelona'
        },
        currentRank: 1,
        lastMonthRank: 2,
        supporterCount: 143000,
        followers: {
          twitter: 42500000,
          instagram: 113000000,
          facebook: 103000000
        },
        tokenizationStatus: 'Live',
        tokenHolders: 28500,
        totalSupply: 10000000,
        circulatingSupply: 3500000,
        news: [
          {
            id: 1,
            title: 'Club announces new tokenization milestone',
            date: '2023-11-15',
            excerpt: '$FIELD token adoption increases by 25% after new fan engagement initiative.'
          },
          {
            id: 2,
            title: 'Social media campaign drives record engagement',
            date: '2023-11-02',
            excerpt: 'Latest club promotion reaches 50M users across platforms.'
          },
          {
            id: 3,
            title: 'Token holders unlock exclusive content',
            date: '2023-10-21',
            excerpt: 'New digital collectibles available for fans who stake their tokens.'
          }
        ]
      }
      
      setClub(clubData)
      setLoading(false)
    }, 500)
  }, [id])

  const handleVoteChange = (e) => {
    setVoteAmount(parseInt(e.target.value))
  }
  
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
        
        <div className="card overflow-hidden mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <span className="text-4xl mr-4">{club.logo}</span>
              <div>
                <div className="flex items-center">
                  <h1 className="text-3xl font-bold mr-3">{club.name}</h1>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    club.status === 'trending' ? 'bg-primary/20 text-primary' :
                    club.status === 'new' ? 'bg-green-500/20 text-green-500' : 
                    'bg-accent/30 text-gray-300'
                  }`}>
                    {club.status.charAt(0).toUpperCase() + club.status.slice(1)}
                  </span>
                </div>
                <div className="flex items-center space-x-3 mt-1 text-sm text-gray-400">
                  <span>{club.country}</span>
                  <span>•</span>
                  <span>{club.sport}</span>
                  <span>•</span>
                  <a href={club.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Official Website
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <a href={club.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-accent/30 hover:bg-accent/50 rounded-lg transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href={club.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-accent/30 hover:bg-accent/50 rounded-lg transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-accent/30 p-4 rounded-lg mb-6">
                <p className="text-gray-300">
                  {club.description}
                </p>
              </div>
              
              {/* Club Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-accent/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Supporters</div>
                  <div className="text-2xl font-bold">{club.supporterCount.toLocaleString()}</div>
                  <div className="text-xs text-gray-400 mt-2">Active community members</div>
                </div>
                <div className="bg-accent/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Token Holders</div>
                  <div className="text-2xl font-bold">{club.tokenHolders.toLocaleString()}</div>
                  <div className="text-xs text-gray-400 mt-2">{((club.tokenHolders / club.supporterCount) * 100).toFixed(1)}% of supporters</div>
                </div>
                <div className="bg-accent/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Social Followers</div>
                  <div className="text-2xl font-bold">{(club.followers.twitter + club.followers.instagram + club.followers.facebook).toLocaleString()}</div>
                  <div className="text-xs text-gray-400 mt-2">Combined across platforms</div>
                </div>
              </div>
              
              {/* Latest News */}
              <h3 className="text-xl font-bold mb-4">Latest Club News</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {club.news.map(item => (
                  <div key={item.id} className="bg-accent/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-300 text-sm mb-2">{item.excerpt}</p>
                    <div className="text-xs text-gray-400">{item.date}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              {/* Points and Stats */}
              <div className="card bg-gradient-to-br from-accent/30 to-primary/10 mb-6">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold">#{club.currentRank}</div>
                  <div className="text-sm flex items-center justify-center">
                    Current Rank
                    {club.lastMonthRank > club.currentRank ? (
                      <span className="text-green-500 ml-2 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        {club.lastMonthRank - club.currentRank}
                      </span>
                    ) : club.lastMonthRank < club.currentRank ? (
                      <span className="text-red-500 ml-2 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                        {club.currentRank - club.lastMonthRank}
                      </span>
                    ) : (
                      <span className="text-gray-400 ml-2">-</span>
                    )}
                  </div>
                </div>
                
                <div className="bg-accent/40 p-4 rounded-lg mb-4">
                  <div className="flex justify-between mb-1">
                    <span>Total Points</span>
                    <span className="font-mono">{club.totalPoints.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-accent/30 h-3 rounded-full mb-2">
                    <div className="bg-primary h-3 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Weekly change</span>
                    <span className={club.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                      {club.trend === 'up' ? '↑' : '↓'} {club.weeklyChange}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-400">App Votes</span>
                      <span className="text-xs font-mono">{club.appVotes.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-accent/30 h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(club.appVotes / club.totalPoints) * 100}%` }}></div>
                    </div>
                  </div>
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-400">Social Points</span>
                      <span className="text-xs font-mono">{club.socialPoints.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-accent/30 h-2 rounded-full">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(club.socialPoints / club.totalPoints) * 100}%` }}></div>
                    </div>
                  </div>
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-400">$FIELD Votes</span>
                      <span className="text-xs font-mono">{club.fieldVotes.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-accent/30 h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${(club.fieldVotes / club.totalPoints) * 100}%` }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-accent/40 p-4 rounded-lg">
                  <h3 className="font-bold mb-3">Vote with $FIELD tokens</h3>
                  
                  {isAuthenticated ? (
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Amount to vote</span>
                        <span>{voteAmount} $FIELD</span>
                      </div>
                      <input 
                        type="range" 
                        min="10" 
                        max="1000" 
                        step="10" 
                        value={voteAmount} 
                        onChange={handleVoteChange}
                        className="w-full mb-4"
                      />
                      <button className="btn-primary w-full">Cast Vote</button>
                      <div className="text-xs text-center mt-2 text-gray-400">
                        You can vote once per week
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-sm mb-3">Connect your wallet to vote</p>
                      <button className="btn-primary w-full" onClick={connectWallet}>Connect Wallet</button>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Token Info */}
              <div className="card">
                <h3 className="font-bold mb-4">Club Token Info</h3>
                <div className="flex justify-between text-sm mb-2">
                  <span>Status</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-xs">
                    {club.tokenizationStatus}
                  </span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Total Supply</span>
                  <span>{club.totalSupply.toLocaleString()} $FCB</span>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span>Circulating Supply</span>
                  <span>{club.circulatingSupply.toLocaleString()} $FCB</span>
                </div>
                <button className="btn-secondary w-full">
                  Trade on Markets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClubDetailPage 