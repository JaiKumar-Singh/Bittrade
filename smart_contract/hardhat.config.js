// https://eth-ropsten.alchemyapi.io/v2/eQBWT9KF8HknJ1Sj90KwmR9GCjxA6QJ6
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/eQBWT9KF8HknJ1Sj90KwmR9GCjxA6QJ6",
      accounts: [
        "a9b499e825ad4ee3ad5a0aa860bb7e67d5906cdc97f71afb6b87749156008fa7",
      ],
    },
  },
};
