# TokenDeFIA
TokenDeFIA is a Solidity smart contract that facilitates the minting and burning of tokens representing Formula 1 (F1) under the FIA. This contract tracks token balances for different addresses and allows the creation and destruction of tokens.

## Description
TokenDeFIA manages tokens related to Formula 1, abbreviated as "F1." The contract enables addresses to mint new tokens or burn existing ones. It tracks the overall supply of tokens and each address's balance. The contract ensures that an address has enough tokens before allowing tokens to be burned.

### Installing
To install and deploy the contract, follow these steps:
    1. Set up a Solidity development environment such as Remix or Hardhat.
    2. Clone or copy the contract code into your development environment.

### Executing the Program
After deploying the contract, you can use the following functions to manage tokens:

## Mint Tokens
Adds tokens to a specific address and increases the total supply.

```
mint(address _address, uint _company)
```

### Burn Tokens
Removes tokens from a specific address and decreases the total supply, ensuring the address has enough tokens to burn.
```
burn(address _address, uint _company)
```

### Steps in Remix:
  1. Paste the contract code into a new Solidity file (e.g., tokenDeFIA.sol).
  2. Compile the contract using Solidity version 0.8.18.
  3. Deploy the contract to a test network (e.g., JavaScript VM or any test network).
  4. Use the mint and burn functions to manage token balances by providing the appropriate address and token value.

### Help
 -If the total supply or balances don't update as expected, ensure the address has enough tokens to burn.
 -Ensure that your Solidity version is set to 0.8.18 to avoid version incompatibility issues.

### Authors
Gregorio B. Lantajo Jr.
202110324@fit.edu.ph

### License
This project is licensed under the MIT License. See the LICENSE file for more details.
