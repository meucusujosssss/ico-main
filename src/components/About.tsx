import React from 'react';
import { Shield, Zap, Globe, TrendingUp, Users, Lock } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "Multi-signature wallets, time-locked contracts, and comprehensive audit coverage"
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Process 100,000+ TPS with sub-second finality and minimal gas fees"
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Available worldwide with support for 50+ fiat currencies and payment methods"
    },
    {
      icon: TrendingUp,
      title: "Proven Returns",
      description: "Track record of 847% average ROI across our ecosystem of DeFi products"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Governed by token holders with transparent voting and proposal systems"
    },
    {
      icon: Lock,
      title: "Locked Liquidity",
      description: "100% of liquidity locked for 2 years, ensuring long-term stability"
    }
  ];

  return (
    <section id="about" className="bg-bg-primary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Choose OMNIK?
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              OMNIK represents the next evolution in DeFi infrastructure, combining 
              cutting-edge technology with proven tokenomics to deliver sustainable returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-bg-secondary border border-border rounded-xl p-8 hover:border-accent/50 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-bg-secondary to-bg-tertiary rounded-2xl p-8 border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$2.4B+</div>
                <div className="text-secondary">Total Value Locked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-secondary">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-secondary">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-secondary">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;