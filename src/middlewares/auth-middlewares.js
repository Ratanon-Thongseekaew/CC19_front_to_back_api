const createErrors = require("../utils/create-error");
const jwt = require("jsonwebtoken");
exports.authCheck = async (req,res,next) =>{
try {
    //code
    //รับ headers จาก CLIENT
    const authorization = req.headers.authorization
    console.log(authorization)
    //CHECK ถ้าไม่มี token
    if(!authorization){
        return createErrors(400, "missing Token")
    }
    const token = authorization.split(" ")[1]
    //verify token
    jwt.verify(token,process.env.SECRET,(err,decode)=>{
    console.log(err)
    console.log(decode)
    if(err){
        return createErrors (401, "Unauthorized")
    }
    req.user = decode
    next()
    })


} catch (error) {
    next(error);
}

}