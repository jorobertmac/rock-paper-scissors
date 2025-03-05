function playGame(rounds = 5) {
  let playerScore = 0
  let computerScore = 0
  let roundNumber = 0
  let playerSelection = ""

  const makeSelectionText = document.querySelector("#playerSelection")
  const selection = document.querySelectorAll(".selection")
  const playButton = document.querySelector(".play")
  const playerScoreText = document.querySelector(".playerScore")
  const computerScoreText = document.querySelector(".computerScore")


  
  selection.forEach(selector => {
    selector.addEventListener("click", function (e) {
      selection.forEach(selector =>{
        selector.classList.remove("selected")
      })
      selector.classList.add("selected")
      playerSelection = selector.id
      makeSelectionText.textContent = `PLAY with ${playerSelection}, or make a choice:`
      playButton.style.display = "inline-block"
      playButton.classList.toggle("active")
    })
  })

  playButton.addEventListener("click", () => {
      playButton.classList.toggle("active")
      playButton.style.display = "none"
      makeSelectionText.textContent = "Make a choice:"
      if (roundNumber < rounds) {
        playRound(getPlayerSelection(), getComputerSelection())
      }
  })
  
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
  
  function getPlayerSelection() {
    return playerSelection
  }
  
  function playRound(playerSelection, computerSelection) {
    const roundUL = document.querySelector(`.round${roundNumber+1}`)
    const roundListItem = document.createElement("li")
    let roundText = roundListItem.textContent = ""
    if (playerSelection === computerSelection) {
      roundUL.appendChild(roundListItem)
      roundListItem.textContent = `TIE! Repeat Round ${roundNumber + 1}`
      return
    } else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        roundText = "Paper covers Rock!"
        roundListItem.style.color = "#E74C3C"
        computerScore++
      } else {
        roundText = "Rock smashes Scissors! +1"
        roundListItem.style.color = "#27AE60"
        playerScore++
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        roundText = "Scissors cuts Paper!"
        roundListItem.style.color = "#E74C3C"
        computerScore++
      } else {
        roundText = "Paper covers Rock! +1"
        roundListItem.style.color = "#27AE60"
        playerScore++
      }
    } else {
      if (computerSelection === "rock") {
        roundText = "Rock smashes Scissors!"
        roundListItem.style.color = "#E74C3C"
        computerScore++
      } else {
        roundText = "Scissors cuts Paper! +1"
        roundListItem.style.color = "#27AE60"
        playerScore++
      }
    }
    roundUL.appendChild(roundListItem)
    roundListItem.textContent = roundText
    playerScoreText.textContent = `Player Score: ${playerScore}`
    computerScoreText.textContent = `Computer Score: ${computerScore}`
    roundNumber++
  }
}

playGame()