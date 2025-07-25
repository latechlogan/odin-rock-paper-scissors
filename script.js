//  Collect and store user input (rock, paper, or scissors)
document.addEventListener("click", (e) => {
  let userSelection = getUserSelection(e.target);
  console.log(userSelection);
});

function getUserSelection(target) {
  return target.value;
}
//  Create computer input
//      Store rock, paper, scissors in array
const CHOICES = ["rock", "paper", "scissors"];
//      Generate random number 0, 1, 2
//      Get value (rock, paper, scissors) at index (random number) of array
function getCompSelection() {
  let i = Math.floor(Math.random() * 3);
  return CHOICES[i];
}
//  Compare user input to computer input
//      if else accounting for user and computer inputs
//  Alert the winner
