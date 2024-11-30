// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "hardhat/console.sol";

contract DegenToken is ERC20, Ownable, ERC20Burnable {
    struct Coffee {
        string name;
        uint256 price;
    }

    mapping(uint8 => Coffee) public menu; 
    mapping(address => Coffee[]) private redeemedCoffees; 

    constructor() ERC20("Degen", "DGN") {
        menu[1] = Coffee("Espresso", 10);
        menu[2] = Coffee("Latte", 15);
        menu[3] = Coffee("Cappuccino", 12);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function decimals() public pure override returns (uint8) {
        return 0;
    }

    function showMenu() public view returns (Coffee[] memory) {
        uint8 menuSize = 3;
        Coffee[] memory allItems = new Coffee[](menuSize); 
        for (uint8 i = 1; i <= menuSize; i++) {
            allItems[i - 1] = menu[i]; 
        }
        return allItems;
    }

    function redeemTokens(uint8 itemId) external {
        require(itemId > 0 && itemId <= 3, "Invalid menu item ID"); 
        Coffee memory coffee = menu[itemId];
        require(balanceOf(msg.sender) >= coffee.price, "Insufficient Degen Tokens to redeem this item.");
        
        _burn(msg.sender, coffee.price); 
        
        redeemedCoffees[msg.sender].push(coffee);

        emit CoffeeRedeemed(msg.sender, coffee.name, coffee.price);
    }

    function getRedeemedCoffees() external view returns (Coffee[] memory) {
        return redeemedCoffees[msg.sender];
    }

    event CoffeeRedeemed(address indexed customer, string coffeeName, uint256 price);
}
