const express = require('express');
const router = express.Router();
const listingBidController = require('./controller/listingbidController');
const authVerify = require('../../middleware/authVerify');

router.post('/createbid', authVerify.authenticateToken, listingBidController.createBid);
router.get('/fetchAllBids', listingBidController.fetchAllBids);
router.put('/acceptbid', authVerify.authenticateToken, listingBidController.acceptBid);
router.put('/cancelbid', authVerify.authenticateToken, listingBidController.cancelBid);
router.put('/declinebid', authVerify.authenticateToken, listingBidController.declineBid);

module.exports = router;