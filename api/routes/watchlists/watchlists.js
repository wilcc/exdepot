const express = require('express');
const router = express.Router();
const watchListController = require('./controller/watchListController');


// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
//   });
router.get('/',watchListController.fetchWatchList)
router.post('/add', watchListController.add)








module.exports = router;
