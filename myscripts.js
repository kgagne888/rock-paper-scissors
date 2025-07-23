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

function playRound(humanChoice, computerChoice) {
    let winners = {
        'rock': 'paper', 
        'paper': 'scissors', 
        'scissors': 'rock'
    }

    if (humanChoice == computerChoice) {
        console.log('Its a tie!');
        return 'tie';
    } else if (winners[humanChoice] == computerChoice) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return 'computer';
    } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return 'human';
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let roundWinner = playRound(getHumanChoice(), getComputerChoice());
    switch(roundWinner) {
        case 'human': 
            ++humanScore;
            break;
        case 'computer':
            ++computerScore;
            break;
    }

    let winner; 
    if (humanScore > computerScore) {
        winner = 'human';
    } else if (computerScore > humanScore) {
        winner = 'computer';
    } else {
        winner = 'tie';
    }

    console.log(`Game winner: ${winner}. Human=${humanScore} Computer=${computerScore}`);
}

playGame()