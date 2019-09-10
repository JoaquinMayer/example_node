const express = require("express");
const message = require("../components/message/network")
const joaquin = require("../components/joaquin/network")

const routes = function (server) {
    server.use('/message', message)
    server.use('/joaquin', joaquin)
}

module.exports = routes;