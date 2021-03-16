const express = require ("express");
const app = express();
const bodyParser = require ("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator", function (req, res) {

    let weight = Number(req.body.weight);
    let height = Number(req.body.height);    

    let bmi = Math.round(weight / Math.pow(height, 2) * 10000);
    
    if (bmi<18.5) {
        res.send("Your BMI is " + bmi + ", so you are underweight.");
    } if (bmi>24.9) {
        res.send("Your BMI is " + bmi + ", so you are overweight.");
    } else {
        res.send("Your BMI is " + bmi + ", so you have a normal weight.");
    }    
});

app.listen(port, function () {
    console.log("Server started on port 3000");
});