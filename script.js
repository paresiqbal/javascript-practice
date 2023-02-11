let playerSelection = "";
let computerSelection = "";
let score = 0;

function computerPlay() {
  let arr = ["rock", "paper", "scissor"];
  return arr[Math.floor(Math.random() * 3)];
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = window.prompt("Enter you choice.").toLowerCase();
    if (
      (playerSelection != "rock" &&
        playerSelection != "paper" &&
        playerSelection != "scissor") ||
      playerSelection == ""
    ) {
      console.log(
        "Please enter a valid choice : \nrock? \npaper? \nscissor?\n"
      );
      i--;
      continue;
    }
    const computerSelection = computerPlay();
    console.log("The computer chose: " + computerSelection);
    console.log("You chose: " + playerSelection);
    playGround(playerSelection, computerSelection);
  }
}
function playGround(pS, cS) {
  if (pS == "rock") {
    if (cS == "rock") {
      console.log("You tied this round!");
    } else if (cS == "paper") {
      console.log("You lost this round!");
    } else {
      console.log("You Won this round!");
      score++;
    }
  } else if (pS == "paper") {
    if (cS == "paper") {
      console.log("You tied this round!");
    } else if (cS == "scissor") {
      console.log("You lost this round!");
    } else {
      console.log("You Won this round!");
      score++;
    }
  } else {
    if (cS == "scissor") {
      console.log("You tied this round!");
    } else if (cS == "rock") {
      console.log("You lost this!");
    } else {
      console.log("You Won this round!");
      score++;
    }
  }
}
game();
console.log("Your score is " + score + "/5");
