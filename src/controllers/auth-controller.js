const createErrors = require("../utils/create-error")

exports.register = (req,res,next)=>{
    //code
    try {
        //code 
        //step 1 req.body 
        const {email,firstname,lastname,password,confirmPassword }= req.body
        //step 2 validate 
        if(!email){
            return createErrors (400, "email is required")
        }
        if(!firstname){
            return createErrors (400, "firstname is required")
        }
        //step 3 check already 
        //step 4 encrypt bcrypt
        //step 5 insert to DB 
        //step 6 reqsponse
    res.json({message: "hello, register"})
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


