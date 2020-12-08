const Message = require('../model/Message');
const moment = require('moment');
const now = moment();

module.exports = {
  createMessage: async (req, res) => {
    let savedMessage = await Message.findOne({
      $or: [
        {
          user1ID: req.body.user1ID,
          user2ID: req.body.user2ID,
        },
        {
          user1ID: req.body.user2ID,
          user2ID: req.body.user1ID,
        },
      ],
    });
    if (savedMessage) {
      res.status(200).json({ savedMessage });
    } else {
      let newMessage = await new Message({
        user1ID: req.body.user1ID,
        user1Name: req.body.user1Name,
        user2ID: req.body.user2ID,
        user2Name: req.body.user2Name,
        messageList: [],
        read_by_user_ids: [],
      });
      savedMessage = await newMessage.save();
      res.status(200).json({ savedMessage });
    }
  },

  postMessage: async (req, res) => {
    let foundMessage = await Message.findOne({
      $or: [
        {
          user1ID: req.body.user1ID,
          user2ID: req.body.user2ID,
        },
        {
          user1ID: req.body.user2ID,
          user2ID: req.body.user1ID,
        },
      ],
    });
    let newMessage = {
      sender_user_id: req.body.userID,
      msg_text: req.body.text,
      date_created: now.format('dddd, MMMM Do YYYY, h:mm:ss a'),
    };

    console.log(foundMessage);
    foundMessage.messageList.push(newMessage)
    foundMessage.read_by_user_ids.push(req.body.userID)
    await foundMessage.save()
    res.status(200).json({ foundMessage });
  },

  fetchMessage : async (req,res)=>{
    let foundMessage = await Message.find({
        $or: [
          {
            user1ID: req.body.user1ID,
          },
          {
            user2ID: req.body.user1ID,
          },
        ],
      });
    res.status(200).json({ foundMessage });

  }
};
