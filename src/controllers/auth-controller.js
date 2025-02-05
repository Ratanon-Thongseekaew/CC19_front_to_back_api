exports.register = (req,res,next)=>{
    //code
    try {
    res.json({message: "hello, register"})
    } catch (error) {
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


