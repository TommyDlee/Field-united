import React, { useState } from 'react';
import logoSvg from '../assets/logo.svg';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const menuItems = [
    {
      name: 'Écosystème',
      key: 'ecosystem',
      submenu: [
        { name: 'Subnet', href: '#subnet' },
        { name: 'Dapp', href: '#dapp' },
        { name: 'NFT', href: '#nfts' },
        { name: 'Club', href: '#clubs' },
        { name: 'Store', href: '#store' }
      ]
    },
    {
      name: 'DeFi',
      key: 'defi',
      submenu: [
        { name: 'Farm', href: '#farm' },
        { name: 'Staking', href: '#staking' }
      ]
    },
    {
      name: 'Ressources',
      key: 'resources',
      submenu: [
        { name: 'Whitepaper', href: '#whitepaper' },
        { name: 'Documentation', href: '#docs' },
        { name: 'Smart Contracts', href: '#contracts' },
        { name: 'Audit Reports', href: '#audit' },
        { name: 'Media Kit', href: '#media' }
      ]
    },
    {
      name: 'About',
      href: '#what-is-field',
      key: 'about',
    }
  ];

  const toggleDropdown = (key) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(key);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="glassmorphism fixed w-full z-50 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logoSvg} alt="FIELD Logo" className="h-8" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <div key={item.key} className="relative" onMouseLeave={handleMouseLeave}>
              {item.submenu ? (
                <>
                  <button 
                    className="text-white hover:text-primary transition-colors flex items-center"
                    onClick={() => toggleDropdown(item.key)}
                    onMouseEnter={() => setActiveDropdown(item.key)}
                  >
                    {item.name}
                    <svg 
                      className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.key ? 'rotate-180' : ''}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {activeDropdown === item.key && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md glassmorphism shadow-lg py-1 z-10">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-primary/20 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a 
                  href={item.href} 
                  className="text-white hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
          <button className="btn-primary">Connect Wallet</button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glassmorphism mt-2 py-4 px-6 rounded-lg">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <div key={item.key} className="relative">
                {item.submenu ? (
                  <>
                    <button 
                      className="text-white hover:text-primary transition-colors flex items-center justify-between w-full"
                      onClick={() => toggleDropdown(item.key)}
                    >
                      {item.name}
                      <svg 
                        className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.key ? 'rotate-180' : ''}`} 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {activeDropdown === item.key && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-sm text-white hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a 
                    href={item.href} 
                    className="text-white hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <button className="btn-primary self-start">Connect Wallet</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 