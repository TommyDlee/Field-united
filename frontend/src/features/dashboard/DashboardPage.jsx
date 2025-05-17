import React from 'react'

const DashboardPage = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <h1 className="section-title mb-8">FIELD Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-2">$FIELD Price</h3>
            <p className="text-3xl font-bold text-primary">$0.052</p>
            <p className="text-sm text-green-500">+5.2% (24h)</p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-2">TVL</h3>
            <p className="text-3xl font-bold text-primary">$7.2M</p>
            <p className="text-sm text-green-500">+12.7% (7d)</p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-2">My Balance</h3>
            <p className="text-3xl font-bold text-primary">0 $FIELD</p>
            <button className="btn-primary mt-2 text-sm">Connect Wallet</button>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-2">Active Farms</h3>
            <p className="text-3xl font-bold text-primary">3,450+</p>
            <p className="text-sm">Farmers earning rewards</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Start Earning $FIELD</h3>
            <p className="mb-4">Choose a farming strategy that works for you:</p>
            
            <div className="space-y-4">
              <div className="bg-accent/50 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h4 className="font-bold">90-Day Lock</h4>
                  <p className="text-sm text-gray-300">1.5x point multiplier</p>
                </div>
                <button className="btn-primary">Farm</button>
              </div>
              
              <div className="bg-accent/50 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h4 className="font-bold">180-Day Lock</h4>
                  <p className="text-sm text-gray-300">2.5x point multiplier</p>
                </div>
                <button className="btn-primary">Farm</button>
              </div>
              
              <div className="bg-accent/50 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h4 className="font-bold">360-Day Lock</h4>
                  <p className="text-sm text-gray-300">4.0x point multiplier</p>
                </div>
                <button className="btn-primary">Farm</button>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Featured Clubs</h3>
            <p className="mb-4">Top performing clubs this week:</p>
            
            <div className="space-y-3">
              <div className="bg-accent/50 p-3 rounded-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold">FC Barcelona</h4>
                  <p className="text-sm text-green-500">+24.5%</p>
                </div>
              </div>
              
              <div className="bg-accent/50 p-3 rounded-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold">Manchester City</h4>
                  <p className="text-sm text-green-500">+18.2%</p>
                </div>
              </div>
              
              <div className="bg-accent/50 p-3 rounded-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold">PSG</h4>
                  <p className="text-sm text-green-500">+12.7%</p>
                </div>
              </div>
              
              <button className="btn-primary w-full mt-3">View All Clubs</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardPage 