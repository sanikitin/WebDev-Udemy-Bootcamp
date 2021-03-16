const express = require ("express");
const app = express();
const bodyParser = require ("body-parser");
const port = 3000;

// Подключаю bodyParser для обработки HTTP запроса и вычленения из него данных.

app.use(bodyParser.urlencoded({extended: true})); // режим расшифровки

app.listen(port, function () {
    console.log("Server started on port 3000");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");
});

// Вывод данных из body
// console.log(req.body);
// Также, можно вывести конкретные значения из body. Например: значение input с name = num1
// console.log(req.body.num1);

app.post("/", function (req, res) {

    let num1 = req.body.num1;
    let num2 = req.body.num2;

    let result = Number(num1) + Number(num2);

    res.send("Result of the calculation is "+result);    
});

// __dirname это команда для командной строки, которая выводит путь до текущего файла, что позволяет работать с файлами в нем
// независимо от их местоположения на сервере