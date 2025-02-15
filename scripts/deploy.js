const { ethers } = require("hardhat");

async function main() {
  const EternumL2 = await ethers.getContractFactory("EternumL2");
  console.log("Deploying EternumL2...");
  
  const contract = await EternumL2.deploy();
  await contract.deployed();

  console.log(`EternumL2 deployed to: ${contract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
