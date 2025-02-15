const { ethers, upgrades } = require("hardhat");

async function main() {
    console.log("🚀 Deploying EternumL2.sol & EternumIDO.sol...");

    // Deploy EternumL2
    const EternumL2 = await ethers.getContractFactory("EternumL2");
    const eternumL2 = await EternumL2.deploy();
    await eternumL2.deployed();
    console.log(`✅ EternumL2 deployed at: ${eternumL2.address}`);

    // Deploy EternumIDO
    const EternumIDO = await ethers.getContractFactory("EternumIDO");
    const eternumIDO = await EternumIDO.deploy(eternumL2.address);  // Ensure constructor matches
    await eternumIDO.deployed();
    console.log(`✅ EternumIDO deployed at: ${eternumIDO.address}`);

    console.log("🔥 Deployment complete. Eternum is live.");
}

// Run the deploy script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("❌ Deployment error:", error);
        process.exit(1);
    });
