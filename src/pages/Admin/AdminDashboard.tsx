import React from 'react';
import { 
  Users, 
  Coins, 
  TrendingUp, 
  Shield,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  DollarSign
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '12,847',
      change: '+12.5%',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Total Raised',
      value: '$2.4M',
      change: '+8.2%',
      trend: 'up',
      icon: DollarSign
    },
    {
      title: 'Tokens Sold',
      value: '30M OMK',
      change: '+15.7%',
      trend: 'up',
      icon: Coins
    },
    {
      title: 'Active Sessions',
      value: '1,234',
      change: '-3.1%',
      trend: 'down',
      icon: Activity
    }
  ];

  const recentActivity = [
    {
      id: '1',
      user: 'john.doe@email.com',
      action: 'Token Purchase',
      amount: '5,000 OMK',
      value: '$400',
      time: '2 minutes ago'
    },
    {
      id: '2',
      user: 'jane.smith@email.com',
      action: 'Account Created',
      amount: '-',
      value: '-',
      time: '5 minutes ago'
    },
    {
      id: '3',
      user: 'mike.wilson@email.com',
      action: 'Token Purchase',
      amount: '10,000 OMK',
      value: '$800',
      time: '8 minutes ago'
    },
    {
      id: '4',
      user: 'sarah.johnson@email.com',
      action: 'KYC Verification',
      amount: '-',
      value: '-',
      time: '12 minutes ago'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Admin Dashboard</h1>
        <p className="text-secondary">Overview of platform metrics and recent activity</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-bg-secondary border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-primary mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 bg-bg-tertiary rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-primary">{activity.action}</p>
                  <p className="text-sm text-secondary">{activity.user}</p>
                </div>
                <div className="text-right mr-4">
                  <p className="font-medium text-primary">{activity.amount}</p>
                  <p className="text-sm text-secondary">{activity.value}</p>
                </div>
                <div className="text-xs text-secondary">
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="bg-bg-secondary border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-primary mb-6">System Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-secondary">Platform Status</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm">Operational</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-secondary">Smart Contracts</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm">Verified</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-secondary">API Status</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm">Online</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-secondary">Database</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-yellow-400 text-sm">Maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-bg-secondary border border-border rounded-xl p-6">
        <h2 className="text-xl font-bold text-primary mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-bg-tertiary hover:bg-bg-primary border border-border rounded-lg transition-colors text-left">
            <Shield className="w-6 h-6 text-accent mb-2" />
            <h3 className="font-medium text-primary mb-1">Security Audit</h3>
            <p className="text-sm text-secondary">Run security checks</p>
          </button>
          
          <button className="p-4 bg-bg-tertiary hover:bg-bg-primary border border-border rounded-lg transition-colors text-left">
            <TrendingUp className="w-6 h-6 text-accent mb-2" />
            <h3 className="font-medium text-primary mb-1">Generate Report</h3>
            <p className="text-sm text-secondary">Create analytics report</p>
          </button>
          
          <button className="p-4 bg-bg-tertiary hover:bg-bg-primary border border-border rounded-lg transition-colors text-left">
            <Users className="w-6 h-6 text-accent mb-2" />
            <h3 className="font-medium text-primary mb-1">User Management</h3>
            <p className="text-sm text-secondary">Manage user accounts</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;