const choices = ["rock", "paper", "scissors"];
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
let movesPlayed = 0;

function playGame(playerChoice){
    // Check if the maximum number of moves (10) has been reached
    if (movesPlayed >= 10) {
        endGame();
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

    movesPlayed++;
}

function endGame() {
    // Determine the final result of the game
    let finalResult = "";
    if (playerScore > computerScore) {
        finalResult = "Game Over: You Win!";
    } else if (playerScore < computerScore) {
        finalResult = "Game Over: You Lose!";
    } else {
        finalResult = "Game Over: It's a Tie!";
    }

    resultDisplay.textContent = finalResult;
    resultDisplay.classList.remove("greenText", "redText");
    resultDisplay.classList.add(playerScore > computerScore ? "greenText" : playerScore < computerScore ? "redText" : "");

    // Disable the buttons to prevent further moves
    document.querySelectorAll(".choices button").forEach(button => {
        button.disabled = true;
    });
}
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame);

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    movesPlayed = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = "";
    resultDisplay.classList.remove("greenText", "redText");

    // Enable the buttons
    document.querySelectorAll(".choices button").forEach(button => {
        button.disabled = false;
    });
}
