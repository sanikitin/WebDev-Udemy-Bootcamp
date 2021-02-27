// In year 365 days, 52 weeks and 12 month. Need output "You have x days, y weeks and z months left". Life is 90 years. 

function lifeInWeeks(age) {

    /************Don't change the code above************/

    let ageRemaining = 90 - age;

    let x = ageRemaining * 365;
    let y = ageRemaining * 52;
    let z = ageRemaining * 12;

    console.log("You have " + x + " days, " + y + " weeks, and " + z + " months left.");

    /*************Don't change the code below**********/
}