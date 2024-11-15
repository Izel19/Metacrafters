# F1FINANCE

F1FINANCE is a smart solidty contract that employs the assert, revert, and require statements. it lets user add and deduct ETH in an account. 
## Description

F1FINANCE manages ETH Tokens related to Formula 1, abbreviated as "F1." The contract enables the user to add, remove, check balance, and withdraw all from an account. The contract implements assert to let the owner perform specific tasks that is available to them only. Require enables to let the action done by user be accomplished with a specific condition. Lastly, the revert returns the balance to its original state if a condition is not met.

## Getting Started

### Installing

To install and deploy the contract, follow these steps: 1. Set up a Solidity development environment such as Remix or Hardhat. 2. Clone or copy the contract code into your development environment.

### Executing program

After deploying the contract, you can use the following functions to manage tokens:

###Add Savings
Allows users to deposit Ether into their account within the contract.
```
AddSavings() external payable
```

###Produce Upgrades
Withdraws a specified amount of Ether if sufficient balance is available.
```
produceUpgrades(uint256 _amount) external
```

###Check Balance
Returns the caller's balance.
```
balanceChecker() external view returns (uint256)
```

###Cash Out
Transfers the entire contract balance to the owner (only callable by the owner).
```
balanceChecker() external view returns (uint256)
```
### Steps in Remix:
  1. Copy the code to a file (e.g., F1Finance.sol).
  2. Set compiler version to 0.8.13 and compile.
  3. Deploy to a test network (e.g., JavaScript VM).
  4. Interact with the contract:
          -AddSavings: Deposit Ether.
          -produceUpgrades: Withdraw Ether.
          -balanceChecker: Check balances.

### Help
 -Ensure sufficient balance before withdrawal.
 -Use Solidity version 0.8.13 to avoid errors.

### Authors
Gregorio B. Lantajo Jr.
202110324@fit.edu.ph

### License
This project is licensed under the MIT License. See the LICENSE file for more details.
