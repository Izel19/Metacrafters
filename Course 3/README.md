# SimpleGame

SimpleGame is a Solidity smart contract that implements a simple two-player game. Players compete by submitting values, and the player with the higher value earns a point. The game ends when a player's score reaches 5, declaring them the winner.

## Description

SimpleGame allows two players to:
  -Compete in multiple rounds by providing values.
  -Earn points for having the higher value in a round.
  -Handle ties where no points are awarded.
  -Determine the winner when a player reaches a score of 5.
  -Reset the game to start a new match.
The contract enforces gameplay rules through checks, such as ensuring the game is active, preventing ties, and validating score limits. It uses require, revert, and assert to ensure proper operation and prevent invalid game states.

## Getting Started

### Installing

To deploy and interact with the contract, follow these steps:

  1. Set up a Solidity development environment (e.g., Remix or Hardhat).
  2. Copy the contract code into a new Solidity file (e.g., SimpleGame.sol).
  3. Compile the contract using Solidity version ^0.8.13.
  4. Deploy the contract to a test network or local blockchain (e.g., JavaScript VM in Remix).

## Features


### Play a Round
Players submit values to compete in a round. The player with the higher value earns a point.
```
playRound(uint value1, uint value2)
```
  -Requires the game to be active.
  -Awards a point to the player with the higher value.
  -Ends the game if a player's score reaches 5.

### Burn Tokens
Retrieves the result of the game after it has ended.
```
checkWinner() public view returns (string memory)
```
  -Returns "Player 1 wins!" or "Player 2 wins!" if there is a winner.
  -Ensures the game is not still ongoing.
  
### Steps in Remix:
  1.Open Remix and create a new Solidity file (e.g., SimpleGame.sol).
  2. Paste the contract code into the file.
  3. Set the compiler version to ^0.8.13 and compile the contract.
  4. Deploy the contract to the JavaScript VM or another test network.

#### Interacting with the Contract:
  -Use playRound to play a round. Example: playRound(3, 5) awards a point to Player 2.
  -Use checkWinner to see the game's result after it ends. Example: checkWinner().
  -Use resetGame to start a new match. Example: resetGame().

### Help
Common Issues
  -"Game has ended.": The game is over. Use resetGame to start a new game.
  -"Both values are equal. No points awarded.": Players submitted equal values. Provide distinct values.
  -Gas Consumption: Ensure proper usage of resources when deploying or interacting with the contract.

### Authors
Gregorio B. Lantajo Jr.
202110324@fit.edu.ph

### License
This project is licensed under the MIT License. See the LICENSE file for more details.
