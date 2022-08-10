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
    let computerChoice = (getComputerChoice());
    if(playerWin[playerChoice] === computerChoice){
        alert("you win!");
        winCounter++;
        console.log(`Wins: ${winCounter} Losses: ${loseCounter}`);
    }
    else if(playerLost[playerChoice] === computerChoice){
        alert("You lost!");
        loseCounter++;
        console.log(`Wins: ${winCounter} Losses: ${loseCounter}`);
    }
    else{
        alert("draw!")
    }
}

console.log(getComputerChoice())