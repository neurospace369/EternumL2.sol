require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.21",
  networks: {
    polygon: {
      url: process.env.POLYGON_RPC, // Uses your mainnet RPC
      accounts: [process.env.PRIVATE_KEY], // Securely loads wallet
    },
  },

