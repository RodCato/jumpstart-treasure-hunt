const modal = document.getElementById("modal")
const modalMessage = document.getElementById("modal-message")

const getStoredScore = (key) => {
  const storedScore = localStorage.getItem(key)
  return storedScore ? parseInt(storedScore) : 0
}

const setStoredScore = (key, score) => {
  localStorage.setItem(key, score.toString())
}

const updateScore = () => {
  document.getElementById("wins").textContent = wins
  document.getElementById("losses").textContent = losses
}

let wins = getStoredScore("wins")
let losses = getStoredScore("losses")

window.onload = () => {
  updateScore()
}

const treasure = (location) => {
  const treasureLocation = Math.floor(Math.random() * 9)
  const bombLocation = Math.floor(Math.random() * 9)
  const noState = ["☠️", "💩", "👎🏿", "👀", "🦨", "🪨", "🌋", "💔", "🏴‍☠️"]
  const rand = noState[(Math.random() * noState.length) |0]

  if (treasureLocation === location) {
    document.getElementById(location).innerHTML = '<img src="treasurechest.png" alt="Treasure" />'
    showModal("You Win! <img src='treasurechest.png' alt='Treasure' />")
    wins++
    updateScore()
    setStoredScore("wins", wins)
    setTimeout(() => {
      window.location.reload()
    }, 2000) // Delay in milliseconds (e.g., 2000ms = 2 seconds)
  } else if (bombLocation === location) {
    document.getElementById(location).innerHTML = "😵"
    showModal("You Lose!" + "😵")
    losses++
    updateScore()
    setStoredScore("losses", losses)
    setTimeout(() => {
      window.location.reload()
    }, 2000) // Delay in milliseconds (e.g., 2000ms = 2 seconds)
  } else {
    document.getElementById(location).innerHTML = rand
  }
}

const showModal = (message) => {
  modalMessage.innerHTML = message
  modal.showModal()
}

modal.addEventListener("close", () => {
  window.location.reload()
})

const resetScore = () => {
  wins = 0
  losses = 0
  updateScore()
  setStoredScore("wins", wins)
  setStoredScore("losses", losses)
}

const resetButton = document.getElementById("resetButton")
resetButton.addEventListener("click", resetScore)
