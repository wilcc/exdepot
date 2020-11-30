const express = require('express');
const router = express.Router();
const listingBidController = require('./controller/listingbidController');


router.post('/createbid', listingBidController.createBid);
router.get('/fetchAllBids', listingBidController.fetchAllBids);
router.put('/acceptbid', listingBidController.acceptBid);
router.put('/cancelbid', listingBidController.cancelBid);
router.put('/declinebid', listingBidController.declineBid);