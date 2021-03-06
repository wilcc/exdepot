const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();

const MessageSchema = new mongoose.Schema({
  user1ID: String, 
  user1Name: String,
  user2ID: String,
  user2Name: String,
  messageList: [
    {
      sender_user_id:String,
      msg_text:String,
      date_created:{
        type: String,
        default: now.format('dddd, MMMM Do YYYY, h:mm:ss a'),
      },
    },
  ],
  read_by_user_ids: [],
  timestamp: {
    type: String,
    default: now.format('dddd, MMMM Do YYYY, h:mm:ss a'),
  },
});

module.exports = mongoose.model('message', MessageSchema);
