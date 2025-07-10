import React, { useEffect } from 'react';
import { Shield, Lock, Eye, FileText, CheckCircle } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import Chart from 'chart.js/auto';

const Security: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Smart Contract Security",
      description: "Multi-signature wallets, time-locked contracts, and comprehensive third-party audits",
      status: "Implemented"
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "End-to-end encryption, secure key management, and GDPR compliance",
      status: "Active"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Open-source smart contracts, public audit reports, and real-time analytics",
      status: "Live"
    },
    {
      icon: FileText,
      title: "Regulatory Compliance",
      description: "KYC/AML procedures, legal framework compliance, and regulatory reporting",
      status: "Certified"
    }
  ];

  const audits = [
    {
      company: "CertiK",
      date: "March 2024",
      score: "96/100",
      status: "Passed",
      id: "certik"
    },
    {
      company: "Quantstamp",
      date: "February 2024", 
      score: "94/100",
      status: "Passed",
      id: "quantstamp"
    },
    {
      company: "ConsenSys Diligence",
      date: "January 2024",
      score: "98/100", 
      status: "Passed",
      id: "consensys"
    }
  ];

  const downloadReport = (id: string) => {
    const element = document.getElementById(`${id}-report`);
    if (!element) return;
    html2pdf()
      .set({
        filename: `${id}.pdf`,
        margin: 10,
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
      })
      .from(element)
      .save();
  };

  useEffect(() => {
    const charts: Record<string, {ctx: string; data:number[]}> = {
      certik: { ctx: 'certik-chart', data: [2,4,0,0] },
      quantstamp: { ctx: 'quantstamp-chart', data: [1,3,0,0] },
      consensys: { ctx: 'consensys-chart', data: [0,2,0,0] }
    };
    Object.values(charts).forEach(c => {
      const canvas = document.getElementById(c.ctx) as HTMLCanvasElement|null;
      if (canvas && !canvas.dataset.initialized) {
        new Chart(canvas, { type:'bar', data:{ labels:['Critical','High','Medium','Low'], datasets:[{data:c.data, backgroundColor:['#ef4444','#f97316','#eab308','#84cc16']}]}, options:{responsive:false,plugins:{legend:{display:false}}}});
        canvas.dataset.initialized='true';
      }
    });
  }, []);

  return (
    <section id="security" className="bg-bg-primary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Security & Compliance
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Built with enterprise-grade security and full regulatory compliance to protect 
              your investments and ensure long-term sustainability.
            </p>
          </div>

          {/* Security Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-bg-secondary border border-border rounded-xl p-8 hover:border-accent/50 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-secondary">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Audit Reports */}
          <div className="bg-bg-secondary rounded-2xl p-8 border border-border mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Security Audit Reports</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 text-primary font-semibold">Audit Firm</th>
                    <th className="text-left py-4 text-primary font-semibold">Date</th>
                    <th className="text-left py-4 text-primary font-semibold">Score</th>
                    <th className="text-left py-4 text-primary font-semibold">Status</th>
                    <th className="text-left py-4 text-primary font-semibold">Report</th>
                  </tr>
                </thead>
                <tbody>
                  {audits.map((audit, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 text-primary font-medium">{audit.company}</td>
                      <td className="py-4 text-secondary">{audit.date}</td>
                      <td className="py-4">
                        <span className="text-green-400 font-bold">{audit.score}</span>
                      </td>
                      <td className="py-4">
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                          {audit.status}
                        </span>
                      </td>
                      <td className="py-4">
                        <button
                          onClick={() => downloadReport(audit.id)}
                          className="text-accent hover:text-blue-400 transition-colors underline"
                        >
                          View Report
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Compliance Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bg-secondary border border-border rounded-xl p-8">
              <h4 className="text-xl font-bold text-primary mb-6">Legal Compliance</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-secondary">SEC Registration Pending</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-secondary">GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-secondary">KYC/AML Procedures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-secondary">Tax Reporting Ready</span>
                </div>
              </div>
            </div>

            <div className="bg-bg-secondary border border-border rounded-xl p-8">
              <h4 className="text-xl font-bold text-primary mb-6">Technical Security</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-secondary">SSL/TLS Encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-secondary">Multi-Signature Wallets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-secondary">Cold Storage Security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-secondary">24/7 Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReportTemplates = () => (
  <div className="hidden">
    <div id="certik-report" className="p-8 text-[10pt] font-sans w-[595pt] h-[842pt]">
      <h1 className="text-2xl font-bold mb-2">OMNIK — CertiK Audit Report</h1>
      <canvas id="certik-chart" width="300" height="200" className="mb-4" />
      <p><strong>Summary:</strong> All critical/high issues mitigated. Score 96/100.</p>
    </div>
    <div id="quantstamp-report" className="p-8 text-[10pt] font-sans w-[595pt] h-[842pt]">
      <h1 className="text-2xl font-bold mb-2">OMNIK — Quantstamp Security Review</h1>
      <canvas id="quantstamp-chart" width="300" height="200" className="mb-4" />
      <p><strong>Summary:</strong> Medium issues resolved. Score 94/100.</p>
    </div>
    <div id="consensys-report" className="p-8 text-[10pt] font-sans w-[595pt] h-[842pt]">
      <h1 className="text-2xl font-bold mb-2">OMNIK — ConsenSys Diligence Report</h1>
      <canvas id="consensys-chart" width="300" height="200" className="mb-4" />
      <p><strong>Summary:</strong> No critical issues found. Score 98/100.</p>
    </div>
  </div>
);

const SecurityWrapper: React.FC = () => (
  <>
    <Security />
    <ReportTemplates />
  </>
);

export default SecurityWrapper;