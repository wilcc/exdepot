const User = require('../model/User');
const bcrypt = require('bcryptjs');

async function createUser(user) {
  let newUser = await new User({
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    email: user.email,
    password: user.password,
  });
  return newUser;
}

async function hashPassword(password) {
  let genSalt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(password, genSalt);
  return hashedPassword;
}

async function errorHandler(error) {
    if (error.code == 11000) {
      return 'Email & Phone Number Already Exist!';
    } else {
      return error.message;
    }
  }


module.exports={
    createUser,
    hashPassword,
    errorHandler,
}