
function getComputerChoice(){
    let choice = Math.round(Math.random() * (3 - 1) + 1);     
    if(choice == 1){
        return "scissors";
    } 
    else if (choice == 2){
        return "rock";
    } 
    else{
        return "paper";
    }
}

function playGame(playerSelection, computerSelection){
    console.log("player - (" + `${playerSelection}` + ") vs  computer - (" + `${computerSelection}` + ")")
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    rules = new Map(); // item : wins over this item
    rules.set('rock', 'scissors');
    rules.set('paper', 'rock');
    rules.set('scissors', 'paper');

    if (player == computer){
        return "draw";
    }
    else if (player == rules.get(computer)){
        return "lose";
    }
    else{
        return "win";
    }
}

function game(){
    for(let i = 0; i < 6; i ++){
        console.log(playGame(getComputerChoice(),  getComputerChoice()))
    }
}

game();