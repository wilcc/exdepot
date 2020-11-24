const User = require('../model/User');
const bcrypt = require('bcryptjs');

async function createUser(user) {
  let newUser = await new User({
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
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
      return `${Object.keys(error.keyValue)[0]} Already Exist `
    } else {
      return error.message;
    }
  }


module.exports={
    createUser,
    hashPassword,
    errorHandler,
}