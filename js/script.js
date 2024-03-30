
function getRandIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"]
    return options[getRandIndex(options)]
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase()
    let computer = computerSelection.toLowerCase()
    let result = ""
    switch(true){
        case player === "rock" && computer === "scissors":
            result = "You won!"
            break
        case player === "scissors" && computer === "paper":
            result = "You won!"
            break
        case player === "paper" && computer === "rock":
            result = "You won!"
            break
        case player === computer:
            result = "Draft!"
            break
        default:
            result = "You lose!"
            break
    }

    return result
  }
  
for(i=1; i<50; i++){
    const playerSelection = "rOck";
    const computerSelection = getComputerChoice();
    console.log(playerSelection, computerSelection, playRound(playerSelection, computerSelection));
}


  