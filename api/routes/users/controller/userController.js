const {
    createUser,
    hashPassword,
    errorHandler,
  } = require('./authHelper');

module.exports = {
    register: async (req, res) => {
      try {
        let newUser = await createUser(req.body);
        let hashedPassword = await hashPassword(newUser.password);
        newUser.password = hashedPassword;
        let savedUser = await newUser.save();
        res.status(200).json({
          message: 'Successfully signed up',
        });
      } catch (error) {
        let errorMessage = await errorHandler(error);
        res.status(409).json({
          message: errorMessage,
        });
      }
    },
  
  };