//  Collect and store user input (rock, paper, or scissors)
document.addEventListener("click", (event) => {
  let userSelection = event.target.value;
  return userSelection;
});
//  Create computer input
//      Store rock, paper, scissors in array
//      Generate random number 0, 1, 2
//      Get value (rock, paper, scissors) at index (random number) of array
//  Compare user input to computer input
//      if else accounting for user and computer inputs
//  Alert the winner
