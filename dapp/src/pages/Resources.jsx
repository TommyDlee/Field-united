import React, { useState } from 'react'

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const resources = [
    {
      id: 1,
      title: "What is FIELD?",
      description: "An introduction to the FIELD ecosystem and sports tokenization platform.",
      category: "basics",
      link: "#",
      icon: "📚"
    },
    {
      id: 2,
      title: "Sports Tokenization Explained",
      description: "How blockchain technology is revolutionizing sports club financing.",
      category: "basics",
      link: "#",
      icon: "🏟️"
    },
    {
      id: 3,
      title: "FIELD League Guide",
      description: "Everything you need to know about participating in the FIELD League voting system.",
      category: "guides",
      link: "#",
      icon: "🏆"
    },
    {
      id: 4,
      title: "Farming Strategies",
      description: "Optimize your $FIELD token farming for maximum returns.",
      category: "guides",
      link: "#",
      icon: "🌾"
    },
    {
      id: 5,
      title: "Infrastructure Investment Whitepaper",
      description: "Technical details on how FIELD is revolutionizing sports infrastructure investment.",
      category: "technical",
      link: "#",
      icon: "📄"
    },
    {
      id: 6,
      title: "Club Selection Criteria",
      description: "How clubs are selected for the FIELD ecosystem and tokenization opportunities.",
      category: "technical",
      link: "#",
      icon: "⚽"
    },
    {
      id: 7,
      title: "$FIELD Tokenomics",
      description: "Deep dive into the tokenomics model behind the $FIELD token.",
      category: "technical",
      link: "#",
      icon: "💰"
    },
    {
      id: 8,
      title: "Community FAQ",
      description: "Frequently asked questions from the FIELD community.",
      category: "community",
      link: "#",
      icon: "❓"
    }
  ]
  
  const filterResources = () => {
    if (activeCategory === 'all') return resources
    return resources.filter(resource => resource.category === activeCategory)
  }

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <h1 className="section-title mb-2">Resources</h1>
        <p className="text-gray-300 mb-8">Learn about FIELD, sports tokenization, and how to get involved</p>
        
        {/* Category Filter */}
        <div className="flex overflow-x-auto pb-2 mb-8 glassmorphism p-2 rounded-lg">
          <button 
            className={`px-4 py-2 rounded-lg ${activeCategory === 'all' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'} whitespace-nowrap`}
            onClick={() => setActiveCategory('all')}
          >
            All Resources
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${activeCategory === 'basics' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'} whitespace-nowrap`}
            onClick={() => setActiveCategory('basics')}
          >
            Basics
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${activeCategory === 'guides' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'} whitespace-nowrap`}
            onClick={() => setActiveCategory('guides')}
          >
            Guides
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${activeCategory === 'technical' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'} whitespace-nowrap`}
            onClick={() => setActiveCategory('technical')}
          >
            Technical
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${activeCategory === 'community' ? 'bg-primary/30 text-primary' : 'hover:bg-accent/50'} whitespace-nowrap`}
            onClick={() => setActiveCategory('community')}
          >
            Community
          </button>
        </div>
        
        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterResources().map(resource => (
            <a 
              key={resource.id} 
              href={resource.link}
              className="card hover:bg-accent/20 transition-colors"
            >
              <div className="flex items-start">
                <div className="text-4xl mr-4">{resource.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <span className="text-primary hover:underline">Read more →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Newsletter Section */}
        <div className="mt-12 card bg-gradient-to-br from-primary/20 to-accent/30">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest updates, tutorials, and community events.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full md:w-auto px-4 py-2 bg-accent/50 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="btn-primary rounded-l-none whitespace-nowrap">Subscribe</button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
        
        {/* Community Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Join Our Community</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="https://discord.com/channels/1369771903669108856/1369777061736218765" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card bg-[#5865F2]/20 hover:bg-[#5865F2]/30 transition-colors"
            >
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 71 55" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
                </svg>
                <h3 className="text-xl font-bold">Discord</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Join discussions, get help, and interact with the FIELD community.
              </p>
              <span className="text-primary">Join Discord →</span>
            </a>
            
            <a 
              href="https://x.com/FieldUnitedLabs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <h3 className="text-xl font-bold">Twitter</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Follow us for the latest announcements and updates.
              </p>
              <span className="text-primary">Follow @FieldUnitedLabs →</span>
            </a>
            
            <a 
              href="https://mirror.xyz/field" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-colors"
            >
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3-10c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3z" />
                </svg>
                <h3 className="text-xl font-bold">Mirror</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Read our long-form content and technical articles.
              </p>
              <span className="text-primary">Read on Mirror →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resources 