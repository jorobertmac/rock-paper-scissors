function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3)
  if (choice === 0) {
    return "rock"
  } else if (choice === 1) {
    return "paper"
  } else {
    return "scissors"
  }
}

function getHumanChoice() {
  const choices = prompt("Make a selection: rock | paper | scissors")
  if (choices) {
    return (choiceTrimLower = choices.trim().toLowerCase())
  }
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("TIE! No points awarded!")
  } else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("You Lose! Paper covers Rock!")
      computerScore++
    } else {
      console.log("WINNER! Rock smashes Scissors!")
      humanScore++
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("You Lose! Scissors cuts Paper!")
      computerScore++
    } else {
      console.log("WINNER! Paper covers Rock!")
      humanScore++
    }
  } else {
    if (computerChoice === "rock") {
      console.log("You Lose! Rock smashes Scissors!")
      computerScore++
    } else {
      console.log("WINNER! Scissors cuts Paper!")
      humanScore++
    }
  }
}
