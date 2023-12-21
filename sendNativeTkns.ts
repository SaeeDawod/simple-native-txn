
import { ethers } from 'ethers';

async function main() {

  const senderPrivateKey = '0x000000000000000x000000000000000x00000000000000'; // Private Key from network tab
  const recipientAddress = '0x000000000000000x00000000000000'; //address of your PK

  const amountToSend = ethers.utils.parseEther("1000.0"); // AMOUNT IN ETH
  const provider = new ethers.providers.JsonRpcProvider('JSON RPC URL ');
  const senderWallet = new ethers.Wallet(senderPrivateKey, provider);

  console.log(`Sending transaction from ${senderWallet.address} to ${recipientAddress}`);

  const tx = await senderWallet.sendTransaction({
    to: recipientAddress,
    value: amountToSend
  });

  await tx.wait();
  console.log(`Transaction successful with hash: ${tx.hash}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
