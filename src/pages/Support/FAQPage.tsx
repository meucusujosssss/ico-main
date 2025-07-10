import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import Input from '../../components/UI/Input';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqData: FAQItem[] = [
    {
      id: '1',
      category: 'general',
      question: 'What is OMNIK (OMK)?',
      answer: 'OMNIK is a revolutionary DeFi protocol token designed to provide sustainable returns through innovative tokenomics and proven blockchain technology. OMK serves as the native utility token of our ecosystem.'
    },
    {
      id: '2',
      category: 'general',
      question: 'How do I buy OMK tokens?',
      answer: 'You can purchase OMK tokens directly through our platform using BNB. Simply connect your MetaMask wallet, enter the amount you want to invest, and complete the transaction. The minimum purchase is 0.3 BNB.'
    },
    {
      id: '3',
      category: 'technical',
      question: 'Which wallets are supported?',
      answer: 'We support MetaMask, Trust Wallet, Coinbase Wallet, and other Web3-compatible wallets. Make sure your wallet is connected to the Binance Smart Chain network.'
    },
    {
      id: '4',
      category: 'technical',
      question: 'What blockchain is OMK built on?',
      answer: 'OMK is built on the Binance Smart Chain (BSC), which offers fast transactions and low fees while maintaining compatibility with Ethereum-based tools and wallets.'
    },
    {
      id: '5',
      category: 'investment',
      question: 'What is the minimum investment amount?',
      answer: 'The minimum investment amount is 0.3 BNB. This ensures accessibility while maintaining the quality of our investor base.'
    },
    {
      id: '6',
      category: 'investment',
      question: 'When will tokens be distributed?',
      answer: 'Tokens are distributed immediately after purchase during the ICO phase. There are no lock-up periods for public sale participants.'
    },
    {
      id: '7',
      category: 'security',
      question: 'Is OMNIK audited?',
      answer: 'Yes, OMNIK has been fully audited by leading security firms including CertiK, Quantstamp, and ConsenSys Diligence. All audit reports are publicly available.'
    },
    {
      id: '8',
      category: 'security',
      question: 'How secure are my funds?',
      answer: 'Your funds are protected by military-grade security measures including multi-signature wallets, time-locked contracts, and comprehensive smart contract audits.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'investment', name: 'Investment' },
    { id: 'security', name: 'Security' }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-bg-primary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-secondary">
              Find answers to common questions about OMNIK and our platform
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-bg-secondary border border-border rounded-lg text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-accent text-white'
                      : 'bg-bg-secondary text-secondary hover:text-primary border border-border'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-secondary">No FAQs found matching your search.</p>
              </div>
            ) : (
              filteredFAQs.map(faq => (
                <div key={faq.id} className="bg-bg-secondary border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-bg-tertiary transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-primary pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(faq.id) ? (
                      <ChevronUp className="w-5 h-5 text-secondary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-secondary flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-4">
                      <p className="text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-accent/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Still have questions?
            </h3>
            <p className="text-secondary mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;