// Create Rock, Paper, Scissors array
const CHOICES = ["Rock", "Paper", "Scissors"];

// Start game sequence with user click
document.addEventListener("click", (e) => {
  let userSelection = getUserSelection(e.target);
  let compSelection = getCompSelection();

  updateView("", userSelection, compSelection);

  //  Compare user input to computer input
  if (userSelection === compSelection) {
    updateView("It's a tie!");
  } else {
    if (userSelection === "Rock") {
      compSelection === "Paper"
        ? updateView(compWins())
        : updateView(userWins());
    } else if (userSelection === "Paper") {
      compSelection === "Scissors"
        ? updateView(compWins())
        : updateView(userWins());
    } else if (userSelection === "scissor") {
      compSelection === "Rock"
        ? updateView(compWins())
        : updateView(userWins());
    }
  }
});

//  Collect and store user input (Rock, Paper, or Scissors)
function getUserSelection(target) {
  return target.value;
}

//  Create computer input
function getCompSelection() {
  let i = Math.floor(Math.random() * 3);
  return CHOICES[i];
}

//  Alert the winner
function updateView(message, userSelection, compSelection) {
  if (message) {
    document.getElementById("gameboard-para").textContent = message;
  }

  if (userSelection) {
    document.getElementById("user-selection").textContent = userSelection;
  }

  if (compSelection) {
    document.getElementById("computer-selection").textContent = compSelection;
  }
}

function userWins() {
  return "You win!";
}

function compWins() {
  return "You lose...";
}
