const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller")

router.post("/", function (req, res) {
    controller.addChat(req.body.users)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(e => {
            response.error(req, res, "Internal error", 500, e)
        })
})

router.get("/:userId", function (req, res) {
    controller.listChats(req.params.userId)
        .then(users => {
            response.success(req, res, users, 200)
        })
        .catch(e => {
            response.error(req, res, "Error inesperado", 500)
        })
})

module.exports = router