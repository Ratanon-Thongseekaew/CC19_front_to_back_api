const { number } = require("zod");
const prisma =require("../configs/prisma")
//1. list all users
//2. update roles
//3. delete user

exports.listUsers = async (req, res, next) => {
  //code
  try {
    // console.log(req.user);
    const users = await prisma.profile.findMany({
      // select: {
      //   id:true,
      //   email: true,
      //   firstname: true,
      //   role: true,
      //   updatedAt: true,
      //   createdAt:true,
      // },
      omit: {
        password: true,
      }
    });
    console.log(users)
    res.json({ message: "hello, List Users",result:users });
  } catch (error) {
    next(error);
  }
};

exports.updateRole = async (req, res, next) => {
  //code
  try {
    const {id, role} = req.body;
    console.log(id,role);
    const updatingUser = await prisma.profile.update({
      where:{
        id: Number(id),
      },
      data: {
        role: role,
      }
    })
    res.json({ message: "hello, Update Role" });
  } catch (error) {
    next(error);
  }
};
exports.deleteUser = async (req, res, next) => {
  //code
  try {
    res.json({ message: "hello, delete user" });
  } catch (error) { 
    next(error);
  }
};
