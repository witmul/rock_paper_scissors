
function getRandIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"]
    return options[getRandIndex(options)]
}

function playRound(playerSelection, computerSelection) {

    const choices = ["rock", "paper", "scissors"];
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    const playerIndex = choices.indexOf(player);
    const computerIndex = choices.indexOf(computer);
    let result = ""


    if(p1_count >= 5 || p2_count >= 5){
        if (p1_count >= 5){
            result = "You won a game!"
            divOutput.textContent = result;
        }

        if (p2_count >= 5){
            result = "You lost a game!"
            divOutput.textContent = result;
        }

    }else{

        if (playerIndex === computerIndex) {
            p1_count += 1;
            p2_count += 1;
            result = "Draft!";
        } else if ((playerIndex + 1) % 3 === computerIndex) {
            p1_count += 1;
            result = "Round won!";
        } else {
            p2_count += 1;
            result = "Round lost!";
        }
    
        const row = document.createElement("p");
        row.textContent = result;
        divOutput.appendChild(row);
        divScore.textContent = `Score: ${p1_count} : ${p2_count}`;

    }




  }


let p1_count = 0
let p2_count = 0

const btnRock = document.querySelector("#btn-rock")
const btnPaper = document.querySelector("#btn-paper")
const btnScissors = document.querySelector("#btn-scissors")
const divOutput = document.querySelector(".container-output")
const divScore = document.querySelector("#score")

btnRock.addEventListener("click", ()=> {playRound("rock", getComputerChoice())})
btnPaper.addEventListener("click", ()=> {playRound("paper", getComputerChoice())})
btnScissors.addEventListener("click", ()=> {playRound("scissors", getComputerChoice())})


  