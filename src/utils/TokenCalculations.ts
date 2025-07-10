const CONVERSION_RATE = 10000;
const MIN_BNB = 0.3;

export function calculateOMKAllocation(bnbAmount: string): number {
  try {
    const bnbValue = parseFloat(bnbAmount);
    if (isNaN(bnbValue) || bnbValue < MIN_BNB) return 0;
    return bnbValue * CONVERSION_RATE;
  } catch {
    return 0;
  }
}