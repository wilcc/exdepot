const WatchList = require('../model/Watchlist');
const Listing = require('../../listings/model/Listing');

module.exports = {
  toggle: async (req, res) => {
    let found = await WatchList.find({
      listingID: req.body.listingID
    })
    if(found.length > 0){
      let myWatchList = await WatchList.deleteOne({
        listingID : req.body.listingID
      })
      res.status(200).json({ myWatchList });
    } else {
      let newWatchList = await new WatchList({
        ownerUserID: req.user.id,
        listingID: req.body.listingID,
      });
      let myWatchList = newWatchList.save();
      res.status(200).json({ myWatchList });
    }
  },
  fetchWatchList: async (req, res) => {
    let myWatchList = await WatchList.find({ ownerUserID: req.user.id });
    let listingIds = myWatchList.map((item) => item.listingID);

    let listingMap = {};
    let listingItems = await Listing.find({ _id: { $in: listingIds } });
    for (const item of listingItems) {
      listingMap[item._id] = item;
    }
    for (let i = 0; i < myWatchList.length; i++) {
      myWatchList[i].item = listingMap[myWatchList[i].listingID];
      myWatchList[i] = Object.assign({}, myWatchList[i]._doc, {
        item: listingMap[myWatchList[i].listingID],
      });

    }
    res.status(200).json({ myWatchList });
  },
};
