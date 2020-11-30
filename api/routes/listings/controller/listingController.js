const Listing = require('../model/Listing');
const ListingBid = require('../model/ListingBid');

module.exports = {
  fetchAll: async (req, res) => {
    let allListings = await Listing.find();

    res.send(allListings);
  },
  fetchOne: async (req, res) => {
    let oneListing = await Listing.findOne({ listingID: req.body.id });
    console.log(oneListing)
    res.send(oneListing);
  },
  fetchOwnerListing: async (req, res) => {
    let ownerListing = await Listing.find({ ownerUserID: req.user.id });

    res.send(ownerListing);
  },
  createListing: async (req, res) => {
    const {
      name,
      description,
      exchangeDescription,
      ownerUserID,
      categoryID,
      images,
    } = req.body;

    let newListing = await new Listing({
      name,
      description,
      exchangeDescription,
      ownerUserID,
      categoryID,
      images,
    });

    let savedListing = await newListing.save();
    res.send(savedListing);
  },
  deleteListing: async (req, res) => {
    let oneListing = await Listing.findOneAndDelete({ listingId: req.body.id });
    let oneListingBid = await ListingBid.findOneAndDelete({ ListingID: req.body.id });
    console.log('Onelisting deleted', oneListing);
    res.send(oneListing);
  }
};
