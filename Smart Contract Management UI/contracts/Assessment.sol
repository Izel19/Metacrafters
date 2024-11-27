// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Assessment {
    address public owner;
    uint256 public subscriptionFee; // Fee for a monthly subscription

    struct Subscriber {
        bool isSubscribed;
        uint256 validUntil; // Timestamp indicating until when the subscription is valid
    }

    mapping(address => Subscriber) public subscribers;

    event Subscribed(address indexed user, uint256 validUntil);
    event SubscriptionRenewed(address indexed user, uint256 validUntil);

    constructor(uint256 _subscriptionFee) {
        owner = msg.sender;
        subscriptionFee = _subscriptionFee;
    }

    // Function to subscribe for the first time
    function subscribe() public payable {
        require(msg.value == subscriptionFee, "Incorrect subscription fee");
        require(!subscribers[msg.sender].isSubscribed, "Already subscribed");

        uint256 validUntil = block.timestamp + 30 days; // Subscription valid for 30 days
        subscribers[msg.sender] = Subscriber(true, validUntil);

        emit Subscribed(msg.sender, validUntil);
    }

    // Function to renew an existing subscription
    function renewSubscription() public payable {
        require(msg.value == subscriptionFee, "Incorrect subscription fee");
        require(subscribers[msg.sender].isSubscribed, "Not subscribed yet");

        // Extend subscription by 30 days
        subscribers[msg.sender].validUntil += 30 days;

        emit SubscriptionRenewed(msg.sender, subscribers[msg.sender].validUntil);
    }

    // Function to check if a user is currently subscribed
    function isSubscribed() public view returns (bool) {
        Subscriber memory subscriber = subscribers[msg.sender];
        return subscriber.isSubscribed && block.timestamp <= subscriber.validUntil;
    }

    // Function for the owner to withdraw collected funds
    function withdrawFunds() public {
        require(msg.sender == owner, "Only the owner can withdraw funds");
        payable(owner).transfer(address(this).balance);
    }

    // Fallback function to accept Ether
    receive() external payable {}
}
