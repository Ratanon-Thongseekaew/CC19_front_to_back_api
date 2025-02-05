const handleErrors = (err,req,res,next) =>{
//code 
console.log("step3 create error")
res
.status(err.statusCode || 500)
.json({message: err.message || "something is wrong!!"});

};
module.exports =handleErrors;