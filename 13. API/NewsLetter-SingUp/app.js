const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

const port = 3000;

app.use(bodyParser.urlencoded({extends:true}));

app.listen(port, function (port) {
    console.log("Server is running on port 3000");
})