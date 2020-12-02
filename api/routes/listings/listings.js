const express = require('express');
const router = express.Router();
const listingController = require('./controller/listingController');
const authVerify = require('../../middleware/authVerify');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/fetchall', authVerify.authenticateToken, listingController.fetchAll)
router.get('/fetchone', authVerify.authenticateToken, listingController.fetchOne)
router.get('/fetchownerlisting', authVerify.authenticateToken, listingController.fetchOwnerListing)
router.get(`/fetchcategorylisting/:categoryID`,authVerify.authenticateToken,listingController.fetchCategoryListing)
router.post('/createListing', authVerify.authenticateToken, listingController.createListing);
router.delete('/deleteListing', authVerify.authenticateToken, listingController.deleteListing);
// router.post('/login', userController.login);
module.exports = router;
