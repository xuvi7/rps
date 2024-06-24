let humanScore, computerScore = 0

function getComputerChoice() {
    let randomValue = Math.random();

    if (randomValue < 0.33) {
        return "rock";
    } else if (randomValue < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    let win = (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper");

    let lose = (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock");

    if (win) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else if (computerChoice === "paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    } else {
        console.log(`You tied! You both chose ${computerChoice}.`);
    }
}

function checkValidInput(humanChoice) {
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        return false;
    }
    return true;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice().toLowerCase();
        while (!checkValidInput(humanChoice)) {
            humanChoice = getHumanChoice().toLowerCase();
        }
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

playGame();