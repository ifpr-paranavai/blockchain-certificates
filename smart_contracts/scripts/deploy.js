
const hre = require("hardhat");

const main = async () => {
  const Transaction = await hre.ethers.getContractFactory("Transactions");
  const transaction = await Transaction.deploy();

  await transaction.deployed();

  console.log("Transacoes foram implantadas na: ", transaction.address);
}

const runMain = async () => {
  try{
    await main();
    process.exit(0);
  }catch(error){
    console.error(error);
    process.exit(1);
  }
}

runMain();
