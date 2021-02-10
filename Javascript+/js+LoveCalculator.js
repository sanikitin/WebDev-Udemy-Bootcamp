
let firstName = prompt("Write your name");
let secondName = prompt("Write name your partner");

let chance = Math.random();
chance = Math.floor(chance * 100) + 1;
alert(firstName + " and " + secondName + " are " + chance + "% compatible");