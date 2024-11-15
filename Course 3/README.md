# TokenDeFIA

TokenDeFIA is a Solidity smart contract that facilitates the minting and burning of tokens representing Formula 1 (F1). This contract tracks token balances for different addresses and allows for the creation and destruction of tokens while ensuring proper validations.

## Description

TokenDeFIA manages tokens related to Formula 1, abbreviated as "F1." It allows authorized users to:
  -Mint new tokens for a specific address.
  -Burn tokens from a specific address.
  -Track the overall token supply and the balance of each address.
The contract ensures the integrity of operations, such as validating sufficient balances before burning tokens, and includes events for monitoring token activity.

## Getting Started

### Installing

To install and deploy the contract, follow these steps:

1. Set up your environment: Use a Solidity development tool such as Remix or Hardhat
2. Copy the code: Clone or copy the contract code into your development environment.
3. Prepare your compiler: Ensure the Solidity compiler is set to version ^0.8.0 or compatible.

## Features


### Mint Tokens
Adds tokens to a specific address and increases the overall token supply.
```
mint(address _address, uint _amount)
```

### Burn Tokens
Removes tokens from a specific address and decreases the overall token supply.
```
burn(address _address, uint _amount)
```
### Steps in Remix:
  1. Open Remix and create a new Solidity file (e.g., TokenDeFIA.sol).
  2. Paste the contract code into the file.
  3. Set the compiler version to ^0.8.0 and compile the contract.
  4. Deploy the contract to a test network (e.g., JavaScript VM or a testnet).
Interacting with the Contract:
          -Use the mint function to add tokens to an address. Example: mint(0xAbc123..., 100);
          -Use the burn function to remove tokens from an address. Example: burn(0xAbc123..., 50);

### Help
 -If the mint or burn operations fail:
     -Verify the address's balance before burning tokens.
     -Ensure the _amount provided to the mint function is greater than 0.
 -Ensure compatibility by using Solidity version ^0.8.0.

### Authors
Gregorio B. Lantajo Jr.
202110324@fit.edu.ph

### License
This project is licensed under the MIT License. See the LICENSE file for more details.
