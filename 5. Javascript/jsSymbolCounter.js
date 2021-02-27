
let message = prompt('Write your message');
// Функция length возвращает длину переменной в символах
alert('You are written ' + message.length + ' and you have ' + (140 - message.length) + ' symbols remaining');
// Функция slice (x,y) обрезает переменную начиная с x и заканчивая, но не включая y
alert(message.slice(0, 140));