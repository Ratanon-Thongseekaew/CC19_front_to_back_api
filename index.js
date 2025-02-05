const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const app =express();



//middlewares
app.use(cors()); // allow cross domain connection
app.use(morgan("dev")); // show log on terminal
app.use(express.json()); //for reading JSON


//start server
const PORT = 8000
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))