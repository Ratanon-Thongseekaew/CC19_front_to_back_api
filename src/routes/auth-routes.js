const express = require("express")
const Authrouter = express.Router()
const authControllers = require("../controllers/auth-controller")
const{ authCheck } =require("../middlewares/auth-middlewares")
const { validateWithZod, registerSchema, loginSchema } = require("../middlewares/validators")
//middlewares


//endpoint 
Authrouter.post('/register', validateWithZod(registerSchema), authControllers.register);
Authrouter.post('/login',validateWithZod(loginSchema), authControllers.login);
Authrouter.get('/current-user', authCheck ,authControllers.currentUser);
//export
module.exports = Authrouter