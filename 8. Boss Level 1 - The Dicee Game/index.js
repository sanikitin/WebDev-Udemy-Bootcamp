function randomDice() {
    let n = Math.random();
    n = Math.floor(n * 6) + 1;
    return n;
}

let d1 = randomDice();
document.getElementById("dice1").setAttribute("src", "images/dice" + d1 + ".png");

let d2 = randomDice();
document.getElementById("dice2").setAttribute("src", "images/dice" + d2 + ".png");

if (d1 > d2) {
    document.getElementById("result").textContent = "🚩Player 1 Wins!";
} else if (d2 < d1) {
    document.getElementById("result").textContent = "Player 2 Wins!🚩"
} else {
    document.getElementById("result").textContent = "DRAW!"
}