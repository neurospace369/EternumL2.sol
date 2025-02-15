const hre = require("hardhat");

async function main() {
    const EternumIDO = await hre.ethers.getContractFactory("EternumIDO");
    const ido = await EternumIDO.deploy("0xYourTokenAddressHere", 1000); // Replace with actual token address

    await ido.deployed();
    console.log(`EternumIDO deployed at: ${ido.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
