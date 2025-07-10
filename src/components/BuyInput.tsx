import React, { useState, useEffect } from 'react';
import { handleBuy } from '../utils/handleBuy';
import { ArrowRight } from 'lucide-react';
import { calculateOMKAllocation } from '../utils/TokenCalculations';

/**
 * Small widget that lets user type the BNB amount and immediately opens MetaMask to send it.
 */
const BuyInput: React.FC<{ ctaLabel?: string }> = ({ ctaLabel = 'Buy OMK' }) => {
  const [amount, setAmount] = useState('0.3');
  const [omkAllocation, setOmkAllocation] = useState(0);
  const minBnb = 0.3;

  useEffect(() => {
    const allocation = calculateOMKAllocation(amount);
    setOmkAllocation(allocation);
  }, [amount]);

  const onBuy = () => {
    let numeric = parseFloat(amount);
    if (isNaN(numeric)) return;
    if (numeric < minBnb) numeric = minBnb;
    handleBuy(numeric.toString());
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="flex w-full sm:w-auto">
        <span className="px-3 flex items-center bg-bg-secondary border border-border border-r-0 rounded-l-lg text-secondary text-sm">BNB</span>
        <input
          type="number"
          min={minBnb}
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-bg-secondary border border-border rounded-r-lg px-4 py-3 text-primary w-full sm:w-40 focus:outline-none focus:border-accent"
        />
      </div>
      <button
        onClick={onBuy}
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <span>{ctaLabel}</span>
        <ArrowRight className="w-5 h-5" />
      </button>

      {amount && <div className="text-center mt-3">
        <p className="text-secondary text-sm">Estimated tokens:</p>
        <p className="text-2xl font-bold text-accent">
          {omkAllocation.toLocaleString()} OMK
        </p>
      </div>}

    </div>
  );
};

export default BuyInput;
