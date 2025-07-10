import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-bg-primary/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Protocol
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-secondary hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors">About</a>
            <a href="#tokenomics" className="text-secondary hover:text-primary transition-colors">Tokenomics</a>
            <a href="#roadmap" className="text-secondary hover:text-primary transition-colors">Roadmap</a>
            <a href="#team" className="text-secondary hover:text-primary transition-colors">Team</a>
            <a href="#security" className="text-secondary hover:text-primary transition-colors">Security</a>
          </div>

          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105 text-sm">
              Connect Wallet
            </button>
          </div>

          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-bg-secondary border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-secondary hover:text-primary">Home</a>
              <a href="#about" className="block px-3 py-2 text-secondary hover:text-primary">About</a>
              <a href="#tokenomics" className="block px-3 py-2 text-secondary hover:text-primary">Tokenomics</a>
              <a href="#roadmap" className="block px-3 py-2 text-secondary hover:text-primary">Roadmap</a>
              <a href="#team" className="block px-3 py-2 text-secondary hover:text-primary">Team</a>
              <a href="#security" className="block px-3 py-2 text-secondary hover:text-primary">Security</a>
              <div className="px-3 py-2">
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all text-sm">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;