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
    for (let i = 0; i < 5; i++) {
        const userInput = prompt("Rock, Paper, or Scissors?");
        const computerInput = computerPlay();
        console.log(playRound(userInput, computerInput));
    }
}

function playRound(userInput, computerInput) {
capitalize(userInput);
if (userInput === computerInput) {
    return userInput + " ties " + computerInput + "!"
}
if (userInput === "Rock" && computerInput === "Paper") {
    return "You lose! Paper beats rock!"
}
if (userInput === "Rock" && computerInput === "Scissors") {
    return "You win! Rock beats Scissors!"
}
if (userInput === "Paper" && computerInput === "Rock") {
    return "You win! Paper beats rock!"
}
if (userInput === "Paper" && computerInput === "Scissors") {
    return "You lose! Scissors beats Paper!"
}
if (userInput === "Scissors" && computerInput === "Rock") {
    return "You lose! Rock beats Scissors!"
}
if (userInput === "Scissors" && computerInput === "Paper") {
    return "You win! Scissors beats Paper!"
}
}
