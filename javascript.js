
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
    //console.log("player - (" + `${playerSelection}` + ") vs  computer - (" + `${computerSelection}` + ")")
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

let playerScoreCount = 0
let computerScoreCount = 0

const buttons = document.querySelectorAll('button')
let playerDecisions = document.querySelector('.result p')
let roundResult = document.querySelector('.result .round-result')

let playerScore = document.querySelector('.player-score p')
let computerScore = document.querySelector('.computer-score p')
let winnerResult =document.querySelector('.winner-container p')

buttons.forEach((button)=>{
    button.addEventListener('click', (e) =>{
        let computerChoice = getComputerChoice()
        playerDecisions.textContent = `You chose ${e.target.id} and the computer chose ${computerChoice}`
        currResult = playGame(e.target.id, computerChoice)
        roundResult.textContent = `You ${currResult}`

        if(currResult == "win"){
            playerScoreCount++;
            playerScore.textContent = playerScoreCount
        } 
        else if(currResult == "lose"){
            computerScoreCount++;
            computerScore.textContent = computerScoreCount
        }
        // If either player has won
        if(playerScoreCount == 5 || computerScoreCount == 5){
            winnerResult.textContent = playerScoreCount == 5 ? "Player" : "Computer";
            playerScoreCount = 0
            computerScoreCount = 0
            playerScore.textContent = playerScoreCount
            computerScore.textContent = computerScoreCount
            playerDecisions.textContent = "You chose ... and the computer chose ..."
            roundResult.textContent = "..."
        }
        console.log("hi")
    })
})