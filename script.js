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
    let computerPicture = document.getElementById("imageID");
    let computerFooter = document.getElementById("computerFooter");

    if (numberChoice === 0){
        computerPicture.src = "./images/rock.png";
        computerFooter.innerHTML = "Rock";
        return 'rock';

    }
    else if (numberChoice === 1){
        computerPicture.src = "./images/paper.png";
        computerFooter.innerHTML = "Paper";
        return 'paper';
    }
    else{
        computerPicture.src = "./images/Scissors-Transparent.png";
        computerFooter.innerHTML = "Scissor";
        return 'scissor';
    }

}

let winCounter = 0;
let loseCounter = 0;

function getPlayerChoice(objButton){
    let playerChoice = (objButton.getAttribute("data-value"));
    console.log(playerChoice);
    return playerChoice;
}

function playGame(playerChoice)
{
    let computerChoice = (getComputerChoice());
    
    if(playerWin[playerChoice] === computerChoice){
        document.getElementById("youWinOrLoseRound").innerHTML=("you won the round!")
        winCounter++;
        console.log(`Wins: ${winCounter} Losses: ${loseCounter}`);
    }
    else if(playerLost[playerChoice] === computerChoice){
        document.getElementById("youWinOrLoseRound").innerHTML=("you lost the round!")
        loseCounter++;
        console.log(`Wins: ${winCounter} Losses: ${loseCounter}`);
    }
    else{
        console.log("draw")
        document.getElementById("youWinOrLoseRound").innerHTML=("Looks like a draw!")
    }

}

let gameStatusOver = null
function gameOver(){
    if (winCounter == 5){
        document.getElementById("youWinOrLoseGame").innerHTML=("you won the game!")
        console.log("you win")
        gameStatusOver = true;
    }
    else if(loseCounter == 5){
        document.getElementById("youWinOrLoseGame").innerHTML=("you lost the game!")
        gameStatusOver = true;
    }
}

function stopGame(){
    if(gameStatusOver === true){
        for(let i = 0; i<=2; i++){
            choices[i].removeEventListener('click', );
            choices[i].removeEventListener('click', );
            choices[i].removeEventListener('click', );
        }
    }
}

function changeScoreboard(){
    document.getElementById("scoreboardH").innerHTML = `Human: ${winCounter}`;
    document.getElementById("scoreboardC").innerHTML = `Computer: ${loseCounter}`;
}

function changeComputerIcon(){

}

const choices = document.getElementsByClassName("choice");
console.log(choices);
for(let i = 0; i <= 2; i++){
    choices[i].addEventListener('click', function () {playGame(getPlayerChoice(this))});
    choices[i].addEventListener('click', function () {gameOver()});
    choices[i].addEventListener('click', function () {changeScoreboard()});
    choices[i].addEventListener('click', function () {stopGame()});
}




