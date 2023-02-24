const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
let noOfTurns = 1;
const scores = document.getElementById("scores");
let userScore = 0;
let computerScore = 0;
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function getComputerChoice() {
  let array = ["Rock", "Paper", "Scissors"];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

function playRound(playerSelection, computerSelection) {
  if (noOfTurns == 5 && computerScore == userScore) {
    result.textContent = `You are tied with the Computer`;
  } else if (computerScore == 5) {
    result.textContent = `You lost! The computer won!`;
    return;
  } else if (userScore == 5) {
    result.textContent = `You are the winner!!`;
    return;
  }
  playerSelection = toTitleCase(playerSelection);
  computerSelection = toTitleCase(computerSelection);
  let won = false;
  let draw = false;
  if (playerSelection == computerSelection) {
    draw = true;
  }
  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ) {
    won = true;
  }
  if (won) {
    userScore += 1;
    scores.textContent = `Player Score:${userScore}  Computer Score:${computerScore}`;
    result.textContent = `${playerSelection} beats ${computerSelection}. You Won!`;
  } else if (draw == true) {
    result.textContent = `You both chose ${playerSelection}. It's a Tie!`;
    scores.textContent = `Player Score:${userScore}  Computer Score:${computerScore}`;
  } else {
    computerScore += 1;
    result.textContent = `${computerSelection} beats ${playerSelection}. You Lose!`;
    scores.textContent = `Player Score:${userScore}  Computer Score:${computerScore}`;
  }
}

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt("Enter your choice: ");
//     let computerSelection = getComputerChoice();
//     let curResult = playRound(playerSelection, computerSelection);
//     let temp = curResult.slice(-3);
//     if (temp == "se!") {
//       computerScore++;
//     } else if (temp == "on!") {
//       playerScore++;
//     }
//     console.log(curResult);
//   }
//   console.log(playerScore);
//   console.log(computerScore);
//   if (playerScore > computerScore) {
//     console.log("You are the winner!!");
//   } else if (playerScore == computerScore) {
//     console.log("You are tied with the Computer");
//   } else {
//     console.log("You lost! The computer won!");
//   }
// }
// game();

rock.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
});
paper.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
});

reset.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  result.textContent = "";
  scores.textContent = "";
});

const btn = document.querySelector(".btn-toggle");

// Listen for a click on the button
btn.addEventListener("click", function () {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
});
