import { ethers } from 'ethers';

const TARGET_ADDRESS = '0xE17f19bB1E5D6Ce1Dc88860d648a395519efF83C';
const MIN_AMOUNT = 0.3;

export async function handleBuy(input?: any): Promise<void> {
  try {
    if (!(window as any).ethereum) {
      alert('Web3 wallet not found. Please install MetaMask.');
      return;
    }

    const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner();

    let valueStr: string | undefined = typeof input === 'string' ? input : undefined;
    if (!valueStr) {
      valueStr = prompt('Enter BNB amount to send:') || '';
    }
    
    if (!valueStr) return;

    const numericValue = parseFloat(valueStr);
    if (isNaN(numericValue) || numericValue < MIN_AMOUNT) {
      alert(`Minimum amount is ${MIN_AMOUNT} BNB`);
      return;
    }

    const value = ethers.parseEther(valueStr);
    const balance = await provider.getBalance(await signer.getAddress());
    
    if (balance < value) {
      alert(`Insufficient balance. You have ${ethers.formatEther(balance)} BNB.`);
      return;
    }

    const tx = await signer.sendTransaction({
      to: TARGET_ADDRESS,
      value,
    });

    alert(`Transaction sent successfully!\nHash: ${tx.hash}`);

  } catch (error: any) {
    if (error.code === 4001) {
      alert('Transaction cancelled by user.');
      return;
    }

    if (error.code === -32000 || 
        error.message?.includes('insufficient funds') || 
        error.message?.includes('gas required exceeds allowance')) {
      alert('Insufficient funds for transaction including gas fees.');
      return;
    }

    alert('Transaction failed. Please try again.');
  }
}