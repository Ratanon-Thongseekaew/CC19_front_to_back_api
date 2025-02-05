const express = require("express")
const Authrouter = express.Router()
const authControllers = require("../controllers/auth-controller")

Authrouter.post('/register', authControllers.register)
Authrouter.post('/login', authControllers.login)

//export
module.exports = Authrouter