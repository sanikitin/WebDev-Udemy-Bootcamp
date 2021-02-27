// У вас должна быть возможность вызвать функцию fizzBuzz в консоли, 
// и каждый раз, когда вы это делаете, он будет вставлять слово "Fizz" в массив вместо числа, которое было делимым на 3,
//  и он добавит в массив слово "Buzz" вместо числа, которое делится на 5. 
//  И если число делится как на 3, так и на 5, оно добавит слово «FizzBuzz» в ваш массив.

let output = [];
let count = 0;

function FizzBuzz () {
    if (count%3 === 0 && count != 0 && count%5 != 0) {
        output.push("Fizz");    
        count++;        
    } if (count%5 === 0 && count != 0 && count%3 != 0) {
        output.push("Buzz");    
        count++;
    } if (count%3 === 0 && count%5 === 0 && count != 0) {
        output.push("FizzBuzz");    
        count++;
    } else {
        output.push(count);    
        count++;
    }
    console.log (output);
}