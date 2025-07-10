import React from 'react';
import BuyInput from './BuyInput';
import { TrendingUp, Shield, Zap, Star } from 'lucide-react';
import { downloadWhitepaper } from '../utils/downloadWhitepaper';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-6xl mx-auto">
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-blue-400 text-sm font-medium">Phase 2 - 40% Bonus Active</span>
                <Star className="w-4 h-4 text-yellow-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Protocol
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-primary mb-4 animate-slide-up">
            <span className="text-secondary">(</span>
            <span className="text-accent font-mono">TOKEN</span>
            <span className="text-secondary">)</span>
          </div>
          
          <p className="text-xl md:text-2xl text-accent mb-6 animate-slide-up">
            The Future of Decentralized Finance
          </p>
          
          <p className="text-lg text-secondary mb-12 max-w-3xl mx-auto animate-slide-up">
            Revolutionary DeFi protocol with proven tokenomics and sustainable growth. 
            Join thousands of investors who achieved significant returns in our ecosystem.
          </p>
          
          <div className="max-w-2xl mx-auto mb-16 animate-slide-up">
            <div className="bg-bg-secondary/50 backdrop-blur-sm border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Start Your Investment</h3>
              
              <div className="mb-6">
                <BuyInput ctaLabel="Buy Tokens" />
              </div>
              
              <div className="flex items-center my-6">
                <div className="flex-1 h-px bg-border"></div>
                <span className="px-4 text-secondary text-sm">or</span>
                <div className="flex-1 h-px bg-border"></div>
              </div>
              
              <button 
                onClick={downloadWhitepaper} 
                className="w-full border-2 border-accent hover:bg-accent hover:text-bg-primary text-accent px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Download Whitepaper
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-8 animate-fade-in hover:border-accent/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">High ROI</h3>
              <p className="text-secondary">Proven returns for early holders in our ecosystem</p>
            </div>
            
            <div className="bg-bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-8 animate-fade-in hover:border-accent/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Fully Audited</h3>
              <p className="text-secondary">Smart contracts verified by leading security firms</p>
            </div>
            
            <div className="bg-bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-8 animate-fade-in hover:border-accent/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Lightning Fast</h3>
              <p className="text-secondary">Sub-second transactions with minimal gas fees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;