/*
Roulette wheel for computer oponent choice
Player chooses a box (rock paper or scissors)
    when player makes a choice, other two boxes fade away
    other two boxes fade away

rock is 0, paper is 1, scissors is 2

*/

const playerWin = {
    'rock': 'scissor',
    'paper': 'rock',
    'scissor': 'paper'
}

const playerLost = {
    'rock': 'paper',
    'paper': 'scissor',
    'scissor': 'rock'
}

function getComputerChoice(){
    const numberChoice = Math.floor(Math.random() * 3);
    if (numberChoice === 0){
        return 'rock';
    }
    else if (numberChoice === 1){
        return 'paper'
    }
    else{
        return 'scissor'
    }

}

let winCounter = 0;
let loseCounter = 0;

function getPlayerChoice(objButton){
    let playerChoice = (objButton.value);
    console.log(playerChoice);
    return playerChoice;
}

function playGame(playerChoice)
{
    let computerChoice = (getComputerChoice());
    
    if(playerWin[playerChoice] === computerChoice){
        console.log("you won the round")
        winCounter++;
        console.log(`Wins: ${winCounter} Losses: ${loseCounter}`);
    }
    else if(playerLost[playerChoice] === computerChoice){
        console.log("you lost the round")
        loseCounter++;
        console.log(`Wins: ${winCounter} Losses: ${loseCounter}`);
    }
    else{
        console.log("draw")
    }

}

function gameOver(){
    if (winCounter == 5){
        alert("You Win!")
        console.log("you win")
    }
    else if(loseCounter == 5){
        alert("You lost :(")
    }
}


const choices = document.getElementsByClassName("choice");
console.log(choices);
for(let i = 0; i <= 2; i++){
    choices[i].addEventListener('click', function() {playGame(getPlayerChoice(this))});
    choices[i].addEventListener('click', function(){gameOver()});
}


