const express = require('express');
const router = express.Router();
const watchListController = require('./controller/watchListController');
const authVerify = require('../../middleware/authVerify');



// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
//   });
router.get('/',authVerify.authenticateToken,watchListController.fetchWatchList)
router.post('/toggle',authVerify.authenticateToken, watchListController.toggle)








module.exports = router;
