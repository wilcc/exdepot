const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();

const CategorySchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    trim: true,
    required: true,
    default: '',
    unique: true,
  },
  Description: {
    type: String,
    trim: true,
    default: '',
  },
  ListingBid: [],
  image: {
    type: String,
    default: 'https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg'
  },
  timestamp: {
    type: String,
    default: now.format('dddd, MMMM Do YYYY, h:mm:ss a'),
  },
});

module.exports = mongoose.model('category', CategorySchema);