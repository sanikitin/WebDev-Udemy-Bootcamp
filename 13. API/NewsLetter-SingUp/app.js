const express = require("express"); //Подключение express
const bodyParser = require("body-parser"); // Подключение парсера html
const request = require("request"); // Подключение отправки данных на сторонний сервер
const dotenv = require("dotenv").config(); //Подключение для работы с env
const https = require("https"); // Подключение нативного пакета для запроса на сторонний сервер

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extends: true }));
app.use(express.static("public")); // Подключение локальных файлов стилей и картинок

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/singup.html");
});

app.post("/", function (req, res) {
    // Сбор данных пользователя
    const firstName = req.body.firstName;
    const secondName = req.body.secondName;
    const email = req.body.email;
    // Запрос с env
    const API_KEY = process.env.API_KEY;
    const Audience_ID = process.env.Audience_ID;
    // Подготовка объекта для сервиса MailChimp
    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: secondName
            }
        }]
    }
    // Уменьшение объекта в JSON
    const jsonData = JSON.stringify(data);
    // Создание ссылки на коллекцию маилов
    const url = "https://us1.api.mailchimp.com/3.0/lists/YourAudience_ID";
    // Параметры отправки данных в сервис
    const options = {
        method: "POST",
        auth: "sai233:YourAPI_KEY"
    }
    // Отправка данных в сервис
    const request = https.request(url, options, function (response) {
        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })

        if (response.statusCode===200) {
            res.sendFile(__dirname+"/success.html");
        } else {
            res.sendFile(__dirname+"/failure.html");
        }
    })

    request.write(jsonData);
    request.end();
});

app.post("/failure", function (req, res) {
    res.redirect("/");
});

// Порт для Heroku и для локальной проверки
app.listen(process.env.PORT || port, function () {
    console.log("Server is running on port 3000");
});