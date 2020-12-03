const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();


const WatchListSchema = new mongoose.Schema({
    listingID: String,
    ownerUserID: {
      type: String,
    },
    
  });
  
  module.exports = mongoose.model('watchList', WatchListSchema);