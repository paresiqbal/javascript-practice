let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("input");

// randomize computer choise
function computerChoise() {
  let choise = ["rock", "paper", "scissors"];
  return choise[Math.floor(Math.random() * choise.length)];
}

// disable button after game end
function disableButtons() {
  buttons.forEach((element) => {
    element.disabled = true;
  });
}

// game round and logic
function playRound(playerChoise) {
  let computerSelection = computerChoise();
  let result = "";

  // game logic if player win
  if (
    (playerChoise == "rock" && computerSelection == "scissors") ||
    (playerChoise == "scissors" && computerSelection == "paper") ||
    (playerChoise == "paper" && computerSelection == "rock")
  ) {
    // adding player score if win
    playerScore += 1;
    result =
      "You win! " +
      playerChoise +
      " beats " +
      computerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;

    // player win the game if player score 5
    if (playerScore == 5) {
      result += "<br><br>You Won the game, restart the game if you want";
      disableButtons();
    }
  }

  // draw if playerChoise and computerChoise is the same
  else if (playerChoise == computerChoise) {
    result =
      "It's a tie. You both chose " +
      playerChoise +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;
  }

  // game logic if player lose
  else {
    computerScore += 1;
    result =
      "You lose! " +
      computerSelection +
      " beats " +
      playerChoise +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;

    // computer win if computer score 5
    if (computerScore == 5) {
      result += "<br><br>You lose the game, restart the game if you want";
      disableButtons();
    }
  }
  // displaying to DOM
  document.getElementById("result").innerHTML = result;
  return;
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value);
  });
});
