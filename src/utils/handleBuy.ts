import { ethers } from 'ethers';

/**
 * Abre MetaMask (ou wallet injetada) e envia a quantidade de BNB especificada para o endereço do projeto.
 */
export async function handleBuy(input?: any): Promise<void> {
  try {
    if (!(window as any).ethereum) {
      alert('Nenhuma carteira Web3 encontrada. Instale MetaMask.');
      return;
    }

    await (window as any).ethereum.request({ method: 'eth_requestAccounts' });

    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner();

    let valueStr: string | undefined = typeof input === 'string' ? input : undefined;
    if (!valueStr) {
      valueStr = prompt('Digite a quantidade de BNB que deseja enviar:') || '';
    }
    if (!valueStr) return;

    const value = ethers.parseEther(valueStr);

    const tx = await signer.sendTransaction({
      to: '0xE17f19bB1E5D6Ce1Dc88860d648a395519efF83C',
      value,
    });

    alert(`Transação enviada! Hash: ${tx.hash}`);
  } catch (error: any) {
    console.error(error);
    // Verifica erros específicos do MetaMask
    if (error.code === -32000 || 
        error.message.includes('insufficient funds') || 
        error.message.includes('gas required exceeds allowance') ||
        error.message.includes('missing revert data')) {
      // Deixa o MetaMask exibir sua própria mensagem
      return;
    }
    alert('Erro ao enviar transação: ' + (error?.message || error));
  }
}
