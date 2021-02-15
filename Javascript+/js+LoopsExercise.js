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