const express = require("express")
const Authrouter = express.Router()
const authControllers = require("../controllers/auth-controller")
const { validateWithZod, registerSchema, loginSchema } = require("../middlewares/validators")



//endpoint 
Authrouter.post('/register', validateWithZod(registerSchema), authControllers.register)
Authrouter.post('/login',validateWithZod(loginSchema), authControllers.login)

//export
module.exports = Authrouter