import React from 'react';
import { Clock, Users, DollarSign, Target } from 'lucide-react';

const ICOProgress: React.FC = () => {
  const progress = 67; // 67% sold
  const raised = 2.4; // $2.4M raised
  const target = 5.0; // $5M target
  const timeLeft = "23d 14h 32m";

  return (
    <section className="bg-bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              ICO Progress
            </h2>
            <p className="text-xl text-secondary">
              Phase 2 of 4 - Limited Time 40% Bonus
            </p>
          </div>

          {/* Progress Bar */}
          <div className="bg-bg-tertiary rounded-2xl p-8 mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-primary">
                ${raised}M raised of ${target}M target
              </span>
              <span className="text-lg font-semibold text-accent">
                {progress}%
              </span>
            </div>
            
            <div className="w-full bg-bg-primary rounded-full h-4 mb-6">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">${raised}M</div>
                <div className="text-sm text-secondary">Raised</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">12,847</div>
                <div className="text-sm text-secondary">Investors</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">$0.08</div>
                <div className="text-sm text-secondary">Current Price</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{timeLeft}</div>
                <div className="text-sm text-secondary">Time Left</div>
              </div>
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-bg-tertiary border border-border rounded-lg p-4 opacity-50">
              <div className="text-center">
                <div className="text-sm text-secondary mb-1">Phase 1</div>
                <div className="text-lg font-bold text-primary mb-1">$0.05</div>
                <div className="text-xs text-green-400">SOLD OUT</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-accent rounded-lg p-4">
              <div className="text-center">
                <div className="text-sm text-accent mb-1">Phase 2 (Current)</div>
                <div className="text-lg font-bold text-primary mb-1">$0.08</div>
                <div className="text-xs text-yellow-400">40% BONUS</div>
              </div>
            </div>

            <div className="bg-bg-tertiary border border-border rounded-lg p-4">
              <div className="text-center">
                <div className="text-sm text-secondary mb-1">Phase 3</div>
                <div className="text-lg font-bold text-primary mb-1">$0.12</div>
                <div className="text-xs text-secondary">Coming Soon</div>
              </div>
            </div>

            <div className="bg-bg-tertiary border border-border rounded-lg p-4">
              <div className="text-center">
                <div className="text-sm text-secondary mb-1">Phase 4</div>
                <div className="text-lg font-bold text-primary mb-1">$0.15</div>
                <div className="text-xs text-secondary">Final Phase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ICOProgress;