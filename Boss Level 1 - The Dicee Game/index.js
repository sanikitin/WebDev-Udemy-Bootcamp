function randomDice1() {
    let n1 = Math.random();
    n1 = Math.floor(n1*6) + 1;
    return n1;
}
let d1 = randomDice1();
document.getElementById("dice1").setAttribute("src", "images/dice"+d1+".png");

function randomDice2() {
    let n2 = Math.random();
    n2 = Math.floor(n2*6) + 1;
    return n2;
}
let d2 = randomDice2();
document.getElementById("dice2").setAttribute("src", "images/dice"+d2+".png");

if (d1>d2) {
    document.getElementById("result").textContent = "🚩Player 1 Win!";
} else if (d1<d2) {
    document.getElementById("result").textContent = "Player 2 Win!🚩"
} else {
    document.getElementById("result").textContent = "DRAW!"
}