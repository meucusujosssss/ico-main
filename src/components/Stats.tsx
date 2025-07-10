import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Total Value Locked', value: '$2.4B', change: '+12.5%' },
    { label: 'Active Users', value: '45,231', change: '+8.2%' },
    { label: 'Transactions', value: '1.2M', change: '+15.7%' },
    { label: 'Market Cap', value: '$890M', change: '+22.1%' },
  ];

  return (
    <section className="bg-bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-secondary text-sm mb-1">{stat.label}</div>
              <div className="text-green-400 text-xs">{stat.change}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;