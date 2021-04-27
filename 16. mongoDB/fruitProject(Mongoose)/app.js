// Подключение mongoose в 2 строки

const mongodb = require("mongodb");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/fruitDB",
  { useUnifiedTopology: true },
  { useNewUrlParser: true }
);

// Создание структуры для данных
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

// Создание модели для преобразования её в коллекцию
const Fruit = mongoose.model("Fruit", fruitSchema);

// Создание нового элемента на основе модели выше, чтобы новый элемент придерживался схемы
// const fruit = new Fruit({
//   name: "Banana",
//   rating: 5,
//   review: "Very Good",
// });

// const fruit = new Fruit({
//   name: "Orange",
//   rating: 8,
//   review: "Excellent",
// });

// const fruit = new Fruit({
//   name: "Kiwi",
//   rating: 9,
//   review: "Nice",
// });

// Сохранение элемента
// fruit.save();

// Вывод элементов коллекции
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    console.log(fruits);
    // Закрытие соединения с базой данных после выполнения операций
    mongoose.connection.close();
  }
});

// Обновление

// Fruit.updateOne({ id: 1 }, { name: "Limon" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success");
//   }
// });

// Удаление

// Fruit.deleteOne({ name: "Apple" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success");
//   }
// });

// Challenge, new Schema and collections, humans - name and age, 1 element - John 37

// const peopleSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// const People = mongoose.model("People", peopleSchema);

// const people = new People({
//     name: "John",
//     age: 37
// });

// people.save();

// Next Challenge, need read and write only name of fruits in DB
// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(fruits);
//     fruits.forEach(function (fruit) {
//       console.log(fruit.name);
//     });
//   }
// });

// Next Challenge, need delete element
// Fruit.deleteOne({ id: "6080757d913c1e69a0f0c8a0" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success");
//   }
// });
