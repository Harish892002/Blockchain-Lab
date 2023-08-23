const { Web3 } = require('web3');
const web3 = new Web3('https://goerli.infura.io/v3/ef08dd1641894d488d8327d4f9f6552c');
web3.eth.getBlockNumber().then(console.log).catch(console.error);

// 9531952n