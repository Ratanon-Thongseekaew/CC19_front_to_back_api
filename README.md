# Server
## step1 
```bash 
npm init -y 
```
## step 2 install nodemon 
```bash
npm install express nodemon cors morgan bcryptjs jsonwebtoken zod prisma
```
## step 2.1 install prisma 
```bash
npx prisma init
```

## Step 3 Git 
```bash
git init 
git add . 
git commit - m "your_message"
```
next step 
coy code from your repo
```bash
git remote add origin https://github.com/Ratanon-Thongseekaew/CC19_front_to_back_api.git
git branch -M main
git push -u origin main
```

when update code 
```bash 
git add . 
git commit -m "message"
git push
```

## Step 4 Add Script in package.json
```bash
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
```
## Step 5 Import Middlewares on Javascript  

```bash

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
```

## Step 7 create Error handler
/middleware/error.js
```js
const handleErrors = (err,req,res,next) =>{
//code 
res
.status(err.statusCode || 500)
.json({message: err.message || "something is wrong!!"});

};
module.exports =handleErrors;
```
and use in index.js
```js
//import handleError function
const handleErrors = require("./src/middlewares/error")
//use handleError
app.use(handleErrors)
```
and update your try catch
```js
exports.login = (req,res,next)=>{
    //code
try {
    console.log(aaaaaaaa)
    res.json({message: "hello Login"})
} catch (error) {
    next(error)
}

}
update your code 
```bash
git add . 
git commit -m "your message"
git push
```
