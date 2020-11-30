const ListingBid = require('../model/ListingBid');
const Listing = require('../../listings/model/Listing');

module.exports = {
  createBid: async (req, res) => {
    let currentListing = await Listing.findOne({ listingID: req.body.id });
    
    let biddingOnCurrentListing = await Listing.findOne({ listingID: req.body.listingID });
    
    let newListingBid = await new ListingBid ({
      bidderUserID: req.user._id,
      ListingID: biddingOnCurrentListing.listingID,
      ownerUserID: biddingOnCurrentListing.ownerUserID,
      status: 'active',
      items_bid: this.items_bid.push(currentListing.listingID)
    });

    newListingBid.save();
    console.log('saved NewListingBid', newListingBid);
  },
  fetchAllBids: async (req, res) => {
    let allListingBidByOwner = await ListingBid.find({ ownerUserID: req.user.id });
    res.send(allListingBidByOwner);
  },
  acceptBid: async (req, res) => {
    let currentListingBid = await ListingBid.findOne({ listingID: req.body.id });
    
    if (currentListingBid.ownerUserID === req.user.id 
        && currentListingBid.status === 'active'
        && currentListingBid.items_bid.length) {
          let acceptedBid = currentListingBid;
          acceptedBid.status = 'accepted';
          acceptedBid.save();
          res.send(acceptedBid);
    }
  },
  cancelBid: async (req, res) => {
    let currentListingBid = await ListingBid.findOne({ listingID: req.body.id });
    currentListingBid.status = 'canceled';
    currentListingBid.save();
    res.send(currentListingBid);
  }
}