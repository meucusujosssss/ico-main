import React from 'react';
import { 
  TrendingUp, 
  Wallet, 
  Clock, 
  Award,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import BuyInput from '../../components/BuyInput';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Portfolio Value',
      value: '$12,450.00',
      change: '+12.5%',
      trend: 'up',
      icon: Wallet
    },
    {
      title: 'OMK Holdings',
      value: '25,000 OMK',
      change: '+8.2%',
      trend: 'up',
      icon: TrendingUp
    },
    {
      title: 'Staking Rewards',
      value: '$342.50',
      change: '+15.7%',
      trend: 'up',
      icon: Award
    },
    {
      title: 'Time Locked',
      value: '180 days',
      change: '-5 days',
      trend: 'down',
      icon: Clock
    }
  ];

  const recentTransactions = [
    {
      id: '1',
      type: 'Purchase',
      amount: '5,000 OMK',
      value: '$400.00',
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: '2',
      type: 'Staking Reward',
      amount: '125 OMK',
      value: '$10.00',
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: '3',
      type: 'Purchase',
      amount: '10,000 OMK',
      value: '$800.00',
      date: '2024-01-12',
      status: 'completed'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-secondary">
          Here's an overview of your OMNIK portfolio and recent activity.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-bg-secondary border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${
                stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                <span>{stat.change}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-1">{stat.value}</h3>
            <p className="text-secondary text-sm">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Buy */}
        <div className="bg-bg-secondary border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-primary mb-6">Quick Buy</h2>
          <BuyInput ctaLabel="Buy More OMK" />
        </div>

        {/* Recent Transactions */}
        <div className="lg:col-span-2 bg-bg-secondary border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-primary">Recent Transactions</h2>
            <button className="text-accent hover:text-blue-400 text-sm">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {recentTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 bg-bg-tertiary rounded-lg">
                <div>
                  <p className="font-medium text-primary">{tx.type}</p>
                  <p className="text-sm text-secondary">{tx.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-primary">{tx.amount}</p>
                  <p className="text-sm text-secondary">{tx.value}</p>
                </div>
                <div className="ml-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                    {tx.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Overview */}
      <div className="bg-bg-secondary border border-border rounded-xl p-6">
        <h2 className="text-xl font-bold text-primary mb-6">Market Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-secondary text-sm mb-1">Current Price</p>
            <p className="text-2xl font-bold text-primary">$0.08</p>
            <p className="text-green-400 text-sm">+5.2% (24h)</p>
          </div>
          <div className="text-center">
            <p className="text-secondary text-sm mb-1">Market Cap</p>
            <p className="text-2xl font-bold text-primary">$80M</p>
            <p className="text-green-400 text-sm">+12.8% (24h)</p>
          </div>
          <div className="text-center">
            <p className="text-secondary text-sm mb-1">24h Volume</p>
            <p className="text-2xl font-bold text-primary">$2.4M</p>
            <p className="text-red-400 text-sm">-3.1% (24h)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;