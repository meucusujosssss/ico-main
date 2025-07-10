import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Ribeiro",
      role: "CEO & Co-Founder",
      bio: "Former Goldman Sachs VP with 15+ years in traditional finance and 8 years in blockchain",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Google senior engineer, led blockchain teams at Coinbase and Binance",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
    },
    {
      name: "Michael Thompson",
      role: "Head of Product",
      bio: "Product leader from Stripe and Square, expert in fintech user experience",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
    },
    {
      name: "Dr. Emily Johnson",
      role: "Head of Research",
      bio: "PhD in Cryptography from MIT, published 50+ papers on blockchain security",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      name: "Ryan Armstrong",
      role: "Head of Blockchain Strategy",
      bio: "Ex-ConsenSys, early Ethereum developer, and DeFi protocol architect",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    },
    {
      name: "Lisa Zhang",
      role: "Head of Legal",
      bio: "Former SEC attorney, specialist in cryptocurrency regulations and compliance",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg"
    }
  ];

  const advisors = [
    {
      name: "John Anderson",
      role: "Strategic Advisor",
      bio: "Former CEO of major crypto exchange, blockchain industry veteran",
      image: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg"
    },
    {
      name: "Dr. Emily Wilson",
      role: "Technical Advisor",
      bio: "Ethereum Foundation researcher, zero-knowledge proof specialist",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg"
    }
  ];

  return (
    <section id="team" className="bg-bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              World-class team of experts from leading tech companies and financial institutions, 
              united by a vision to revolutionize decentralized finance.
            </p>
          </div>

          {/* Core Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Core Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-bg-tertiary border border-border rounded-xl p-6 hover:border-accent/50 transition-all group">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-primary mb-2">{member.name}</h4>
                    <p className="text-accent font-medium mb-3">{member.role}</p>
                    <p className="text-secondary text-sm mb-4">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advisors */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Strategic Advisors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {advisors.map((advisor, index) => (
                <div key={index} className="bg-bg-tertiary border border-border rounded-xl p-6 hover:border-accent/50 transition-all group">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={advisor.image} 
                      alt={advisor.name}
                      className="w-16 h-16 rounded-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-primary mb-1">{advisor.name}</h4>
                      <p className="text-accent font-medium mb-2">{advisor.role}</p>
                      <p className="text-secondary text-sm">{advisor.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join Team CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-accent/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Join Our Growing Team
              </h3>
              <p className="text-secondary mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for 
                revolutionizing decentralized finance. Check out our open positions.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
