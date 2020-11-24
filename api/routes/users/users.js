const express = require('express');
const router = express.Router();
const userController = require('./controller/userController');
const authVerify = require('../../middleware/authVerify');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', userController.register);
router.post('/login', userController.login);
module.exports = router;
