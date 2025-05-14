import React from 'react';
import logoSvg from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-secondary/80 pt-16 pb-8 border-t border-accent/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <img src={logoSvg} alt="FIELD Logo" className="h-10 mb-4" />
            <p className="text-gray-400 mb-4">
              The first Web3 platform that empowers football fans to invest and earn from real clubs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/FieldUnitedLabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://discord.com/channels/1369771903669108856/1369777061736218765" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 71 55" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
                </svg>
              </a>
              <a 
                href="https://mirror.xyz/field" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3-10c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3z" />
                </svg>
              </a>
              <a 
                href="https://github.com/field-protocol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#what-is-field" className="text-gray-400 hover:text-primary transition-colors">About FIELD</a></li>
              <li><a href="#tokenomics" className="text-gray-400 hover:text-primary transition-colors">Tokenomics</a></li>
              <li><a href="#nfts" className="text-gray-400 hover:text-primary transition-colors">NFT System</a></li>
              <li><a href="#clubs" className="text-gray-400 hover:text-primary transition-colors">Partner Clubs</a></li>
              <li><a href="#join" className="text-gray-400 hover:text-primary transition-colors">Join Waitlist</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Smart Contracts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Audit Reports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Media Kit</a></li>
            </ul>
          </div>
          
          {/* Legal & Tech */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Legal & Tech</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Risk Disclosure</a></li>
              <li>
                <div className="flex items-center text-gray-400 mt-4">
                  <span className="mr-2">Built on:</span>
                  <span className="bg-accent/30 px-2 py-1 rounded text-xs mr-2">Avalanche</span>
                  <span className="bg-accent/30 px-2 py-1 rounded text-xs mr-2">IPFS</span>
                  <span className="bg-accent/30 px-2 py-1 rounded text-xs">OpenZeppelin</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom footer with copyright */}
        <div className="border-t border-accent/20 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} FIELD LTD – Registered in Seychelles. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 