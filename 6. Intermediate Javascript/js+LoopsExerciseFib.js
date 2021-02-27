function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆

    let firstVar = 0;
    let secondVar = 1;

    let fibonacciArray = [];

    while (n > 0) {
        if (firstVar === 0 && fibonacciArray.length === 0) {
            fibonacciArray.push(firstVar);
            n--;
        } else {
            let thirdVar = secondVar;

            secondVar = firstVar + secondVar;
            firstVar = thirdVar;
            n--;
            fibonacciArray.push(firstVar);
        }
    }

    return fibonacciArray;

    //Return an array of fibonacci numbers starting from 0.

    //Do NOT change any of the code below 👇
}

// Ещё одно решение

function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆

    let fibonacciArray = [];

    if (n === 1) {
        fibonacciArray = [0];
    } else if (n === 2) {
        fibonacciArray = [0, 1];        
    } else {
        fibonacciArray = [0, 1]; 
        for (let index = 2; index < n; index++) {
            fibonacciArray.push(fibonacciArray[fibonacciArray.length-2]+fibonacciArray[fibonacciArray.length-1]);
        }
    }

    return fibonacciArray;

    //Return an array of fibonacci numbers starting from 0.

    //Do NOT change any of the code below 👇
}