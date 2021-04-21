// Подключение mongoose в 2 строки

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitDB", { useUnifiedTopology: true }, { useNewUrlParser: true });

// Создание структуры для данных 
// const fruitSchema = new mongoose.Schema({
//     name: String,
//     rating: Number,
//     review: String
// });

// Создание модели для преобразования её в коллекцию
// const Fruit = mongoose.model("Fruit", fruitSchema);

// Создание нового элемента на основе модели выше, чтобы новый элемент придерживался схемы
// const fruit = new Fruit ({
//     name: "Apple",
//     rating: 7,
//     review: "Good"
// });

// Сохранение элемента
// fruit.save();

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