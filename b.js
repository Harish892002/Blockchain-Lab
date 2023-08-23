const { Web3 } = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/ef08dd1641894d488d8327d4f9f6552c');
// Sender account information
const senderAddress = '0xbbEEeD7a7d9513989a3d70d2340d3096CBf4d8E4';
const senderPrivateKey = '786fa44e991ec4c46dbd7e52390c534e38fe4d98a7e67e049e217329bcc423c3';
// Recipient account information
const recipientAddress = '0x4fa2714c3EEDDd6E31a8F71e196441B3C7c899ed'; //
// Transfer Ether function
async function transferEther() {
    // Get the current gas price
    const gasPrice = await web3.eth.getGasPrice();
    // Estimate the gas required for the transaction
    const gasEstimate = await web3.eth.estimateGas({
        from: senderAddress,
        to: recipientAddress,
        value: web3.utils.toWei('0.001', 'ether'),
    });
    // Create the raw transaction object
    const rawTx = {
        from: senderAddress,
        to: recipientAddress,
        value: web3.utils.toHex(web3.utils.toWei('0.001', 'ether')),
        gasPrice: web3.utils.toHex(gasPrice),
        gasLimit: web3.utils.toHex(gasEstimate),
    };
    // Sign the transaction with the sender's private key
    const signedTx = await web3.eth.accounts.signTransaction(rawTx, senderPrivateKey);
    // Send the signed transaction to the Ethereum network
    const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Transaction successful.Transaction hash:', txReceipt.transactionHash);
}
// Call the transferEther function to initiate the transaction
transferEther();