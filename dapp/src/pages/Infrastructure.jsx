import React, { useState } from 'react'

const Infrastructure = () => {
  const [filter, setFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: "Munich Padel Center",
      image: "🎾",
      type: "padel",
      location: "Munich, Germany",
      description: "State-of-the-art padel center with 8 courts, restaurant, and pro shop",
      fundsRaised: 820000,
      fundingGoal: 1200000,
      percentComplete: 68,
      minInvestment: 500,
      estimatedROI: "12-15%",
      estimatedCompletion: "Q3 2024",
      status: "active"
    },
    {
      id: 2,
      title: "Barcelona Youth Academy",
      image: "⚽",
      type: "football",
      location: "Barcelona, Spain",
      description: "Youth development academy with 3 fields and training facilities for local talent",
      fundsRaised: 1450000,
      fundingGoal: 2000000,
      percentComplete: 72,
      minInvestment: 1000,
      estimatedROI: "8-10%",
      estimatedCompletion: "Q4 2024",
      status: "active"
    },
    {
      id: 3,
      title: "Paris Multisport Complex",
      image: "🏀",
      type: "basketball",
      location: "Paris, France",
      description: "Indoor complex with basketball courts, fitness center, and community spaces",
      fundsRaised: 3200000,
      fundingGoal: 4000000,
      percentComplete: 80,
      minInvestment: 1500,
      estimatedROI: "9-12%",
      estimatedCompletion: "Q2 2025",
      status: "active"
    },
    {
      id: 4,
      title: "London Rugby Grounds",
      image: "🏉",
      type: "rugby",
      location: "London, UK",
      description: "Rugby pitch and clubhouse renovation in North London",
      fundsRaised: 620000,
      fundingGoal: 800000,
      percentComplete: 77,
      minInvestment: 750,
      estimatedROI: "7-9%",
      estimatedCompletion: "Q1 2024",
      status: "active"
    },
    {
      id: 5,
      title: "Amsterdam Tennis Center",
      image: "🎾",
      type: "tennis",
      location: "Amsterdam, Netherlands",
      description: "Indoor/outdoor tennis facility with 12 courts and social club",
      fundsRaised: 1900000,
      fundingGoal: 2500000,
      percentComplete: 76,
      minInvestment: 1000,
      estimatedROI: "10-13%",
      estimatedCompletion: "Q3 2024",
      status: "active"
    }
  ]
  
  const filterProjects = () => {
    if (filter === 'all') return projects
    return projects.filter(project => project.type === filter)
  }

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="section-title mb-2">Infrastructure Investment</h1>
            <p className="text-gray-300">Invest in sports facilities with fractional ownership</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <button className="btn-primary">Connect Wallet</button>
          </div>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex overflow-x-auto pb-2 mb-6 space-x-2 glassmorphism p-2 rounded-lg">
          <button 
            className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'} whitespace-nowrap`}
            onClick={() => setFilter('all')}
          >
            All Projects
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
            className={`px-4 py-2 rounded-lg ${filter === 'basketball' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'} whitespace-nowrap`}
            onClick={() => setFilter('basketball')}
          >
            Basketball 🏀
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${filter === 'tennis' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'} whitespace-nowrap`}
            onClick={() => setFilter('tennis')}
          >
            Tennis 🎾
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${filter === 'rugby' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'} whitespace-nowrap`}
            onClick={() => setFilter('rugby')}
          >
            Rugby 🏉
          </button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterProjects().map(project => (
            <div key={project.id} className="card overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{project.image}</span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                  {project.status === 'active' ? 'Active' : 'Completed'}
                </span>
              </div>
              
              <div className="bg-accent/30 p-3 rounded-lg mb-4">
                <div className="text-sm text-gray-300 mb-1">
                  {project.location} • {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                </div>
                <p className="text-sm">{project.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span className="font-mono">
                    {(project.fundsRaised / 1000000).toFixed(1)}M / {(project.fundingGoal / 1000000).toFixed(1)}M USD
                  </span>
                </div>
                <div className="w-full bg-accent/30 h-2 rounded-full">
                  <div 
                    className="bg-primary h-2 rounded-full" 
                    style={{ width: `${project.percentComplete}%` }}
                  ></div>
                </div>
                <div className="text-right text-xs mt-1 text-gray-400">
                  {project.percentComplete}% Complete
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <div className="text-xs text-gray-400">Min Investment</div>
                  <div className="font-bold">${project.minInvestment.toLocaleString()}</div>
                </div>
                <div className="bg-accent/20 p-3 rounded-lg">
                  <div className="text-xs text-gray-400">Est. ROI</div>
                  <div className="font-bold text-green-500">{project.estimatedROI}</div>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button className="btn-primary flex-1 mr-2">Invest Now</button>
                <button className="px-4 py-2 bg-accent/50 hover:bg-accent/70 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Info Section */}
        <div className="mt-12 card bg-gradient-to-br from-primary/10 to-accent/20">
          <h3 className="text-xl font-bold mb-4">How Infrastructure Investment Works</h3>
          <p className="mb-6">
            FIELD enables fractional investment in sports facilities, allowing everyone to participate in 
            sports infrastructure development with potential returns.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4 bg-accent/20 rounded-lg">
              <div className="bg-primary/20 rounded-full p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Invest</h4>
              <p className="text-sm text-gray-300">
                Choose a project and invest with as little as $500, receiving fractionalized ownership
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-accent/20 rounded-lg">
              <div className="bg-primary/20 rounded-full p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Earn Returns</h4>
              <p className="text-sm text-gray-300">
                Receive revenue shares from facility operations and membership fees
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-accent/20 rounded-lg">
              <div className="bg-primary/20 rounded-full p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Ownership Benefits</h4>
              <p className="text-sm text-gray-300">
                Get exclusive NFT certificates and perks at facilities you've invested in
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-primary/10 rounded-lg flex flex-col sm:flex-row items-center justify-between">
            <p className="mb-4 sm:mb-0 sm:mr-4">
              Ready to become a sports infrastructure investor?
            </p>
            <button className="btn-primary whitespace-nowrap">Start Investing</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Infrastructure 