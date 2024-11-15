pragma solidity ^0.8.0;

contract tokenDeFIA {
    string public companyName;
    string public companyAbbrv;
    uint public overallSupply;

    mapping(address => uint) public balances;

    error InsufficientBalance(uint available, uint required);

    event Minted(address indexed recipient, uint256 amount);
    event Burned(address indexed account, uint256 amount);

    constructor() {
        companyName = "Formula1";
        companyAbbrv = "F1";
        overallSupply = 0;  
    }

    function mint(address _address, uint _amount) public {
        require(_amount > 0, "Mint amount must be greater than 0");

        overallSupply += _amount;
        balances[_address] += _amount;

        emit Minted(_address, _amount);
        
        assert(overallSupply >= _amount);
    }

    function burn(address _address, uint _amount) public {
        if (balances[_address] < _amount) {
            revert InsufficientBalance(balances[_address], _amount);
        }

        uint previousSupply = overallSupply;
        overallSupply -= _amount;
        balances[_address] -= _amount;

        emit Burned(_address, _amount);
        
        assert(overallSupply <= previousSupply);
    }
}
