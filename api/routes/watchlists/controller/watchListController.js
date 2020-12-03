const WatchList = require('../model/Watchlist');
const Listing = require('../../listings/model/Listing')

module.exports = {
  add: async (req, res) => {
    let newWatchList = await new WatchList({
      ownerUserID: req.user.id,
      listingID: req.body.listingID,
    });
    let savedWatchList = newWatchList.save();
    res.status(200).json({ savedWatchList });
  },
  fetchWatchList: async (req, res) => {
    let myWatchList = await WatchList.find({ ownerUserID: req.user.id });
    res.status(200).json({ myWatchList });
  },
};
