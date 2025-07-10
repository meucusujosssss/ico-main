import React, { useState, useEffect } from 'react';
import { handleBuy } from '../utils/handleBuy';
import { ArrowRight } from 'lucide-react';
import { calculateOMKAllocation } from '../utils/TokenCalculations';

const BuyInput: React.FC<{ ctaLabel?: string }> = ({ ctaLabel = 'Buy Tokens' }) => {
  const [amount, setAmount] = useState('0.3');
  const [allocation, setAllocation] = useState(0);
  const minAmount = 0.3;

  useEffect(() => {
    const tokens = calculateOMKAllocation(amount);
    setAllocation(tokens);
  }, [amount]);

  const handlePurchase = () => {
    let value = parseFloat(amount);
    if (isNaN(value)) return;
    if (value < minAmount) value = minAmount;
    handleBuy(value.toString());
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-1">
          <span className="px-4 flex items-center bg-bg-tertiary border border-border border-r-0 rounded-l-lg text-secondary text-sm font-medium">
            BNB
          </span>
          <input
            type="number"
            min={minAmount}
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-bg-tertiary border border-border rounded-r-lg px-4 py-3 text-primary flex-1 focus:outline-none focus:border-accent transition-colors"
            placeholder="0.3"
          />
        </div>
        
        <button
          onClick={handlePurchase}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
        >
          <span>{ctaLabel}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {amount && allocation > 0 && (
        <div className="bg-bg-tertiary/50 border border-border rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-secondary text-sm">You will receive:</span>
            <span className="text-xl font-bold text-accent">
              {allocation.toLocaleString()} Tokens
            </span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-secondary text-xs">Rate:</span>
            <span className="text-secondary text-xs">1 BNB = 10,000 Tokens</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyInput;