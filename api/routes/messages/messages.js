const express = require('express');
const router = express.Router();
const messageController = require('./controller/messageController')
const authVerify = require('../../middleware/authVerify')

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
router.post('/createmessage',authVerify.authenticateToken ,messageController.createMessage)
router.put('/sendmessage',authVerify.authenticateToken , messageController.sendMessage)
router.get('/fetchallmessage',authVerify.authenticateToken, messageController.fetchMessage)

  module.exports = router