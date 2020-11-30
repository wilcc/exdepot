const express = require('express');
const router = express.Router();
const listingController = require('./controller/listingController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/fetchall', listingController.fetchAll)
router.get('/fetchone', listingController.fetchOne)
router.get('/fetchownerlisting', listingController.fetchOwnerListing)
router.post('/createListing', listingController.createListing);
router.delete('/deleteListing', listingController.deleteListing);
// router.post('/login', userController.login);
module.exports = router;
