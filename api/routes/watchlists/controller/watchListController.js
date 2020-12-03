const WatchList = require('../model/Watchlist');
const Listing = require('../../listings/model/Listing');

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
  // fetchWatchList: async (req, res) => {
  //   let myWatchList = await WatchList.find({ ownerUserID: req.user.id })
  //     .then(async (foundResults) => {
  //       let temp = foundResults.populate({ listingID: foundResults.listingID });
  //       console.log('temp', temp);
  //     })
  //     .catch((err) => console.log(err));
  //   res.status(200).json({ myWatchList });
  // },
};
