function playGame(){
  // variables
  let playerSelection = null
  let playerScore = 0
  let computerScore = 0
  let roundNumber = 1
  
  // querySelectors
  const makeSelectionText = document.querySelector("#playerSelection")
  const selections = document.querySelectorAll(".selection")
  const playButton = document.querySelector("#playButton")
  const newGameButton = document.querySelector("#newGame")
  const playerScoreText = document.querySelector(".playerScore")
  const computerScoreText = document.querySelector(".computerScore")
  
  // addEventListeners
  selections.forEach((selector) => {
    selector.addEventListener("click", function (e) {
      changePlayerSelection(e.target)
      makeSelectionText.textContent = `PLAY with ${e.target.id}, or make a choice:`
    })
  })

  playButton.addEventListener("click", () => {
    if (!playerSelection) return
    playRound(playerSelection, getComputerSelection())
    checkGameOver()
  })
  newGameButton.addEventListener("click", () => {
    newGame()
  })
  
  // Functions
  function changePlayerSelection(selection) {
    selections.forEach((selector) => {
      if (selector.id === selection.id) {
        playerSelection = selection.id
        selector.classList.toggle("selected")
      } else if (selector.classList.contains("selected")) {
        selector.classList.remove("selected")
      }
    })
  }
  
  function getComputerSelection() {
    const choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
      return "rock"
    } else if (choice === 1) {
      return "paper"
    } else {
      return "scissors"
    }
  }
  
  function playRound(playerSelection, computerSelection) {
    const roundUL = document.querySelector(`.round${roundNumber}`)
    const roundListItem = document.createElement("li")
    roundListItem.classList.add("result")
    let roundResult
    if (playerSelection === computerSelection) {
      roundListItem.textContent = `TIE! ${playerSelection} vs ${computerSelection}`
    } else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        roundResult = "lose"
      } else {
        roundResult = "win"
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        roundResult = "lose"
      } else {
        roundResult = "win"
      }
    } else {
      if (computerSelection === "rock") {
        roundResult = "lose"
      } else {
        roundResult = "win"
      }
    }
    if (roundResult === "win") {
      roundListItem.textContent = `WIN! ${playerSelection} vs ${computerSelection}`
      roundListItem.style.color = "#27AE60"
      playerScore++
      roundNumber++
    } else if (roundResult === "lose") {
      roundListItem.textContent = `LOSE! ${playerSelection} vs ${computerSelection}`
      roundListItem.style.color = "#E74C3C"
      computerScore++
      roundNumber++  
    }
    roundUL.appendChild(roundListItem)
    playerScoreText.textContent = `Player Score: ${playerScore}`
    computerScoreText.textContent = `Computer Score: ${computerScore}`
  }

  function checkGameOver() {
    if (roundNumber > 5) {
      playButton.style.display = "none"
      newGameButton.style.display = "inline-block"
      declareWinner()
    }
  }
  function declareWinner () {
    if (playerScore > computerScore) {
      makeSelectionText.textContent = `WINNER! `
    } else {
      makeSelectionText.textContent = "You Lost! "
    }
    makeSelectionText.textContent += `${playerScore} to ${computerScore}`
  }

  function newGame() {
    const results = Array.from(document.querySelectorAll(".result"))
    results.forEach(result => {
      result.remove()
    })
    makeSelectionText.textContent = "Make a choice:"
    playButton.style.display = "inline-block"
    newGameButton.style.display = "none"
    playerSelection = null
    playerScore = 0
    computerScore = 0
    roundNumber = 1
    }
}

playGame()