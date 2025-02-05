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
## step 6 : create routing and controlllers




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
## Step 8: build function named "createError"
```bash
const createErrors = (code,message)=>{
    console.log("step 1 create error")
    const error = new Error(message)
    error.statusCode = code
    throw error;
};

module.exports = createErrors;
```

## Step 9 use Zod for Error Validate

import and call Zod
```bash
const { z } = require("zod")
//test validator
const validateWithZod = ()=> (req,res,next)=>{
try {
    console.log("hello, middlewares")
    next();
} catch (error) {
    next(error);
}
}
//validateWithZod = ()=> (req,res,next) เขียนเพราะจะได้รับ parameters ได้ 
```

Use Zod in router
```bash
Authrouter.post('/register', validateWithZod(), authControllers.register)


```

# Step 9.5 create condition with Zod Validators
/middlewares/validators.js
```bash
const { z, Schema } = require("zod")
//test validator

exports.registerSchema =z.object({
    email: z.string().email(),
    firstname: z.string().min(3, "firstname must contain at least 3 characters"),
    lastname: z.string().min(3,"lastname must contain at least 3 characters"),
    password: z.string().min(6, "password must contain at least 6 characters"),
    confirmPassword:  z.string().min(6, "password must contain at least 6 characters")
}).refine((data)=> data.password === data.confirmPassword,{
    message: "Password Is NOT Matched",
    path: ["confirmPassword"]

})

exports.loginSchema =z.object({
    email: z.string().email(),
    password: z.string().min(6, "password must contain at least 6 characters"),
})

exports.validateWithZod = (schema)=> (req,res,next)=>{
try {
    console.log("hello, middlewares");
    schema.parse(req.body)
    next();
} catch (error) {
    const errMsg = error.errors.map((item)=>item.message)
    const errText = errMsg.join(", ")
    const mergeError = new Error(errText)
    console.log(error.errors)
    next(mergeError);    
}
}
```

## Step 10 : Create Prisma Model

Example: 
```bash

enum Role {
  USER
  ADMIN
}

model Profile {
  id        Int      @id @default(autoincrement())
  firstname String   @db.VarChar(25)
  lastname  String   @db.VarChar(25)
  email     String   @unique
  password  String
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

```

## Step 11 : Migrate your code with databases
```bash
npx prisma migrate dev --name init
```