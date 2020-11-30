const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();
const shortid = require('shortid');

const ListingSchema = new mongoose.Schema({
  listingID: {
    type: String,
    required: true,
    default: shortid.generate,
    unique: true,
  },
  ownerUserID: {
    type: String,
  },
  CategoryID: [],
  name: {
    type: String,
    default: 'Name of Listing Item',
  },
  description: {
    type: String,
    default: 'Description of Listing Item',
  },
  exchangeDescription: {
    type: String,
    default: 'What the user wants for the item',
  },
  status: {
    type: String,
    required: true,
    default: 'active',
  },
  images: [],
  timestamp: {
    type: String,
    default: now.format('dddd, MMMM Do YYYY, h:mm:ss a'),
  },
});

module.exports = mongoose.model('listing', ListingSchema);