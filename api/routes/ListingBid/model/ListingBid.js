const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();

const ListingBidSchema = new mongoose.Schema({
  userID: {
    type: String,
  },
  ListingID: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    default: 'active',
  },
  items_bid: [],
  timestamp: {
    type: String,
    default: now.format('dddd, MMMM Do YYYY, h:mm:ss a'),
  },
});

module.exports = mongoose.model('listingBid', ListingBidSchema);