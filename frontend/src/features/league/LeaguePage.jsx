import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Standings from './components/Standings'

const LeaguePage = () => {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    clubName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    sport: '',
    website: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  })

  const { user, isAuthenticated, connectWallet } = useAuth()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Your application has been successfully submitted! Our team will contact you soon.'
    })
    
    // Reset form after success
    setFormData({
      clubName: '',
      contactName: '',
      email: '',
      phone: '',
      country: '',
      sport: '',
      website: '',
      message: ''
    })
    
    // In a real application, you would send the data to your backend here
    console.log('Form submitted:', formData)
  }

  const toggleForm = () => {
    setShowForm(!showForm)
    
    // If the form is being opened, scroll to it
    if (!showForm) {
      setTimeout(() => {
        document.getElementById('register-club-section').scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="section-title mb-2">FIELD League</h1>
            <p className="text-gray-300">Vote for clubs, boost your favorites, and help them win sponsorship</p>
          </div>
          
          <div className="flex gap-3 mt-4 md:mt-0">
            {isAuthenticated ? (
              <button className="btn-primary">Vote Now</button>
            ) : (
              <button className="btn-primary" onClick={connectWallet}>Connect to Vote</button>
            )}
          </div>
        </div>
        
        {/* League explanation - Simplified */}
        <div className="glassmorphism p-4 rounded-lg mb-6 text-center">
          <p className="text-gray-300 text-sm">
            Clubs earn points through <span className="text-green-400">app votes</span>, 
            <span className="text-blue-400"> social media engagement</span>, and 
            <span className="text-primary"> $FIELD token votes</span>. 
            Support your favorites to help them climb the rankings!
          </p>
        </div>
        
        {/* Standings component */}
        <Standings />
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Bring Your Club to FIELD</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Want to see your favorite club in FIELD League? Register your club's interest or nominate them for inclusion in our ecosystem.
          </p>
          
          {isAuthenticated ? (
            <button 
              className="btn-primary text-lg px-8 py-3"
              onClick={toggleForm}
            >
              {showForm ? 'Hide Registration Form' : 'Register a Club'}
            </button>
          ) : (
            <button 
              className="btn-primary text-lg px-8 py-3"
              onClick={connectWallet}
            >
              Connect Wallet to Register
            </button>
          )}
        </div>
        
        {/* Club Registration Form */}
        {showForm && (
          <div id="register-club-section" className="mt-12 max-w-2xl mx-auto card">
            <h3 className="text-2xl font-bold mb-6">Club Registration</h3>
            
            {formStatus.submitted ? (
              <div className="bg-green-500/20 text-green-300 p-4 rounded-lg">
                {formStatus.message}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="clubName">
                      Club Name*
                    </label>
                    <input
                      type="text"
                      id="clubName"
                      name="clubName"
                      value={formData.clubName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="contactName">
                      Contact Person*
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="country">
                      Country*
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="sport">
                      Sport*
                    </label>
                    <select
                      id="sport"
                      name="sport"
                      value={formData.sport}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select Sport</option>
                      <option value="Football">Football</option>
                      <option value="Padel">Padel</option>
                      <option value="Rugby">Rugby</option>
                      <option value="Basketball">Basketball</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1" htmlFor="website">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="https://"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your club and why you want to join FIELD League"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full py-3"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default LeaguePage 