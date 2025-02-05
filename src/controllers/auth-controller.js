const prisma = require("../configs/prisma")
const createErrors = require("../utils/create-error")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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

exports.login = async(req,res,next)=>{
    //code
try {
    //step 1 : Req.body 
    const {email, password} = req.body;
    //step 2 : Check email and password 
    const profile = await prisma.profile.findFirst({
        where:{
            email:email,
        },
    });
    if(!profile){
        return createErrors(400,"email or password is invalid")
    }
    const isMatch = bcrypt.compareSync(password,profile.password)
    console.log(isMatch)
    if(!isMatch){
        return createErrors(400,"email or password is invalid")
    }
    // console.log(profile);
    //step 3 : Generate Token
    const payload = {
        id: profile.id,
        email:profile.email,
        firstname:profile.firstname,
        lastname: profile.lastname,
        role:profile.role,
    };
    const token = jwt.sign(payload,process.env.SECRET,{
        expiresIn: "1d",
    })
    //Step 4 : Response
    res.json({message: "Login Sucess",
        payload:payload,
        token:token
    })
} catch (error) {
    next(error)
}

}

exports.currentUser = async (req,res,next)=>{
//code
try {
    res.json({message: "Hello,current User"})
} catch (error) {
next(error)    
}

};



