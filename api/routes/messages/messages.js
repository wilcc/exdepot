const express = require('express');
const router = express.Router();
const messageController = require('./controller/messageController')
const authVerify = require('../../middleware/authVerify')

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
router.post('/createmessage', messageController.createMessage)
router.put('/sendmessage', messageController.postMessage)
router.post('/fetchallmessage',messageController.fetchMessage)

  module.exports = router