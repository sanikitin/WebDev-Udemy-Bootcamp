const express = require("express"); //Подключение Express
const app = express();
const dotenv = require("dotenv").config(); // Подключение пакета для работы с env файлом
const bodyParser = require("body-parser"); // Подключение парсера HTML
const https = require("https"); // Подключение нативного пакета для запроса на сторонний сервер

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // Установка настроек парсера

// Отправка ответа при запуске стартовой страницы
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

// Получение данных от пользователя
app.post("/", function (req, res) {
// Константы данных
    const city = req.body.cityName;
    const appID = process.env.API_KEY;
    const units = "metric";

// Получение данных по API
    const openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appID + "&units=" + units;
    https.get(openWeatherUrl, function (response) {
// Проверка статуса запроса
        console.log(response.statusCode);
// Обработка данных в JSON
        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temperature = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            const realFeel = weatherData.main.feels_like;
// Вывод полученных данных
            res.write("<h1>Temperature in " + city + " " + temperature + ",but feels like " + realFeel + ". </h1>");
            res.write("<h1>Weather in the city " + description + ". </h1>");
            res.write("<img src=" + imgUrl + ">");
            res.send();
        });
    });
});

// Проверка работы сервера
app.listen(port, function () {
    console.log("Server is running on port 3000.");
});