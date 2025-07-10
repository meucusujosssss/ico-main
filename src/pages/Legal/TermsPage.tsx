import React from 'react';
import { Calendar, FileText, Scale } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-primary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Terms of Service
            </h1>
            <div className="flex items-center justify-center space-x-4 text-secondary">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Last updated: January 15, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Version 2.1</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-bg-secondary border border-border rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-secondary leading-relaxed">
                By accessing and using the OMNIK platform, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Description of Service</h2>
              <p className="text-secondary leading-relaxed mb-4">
                OMNIK provides a decentralized finance (DeFi) platform that allows users to:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-4">
                <li>Purchase OMK tokens during the Initial Coin Offering (ICO)</li>
                <li>Participate in staking and yield farming activities</li>
                <li>Access governance features and voting rights</li>
                <li>Utilize various DeFi protocols and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. User Responsibilities</h2>
              <p className="text-secondary leading-relaxed mb-4">
                As a user of the OMNIK platform, you agree to:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-4">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the security of your wallet and private keys</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not engage in any fraudulent or malicious activities</li>
                <li>Report any security vulnerabilities or suspicious activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Token Purchase and Investment Risks</h2>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-4">
                <p className="text-yellow-400 font-semibold mb-2">⚠️ Important Risk Disclosure</p>
                <p className="text-secondary text-sm">
                  Cryptocurrency investments carry significant risks and may result in partial or total loss of funds.
                </p>
              </div>
              <p className="text-secondary leading-relaxed mb-4">
                By purchasing OMK tokens, you acknowledge and accept the following risks:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-4">
                <li>Cryptocurrency markets are highly volatile and unpredictable</li>
                <li>Regulatory changes may affect the value and utility of tokens</li>
                <li>Technical risks including smart contract vulnerabilities</li>
                <li>Liquidity risks and potential inability to sell tokens</li>
                <li>Project development risks and potential failure to deliver roadmap items</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Prohibited Activities</h2>
              <p className="text-secondary leading-relaxed mb-4">
                The following activities are strictly prohibited on the OMNIK platform:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-4">
                <li>Money laundering or financing of illegal activities</li>
                <li>Market manipulation or insider trading</li>
                <li>Creating multiple accounts to circumvent limits</li>
                <li>Attempting to hack or compromise platform security</li>
                <li>Violating intellectual property rights</li>
                <li>Spamming or sending unsolicited communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Privacy and Data Protection</h2>
              <p className="text-secondary leading-relaxed">
                We are committed to protecting your privacy and personal data in accordance with applicable 
                data protection laws, including GDPR. Please refer to our Privacy Policy for detailed 
                information about how we collect, use, and protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Limitation of Liability</h2>
              <p className="text-secondary leading-relaxed">
                OMNIK and its affiliates shall not be liable for any direct, indirect, incidental, special, 
                consequential, or punitive damages, including but not limited to loss of profits, data, or 
                other intangible losses, resulting from your use of the platform or tokens.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Governing Law</h2>
              <p className="text-secondary leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of 
                [Jurisdiction], without regard to its conflict of law provisions. Any disputes arising from 
                these terms shall be resolved through binding arbitration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Changes to Terms</h2>
              <p className="text-secondary leading-relaxed">
                We reserve the right to modify these terms at any time. Users will be notified of significant 
                changes via email or platform notifications. Continued use of the platform after changes 
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Contact Information</h2>
              <p className="text-secondary leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-bg-tertiary rounded-lg">
                <p className="text-primary font-medium">OMNIK Legal Department</p>
                <p className="text-secondary">Email: legal@omnik.com</p>
                <p className="text-secondary">Address: [Company Address]</p>
              </div>
            </section>
          </div>

          {/* Download Option */}
          <div className="mt-8 text-center">
            <button className="inline-flex items-center space-x-2 bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              <FileText className="w-4 h-4" />
              <span>Download PDF Version</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;