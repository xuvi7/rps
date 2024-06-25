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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    let win = (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");
    
    let lose = (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock");
    
    if (win) {
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else if (lose) {
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    } else {
        results.textContent = `You tied! You both chose ${computerChoice}.`;
    }
    
    updateScores();
    checkGameOver();
}

function updateScores() {
    human.textContent = `Human: ${humanScore}`
    computer.textContent = `Computer: ${computerScore}`
}

function checkGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        buttons.removeEventListener("click", humanChoice);
    }

    if (humanScore === 5) {
        results.textContent = "You win! You got to 5 points first :D";
    } else if (computerScore === 5) {
        results.textContent = "You lose! The computer got 5 points first :(";
    }
}

function humanChoice(e) {
    switch (e.target.id) {
        case "rock": case "paper": case "scissors":
            playRound(e.target.id, getComputerChoice());
            break;
        default:
    }
}

let buttons = document.querySelector("#buttons");
let humanScore = computerScore = 0;

buttons.addEventListener("click", humanChoice);


let human = document.querySelector("#human");
let computer = document.querySelector("#computer");
updateScores()

let results = document.querySelector("#results");