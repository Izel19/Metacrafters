# Formula1Token
Formula1Token is a Solidity smart contract that facilitates the minting and burning of Formula 1 (F1) tokens. The contract uses the ERC20 standard to represent the tokens and provides functions to manage token balances for different addresses, including minting new tokens and burning existing ones.

## Description
Formula1Token is an ERC20 token representing Formula 1, abbreviated as "F1." The contract allows users to mint tokens to specified addresses and burn tokens from their own addresses. The contract ensures that users cannot burn more tokens than they hold and allows the contract owner to mint tokens to any address.

### Installing
To install and deploy the contract, follow these steps:
1. Set up a Solidity development environment such as Remix or Hardhat.
2. Clone or copy the contract code into your development environment.

### Executing the Program
Once the contract is deployed, you can use the following functions to interact with the token:

### Mint Tokens
The mint function allows the creation of new tokens and assigns them to a specified address.

```
mint(address _address, uint _company)
```

### Burn Tokens
The burn function removes tokens from the caller's balance, reducing the total supply.
```
burn(uint256 _amount)
```

### Steps in Remix:
  1. Paste the contract code into a new Solidity file (e.g., `Formula1Token.sol`).
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
