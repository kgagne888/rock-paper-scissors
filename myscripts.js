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

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors").toLowerCase();
    return choice; 
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let winners = {
        'rock': 'paper', 
        'paper': 'scissors', 
        'scissors': 'rock'
    }

    if (humanChoice == computerChoice) {
        console.log('Its a tie!');
    } else if (winners[humanChoice] == computerChoice) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
    } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
    }
}

playRound(getHumanChoice(), getComputerChoice())