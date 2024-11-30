# Subscription Service DApp (Solidity + React)

## Overview
This project demonstrates a decentralized application (DApp) that manages a subscription service. It uses a Solidity smart contract deployed on the Ethereum blockchain and integrates with a React front-end. Users can subscribe to available plans, check their subscription status, and interact with the platform using MetaMask for wallet connection and transaction signing.

## Features
- Subscribe to different subscription plans with specified fees.
- Check the current subscription status of a user.
- View available subscription plans and their details (price and duration).
- MetaMask integration for seamless blockchain interaction and transaction signing.

## Functions

### `createPlan(uint256 planId, uint256 price, uint256 duration)`
- Allows the owner of the contract to create new subscription plans.
- Each plan has a unique ID, price (in ETH), and duration (in seconds).

### `updatePlan(uint256 planId, uint256 newPrice, uint256 newDuration, bool active)`
- Allows the owner to update an existing subscription plan's price, duration, and active status.

### `subscribe(uint256 planId)`
- Allows a user to subscribe to a selected plan by sending the exact subscription fee in ETH.
- Extends the user's subscription if they already have an active one.

### `isSubscribed(address user)`
- Checks whether the given Ethereum address is currently subscribed to any plan.
- Returns a boolean value (`true` for subscribed, `false` for not subscribed).

### `plans(uint256 planId)`
- Retrieves details of a specific subscription plan (price, duration, and active status).

## Prerequisites
- Node.js
- MetaMask or another Ethereum-compatible wallet
- Hardhat development environment (for deployment and local blockchain)
- Ethers.js for blockchain interaction

## Installation and Setup

1. **Clone the repository and navigate to the project directory**:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Start the local Ethereum network**:
   Open a terminal and run:
   ```bash
   npx hardhat node
   ```

4. **Deploy the contract**:
   Open another terminal and run:
   ```bash
   npx hardhat run --network localhost scripts/deploy.js
   ```

5. **Update the contract address**:
   Replace the placeholder `0xYourContractAddressHere` in the front-end code with the deployed contract's address.

6. **Launch the front-end application**:
   Back in the first terminal, run:
   ```bash
   npm run dev
   ```

7. **Access the application**:
   The front-end will be available at `http://localhost:3000/`. Use MetaMask to connect your wallet and interact with the DApp.

## Usage
- Once connected to MetaMask, users can:
  - View available subscription plans and select one to subscribe to.
  - Check their current subscription status.
  - Subscribe to a plan by sending the required ETH amount.
- The front-end displays the current subscription status and offers the option to choose a subscription plan.

### Authors
Gregorio B. Lantajo Jr.
202110324@fit.edu.ph

### License
This project is licensed under the MIT License. See the LICENSE file for more details.
