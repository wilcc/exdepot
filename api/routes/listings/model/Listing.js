const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();

const ListingSchema = new mongoose.Schema({
  //remove ListingID at some point this is redundant ID thought it might be easier for the users to view a different userFriendly ID
  //be careful removing may cause avalanche of bugs in frontend
  
  //end of redundant id
  ownerUserID: {
    type: String,
  },
  ownerUserName:{
    type: String,
  },
  categoryID: {
    type: String,
    default: ''
  },
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