require("@nomicfoundation/hardhat-toolbox");

require('@nomiclabs/hardhat-waffle');


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/47FDCWxQ_KdRWznO5pWi9QasJji6v3MK',
      accounts: [ '9d06c7a60ed9177489a81d06418896fe8983f1a9727caad169c7bc0a15e18e8d' ]
    }
  }
};
