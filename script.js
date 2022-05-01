function capitalize(string) {
  string.trim();
  string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function computerPlay() {
  let num = Math.random() * 10;
  if (num <= 3.333) {
    return "Rock";
  } else if (num <= 6.66) {
    return "Paper";
  } else if (num >= 6.67) {
    return "Scissors";
  }
}

// function game() {
//   let humanScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i <= 5; i++) {
//     if (i === 5) {
//       if (humanScore > computerScore) {
//         console.log("You win the game!");
//       }
//       if (humanScore < computerScore) {
//         console.log("You lose the game!");
//       }
//     }

//     if (i != 5) {
//       const userInput = prompt(
//         "Rock, Paper, or Scissors? (Can also use R, P, or S)"
//       );
//       const computerInput = computerPlay();
//       const gameResult = playRound(userInput, computerInput);
//       if (gameResult === -1) {
//         i--;
//       }
//       if (gameResult === 0) {
//         console.log(`You lose! Computer chose ${computerInput}!`);
//         computerScore++;
//         console.log(`Score is ${humanScore}-${computerScore}` );
//       }
//       if (gameResult === 1) {
//         console.log(`You tied! Computer chose ${computerInput}!`);
//         console.log("Restarting round!");
//         i--;
//         console.log(`Score is ${humanScore}-${computerScore}`);
//       }
//       if (gameResult === 2) {
//         console.log(`You win! Computer chose ${computerInput}!`);
//         humanScore++;
//         console.log(`Score is ${humanScore}-${computerScore}`);
//       }
//     }
//   }
// }

// function abbreviationResolver(string) {
//   if (string === "R") {
//     return "Rock";
//   }
//   if (string === "P") {
//     return "Paper";
//   }
//   if (string === "S") {
//     return "Scissors";
//   }
// }

const spacer = document.querySelector(".spacer");
const div = document.createElement("div");
const pResult = document.createElement("p");
const currentScore = document.createElement("h2");
let humanScore = 0;
let computerScore = 0;

function playRound(userInput, computerInput) {
  if (userInput === computerInput) {
    pResult.textContent = "You tied this round!";
    currentScore.textContent = `Score is ${humanScore}-${computerScore}`;
  }
  if (userInput === "Rock" && computerInput === "Paper") {
    pResult.textContent = "You lose this round!";
    computerScore++;
    currentScore.textContent = `Score is ${humanScore}-${computerScore}`;
  }
  if (userInput === "Rock" && computerInput === "Scissors") {
    pResult.textContent = "You win this round!";
    humanScore++;
    currentScore.textContent = `Score is ${humanScore}-${computerScore}`;
  }
  if (userInput === "Paper" && computerInput === "Rock") {
    pResult.textContent = "You win this round!";
    humanScore++;
    currentScore.textContent = `Score is ${humanScore}-${computerScore}`;
  }
  if (userInput === "Paper" && computerInput === "Scissors") {
    pResult.textContent = "You lose this round!";
    computerScore++;
    currentScore.textContent = `Score is ${humanScore}-${computerScore}`;
  }
  if (userInput === "Scissors" && computerInput === "Rock") {
    pResult.textContent = "You lose this round!";
    computerScore++;
    currentScore.textContent = `Score is ${humanScore}-${computerScore}`;
  }
  if (userInput === "Scissors" && computerInput === "Paper") {
    pResult.textContent = "You win this round!";
    humanScore++;
    currentScore.textContent = `Score is ${humanScore}-${computerScore}`;
  }

  div.appendChild(currentScore);
  div.appendChild(pResult);
  spacer.appendChild(div);

  if (humanScore === 5) {
    pResult.textContent = "You win the game!";
    currentScore.textContent = `Score is ${humanScore}-${computerScore}`;
    computerScore = 0;
    humanScore = 0;
  }
  if (computerScore === 5) {
    pResult.textContent = "You lose the game!";
    currentScore.textContent = `Score is ${humanScore}-${computerScore}`;
    computerScore = 0;
    humanScore = 0;
  }
}

const rockBtn = document.querySelector(".playRock");
rockBtn.addEventListener("click", (e) => {
  userInput = "Rock";
  playRound(userInput, computerPlay());
});

const paperBtn = document.querySelector(".playPaper");
paperBtn.addEventListener("click", (e) => {
  userInput = "Paper";
  playRound(userInput, computerPlay());
});

const scissorsBtn = document.querySelector(".playScissors");
scissorsBtn.addEventListener("click", (e) => {
  userInput = "Scissors";
  playRound(userInput, computerPlay());
});
