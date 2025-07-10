import React from 'react';
import { Shield, Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-bg-secondary border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">OMNIK</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-secondary hover:text-primary transition-colors">
              About
            </a>
            <a href="#tokenomics" className="text-secondary hover:text-primary transition-colors">
              Tokenomics
            </a>
            <a href="#roadmap" className="text-secondary hover:text-primary transition-colors">
              Roadmap
            </a>
            <a href="#team" className="text-secondary hover:text-primary transition-colors">
              Team
            </a>
          </div>
          
          <button className="bg-accent hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
            Connect Wallet
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;