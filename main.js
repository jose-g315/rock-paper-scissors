// jose-g315
// rock paper scissors game logic and UI DOM manipulation

function getComputerChoice() {
    let choice;
    const computerChoice = document.querySelector(".choice"); 
    // generating random number between 0-2
    let number = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    if (number === 0) {
        choice = "rock";
        computerChoice.textContent = "Rock";
        return choice;
    }
    else if (number === 1) {
        choice = "paper";
        computerChoice.textContent = "Paper";
        return choice;
    }
    else {
        choice = "scissors";
        computerChoice.textContent = "Scissors";
        return choice;
    }
}
function playOneRound(playerSelection, computerSelection){
    let winner = "Nobody";
    if (playerSelection === "rock" && computerSelection === "scissors") {
        winner = "Player";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        winner = "Player";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        winner = "Player";
    }
    else if (playerSelection === computerSelection) {
        winner = "Draw";
    }
    else {
        winner = "Computer"
    }
    return winner;
}

function resetGame(){
    playerWins = 0;
    computerWins = 0;
    draws = 0;
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    drawScore.textContent = "0";
}

function updateGameScores(winner){
    if (winner === "Player") {
        playerWins += 1;
        playerScore.textContent = playerWins;
    }
    else if (winner === "Computer") {
        computerWins += 1;
        computerScore.textContent = computerWins;
    }
    else {
        draws += 1;
        drawScore.textContent = draws;
    }
    if (playerWins === 5) {
        gameWinner.textContent = "PLAYER";
        gameWinner.style.color = "blue";
        resetGame();
    }
    else if (computerWins === 5) {
        gameWinner.textContent = "COMPUTER";
        gameWinner.style.color = "red";
        resetGame();
    }
    if (playerWins > 0 || computerWins > 0 || draws > 0){
        gameWinner.textContent ="";
    }
}
// initializing variables for the game
let playerWins = 0;
let computerWins = 0;
let draws = 0;

const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");
const drawScore = document.querySelector(".draw");
const gameWinner = document.querySelector(".winner");

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
// event listeners for each button
rockButton.addEventListener("click", () => {
    updateGameScores(playOneRound("rock",getComputerChoice()));
    });

paperButton.addEventListener("click", () => {
    updateGameScores(playOneRound("paper",getComputerChoice()));
    });

scissorsButton.addEventListener("click", () => {
    updateGameScores(playOneRound("scissors",getComputerChoice()));
    });       
    