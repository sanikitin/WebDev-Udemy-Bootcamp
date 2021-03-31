// https://ejs.co/#docs

const express = require("express"); // Подключение Express
const app = express();

const bodyParser = require("body-parser"); // Подключение парсера HTML

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // Установка настроек парсера
app.set('view engine', 'ejs'); // Подключение EJS

app.get("/", function (req, res) {

    let today = new Date();
    let currentDay = today.getDay();
    let day = "";

    switch (currentDay) {
        case 1:
            day = "Monday"
            break;

        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        case 0:
            day = "Sunday"
            break;
        default:
            console.log("Error. Value is not correct - " + currentDay);
    }
    res.render('list', { dayToday: day }); // Отправка данных для рендера страницы в EJS
});

app.listen(port, function () {
    console.log("Server is running on port " + port);
});