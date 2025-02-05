const prisma = require("../configs/prisma")
const createErrors = require("../utils/create-error")
const bcrypt = require("bcryptjs")
exports.register = async (req,res,next)=>{
    //code
    try {
        //code 
        //step 1 req.body 
        const {email,firstname,lastname,password,confirmPassword }= req.body
        //step 2 validate 
        //step 3 check already 
        const checkEmail = await prisma.profile.findFirst({
         where:{
             email:email,
         },
        });
        console.log(checkEmail);
        if(checkEmail){
            return createErrors(400, "email is already exist! ")
        }
        //step 4 encrypt bcrypt
        // const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password,10)
        console.log(hashedPassword)
        //step 5 insert to DB 
        const profile = await prisma.profile.create({
            data:{
                email:email,
                firstname:firstname,
                lastname:lastname,
                password:hashedPassword
            }
        })
        //step 6 reqsponse
    res.json({message: "Register Success"})
    } catch (error) {
        console.log("step2 catch error")
        next(error)
    }
}

exports.login = (req,res,next)=>{
    //code
try {
    console.log(aaaaaaaa)
    res.json({message: "hello Login"})
} catch (error) {
    next(error)
}

}


