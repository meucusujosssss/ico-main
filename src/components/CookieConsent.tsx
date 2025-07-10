import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-bg-tertiary border-t border-border p-4 z-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-start space-x-3 flex-1">
            <Cookie className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-primary font-semibold mb-2">Cookie Consent</h3>
              <p className="text-secondary text-sm">
                We use cookies to enhance your experience and analyze site usage. 
                By continuing to use our site, you consent to our use of cookies in accordance with our{' '}
                <a href="/privacy-policy.pdf" className="text-accent hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>.
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-secondary hover:text-primary border border-border rounded-lg transition-colors"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-accent hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
