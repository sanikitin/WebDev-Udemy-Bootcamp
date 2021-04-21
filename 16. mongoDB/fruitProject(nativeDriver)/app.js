// Вариант подключения к Атлас
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://SiriusIT:<"+DB_KEY+">@cluster0.rqdg0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const dotenv = require("dotenv").config();

// const DB_KEY = process.env.DB_KEY;

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// Подключение к локальному серверу MongoDB - http://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitProject';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    // Элемент для добавления
    // insertDocuments(db, function () {
    //     client.close();
    // });

    // Элемент для получения
    findDocuments(db, function () {
        client.close();
    });
});

// Добавление новых данных и создание коллекции
const insertDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Insert some documents
    collection.insertMany([
        {
            name: "Apple",
            score: 8
        },
        {
            name: "Orange",
            score: 6
        },
        {
            name: "Banana",
            score: 9
        }
    ], function (err, result) {
        assert.equal(err, null); // Проверки на вставку элементов
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}

// Получение элементов
const findDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function (err, fruits) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits)
        callback(fruits);
    });
}

