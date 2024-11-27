# Streaming Subscription DApp (Solidity + React)

## Overview
This project demonstrates a decentralized application (DApp) that manages a subscription service for a streaming platform. It uses a Solidity smart contract deployed on the Ethereum blockchain and integrates with a React front-end. Users can subscribe, check their subscription status, and cancel their subscription through the DApp. MetaMask is used for wallet connection and transaction signing.

## Features
- Subscribe to the streaming service for a specified fee (e.g., 0.1 ETH).
- Check the current subscription status.
- Cancel active subscriptions.
- MetaMask integration for seamless blockchain interaction.

## Functions

### `subscribe()`
- Allows a user to subscribe to the service by sending the required subscription fee (0.1 ETH).
- Updates the subscription status in the smart contract.
- Emits an event upon successful subscription.

### `isSubscribed(address user)`
- Checks whether the given Ethereum address is currently subscribed.
- Returns a boolean value (`true` for subscribed, `false` for not subscribed).

### `cancelSubscription()`
- Enables a user to cancel their active subscription.
- Refunds the unused portion of the subscription fee (if applicable).
- Emits an event upon successful cancellation.

## Prerequisites
- Node.js
- MetaMask or another Ethereum-compatible wallet
- Hardhat development environment
- Ethers.js for blockchain interaction

## Usage

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