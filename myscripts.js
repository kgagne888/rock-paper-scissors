function getComputerChoice() {
    let r = Math.random() * 3;
    let choice; 

    if (r <= 1) {
        choice = 'Rock';
    } else if (r <= 2) {
        choice = 'Paper';
    } else {
        choice = 'Scissors';
    }

    return choice;

}

console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors").toLowerCase();
    return choice; 
}

console.log(getHumanChoice());
