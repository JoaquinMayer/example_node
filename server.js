const express = require("express");
const app = express();
const server = require("http").Server(app)

const cors = require("cors")
const bodyParser = require("body-parser");
const socket = require("./socket")
const db = require("./db");

db("mongodb://localhost:27017/telegrom")

const router = require("./network/routes");


app.use(cors())
app.use(bodyParser.json());

socket.connect(server)

router(app);

app.use("/app", express.static('public'))

server.listen(3000, function () {

});


console.log("http://localhost:3000");