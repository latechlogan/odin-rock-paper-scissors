// Create Rock, Paper, Scissors array
const CHOICES = ["Rock", "Paper", "Scissors"];

const gameboardPara = document.querySelector("#gameboard-para");
const userDisplay = document.querySelector("#user-selection");
const cpuDisplay = document.querySelector("#computer-selection");

let cpuGamesWon = 0;
let userGamesWon = 0;

// Start game sequence with user click
document.addEventListener("click", (e) => {
  if (e.target.value != null || e.target.value != undefined) {
    let userSelection = getUserSelection(e.target);
    let cpuSelection = getCpuSelection();

    updateView("", userSelection, cpuSelection);

    //  Compare user input to computer input
    if (userSelection === cpuSelection) {
      updateView("It's a tie!");
    } else {
      if (userSelection === "Rock") {
        cpuSelection === "Paper"
          ? updateView(handleCpuWin())
          : updateView(handleUserWin());
      } else if (userSelection === "Paper") {
        cpuSelection === "Scissors"
          ? updateView(handleCpuWin())
          : updateView(handleUserWin());
      } else if (userSelection === "Scissors") {
        cpuSelection === "Rock"
          ? updateView(handleCpuWin())
          : updateView(handleUserWin());
      }
    }
  }
});

//  Collect and store user input (Rock, Paper, or Scissors)
function getUserSelection(target) {
  return target.value;
}

//  Create computer input
function getCpuSelection() {
  let i = Math.floor(Math.random() * 3);
  return CHOICES[i];
}

//  Alert the winner
function updateView(message, userSelection, cpuSelection) {
  if (message) {
    gameboardPara.textContent = message;
  }

  if (userSelection) {
    userDisplay.textContent = userSelection;
  }

  if (cpuSelection) {
    cpuDisplay.textContent = cpuSelection;
  }

  updateWinPills();
}

function handleUserWin() {
  userGamesWon++;
  return "You win!";
}

function handleCpuWin() {
  cpuGamesWon++;
  return "You lose...";
}

function updateWinPills() {
  let cpuPills = document.querySelectorAll(".cpu-win-pill");
  let userPills = document.querySelectorAll(".user-win-pill");

  for (i = 0; i < cpuGamesWon; i++) {
    cpuPills[i].classList.add("filled");
  }

  for (i = 0; i < userGamesWon; i++) {
    userPills[i].classList.add("filled");
  }

  alertGameWinner();
}

function alertGameWinner() {
  if (userGamesWon === 5) {
    tempDisableBtns();
    gameboardPara.textContent = "Congratulations!";
    userDisplay.textContent = "WINNER";
    cpuDisplay.textContent = "";
    setTimeout(() => {
      resetGame();
    }, 3000);
  }
  if (cpuGamesWon === 5) {
    tempDisableBtns();
    gameboardPara.textContent = "Better luck next time.";
    cpuDisplay.textContent = "WINNER";
    userDisplay.textContent = "";
    setTimeout(() => {
      resetGame();
    }, 3000);
  }
}

function resetGame() {
  userGamesWon = 0;
  cpuGamesWon = 0;

  document.querySelectorAll(".user-win-pill").forEach((element) => {
    if (element.classList.contains("filled")) {
      element.classList.remove("filled");
    }
  });

  document.querySelectorAll(".cpu-win-pill").forEach((element) => {
    if (element.classList.contains("filled")) {
      element.classList.remove("filled");
    }
  });

  cpuDisplay.textContent = "";
  userDisplay.textContent = "";
  gameboardPara.textContent = "Rock, paper, or scissors?";
}

function tempDisableBtns() {
  const btns = document.querySelectorAll("button");

  btns.forEach((btn) => {
    btn.disabled = true;
  });
  setTimeout(() => {
    btns.forEach((btn) => {
      btn.disabled = false;
    });
  }, 3000);
}
