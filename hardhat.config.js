require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
// const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
const ALCHEMY_API_KEY = "https://eth-rinkeby.alchemyapi.io/v2/EedP4Mya0jSnJnvEDt4VMzdq84j0nmx0";
const RINKEBY_PRIVATE_KEY = "YOUR RINKEBY PRIVATE KEY";
// module.exports = {
//   defaultNetwork: "hardhat",
//   networks: {
//     hardhat: {
//       chainId: 1337
//     },

module.exports = {
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/EedP4Mya0jSnJnvEDt4VMzdq84j0nmx0",
      accounts: [`${RINKEBY_PRIVATE_KEY}`]
    },

    /*
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
    */
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

