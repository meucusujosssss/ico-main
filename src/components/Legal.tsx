import React from 'react';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

const Legal: React.FC = () => {
  return (
    <section id="legal" className="bg-bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Legal Information
            </h2>
            <p className="text-xl text-secondary">
              Complete transparency and regulatory compliance documentation
            </p>
          </div>

          {/* Important Disclaimer */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-8 mb-12">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Important Disclaimer</h3>
                <p className="text-secondary mb-4">
                  This token offering involves significant risks and may not be suitable for all investors. 
                  Cryptocurrency investments are highly volatile and speculative. You may lose all or part 
                  of your investment.
                </p>
                <p className="text-secondary">
                  Please read our complete risk disclosure and consult with qualified financial advisors 
                  before making any investment decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-bg-tertiary border border-border rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-primary">Terms of Service</h3>
              </div>
              <p className="text-secondary mb-4">
                Complete terms and conditions governing the use of our platform and token purchase.
              </p>
              <a href="#" className="text-accent hover:text-blue-400 transition-colors">
                Read Full Terms →
              </a>
            </div>

            <div className="bg-bg-tertiary border border-border rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-primary">Privacy Policy</h3>
              </div>
              <p className="text-secondary mb-4">
                How we collect, use, and protect your personal information in compliance with GDPR.
              </p>
              <a href="/privacy-policy.pdf" className="text-accent hover:text-blue-400 transition-colors">
                Read Privacy Policy →
              </a>
            </div>

            <div className="bg-bg-tertiary border border-border rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-primary">Risk Disclosure</h3>
              </div>
              <p className="text-secondary mb-4">
                Comprehensive risk factors associated with cryptocurrency investments and our token.
              </p>
              <a href="/terms-of-service.pdf" className="text-accent hover:text-blue-400 transition-colors">
                Read Full Terms →
              </a>
            </div>

            <div className="bg-bg-tertiary border border-border rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-primary">Whitepaper</h3>
              </div>
              <p className="text-secondary mb-4">
                Technical documentation and detailed project information for informed decision-making.
              </p>
              <a href="/risk-disclosure.pdf" className="text-accent hover:text-blue-400 transition-colors">
                View Risk Factors →
              </a>
              <a href="/whitepaper.pdf" className="text-accent hover:text-blue-400 transition-colors">
                Download Whitepaper →
              </a>
            </div>
          </div>

          {/* Company Information */}
          <div className="bg-bg-tertiary border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Legal Entity</h4>
                <div className="space-y-2 text-secondary">
                  <p><strong>Company:</strong> OMNIK Technologies Ltd.</p>
                  <p><strong>Registration:</strong> [Company Registration Number]</p>
                  <p><strong>Jurisdiction:</strong> [Legal Jurisdiction]</p>
                  <p><strong>Address:</strong> [Registered Address]</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Regulatory Status</h4>
                <div className="space-y-2 text-secondary">
                  <p><strong>SEC Status:</strong> Registration Pending</p>
                  <p><strong>Compliance:</strong> KYC/AML Procedures</p>
                  <p><strong>Auditor:</strong> [Certified Public Accountant]</p>
                  <p><strong>Legal Counsel:</strong> [Law Firm Name]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
