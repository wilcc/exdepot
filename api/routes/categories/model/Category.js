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
  image: {
    type: String,
    default:
      'https://exdepot-midterm.s3.amazonaws.com/defaults/Category_img_default.jpg',
  },
  bidCount: {
    type: Number,
    default: 0,
  },
  timestamp: {
    type: String,
    default: now.format('dddd, MMMM Do YYYY, h:mm:ss a'),
  },
});

module.exports = mongoose.model('category', CategorySchema);
