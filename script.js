// Create Rock, Paper, Scissors array
const CHOICES = ["Rock", "Paper", "Scissors"];

let gamesPlayed = 0;
let gamesWon = 0;

// Start game sequence with user click
document.addEventListener("click", (e) => {
  if (e.target.value != null || e.target.value != undefined) {
    gamesPlayed++;
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
      } else if (userSelection === "Scissors") {
        compSelection === "Rock"
          ? updateView(compWins())
          : updateView(userWins());
      }
    }
    updateView("", "", "", calcWinPercentage());
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
function updateView(message, userSelection, compSelection, winPercent) {
  if (message) {
    document.getElementById("gameboard-para").textContent = message;
  }

  if (userSelection) {
    document.getElementById("user-selection").textContent = userSelection;
  }

  if (compSelection) {
    document.getElementById("computer-selection").textContent = compSelection;
  }

  if (winPercent) {
    if (document.getElementById("win-percentage") === null) {
      let para = document.createElement("p");
      para.setAttribute("id", "win-percentage");
      document.getElementById("gameboard-dialog").appendChild(para);
    }
    //update element
  }
}

function userWins() {
  gamesWon++;
  return "You win!";
}

function compWins() {
  return "You lose...";
}

function calcWinPercentage() {
  let decimal = gamesWon / gamesPlayed;
  return `${(decimal * 100).toFixed(2)}%`;
}

// [x] Create variable to store games played
// [x] Create variable to store games user won
// [x] Calculate user win percentage
// [ ] Display user win percentage
// [ ] Reset win percentage with button in view
// [ ] --Clear variables when reset is clicked
