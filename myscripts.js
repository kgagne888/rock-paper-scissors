 // both computer and human start with score of 0 
let humanScore = 0; 
let computerScore = 0;
let round = 1; 

// create references to objects on the screen 
const choices = document.querySelectorAll(".choices button");
const pHumanScore = document.querySelector("#human");
const pComputerScore = document.querySelector("#computer");
const detailsDiv = document.querySelector(".details");

pHumanScore.textContent = humanScore;
pComputerScore.textContent = computerScore;

// everytime a button is clicked, we have to play a round
// add event listeners to the buttons
for (let choice of choices) {
    choice.addEventListener("click", () => {
        let humanChoice = choice.textContent.toLowerCase();
        playRound(humanChoice, getComputerChoice());
        if (checkGameOver()) {
            console.log(humanScore);
            console.log(computerScore);
            humanScore = 0; 
            computerScore = 0;
            round = 0;
            detailsDiv.innerHTML = '';
        }
        pHumanScore.textContent = humanScore;
        pComputerScore.textContent = computerScore;
    });
}; 

function getComputerChoice() {
    let r = Math.random() * 3;
    let choice; 

    if (r <= 1) {
        choice = 'rock';
    } else if (r <= 2) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }

    return choice;

}

function playRound(humanChoice, computerChoice) {
    let winners = {
        'rock': 'paper', 
        'paper': 'scissors', 
        'scissors': 'rock'
    }
    const p = document.createElement("p"); 
    let roundText = `Round ${round++}: `;

    if (humanChoice == computerChoice) {
        winnerText = 'Its a tie!';
    } else if (winners[humanChoice] == computerChoice) {
        winnerText = `You lose! ${computerChoice} beats ${humanChoice}`;
        ++computerScore;
    } else {
        winnerText = `You win! ${humanChoice} beats ${computerChoice}`;
        ++humanScore;
    }
    roundText += winnerText;
    p.textContent = roundText;
    detailsDiv.appendChild(p);
}

function checkGameOver() {
    const p = document.createElement("p"); 
    if (computerScore == 5) {
        alert("Game over! Computer won.");
        detailsDiv.appendChild(p);
        return true;
    } else if (humanScore == 5) {
        alert("Game over! You won!");
        detailsDiv.appendChild(p);
        return true;
    } else {
        return false;
    }
}