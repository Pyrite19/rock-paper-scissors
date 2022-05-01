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

function playRound(userInput, computerInput) {
  // userInput = capitalize(userInput);
  // userInput = abbreviationResolver(userInput);
  // if (userInput != "Rock" && userInput != "Paper" && userInput != "Scissors") {
  //   console.log("Invalid input!");
  //   return -1;
  // }
  if (userInput === computerInput) {
    return "You tied this round!";
  }
  if (userInput === "Rock" && computerInput === "Paper") {
    return "You lose this round!";
  }
  if (userInput === "Rock" && computerInput === "Scissors") {
    return "You win this round!";
  }
  if (userInput === "Paper" && computerInput === "Rock") {
    return "You win this round!";
  }
  if (userInput === "Paper" && computerInput === "Scissors") {
    return "You lose this round";
  }
  if (userInput === "Scissors" && computerInput === "Rock") {
    return "You lose this round";
  }
  if (userInput === "Scissors" && computerInput === "Paper") {
    return "You win this round!";
  }
}

let userInput = "";

const container = document.querySelector(".container");
const div = document.createElement("div");
const p = document.createElement("p");

const rockBtn = document.querySelector(".playRock");
rockBtn.addEventListener("click", (e) => {
  userInput = "Rock"
  p.textContent = playRound(userInput, computerPlay());
  container.appendChild(div);
  div.appendChild(p);
});

const paperBtn = document.querySelector(".playPaper");
paperBtn.addEventListener("click", (e) => {
  userInput = "Paper"
  p.textContent = playRound(userInput, computerPlay());
  container.appendChild(div);
  div.appendChild(p);
});

const scissorsBtn = document.querySelector(".playScissors");
scissorsBtn.addEventListener("click", (e) => {
  userInput = "Scissors"
  p.textContent = playRound(userInput, computerPlay());
  container.appendChild(div);
  div.appendChild(p);
});