const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const handleErrors = require("./src/middlewares/error")
//routing
const authRouter = require("./src/routes/auth-routes")
const userRouter = require("./src/routes/user-routes")
//middlewares
const app =express();
app.use(cors()); // allow cross domain connection
app.use(morgan("dev")); // show log on terminal
app.use(express.json()); //for reading JSON

//routing
app.use("/api",authRouter)
app.use("/api/",userRouter)

//handleError
app.use(handleErrors)

//start server
const PORT = 8000
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))

