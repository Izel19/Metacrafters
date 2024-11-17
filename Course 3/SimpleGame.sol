pragma solidity ^0.8.13;

contract SimpleGame {
    uint public player1Score = 0;
    uint public player2Score = 0;
    bool public gameActive = true;

    function playRound(uint value1, uint value2) public {
        require(gameActive, "Game has ended.");

        if (value1 > value2) {
            player1Score += 1;
        } else if (value2 > value1) {
            player2Score += 1;
        } else {
            revert("Both values are equal. No points awarded.");
        }

        assert(player1Score <= 5 && player2Score <= 5);

        if (player1Score == 5 || player2Score == 5) {
            gameActive = false;
        }
    }

    function checkWinner() public view returns (string memory) {
        require(!gameActive, "Game is still ongoing.");

        if (player1Score == 5) {
            return "Player 1 wins!";
        } else if (player2Score == 5) {
            return "Player 2 wins!";
        } else {
            return "No winner yet.";
        }
    }
    
    function resetGame() public {
        player1Score = 0;
        player2Score = 0;
        gameActive = true;

        assert(player1Score == 0 && player2Score == 0 && gameActive);
    }
}
