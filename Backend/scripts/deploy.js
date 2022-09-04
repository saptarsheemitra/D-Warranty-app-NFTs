const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory(
    "WarrantyCard"
  );
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  // Call the function.
  let txn = await nftContract.makeAProductNFT(
    "Test Product 1",
    '[{"trait_type": "Product ID" ' +
      ', "value": "12345"},{"trait_type": "Serial" ' +
      ', "value": "12345"},{"display_type": "date", "trait_type": "Created" ' +
      ', "value": "12345"},{"display_type": "date", "trait_type": "Warranty Till" ' +
      ', "value": "12345"}]',
    "Test Description 1"
  );
  // Wait for it to be mined.
  await txn.wait();

  // Mint another NFT for fun.
  // txn = await nftContract.makeAProductNFT()
  // Wait for it to be mined.
  // await txn.wait()
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
