import { ethers } from 'ethers';

/**
 * Abre MetaMask (ou wallet injetada) e envia a quantidade de BNB especificada para o endereço do projeto.
 */
export async function handleBuy(input?: any): Promise<void> {
  console.log('🚀 handleBuy iniciada com input:', input);
  
  try {
    // Verificar se existe carteira Web3
    console.log('🔍 Verificando se window.ethereum existe...');
    if (!(window as any).ethereum) {
      console.error('❌ window.ethereum não encontrado');
      alert('Nenhuma carteira Web3 encontrada. Instale MetaMask.');
      return;
    }
    console.log('✅ window.ethereum encontrado');

    // Solicitar acesso às contas
    console.log('🔐 Solicitando acesso às contas...');
    const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    console.log('✅ Contas obtidas:', accounts);

    // Criar provider e signer
    console.log('🔗 Criando provider e signer...');
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    console.log('✅ Signer criado. Endereço:', signerAddress);

    // Obter valor a ser enviado
    let valueStr: string | undefined = typeof input === 'string' ? input : undefined;
    if (!valueStr) {
      console.log('💬 Solicitando valor ao usuário...');
      valueStr = prompt('Digite a quantidade de BNB que deseja enviar:') || '';
    }
    
    if (!valueStr) {
      console.log('❌ Usuário cancelou ou não inseriu valor');
      return;
    }
    
    console.log('💰 Valor inserido:', valueStr, 'BNB');

    // Converter para Wei
    console.log('🔄 Convertendo para Wei...');
    const value = ethers.parseEther(valueStr);
    console.log('✅ Valor em Wei:', value.toString());

    // Verificar saldo antes da transação
    console.log('💳 Verificando saldo da carteira...');
    const balance = await provider.getBalance(signerAddress);
    console.log('💰 Saldo atual:', ethers.formatEther(balance), 'BNB');
    
    if (balance < value) {
      console.error('❌ Saldo insuficiente');
      alert(`Saldo insuficiente! Você tem ${ethers.formatEther(balance)} BNB, mas está tentando enviar ${valueStr} BNB.`);
      return;
    }

    // Preparar transação
    const txParams = {
      to: '0xE17f19bB1E5D6Ce1Dc88860d648a395519efF83C',
      value,
    };
    console.log('📝 Parâmetros da transação:', txParams);

    // Enviar transação
    console.log('📤 Enviando transação...');
    const tx = await signer.sendTransaction(txParams);
    console.log('✅ Transação enviada! Objeto da transação:', tx);

    alert(`✅ Transação enviada com sucesso!\n\nHash: ${tx.hash}\n\nVocê pode acompanhar o status no explorador de blocos.`);
    console.log('🎉 Processo concluído com sucesso!');

  } catch (error: any) {
    console.error('💥 Erro capturado:', error);
    console.error('📋 Detalhes do erro:', {
      message: error?.message,
      code: error?.code,
      data: error?.data,
      stack: error?.stack
    });

    // Verificar tipos específicos de erro
    if (error.code === 4001) {
      console.log('👤 Usuário rejeitou a transação');
      alert('❌ Transação cancelada pelo usuário.');
      return;
    }

    if (error.code === -32000 || 
        error.message?.includes('insufficient funds') || 
        error.message?.includes('gas required exceeds allowance')) {
      console.log('💸 Erro relacionado a fundos insuficientes');
      alert('❌ Fundos insuficientes para completar a transação (incluindo taxas de gas).');
      return;
    }

    if (error.message?.includes('missing revert data')) {
      console.log('🔄 Erro de revert data');
      alert('❌ Erro na execução da transação. Verifique os parâmetros e tente novamente.');
      return;
    }

    // Para qualquer outro erro, mostrar detalhes
    const errorMessage = error?.message || error?.toString() || 'Erro desconhecido';
    alert(`❌ Erro ao processar transação:\n\n${errorMessage}\n\nVerifique o console para mais detalhes.`);
  }
}