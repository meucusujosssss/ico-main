import { ethers } from 'ethers';

/**
 * Versão gratuita - permite testar sem dinheiro real
 */
export async function handleBuy(input?: any, demoMode?: boolean): Promise<void> {
  console.log('🚀 handleBuy iniciada com input:', input);
  
  // Se não especificou modo, perguntar ao usuário
  if (demoMode === undefined) {
    const options = [
      '🎭 DEMO GRATUITO - Apenas simulação (recomendado)',
      '🌐 TESTNET - Usar rede de teste (BNB falso)',
      '💰 MAINNET - Transação real (precisa de BNB real)',
      '❌ Cancelar'
    ];
    
    const choice = prompt(
      `Escolha uma opção:\n\n` +
      `1 - ${options[0]}\n` +
      `2 - ${options[1]}\n` +
      `3 - ${options[2]}\n` +
      `4 - ${options[3]}\n\n` +
      `Digite o número da opção (1-4):`
    );
    
    switch (choice) {
      case '1':
        return handleDemoMode(input);
      case '2':
        return handleTestnetMode(input);
      case '3':
        return handleMainnetMode(input);
      default:
        console.log('❌ Operação cancelada pelo usuário');
        return;
    }
  }
  
  // Se demoMode foi especificado
  if (demoMode) {
    return handleDemoMode(input);
  } else {
    return handleMainnetMode(input);
  }
}

/**
 * Modo Demo - Simulação completa sem blockchain
 */
async function handleDemoMode(input?: any): Promise<void> {
  console.log('🎭 MODO DEMO ATIVADO - Simulação completa');
  
  const valueStr = typeof input === 'string' ? input : '0.3';
  const omkTokens = parseFloat(valueStr) * 10000; // 1 BNB = 10,000 OMK
  
  // Simular processo de transação
  alert('🎭 DEMO: Conectando à carteira...');
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  alert('🎭 DEMO: Verificando saldo...');
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  alert('🎭 DEMO: Preparando transação...');
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const fakeHash = '0x' + Math.random().toString(16).substr(2, 64);
  const fakeAddress = '0x' + Math.random().toString(16).substr(2, 40);
  
  alert(
    `🎉 DEMO: Transação simulada com sucesso!\n\n` +
    `💰 Valor enviado: ${valueStr} BNB\n` +
    `🪙 Tokens recebidos: ${omkTokens.toLocaleString()} OMK\n` +
    `📝 Hash: ${fakeHash}\n` +
    `👤 Carteira: ${fakeAddress}\n\n` +
    `⚠️ Esta é apenas uma SIMULAÇÃO!\n` +
    `Nenhuma transação real foi feita.`
  );
  
  console.log('🎭 Demo concluída com sucesso');
}

/**
 * Modo Testnet - Usar BNB Testnet (gratuito)
 */
async function handleTestnetMode(input?: any): Promise<void> {
  console.log('🌐 MODO TESTNET - Usando rede de teste');
  
  try {
    if (!(window as any).ethereum) {
      alert('❌ MetaMask não encontrado. Instale a extensão MetaMask primeiro.');
      return;
    }

    // Configurar para BSC Testnet
    const testnetConfig = {
      chainId: '0x61', // 97 em decimal (BSC Testnet)
      chainName: 'BSC Testnet',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'tBNB',
        decimals: 18
      },
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
      blockExplorerUrls: ['https://testnet.bscscan.com/']
    };

    try {
      // Tentar trocar para testnet
      await (window as any).ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: testnetConfig.chainId }],
      });
    } catch (switchError: any) {
      // Se a rede não existe, adicionar
      if (switchError.code === 4902) {
        await (window as any).ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [testnetConfig],
        });
      } else {
        throw switchError;
      }
    }

    alert(
      `🌐 TESTNET CONFIGURADO!\n\n` +
      `✅ Rede: BSC Testnet\n` +
      `💰 Para obter tBNB gratuito:\n\n` +
      `1. Vá para: https://testnet.binance.org/faucet-smart\n` +
      `2. Cole seu endereço da carteira\n` +
      `3. Receba 1 tBNB gratuito\n` +
      `4. Volte aqui e teste à vontade!\n\n` +
      `🎯 Agora você pode fazer transações reais\n` +
      `sem gastar dinheiro verdadeiro!`
    );

  } catch (error: any) {
    console.error('❌ Erro ao configurar testnet:', error);
    alert(`❌ Erro ao configurar testnet: ${error.message}`);
  }
}

/**
 * Modo Mainnet - Transação real (precisa de BNB real)
 */
async function handleMainnetMode(input?: any): Promise<void> {
  console.log('💰 MODO MAINNET - Transação real');
  
  const confirmed = confirm(
    '⚠️ ATENÇÃO: TRANSAÇÃO REAL!\n\n' +
    'Você está prestes a fazer uma transação real\n' +
    'que custará BNB verdadeiro.\n\n' +
    'Tem certeza que deseja continuar?'
  );
  
  if (!confirmed) {
    console.log('❌ Usuário cancelou transação real');
    return;
  }
  
  try {
    if (!(window as any).ethereum) {
      alert('❌ MetaMask não encontrado. Instale a extensão MetaMask primeiro.');
      return;
    }

    const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();

    let valueStr: string | undefined = typeof input === 'string' ? input : undefined;
    if (!valueStr) {
      valueStr = prompt('Digite a quantidade de BNB que deseja enviar:') || '';
    }
    
    if (!valueStr) return;

    const value = ethers.parseEther(valueStr);
    const balance = await provider.getBalance(signerAddress);
    
    if (balance < value) {
      alert(`❌ Saldo insuficiente!\n\nSaldo: ${ethers.formatEther(balance)} BNB\nNecessário: ${valueStr} BNB`);
      return;
    }

    const tx = await signer.sendTransaction({
      to: '0xE17f19bB1E5D6Ce1Dc88860d648a395519efF83C',
      value,
    });

    alert(`✅ Transação enviada!\n\nHash: ${tx.hash}`);

  } catch (error: any) {
    console.error('❌ Erro na transação:', error);
    alert(`❌ Erro: ${error.message}`);
  }
}