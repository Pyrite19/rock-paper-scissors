function capitalize(string) {
    string.trim();
    string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function computerPlay() {
    let num = Math.random()*10;
    if (num <= 3.333) {
        return "Rock"
    }
    else if (num <= 6.66) {
        return "Paper"
    }
    else if (num >= 6.67) {
        return "Scissors"
    }
}
function game(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i <= 5; i++) {
        const userInput = prompt("Rock, Paper, or Scissors?");
        const computerInput = computerPlay();
        const gameResult = playRound(userInput, computerInput);
        if (i === 5) {
            if (humanScore > computerScore) {
                console.log("You win!")
            }
            if (humanScore < computerScore) {
                console.log("You lose!")
            }
        }
        if (gameResult === 0) {
            console.log("You lose! Computer chose " + computerInput + " !")
            computerScore++
            console.log("Score is " + humanScore + "-" + computerScore)
        }
        if (gameResult === 1) {
            console.log("You tied! Computer chose " + computerInput + " !")
            console.log("Restarting round!")
            i--
            console.log("Score is " + humanScore + "-" + computerScore)
        }
        if (gameResult === 2) {
            console.log("You win! Computer chose " + computerInput + " !")
            humanScore++
            console.log("Score is " + humanScore + "-" + computerScore)
        }
    }
}



function playRound(userInput, computerInput) {
capitalize(userInput);
if (userInput === computerInput) {
    return 1
}
if (userInput === "Rock" && computerInput === "Paper") {
    return 0
}
if (userInput === "Rock" && computerInput === "Scissors") {
    return 2
}
if (userInput === "Paper" && computerInput === "Rock") {
    return 2
}
if (userInput === "Paper" && computerInput === "Scissors") {
    return 0
}
if (userInput === "Scissors" && computerInput === "Rock") {
    return 0
}
if (userInput === "Scissors" && computerInput === "Paper") {
    return 2
}
}
