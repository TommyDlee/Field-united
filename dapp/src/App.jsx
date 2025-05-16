import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import FieldLeague from './pages/FieldLeague'
import ClubDetail from './pages/ClubDetail'
import Infrastructure from './pages/Infrastructure'
import Tokens from './pages/Tokens'
import Resources from './pages/Resources'
import Profile from './pages/Profile'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/league" element={<FieldLeague />} />
          <Route path="/league/club/:id" element={<ClubDetail />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 