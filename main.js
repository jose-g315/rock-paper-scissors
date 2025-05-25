// jose-g315
// rock paper scissors game logic and UI DOM manipulation

// initializing global variables for the game
let playerWins = 0;
let computerWins = 0;
let draws = 0;

const rock = 0;
const paper = 1;
const scissors = 2;

const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");
const drawScore = document.querySelector(".draw");
const gameWinner = document.querySelector(".winner");

const playerChoices = document.querySelector(".player-choices");

function getComputerChoice() {
    // generating random number between 0-2
    // 0 = rock 1 = paper 2 = scissors
    return Math.floor(Math.random() * 3);
}
function playOneRound(playerChoice, computerChoice){
    // 0 = tie / 1 = player wins / 2 = computer wins
    let winner = (3 + (playerChoice - computerChoice)) % 3;   
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
// setting the default parameter of player to 1(human)
function displayChoice(choice, player = 1){
    const playerDisplay = document.querySelector(".player-choice");
    const computerDisplay = document.querySelector(".computer-choice");
    switch(choice){
        case 0:
            player === 1 ? playerDisplay.textContent = "Rock" : computerDisplay.textContent = "Rock" ;
            break;
        case 1:
            player === 1 ? playerDisplay.textContent = "Paper" : computerDisplay.textContent = "Paper";
            break;
        case 2: 
            player === 1 ? playerDisplay.textContent = "Scissors" : computerDisplay.textContent = "Scissors" ;
            break; 
    }
}
function updateGameScores(winner){
    if (winner === 1) {
        playerWins += 1;
        playerScore.textContent = playerWins;
    }
    else if (winner === 2) {
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

playerChoices.addEventListener("click", (e) => {
    
    let computerChoice = getComputerChoice();
    displayChoice(computerChoice,2);

    switch (e.target.className) {
        case "rock":
            displayChoice(rock);
            updateGameScores(playOneRound(rock, computerChoice));
            break;
        case "paper":
            displayChoice(paper)
            updateGameScores(playOneRound(paper, computerChoice));
            break;
        case "scissors":
            displayChoice(scissors);
            updateGameScores(playOneRound(scissors, computerChoice));
            break;
    }
})
