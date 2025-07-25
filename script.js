// Create rock, paper, scissors array
const CHOICES = ["rock", "paper", "scissors"];

// Start game sequence with user click
document.addEventListener("click", (e) => {
  let userSelection = getUserSelection(e.target);
  let compSelection = getCompSelection();


  //  Compare user input to computer input
  if (userSelection === compSelection) {
    updateView("It's a tie!");
  } else {
    if (userSelection === "rock") {
      compSelection === "paper"
        ? updateView(compWins())
        : updateView(userWins());
    } else if (userSelection === "paper") {
      compSelection === "scissors"
        ? updateView(compWins())
        : updateView(userWins());
    } else if (userSelection === "scissor") {
      compSelection === "rock"
        ? updateView(compWins())
        : updateView(userWins());
    }
  }
});

//  Collect and store user input (rock, paper, or scissors)
function getUserSelection(target) {
  return target.value;
}

//  Create computer input
function getCompSelection() {
  let i = Math.floor(Math.random() * 3);
  return CHOICES[i];
}

//  Alert the winner
function updateView(message) {
  document.getElementById("gameboard-para") = message;
}

function userWins() {
  return "Let's gooo! You won!";
}

function compWins() {
  return "Bummer! Better luck next time.";
}
