const express = require("express");
const bodyParser = require("body-parser");

const db = require("./db");

db("mongodb://localhost:27017/telegrom")

const router = require("./network/routes");

var app = express();

app.use(bodyParser.json());

router(app);

app.use("/app", express.static('public'))

app.listen(3000);

console.log("http://localhost:3000");