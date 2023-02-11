let playerSelection = "";
let computerSelection = "";
let score = 0;

// declaring a value rock paper scissors
function computerPlay() {
  let move = ["rock", "paper", "scissor"];
  return move[Math.floor(Math.random() * 3)];
}

// game round logic
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

// fungsional game logic
function playGround(playerSection, computerSection) {
  if (playerSection == "rock") {
    if (computerSection == "rock") {
      console.log("You tied this round!");
    } else if (computerSection == "paper") {
      console.log("You lost this round!");
    } else {
      console.log("You Won this round!");
      score++;
    }
  } else if (playerSection == "paper") {
    if (computerSection == "paper") {
      console.log("You tied this round!");
    } else if (computerSection == "scissor") {
      console.log("You lost this round!");
    } else {
      console.log("You Won this round!");
      score++;
    }
  } else {
    if (computerSection == "scissor") {
      console.log("You tied this round!");
    } else if (computerSection == "rock") {
      console.log("You lost this!");
    } else {
      console.log("You Won this round!");
      score++;
    }
  }
}

game();
console.log("Your score is " + score + "/5");
