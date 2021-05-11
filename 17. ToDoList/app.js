// https://ejs.co/#docs

const express = require("express"); // Подключение Express
const app = express();
const bodyParser = require("body-parser"); // Подключение парсера HTML
const mongoose = require("mongoose"); // Подключение mongodb

mongoose.connect("mongodb+srv://admin-sergey:password@cluster0.gqtnz.mongodb.net/todolistDB", {
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

const listSchema = {
  name: String,
  items: [itemsSchema]
} // Создание нового документа для новой маршрута

const List = mongoose.model("List", listSchema); // создание модели по новому документу


let newAdds = [];
let workAdds = [];

app.use(bodyParser.urlencoded({ extended: true })); // Установка настроек парсера
app.use(express.static("public")); // Подключение локальных файлов
app.set("view engine", "ejs"); // Подключение EJS

app.get("/", function (req, res) {
  Item.find({}, function (err, foundItems) {
    if (foundItems.length === 0) { // Проверка на пустой список
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
  const listName = req.body.listName;

  const newItem = new Item({ // Создание нового объекта в бд
    name: itemName,
  });

  if (listName === "Today") {
    newItem.save(); // Сохранение в бд
    res.redirect("/"); // Отрисовка странциы снова для отображения элементов
  } else {
    List.findOne({ name: listName }, function (err, foundList) {
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    })
  }
});

app.post("/delete", function (req, res) {
  const checkItemId = req.body.checkbox; // Захват данных со страницы
  const listName = req.params.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkItemId, function (err) { // с помощью id удаление из базы 
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
        res.redirect("/"); // Отрисовка странциы снова для отображения элементов
      }
    });
  } else {
    List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: checkItemId } } }, function (err, foundList) {
      if (!err) {
        res.redirect("/" + listName);
      }
    });
  }
});

// Создание рендера для запроса нового листа для работы
app.get("/:customNameList", function (req, res) {
  const customNameList = _.capitalize(req.params.customNameList);
  // Поиск уже существующих листов
  List.findOne({ name: customNameList }, function (err, foundList) {
    if (!err) {
      if (!foundList) {
        // Создание нового листа
        // Новый список для нового маршрута
        const list = new List({
          name: customNameList,
          items: defaultItem
        });
        list.save();
        res.redirect("/" + customNameList);
      } else {
        // Показ найденного листа
        res.render("list", { listTitle: foundList.name, newListItems: foundList.items })
      }
    }
  })


});

app.get("/about", function (req, res) {
  res.render("about");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
