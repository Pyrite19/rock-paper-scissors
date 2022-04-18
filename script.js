function computerPlay() {
    let num = Math.random()*10;
    console.log(num)
    if(num <= 3.333) {
        return "Rock"
    }
    else if(num <= 6.66) {
        return "Paper"
    }
    else if(num >= 6.67) {
        return "Scissors"
    }
}