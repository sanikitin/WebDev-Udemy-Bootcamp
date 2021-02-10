let name = prompt('Write your name');
let firstSymbolName = name.slice(0, 1);
let secondSymbolsName = name.slice(1, name.lenght);

alert('Hello ' + firstSymbolName.toUpperCase() + secondSymbolsName.toLowerCase());