
// Нужно вычислить является ли год високосным по правилам:
// - Если делится на 4, то високосный;
// - Но, если делится на 100, то не високосный;
// - Но, если делится на 400, то високосный;
// Ответ должен быть в видах: "Leap Year." or "Not leap year." 

function isLeap(year) {
    /**************Don't change the code above****************/
    let firstCondition = year % 4 === 0;
    let secondCondition = year % 400 === 0;
    let thirdCondition = year % 100 === 0;

    if ((firstCondition === true || secondCondition === true) && thirdCondition !== true) {
        return "Leap year.";
    } else {
        return "Not leap year.";
    }
    /**************Don't change the code below****************/
}