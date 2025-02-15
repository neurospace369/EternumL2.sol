const { ethers } = require("hardhat");

async function main() {
    const [owner, investor] = await ethers.getSigners();
    const EternumIDO = await ethers.getContractFactory("EternumIDO");

    // Simulate contract deployment locally
    const ido = await EternumIDO.deploy("0xYourTokenAddress", 1000);
    await ido.deployed();
    console.log(`EternumIDO simulated at: ${ido.address}`);

    // Simulate token purchase
    const tx = await ido.connect(investor).buyTokens({ value: ethers.utils.parseEther("1") });
    await tx.wait();
    console.log("Investor successfully bought tokens!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });
