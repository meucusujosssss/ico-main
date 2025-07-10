import React from 'react';
import { Calendar, FileText, Shield } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-primary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Privacy Policy
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
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p className="text-secondary leading-relaxed">
                OMNIK ("we," "our," or "us") is committed to protecting your privacy and personal data. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you use our platform and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-primary mb-3">2.1 Personal Information</h3>
              <p className="text-secondary leading-relaxed mb-4">
                We may collect the following personal information:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-4 mb-6">
                <li>Name and contact information (email address, phone number)</li>
                <li>Wallet addresses and transaction history</li>
                <li>Identity verification documents (for KYC compliance)</li>
                <li>IP address and device information</li>
                <li>Usage data and platform interactions</li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-secondary leading-relaxed mb-4">
                We automatically collect certain information when you use our platform:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-4">
                <li>Browser type and version</li>
                <li>Operating system and device type</li>
                <li>Pages visited and time spent on platform</li>
                <li>Referring websites and search terms</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
              <p className="text-secondary leading-relaxed mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-4">
                <li>Providing and maintaining our platform services</li>
                <li>Processing transactions and token purchases</li>
                <li>Verifying your identity and preventing fraud</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Improving our platform and user experience</li>
                <li>Sending important updates and notifications</li>
                <li>Providing customer support and assistance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-secondary leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-4">
                <li>With service providers who assist in platform operations</li>
                <li>To comply with legal obligations and regulatory requirements</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Data Security</h2>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                <p className="text-green-400 font-semibold mb-2">🔒 Security Measures</p>
                <p className="text-secondary text-sm">
                  We implement industry-standard security measures to protect your data.
                </p>
              </div>
              <p className="text-secondary leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal data:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Multi-factor authentication and access controls</li>
                <li>Regular security audits and penetration testing</li>
                <li>Employee training on data protection practices</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights (GDPR)</h2>
              <p className="text-secondary leading-relaxed mb-4">
                If you are a resident of the European Union, you have the following rights:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-4">
                <li><strong>Right of Access:</strong> Request copies of your personal data</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Transfer your data to another service</li>
                <li><strong>Right to Object:</strong> Object to certain types of processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Cookies and Tracking</h2>
              <p className="text-secondary leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for platform functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand platform usage</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Deliver relevant advertisements (with consent)</li>
              </ul>
              <p className="text-secondary leading-relaxed mt-4">
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Data Retention</h2>
              <p className="text-secondary leading-relaxed">
                We retain your personal data only as long as necessary for the purposes outlined in this 
                policy or as required by law. Transaction data may be retained for longer periods to comply 
                with financial regulations and anti-money laundering requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. International Data Transfers</h2>
              <p className="text-secondary leading-relaxed">
                Your data may be transferred to and processed in countries other than your country of 
                residence. We ensure appropriate safeguards are in place to protect your data during 
                international transfers, including standard contractual clauses and adequacy decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Changes to This Policy</h2>
              <p className="text-secondary leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new policy on our platform and sending an email notification. 
                Your continued use of the platform constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">11. Contact Us</h2>
              <p className="text-secondary leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, 
                please contact us:
              </p>
              <div className="p-4 bg-bg-tertiary rounded-lg">
                <p className="text-primary font-medium">Data Protection Officer</p>
                <p className="text-secondary">Email: privacy@omnik.com</p>
                <p className="text-secondary">Address: [Company Address]</p>
                <p className="text-secondary">Phone: +1 (555) 123-4567</p>
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

export default PrivacyPage;