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

gameStatusOver = false;

function getComputerChoice(){
    const numberChoice = Math.floor(Math.random() * 3);
    let computerPicture = document.getElementById("imageID");
    let computerFooter = document.getElementById("computerFooter");
    if(gameStatusOver === false){
        if (numberChoice === 0){
            computerPicture.src = "./images/rock.png";
            computerFooter.innerText = "Rock";
            return 'rock';

        }
        else if (numberChoice === 1){
            computerPicture.src = "./images/paper.png";
            computerFooter.innerText = "Paper";
            return 'paper';
        }
        else{
            computerPicture.src = "./images/Scissors-Transparent.png";
            computerFooter.innerText = "Scissor";
            return 'scissor';
        }
    }
}

let winCounter = 0;
let loseCounter = 0;
let player = '';

let getPC = function getPlayerChoice(e){
    let playerChoice = (e.currentTarget.getAttribute("data-value")); //Use currentTarget instead of target
    //data-value is stored in the div, target tries to get value from the img.S
    console.log(playerChoice);
    player = playerChoice;
}



let pG = function playGame(playerChoice)
{
    let computerChoice = (getComputerChoice());
    if(gameStatusOver === false){
    if(playerWin[player] === computerChoice && gameStatusOver === false){
        document.getElementById("youWinOrLoseRound").innerHTML=("you won the round!")
        winCounter++;
        console.log(`Wins: ${winCounter} Losses: ${loseCounter}`);
    }
    else if(playerLost[player] === computerChoice && gameStatusOver === false){
        document.getElementById("youWinOrLoseRound").innerHTML=("you lost the round!")
        loseCounter++;
        console.log(`Wins: ${winCounter} Losses: ${loseCounter}`);
    }
    else{
        console.log("draw")
        document.getElementById("youWinOrLoseRound").innerHTML=("Looks like a draw!")
    }
    }
}
let gumOver = function gameOver(){
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


let changeScoor = function changeScoreboard(){
    document.getElementById("scoreboardH").innerHTML = `Human: ${winCounter}`;
    document.getElementById("scoreboardC").innerHTML = `Computer: ${loseCounter}`;
}

function changeComputerIcon(){

}

const choices = document.querySelectorAll(".choice");
console.log(choices);
for(let i = 0; i <= 2; i++){
    choices[i].addEventListener('click', getPC);
    choices[i].addEventListener('click', pG);
    choices[i].addEventListener('click', gumOver);
    choices[i].addEventListener('click', changeScoor);
}

const replaybutton = document.getElementById("reload");

replaybutton.addEventListener("click", function(){location.reload()});



