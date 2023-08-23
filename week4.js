const { Web3 } = require('web3');
const web3 = new Web3('https://goerli.infura.io/v3/ef08dd1641894d488d8327d4f9f6552c');
const ganacheUrl = 'HTTP://127.0.0.1:7545';
web3.eth.net.getId()
    .then((networkId) => { console.log('Connected to network ID:', networkId); })
    .catch((error) => { console.log('Connected to network ID:', networkId); })
    .catch((error) => {
        console.error('Error connecting to Ganache:', error);
    });
const accountAddress = '0xbbEEeD7a7d9513989a3d70d2340d3096CBf4d8E4';
web3.eth.getBalance(accountAddress)
    .then((balance) => {
        console.log('Account balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
    })
    .catch((error) => {
        console.error('Error fetching balance:', error);
    });