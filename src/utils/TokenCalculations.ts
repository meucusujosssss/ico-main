export function calculateOMKAllocation(bnbAmount: string): number {
  try {
    // Converte BNB para OMK usando taxa fixa de 1 BNB = 10.000 OMK
    const bnbValue = parseFloat(bnbAmount);
    if (isNaN(bnbValue) || bnbValue < 0.3) return 0;
    
    // Aplica a taxa de conversão fixa
    return bnbValue * 10000;
  } catch (error) {
    console.error('Erro no cálculo de alocação:', error);
    return 0;
  }
}
