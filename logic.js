
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice() {
    let codifySign = getRandomIntInclusive(0,2);
    switch (codifySign) {
        case 0:
            return "rock";   
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            break;
    }
}

function getHumanChoice() { //a el input se le pasa un prompt 
    let input = prompt("Write your answer here.")
    return input;
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice){
        console.log("Empate, repetimos...")
        return;
    }
    else if(humanChoice == "scissors"){
        if(computerChoice == "paper"){
            humanScore ++;
            console.log("scissors vence a papel " + "punto para el humano :) " +" humanScore: "+ humanScore);
            return;
        }
        else{
            computerScore ++;
            console.log("rock vence a scissors " +" punto para la compu :( "+" compuScore: "+ computerScore);
            return;
        }
    }
    else if(humanChoice == "paper"){
        if(computerChoice == "rock"){
            humanScore ++;
            console.log("paper vence a rock " +"punto para el humano :) "+" humanScore: "+ humanScore);
            return;
        }
        else{
            computerScore ++;
            console.log("scissors vence a paper " +" punto para la compu :( "+" compuScore: "+ computerScore);
            return;
        }
    }
    else if(humanChoice == "rock"){
        if(computerChoice == "scissors"){
            humanScore ++;
            console.log("rock vence a scissors " +"punto para el humano :) "+" humanScore: "+ humanScore);
            return;
        }
        else{
            computerScore ++;
            console.log("paper vence a rock " +" punto para la compu :(" +" compuScore: "+ computerScore);
            return;
        }
    } 
}

let playerChoiceSpace = document.querySelector(".PlayerChoice");
let computerChoiceSpace = document.querySelector(".ComputerChoice");

const rockButton = document.querySelector("RockButton");

rockButton.addEventListener("click", )

































// function playGame() {
//     for(let i = 0; i < 5; i++)
//     {
//         playRound(getHumanChoice(), getComputerChoice());
//     }
//     if(humanScore == computerScore) console.log("EMPATE FINAL!!! FELICIDADES A AMBOS JUGADORES")
//     else {
//         if(humanScore > computerScore){
//             console.log(`El ganador es el humano, FELICIDADES`);
//         }
//         else{
//             console.log(`El ganador es la compu, FELICIDADES`);
//         }
//     }
// }

// playGame();















