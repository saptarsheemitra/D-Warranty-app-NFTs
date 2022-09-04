1. Change "Alchemy API" and "Polygon Private Key" to your API and KEY in .env file.\
2. Change "POLYGONSCAN API" on hardhat.config.js file.\

to deploy the contract:

### `npx hardhat run scripts/deploy.js --network matic`

To verify the contract:

### `npx hardhat verify CONTRACT-ADDRESS --network matic`
