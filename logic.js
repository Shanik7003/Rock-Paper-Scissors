
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

//A esta funcion se le pasa como argumentos ls jugada de player y compu y los puntos de los jugadores ya llistos para ser modificados dinamicamente
function playRound(humanChoice, computerChoice, playerPoints, computerPoints) { 

    let container = document.querySelector(".text");
    let message = document.createElement("h3");
    container.textContent = ""; // lo limpio antes de ponerle un texto nuevo, creo que esto sobra 

    playVisualRound(humanChoice, computerChoice);//ejecuta los cambios en la ui

    if(humanChoice == computerChoice){
        message.textContent = "Empate, repetimos...";
        container.appendChild(message);
        return;
    }
    else if(humanChoice == "scissors"){
        if(computerChoice == "paper"){
            humanScore ++;
            playerPoints.textContent = (Number(playerPoints.textContent)+1).toString();
            message.textContent = "scissors vence a papel " + "punto para el humano :) " +" humanScore: "+ humanScore;
            container.appendChild(message);
            return;
        }
        else{
            computerScore ++;
            computerPoints.textContent = (Number(computerPoints.textContent)+1).toString();
            message.textContent = "rock vence a scissors " +" punto para la compu :( "+" compuScore: "+ computerScore;
            container.appendChild(message);
            return;
        }
    }
    else if(humanChoice == "paper"){
        if(computerChoice == "rock"){
            humanScore ++;
            playerPoints.textContent = (Number(playerPoints.textContent)+1).toString();
            message.textContent = "paper vence a rock " +"punto para el humano :) "+" humanScore: "+ humanScore;
            container.appendChild(message);
            return;
        }
        else{
            computerScore ++;
            computerPoints.textContent = (Number(computerPoints.textContent)+1).toString();
            message.textContent = "scissors vence a paper " + " punto para la compu :( "+" compuScore: "+ computerScore;
            container.appendChild(message);
            return;
        }
    }
    else if(humanChoice == "rock"){
        if(computerChoice == "scissors"){
            humanScore ++;
            playerPoints.textContent = (Number(playerPoints.textContent)+1).toString();
            message.textContent = "rock vence a scissors " +"punto para el humano :) "+" humanScore: "+ humanScore;
            container.appendChild(message);
            return;
        }
        else{
            computerScore ++;
            computerPoints.textContent = (Number(computerPoints.textContent)+1).toString();
            message.textContent = "paper vence a rock " +" punto para la compu :(" +" compuScore: "+ computerScore;
            container.appendChild(message);
            return;
        }
    } 
}

function playVisualRound(humanChoice, computerChoice) {
    let playerBox = document.querySelector(".PlayerChoice");
    let compuBox = document.querySelector(".ComputerChoice");

    // Limpiamos los divs antes de insertar la nueva jugada
    playerBox.innerHTML = "";
    compuBox.innerHTML = "";

    // Creamos la imagen del jugador
    const playerImg = document.createElement("img");
    playerImg.src = `images/${humanChoice}.jpg`; // ejemplo: images/rock.jpg
    playerImg.alt = humanChoice;
    playerImg.classList.add("choice-image"); // opcional, para estilos CSS
    playerBox.appendChild(playerImg);

    // Creamos la imagen de la compu
    const compuImg = document.createElement("img");
    compuImg.src = `images/${computerChoice}.jpg`; // ejemplo: images/paper.jpg
    compuImg.alt = computerChoice;
    compuImg.classList.add("choice-image");
    compuBox.appendChild(compuImg);
}


const rockButton = document.querySelector(".RockButton");
const paperButton = document.querySelector(".PaperButton");
const scissorButton = document.querySelector(".ScissorButton");

const playerPointsBox = document.querySelector(".pointsPlay");
const computerPointsBox = document.querySelector(".pointsComp");

let playerPoints = document.createElement("h1");
let computerPoints = document.createElement("h1");
playerPoints.textContent = 0;
computerPoints.textContent = 0;
playerPointsBox.appendChild(playerPoints);
computerPointsBox.appendChild(computerPoints);

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice(), playerPoints, computerPoints));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice(), playerPoints, computerPoints));
scissorButton.addEventListener("click", () => playRound("scissors", getComputerChoice(), playerPoints, computerPoints));



































// function playGame() {
//     for(let i = 0; i < 5; i++)
//     {
//         playRound(getHumanChoice(), getComputerChoice());
//   
//     else {
//         if(humanScore > computerScor
//         }
//         el
//         }
//     }
// }

// playGame();















