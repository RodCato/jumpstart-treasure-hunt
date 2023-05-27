const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");

const treasure = (location) => {
  let treasureLocation = Math.floor(Math.random() * 9);
  let bombLocation = Math.floor(Math.random() * 9);

  if (treasureLocation === location) {
    document.getElementById(location).innerHTML = "💰";
    showModal("You Win!");
    setTimeout(() => {
      window.location.href = "https://eliment.github.io/rod.github.io/";
    }, 2000); // Delay in milliseconds (e.g., 2000ms = 2 seconds)
  } else if (bombLocation === location) {
    document.getElementById(location).innerHTML = "🔥";
    showModal("You Lose!");
    setTimeout(() => {
      window.location.href = "https://eliment.github.io/rod.github.io/";
    }, 2000); // Delay in milliseconds (e.g., 2000ms = 2 seconds)
  } else {
    document.getElementById(location).innerHTML = "🚫";
  }
};

function showModal(message) {
  modalMessage.textContent = message;
  modal.showModal();
}

modal.addEventListener("close", function () {
  window.location.reload();
});
