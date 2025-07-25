// Create rock, paper, scissors array
const CHOICES = ["rock", "paper", "scissors"];

// Start game sequence with user click
document.addEventListener("click", (e) => {
  let userSelection = getUserSelection(e.target);
  let compSelection = getCompSelection();

  if (userSelection === "rock")
});
//  Collect and store user input (rock, paper, or scissors)
function getUserSelection(target) {
  return target.value;
}
//  Create computer input
//      Generate random number 0, 1, 2
//      Get value (rock, paper, scissors) at index (random number) of array
function getCompSelection() {
  let i = Math.floor(Math.random() * 3);
  return CHOICES[i];
}
//  Compare user input to computer input
//      if else accounting for user and computer inputs
//  Alert the winner
//      create user wins message
//      create computer wins message
