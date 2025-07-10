import React from 'react';
import { ExternalLink, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-tertiary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                OMNIK
              </span>
            </div>
            <p className="text-secondary text-sm mb-4">
              Building the future of decentralized finance with innovative protocols 
              and sustainable tokenomics.
            </p>
            </div>
          
          {/* Protocol */}
          <div>
            <h4 className="text-primary font-semibold mb-4">Protocol</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors flex items-center">
                  Documentation
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors flex items-center">
                  Whitepaper
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors flex items-center">
                  Audit Reports
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  Bug Bounty
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
          
          {/* Community */}
          <div>
            <h4 className="text-primary font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors flex items-center">
                  Discord
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors flex items-center">
                  Telegram
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  Governance
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  Proposals
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-primary font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  Brand Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary text-sm mb-4 md:mb-0">
              © 2024 OMNIK Protocol. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-secondary">Contract:</span>
              <code className="text-accent font-mono text-xs bg-bg-secondary px-2 py-1 rounded">
                0x742d35Cc6634C0532925a3b8D4C9db...
              </code>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
