import React from 'react';
import { PieChart, Lock, Users, Rocket, Building, Gift } from 'lucide-react';

const Tokenomics: React.FC = () => {
  const distribution = [
    { label: "Public Sale", percentage: 40, color: "from-blue-500 to-blue-600", icon: Users },
    { label: "Liquidity Pool", percentage: 25, color: "from-green-500 to-green-600", icon: Lock },
    { label: "Team & Advisors", percentage: 15, color: "from-purple-500 to-purple-600", icon: Building },
    { label: "Development", percentage: 10, color: "from-orange-500 to-orange-600", icon: Rocket },
    { label: "Marketing", percentage: 7, color: "from-pink-500 to-pink-600", icon: Gift },
    { label: "Reserve", percentage: 3, color: "from-gray-500 to-gray-600", icon: PieChart }
  ];

  return (
    <section id="tokenomics" className="bg-bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Tokenomics
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Carefully designed token distribution to ensure long-term sustainability 
              and value appreciation for all stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Token Distribution Chart */}
            <div className="relative">
              <div className="bg-bg-tertiary rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-primary mb-8 text-center">
                  Token Distribution
                </h3>
                
                <div className="space-y-4">
                  {distribution.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-primary font-medium">{item.label}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-bg-primary rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r ${item.color} h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${item.percentage * 2.5}%` }}
                          ></div>
                        </div>
                        <span className="text-accent font-bold w-12 text-right">{item.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Token Details */}
            <div className="space-y-6">
              <div className="bg-bg-tertiary rounded-xl p-6 border border-border">
                <h4 className="text-xl font-bold text-primary mb-4">Token Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-secondary">Token Name:</span>
                    <span className="text-primary font-medium">OMNIK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Symbol:</span>
                    <span className="text-primary font-medium">OMK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Total Supply:</span>
                    <span className="text-primary font-medium">1,000,000,000 OMK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Network:</span>
                    <span className="text-primary font-medium">Ethereum (ERC-20)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Decimals:</span>
                    <span className="text-primary font-medium">18</span>
                  </div>
                </div>
              </div>

              <div className="bg-bg-tertiary rounded-xl p-6 border border-border">
                <h4 className="text-xl font-bold text-primary mb-4">Vesting Schedule</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-secondary">Public Sale:</span>
                    <span className="text-green-400">Immediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Team & Advisors:</span>
                    <span className="text-yellow-400">12 months cliff, 24 months vesting</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Development:</span>
                    <span className="text-yellow-400">6 months cliff, 18 months vesting</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Liquidity:</span>
                    <span className="text-red-400">Locked for 24 months</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-accent/20 rounded-xl p-6">
                <h4 className="text-xl font-bold text-accent mb-4">Key Benefits</h4>
                <ul className="space-y-2 text-secondary">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Deflationary mechanism with quarterly burns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Staking rewards up to 25% APY</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Governance voting rights</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Fee discounts across ecosystem</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;