//1. list all users
//2. update roles
//3. delete user

exports.listUsers = async (req, res, next) => {
  //code
  try {
    res.json({ message: "hello, List Users" });
  } catch (error) {
    next(error);
  }
};

exports.updateRole = async (req, res, next) => {
  //code
  try {
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
