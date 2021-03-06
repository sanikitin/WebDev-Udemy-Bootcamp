//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator (weight, height) {
    let bmi = Math.round(weight / Math.pow(height, 2) * 10000);
    if (bmi<18.5) {
        return "Your BMI is " + bmi + ", so you are underweight."
    } if (bmi>24.9) {
        return "Your BMI is " + bmi + ", so you are overweight."
    } else {
        return "Your BMI is " + bmi + ", so you have a normal weight."
    }
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
let bmi = bmiCalculator(65, 1.8);
bmi should equal 20 when it's rounded to the nearest whole number.
*/