const ListingBid = require('../model/ListingBid');
const Listing = require('../../listings/model/Listing');

module.exports = {
  createBid: async (req, res) => {
    let currentListing = await Listing.findOne({ _id: req.body.id });
    let itemsbid = await Listing.find({ _id: {$in: req.body.items_bid }});
    console.log("itemsbid clg", itemsbid)
    let newListingBid = await new ListingBid ({
      bidderUserID: req.user.id,
      ListingID: currentListing._id,
      listing: currentListing,
      ownerUserID: currentListing.ownerUserID,
      status: 'active',
      items_bid: itemsbid,
    });

    newListingBid.save();
    res
      .status(200)
      .json({message: "Successfully created NewListingBid", newListingBid})
  },
  fetchAOwnerBids: async (req, res) => {
    let allListingBidByOwner = await ListingBid.find({ bidderUserID: req.user.id });
    res.status(200).json({ allListingBidByOwner });
  },
  //legacy code commented possible not needed at all but keep it for now
  fetchOtherUsersBidsOnMyListing: async (req, res) => {
    let sellersListingBidsItems = await ListingBid.find({ ownerUserID: req.user.id });
    res.status(200).json({ sellersListingBidsItems });
  },
  acceptBid: async (req, res) => {
    let currentListingBid = await ListingBid.findOne({ _id: req.body._id });
    // console.log("currentListingBid in acceptBid listingbidController", currentListingBid)
    let currentListingAsWell = await Listing.findOne({ _id: req.body.listingID });

    if (currentListingBid.ownerUserID === req.user.id 
        && currentListingBid.status === 'active'
        && currentListingAsWell.status === 'active'
        && currentListingBid.items_bid.length) {
          let acceptedBid = currentListingBid;
          
          let itembidIds = acceptedBid.items_bid.map((element) => element._id)
          console.log('before acceptedBid')
          let bidItems = await Listing.find({ _id: {$in: itembidIds }})
          
          for (let i = 0; i < bidItems.length; i++ ) {
            if(bidItems[i].status !== "active") {

              return res.status(500).json({message: "Bidded item is not available"})
            }
          }

          for (let i = 0; i < bidItems.length; i++ ) {
            bidItems[i].status = "accepted"; 
            bidItems[i].save();
          }

          
          acceptedBid.status = 'accepted';
          // acceptedBid.listing = {status: 'accepted', ...acceptedBid.listing};
          currentListingAsWell.status = 'accepted';
          
          
          acceptedBid.save();
          currentListingAsWell.save();
          let otherBidsUpdateMany = await ListingBid.updateMany({ ListingID: req.body.listingID, ListingID: {$ne: acceptedBid._id } }, {status: "declined"});

          res.status(200).json({acceptedBid});
          console.log('after acceptedBid')
    } else {
      res.status(500).json({ message: "Something is wrong with your accepted item"})
    }
  },
  cancelBid: async (req, res) => {
    let currentListingBid = await ListingBid.findOne({ _id: req.body.id });
    currentListingBid.status = 'canceled';
    currentListingBid.save();
    res.status(200).json({currentListingBid});
  },
  declineBid: async (req, res) => {
    let currentListingBid = await ListingBid.findOne({ _id: req.body.id });
    currentListingBid.status = 'declined';
    currentListingBid.save();
    res.status(200).json({currentListingBid});
  },
  
}