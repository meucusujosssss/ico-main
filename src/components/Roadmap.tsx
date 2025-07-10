import React from 'react';
import { CheckCircle, Circle, Clock, Rocket } from 'lucide-react';
import BuyInput from './BuyInput';

const Roadmap: React.FC = () => {
    const phases = [
      {
        quarter: "Q4 2023",
        title: "Foundation",
        status: "completed",
        items: [
          "Smart contract development",
          "Security audits completed",
          "Team formation",
          "Initial partnerships"
        ]
      },
      {
        quarter: "Q1 2024",
        title: "Launch Preparation",
        status: "completed",
        items: [
          "Testnet deployment",
          "Community building",
          "Marketing campaign launch",
          "ICO platform development"
        ]
      },
      {
        quarter: "Q2 2025",
        title: "ICO Phase 2 - 40% Bonus Active",
        status: "current",
        items: [
          "BNB bonus distribution system",
          "KYC verification process",
          "Whitelist management",
          "Token allocation optimization"
        ]
      },
      {
        quarter: "Q3 2025",
        title: "Performance Optimization",
        status: "upcoming",
        items: [
          "L2 transaction throughput upgrades",
          "Sharding implementation",
          "Storage cost reduction strategies",
          "Load balancer configuration"
        ]
      },
      {
        quarter: "Q4 2025",
        title: "Enterprise Hosting",
        status: "upcoming",
        items: [
          "Private node hosting solutions",
          "Institutional-grade security upgrades",
          "SLA-backed infrastructure",
          "Hybrid cloud deployment"
        ]
      },
      {
        quarter: "Q1 2026",
        title: "Global Distribution",
        status: "upcoming",
        items: [
          "Edge network expansion",
          "Localized data centers",
          "Multi-cloud failover systems",
          "Decentralized CDN integration"
        ]
      }
    ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case 'current':
        return <Clock className="w-6 h-6 text-blue-400" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-400 bg-green-400/10';
      case 'current':
        return 'border-blue-400 bg-blue-400/10';
      default:
        return 'border-gray-400 bg-gray-400/10';
    }
  };

  return (
    <section id="roadmap" className="bg-bg-primary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Roadmap
              </h2>
              <p className="text-xl text-secondary max-w-3xl mx-auto">
                Our strategic roadmap outlines the key milestones and developments 
                that will drive OMNIK's growth and adoption. Current phase: <span className="text-accent font-bold">Phase 2 - 40% Bonus Active</span>
              </p>
            </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full hidden md:block"></div>

              <div className="space-y-12">
                {phases.map((phase, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className={`bg-bg-secondary border rounded-xl p-6 ${getStatusColor(phase.status)}`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-accent">{phase.quarter}</span>
                        {getStatusIcon(phase.status)}
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">{phase.title}</h3>
                      <ul className="space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-2 text-secondary">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className={`w-4 h-4 rounded-full border-4 ${getStatusColor(phase.status)} z-10`}></div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
              <div className="text-center mt-16">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-accent/20 rounded-2xl p-8">
                  <Rocket className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Join Us on This Journey
                  </h3>
                  <p className="text-secondary mb-6 max-w-2xl mx-auto">
                    Be part of the OMNIK revolution and help shape the future of decentralized finance. 
                    Early supporters get exclusive benefits and priority access to new features.
                  </p>
                  <div className="flex justify-center">
                    <BuyInput ctaLabel="Get Early Access" />
                  </div>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
