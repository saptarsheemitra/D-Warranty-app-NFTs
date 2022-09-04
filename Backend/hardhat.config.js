require("@nomiclabs/hardhat-etherscan");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: {
    version: "0.8.1",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    matic: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.POLYGON_PRIVATE_KEY],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  etherscan: {
    apiKey: { polygon: "POLYGONSCAN API" }, // POLYGONSCAN API KEY TO VERIFY CONTRACT
  },
  mocha: {
    timeout: 20000,
  },
};
