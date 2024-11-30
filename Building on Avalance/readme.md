# DegenToken

## Overview  
The DegenToken project is a custom ERC-20 token smart contract implemented in Solidity. It provides a token-based interaction system where users can mint, burn, and transfer tokens. Additionally, it introduces a gamified feature allowing users to redeem tokens for coffee items, making it ideal for demonstration or prototype scenarios involving tokenomics. Built with OpenZeppelin's ERC-20 standard, it ensures security and adherence to best practices.

---

## Features  
- *Mint Tokens*: Restricted to the contract owner.  
- *Burn Tokens*: Accessible to all token holders.  
- *View Menu*: Retrieve a list of coffee items available for redemption.  
- *Redeem Tokens for Coffee*: Exchange tokens for coffee items.  
- *Track Redemption History*: View previously redeemed items.  

---

## Functions  

### constructor()  
Initializes the DegenToken with the following:  
- *Name*: Degen  
- *Symbol*: DGN  
- *Menu*:  
  1. Espresso (10 tokens)  
  2. Latte (15 tokens)  
  3. Cappuccino (12 tokens)  

### mint(address to, uint256 amount)  
Allows the contract owner to mint tokens and transfer them to the specified address. Uses the onlyOwner modifier to restrict access.  

### decimals()  
Overrides the ERC-20 token standard to return 0, making the Degen Tokens non-fractional.  

### showMenu()  
Returns an array of all available coffee items in the menu, including their names and prices.  

### redeemTokens(uint8 itemId)  
Allows a user to redeem tokens for a coffee item.  
- *Validation*:  
  - Ensures itemId is valid (1-3).  
  - Verifies the user has enough tokens.  
- *Execution*:  
  - Burns the tokens required for redemption.  
  - Adds the redeemed coffee to the user's redemption history.  
  - Emits the CoffeeRedeemed event.  

### getRedeemedCoffees()  
Returns an array of coffee items previously redeemed by the caller.  

### CoffeeRedeemed (Event)  
Emits an event when a user redeems a coffee, including:  
- User address (customer)  
- Coffee name (coffeeName)  
- Price in tokens (price)  

---

## Prerequisites  
- *Solidity*: ^0.8.18  
- Ethereum development tools (e.g., [Hardhat](https://hardhat.org), [Remix](https://remix.ethereum.org))  
- *OpenZeppelin Contracts*: v4.x+  

---

## Usage  

### Deployment  
1. Deploy the contract using your preferred Ethereum development environment.  

### Minting Tokens  
2. The contract owner can call the mint function to mint tokens for any address.  

### Redeeming Tokens  
3. Token holders can:  
   - View available menu items with showMenu.  
   - Redeem tokens for coffee using redeemTokens.  
   - Check their redemption history using getRedeemedCoffees. 

### Authors
Gregorio B. Lantajo Jr.
202110324@fit.edu.ph

### License
This project is licensed under the MIT License. See the LICENSE file for more details.
