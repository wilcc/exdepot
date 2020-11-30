const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('main /api/ route works as expected');
});

module.exports = router;
