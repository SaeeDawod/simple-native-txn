
import { ethers } from 'ethers';

async function main() {

  const senderPrivateKey = '0x3bee567f9470e3d023f2c9b20ac62be714805b072297f3865b4d3549a2a3b1b6'; // Private Key from network tab
  const recipientAddress = '0x8105ce17CaFe46A0773d37c094d1FBC9A060bb27'; //address of your PK

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
