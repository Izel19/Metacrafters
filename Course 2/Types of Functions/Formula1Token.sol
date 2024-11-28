// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Formula1Token is ERC20 {
    string public tokenName = "Formula1Token";
    string public tokenAbbrv = "F1T";

    constructor() ERC20("Formula1Token", "F1T") {}

    function mint(address _to, uint256 _amount) public {
        require(_to != address(0), "Invalid address");
        require(_amount > 0, "Cannot Mint 0 amount.");

        _mint(_to, _amount); 
    }

    function burn(uint256 _amount) public {
        require(_amount > 0, "Cannot burn 0 amount.");
        require(balanceOf(msg.sender) >= _amount, "Balance Insufficient! Make sure that there are tokens.");

        _burn(msg.sender, _amount); 
    }
}
