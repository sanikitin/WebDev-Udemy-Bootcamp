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

const port = 3000;

let newAdds = [];
let workAdds = [];

app.use(bodyParser.urlencoded({ extended: true })); // Установка настроек парсера
app.use(express.static("public")); // Подключение локальных файлов
app.set("view engine", "ejs"); // Подключение EJS

app.get("/", function (req, res) {
  Item.find({}, function (err, foundItems) {
    if (foundItems.length===0) { // Проверка на пустой список
      Item.insertMany(defaultItem, function (err) { // Вставка элементов по умолчанию
        console.log(err);
      }); // Добавление массива в бд
      res.redirect("/"); // Отрисовка странциы снова для отображения элементов
    } else {
      res.render("list", { listTitle: "Today", newListItems: foundItems }); // Отправка данных для рендера страницы в EJS, добавили отправку нового значения списка дел.
    }
  }); // Вывод результатов из бд
});

app.post("/", function (req, res) {
  const itemName = req.body.newInput; // Захват нового элемента
  
  const newItem = new Item({ // Создание нового объекта в бд
    name: itemName,
  });

  newItem.save(); // Сохранение в бд
  res.redirect("/"); // Отрисовка странциы снова для отображения элементов
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
