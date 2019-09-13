const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller")

router.post("/", function (req, res) {
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(e => {
            response.error(req, res, "Internal error", 500, e)
        })
})

router.get("/", function (req, res) {
    controller.getUsers()
        .then(usersList => {
            response.success(req, res, usersList, 200)
        })
        .catch(e => {
            response.error(req, res, "Error inesperado", 500)
        })
})

module.exports = router