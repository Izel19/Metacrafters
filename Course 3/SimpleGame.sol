// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SimpleGame {
    uint public player1Score = 0;
    uint public player2Score = 0;
    bool public gameActive = true;

    function ensureGameActive() internal view {
        require(gameActive, "Game has ended.");
    }

    function handleTie(uint value1, uint value2) internal pure {
        if (value1 == value2) {
            revert("Both values are equal. No points awarded.");
        }
    }

    function validateScores() internal view {
        assert(player1Score <= 5 && player2Score <= 5);
    }

    function playRound(uint value1, uint value2) public {
        ensureGameActive();
        handleTie(value1, value2);

        if (value1 > value2) {
            player1Score += 1;
        } else {
            player2Score += 1;
        }

        validateScores();

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

        validateScores();
        assert(gameActive); 
    }
}
