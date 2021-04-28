// https://ejs.co/#docs

const express = require("express"); // Подключение Express
const app = express();
const bodyParser = require("body-parser"); // Подключение парсера HTML
const mongoose = require("mongoose"); // Подключение mongodb

mongoose.connect("mongodb://localhost:27017/todolistDB", {
  useNewUrlParser: true,
}); // Создание базы данных

const itemsSchema = {
  name: String,
}; // Создание схемы базы данных

const Item = mongoose.model("Item", itemsSchema); // Создание модели

const item1 = new Item({
  name: "Create",
});

const item2 = new Item({
  name: "Update",
});

const item3 = new Item({
  name: "Delete",
});

const defaultItem = [item1, item2, item3]; // Создание пунктов по умолчанию и массива из них

Item.insertMany(defaultItem, function (err) {
  console.log(err);
}); // Добавление массива в бд

const port = 3000;

let newAdds = [];
let workAdds = [];

app.use(bodyParser.urlencoded({ extended: true })); // Установка настроек парсера
app.use(express.static("public")); // Подключение локальных файлов
app.set("view engine", "ejs"); // Подключение EJS

app.get("/", function (req, res) {
  Item.find({}, function (err, foundItems) {
    if (err) {
      console.log(err);
    } else {
      res.render("list", { listTitle: "Today", newListItems: foundItems }); // Отправка данных для рендера страницы в EJS, добавили отправку нового значения списка дел.
    }
  }); // Вывод результатов из бд
});

app.post("/", function (req, res) {
  let newAdd = req.body.newInput; // Если мы не отправили с сайта запрос, то эта переменная не будет создана и будет ошибка

  if (req.body.list === "Work") {
    // Условие для загрузки другой страницы с задачами по работе
    workAdds.push(newAdd);
    res.redirect("/work");
  } else {
    newAdds.push(newAdd); // Добавляем элемент в массив, теперь все новые дела хранятся в одном месте
    res.redirect("/"); // Перенаправляем запрос, чтобы при первой загрузке здесь создалась пустая переменная и не возникло ошибки, после чего отправялем снова на домашнюю страницу
  }
});

// Создание рендера для запроса нового листа для работы
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workAdds });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(port, function () {
  console.log("Server is running on port " + port);
});
