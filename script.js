const selection = document.querySelectorAll(".selection")
selection.forEach(selector => {
  selector.addEventListener("click", function (e) {
    selection.forEach(selector =>{
      selector.classList.remove("selected")
    })
    selector.classList.add("selected")
  })
})


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
  let choices = ""
  while (choices == "") {
    choices = prompt("Make a selection: rock | paper | scissors").trim().toLowerCase()
    if (choices == "rock" || choices == "paper" || choices == "scissors") {
      return choices
    }
    else {
      choices = ""
    }
  }
}


function playGame(rounds = 5) {
  let humanScore = 0
  let computerScore = 0
  let roundNumber = 0
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("TIE! Replay this round");
      return
    } else if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        console.log("Paper covers Rock!")
        computerScore++
      } else {
        console.log("Rock smashes Scissors!")
        humanScore++
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "scissors") {
        console.log("Scissors cuts Paper!")
        computerScore++
      } else {
        console.log("Paper covers Rock!")
        humanScore++
      }
    } else {
      if (computerChoice === "rock") {
        console.log("Rock smashes Scissors!")
        computerScore++
      } else {
        console.log("Scissors cuts Paper!")
        humanScore++
      }
    }
    roundNumber++
  }
  while (roundNumber < rounds) {
    console.log(`Round ${roundNumber + 1}`)
    playRound(getHumanChoice(), getComputerChoice())
    console.log(`YOU: ${humanScore} | COMPUTER: ${computerScore}`)
    console.log("")
  }
  if (humanScore > computerScore) {
    console.log(`YOU WIN! ${humanScore} to ${computerScore}`)
  }
  else if (computerScore > humanScore) {
    console.log(`YOU LOSE! ${computerScore} to ${humanScore}`)
  }
  else {
    console.log(`?--??x?x??--?`)
  }
}

// playGame()