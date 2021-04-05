// https://ejs.co/#docs

const express = require("express"); // Подключение Express
const app = express();

const bodyParser = require("body-parser"); // Подключение парсера HTML

const date = require(__dirname+"/date"); // Подключение самодельного модуля даты

const port = 3000;

// let newAdd = ""; // Создаем переменную, чтобы при загрузке сайта не было ошибки о неопределенной переменной, было до массива значений
let newAdds = [];
let workAdds = [];

app.use(bodyParser.urlencoded({ extended: true })); // Установка настроек парсера
app.use(express.static("public")); // Подключение локальных файлов
app.set('view engine', 'ejs'); // Подключение EJS

app.get("/", function (req, res) {

    let day = date.getDate(); // Вызов функции из самодельного модуля

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
    res.render('list', { listTitle: day, newListItems: newAdds }); // Отправка данных для рендера страницы в EJS, добавили отправку нового значения списка дел.
});

app.post("/", function (req, res) {
    let newAdd = req.body.newInput; // Если мы не отправили с сайта запрос, то эта переменная не будет создана и будет ошибка

    if (req.body.list === "Work") { // Условие для загрузки другой страницы с задачами по работе
        workAdds.push(newAdd);
        res.redirect("/work");
    } else {
        newAdds.push(newAdd); // Добавляем элемент в массив, теперь все новые дела хранятся в одном месте
        res.redirect("/") // Перенаправляем запрос, чтобы при первой загрузке здесь создалась пустая переменная и не возникло ошибки, после чего отправялем снова на домашнюю страницу
    }
});

// Создание рендера для запроса нового листа для работы 
app.get("/work", function (req, res) {
    res.render('list', { listTitle: "Work List", newListItems: workAdds });
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.listen(port, function () {
    console.log("Server is running on port " + port);
});