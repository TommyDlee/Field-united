import React, { useState } from 'react'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [userProfile, setUserProfile] = useState({
    name: 'Guest User',
    email: 'user@example.com',
    preferences: {
      notifications: true,
      newsletter: true
    },
    activities: [
      { id: 1, type: 'vote', club: 'FC Barcelona', date: '2023-12-15' },
      { id: 2, type: 'vote', club: 'Manchester City', date: '2023-12-12' },
      { id: 3, type: 'newsletter', title: 'FIELD Monthly Update', date: '2023-12-01' }
    ]
  })

  const handleSaveProfile = (e) => {
    e.preventDefault()
    setIsEditing(false)
    // Here you would typically send the updated profile to your API
  }

  const togglePreference = (preference) => {
    setUserProfile({
      ...userProfile,
      preferences: {
        ...userProfile.preferences,
        [preference]: !userProfile.preferences[preference]
      }
    })
  }

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="section-title mb-8">My Profile</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="card mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Profile Information</h2>
                <button 
                  className="text-primary hover:text-primary/80"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>
              
              {isEditing ? (
                <form onSubmit={handleSaveProfile}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      value={userProfile.name}
                      onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      value={userProfile.email}
                      onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                    />
                  </div>
                  
                  <button type="submit" className="btn-primary">Save Changes</button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm text-gray-400">Name</h3>
                    <p>{userProfile.name}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400">Email</h3>
                    <p>{userProfile.email}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="card">
              <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
              
              {userProfile.activities.length > 0 ? (
                <div className="space-y-4">
                  {userProfile.activities.map(activity => (
                    <div key={activity.id} className="flex items-center p-3 bg-accent/30 rounded-lg">
                      <div className="mr-4">
                        {activity.type === 'vote' ? (
                          <div className="bg-primary/20 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="bg-accent/50 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">
                          {activity.type === 'vote' 
                            ? `Voted for ${activity.club}` 
                            : `Read ${activity.title}`}
                        </p>
                        <p className="text-sm text-gray-400">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No recent activity</p>
              )}
            </div>
          </div>
          
          <div>
            <div className="card mb-8">
              <h2 className="text-xl font-bold mb-4">Preferences</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="cursor-pointer">Email Notifications</label>
                  <div 
                    className={`w-12 h-6 rounded-full transition-colors ${userProfile.preferences.notifications ? 'bg-primary' : 'bg-accent/50'} relative cursor-pointer`}
                    onClick={() => togglePreference('notifications')}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${userProfile.preferences.notifications ? 'right-1' : 'left-1'}`}></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="cursor-pointer">Newsletter</label>
                  <div 
                    className={`w-12 h-6 rounded-full transition-colors ${userProfile.preferences.newsletter ? 'bg-primary' : 'bg-accent/50'} relative cursor-pointer`}
                    onClick={() => togglePreference('newsletter')}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${userProfile.preferences.newsletter ? 'right-1' : 'left-1'}`}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card bg-gradient-to-br from-primary/10 to-accent/20">
              <h2 className="text-xl font-bold mb-4">Connect Wallet</h2>
              <p className="text-sm text-gray-300 mb-4">
                Enhance your profile with wallet connection to access additional features.
              </p>
              <button className="btn-primary w-full">Connect Wallet</button>
              <p className="text-xs text-gray-400 mt-2 text-center">Optional</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button className="text-red-500 hover:text-red-400">Log Out</button>
        </div>
      </div>
    </section>
  )
}

export default Profile 