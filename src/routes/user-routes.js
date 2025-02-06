const express = require("express")
const userRouter = express.Router();
//import controller
const userController = require("../controllers/user-controller")
//import middlewares
const {authCheck} = require("../middlewares/auth-middlewares")

// @endpoint http://localhost:8000/api/users

userRouter.get('/users',authCheck,userController.listUsers);
userRouter.patch('/user/update-role',authCheck,userController.updateRole);
userRouter.delete('/user/:id',authCheck,userController.deleteUser)

module.exports = userRouter