// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Assessment {
    address public owner;
    uint256 public balance;

    struct Plan {
        uint256 price;
        uint256 duration;
        bool active;
    }

    mapping(uint256 => Plan) public plans; 
    mapping(address => uint256) public subscriptions;

    event PlanCreated(uint256 planId, uint256 price, uint256 duration);
    event Subscribed(address indexed subscriber, uint256 planId, uint256 expiration);
    event PlanUpdated(uint256 planId, uint256 newPrice, uint256 newDuration, bool active);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    modifier validPlan(uint256 planId) {
        require(plans[planId].active, "Invalid or inactive plan");
        _;
    }

    constructor(uint256 initialValue) {
        balance = initialValue;
        owner = msg.sender;
    }

    // Create a new subscription plan
    function createPlan(uint256 planId, uint256 price, uint256 duration) external onlyOwner {
        require(!plans[planId].active, "Plan ID already exists");
        require(price > 0 && duration > 0, "Invalid price or duration");

        plans[planId] = Plan(price, duration, true);
        emit PlanCreated(planId, price, duration);
    }

    // Update an existing plan
    function updatePlan(uint256 planId, uint256 newPrice, uint256 newDuration, bool active) external onlyOwner validPlan(planId) {
        require(newPrice > 0 && newDuration > 0, "Invalid price or duration");

        plans[planId].price = newPrice;
        plans[planId].duration = newDuration;
        plans[planId].active = active;

        emit PlanUpdated(planId, newPrice, newDuration, active);
    }

    // Subscribe to a plan
    function subscribe(uint256 planId) external payable validPlan(planId) {
        Plan memory plan = plans[planId];
        require(msg.value == plan.price, "Incorrect payment amount");

        // Extend subscription if user already has an active one
        if (subscriptions[msg.sender] > block.timestamp) {
            subscriptions[msg.sender] += plan.duration;
        } else {
            subscriptions[msg.sender] = block.timestamp + plan.duration;
        }

        emit Subscribed(msg.sender, planId, subscriptions[msg.sender]);
    }

    // Check subscription status
    function isSubscribed(address user) external view returns (bool) {
        return subscriptions[user] > block.timestamp;
    }
}
