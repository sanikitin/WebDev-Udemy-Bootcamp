// https://ejs.co/#docs

const express = require("express"); // Подключение Express
const app = express();

const bodyParser = require("body-parser"); // Подключение парсера HTML

const port = 3000;

// let newAdd = ""; // Создаем переменную, чтобы при загрузке сайта не было ошибки о неопределенной переменной, было до массива значений
let newAdds = [];

app.use(bodyParser.urlencoded({ extended: true })); // Установка настроек парсера
app.set('view engine', 'ejs'); // Подключение EJS

app.get("/", function (req, res) {

    let today = new Date();
    let options = {
        weekday: 'long', 
        month: 'long', 
        day: 'numeric'
    }

    let day = today.toLocaleDateString('en-US', options); // Форматирование даты
    // Устаревший способ, выше новый способ с помощью JS
    // let currentDay = today.getDay();
    // let day = "";

    // switch (currentDay) {
    //     case 1:
    //         day = "Monday"
    //         break;

    //     case 2:
    //         day = "Tuesday"
    //         break;
    //     case 3:
    //         day = "Wednesday"
    //         break;
    //     case 4:
    //         day = "Thursday"
    //         break;
    //     case 5:
    //         day = "Friday"
    //         break;
    //     case 6:
    //         day = "Saturday"
    //         break;
    //     case 0:
    //         day = "Sunday"
    //         break;
    //     default:
    //         console.log("Error. Value is not correct - " + currentDay);
    // }
    res.render('list', { dayToday: day, newListItems: newAdds }); // Отправка данных для рендера страницы в EJS, добавили отправку нового значения списка дел.
});

app.post("/", function (req, res) {
    let newAdd = req.body.newInput; // Если мы не отправили с сайта запрос, то эта переменная не будет создана и будет ошибка
    newAdds.push(newAdd); // Добавляем элемент в массив, теперь все новые дела хранятся в одном месте
    res.redirect("/") // Перенаправляем запрос, чтобы при первой загрузке здесь создалась пустая переменная и не возникло ошибки, после чего отправялем снова на домашнюю страницу
});

app.listen(port, function () {
    console.log("Server is running on port " + port);
});