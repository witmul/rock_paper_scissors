
function getRandIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"]
    return options[getRandIndex(options)]
}

function playRound(playerSelection, computerSelection) {

    if (p1_count >= 5) {
        if (p2_count >= 5) {
            result = "You won! End of the game"
            break;
        }
      } else {
        console.log("a is not 1");
      }




    if (p1_count >= 5){

    }else{
        result = "You lost! End of the game"
        break
    }


    let player = playerSelection.toLowerCase()
    let computer = computerSelection.toLowerCase()
    let result = ""
    switch(true){
        case player === "rock" && computer === "scissors":
            p1_count += 1
            result = "Round won!"
            break
        case player === "scissors" && computer === "paper":
            p1_count += 1
            result = "Round won!"
            break
        case player === "paper" && computer === "rock":
            p1_count += 1
            result = "Round won!"
            break
        case player === computer:
            p1_count += 1
            p2_count += 1
            result = "Draft!"
            break
        default:
            p2_count += 1
            result = "Round lost!"
            break
    }

    const row = document.createElement("p");
    row.textContent = result;
    divOutput.appendChild(row);
    divScore.textContent = `Score: ${p1_count} : ${p2_count}`;
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


  