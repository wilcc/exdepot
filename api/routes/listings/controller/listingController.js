const Listing = require('../model/Listing');
const ListingBid = require('../../ListingBid/model/ListingBid');

module.exports = {
  fetchAll: async (req, res) => {
    let allListings = await Listing.find();

    res.status(200).json({allListings})
  },
  fetchOne: async (req, res) => {
    let oneListing = await Listing.findOne({ listingID: req.body.id });
    res.status(200).json({oneListing})
  },
  fetchOwnerListing: async (req, res) => {
    let ownerListing = await Listing.find({ ownerUserID: req.user.id });

    res.status(200).json({ownerListing})
  },
  fetchCategoryListing: async (req, res) => {
    let categoryListing = await Listing.find({ categoryID: req.params.categoryID });
    res.status(200).json({categoryListing})
  },
  createListing: async (req, res) => {
    const {
      name,
      description,
      exchangeDescription,
      categoryID,
      images,
    } = req.body;

    let newListing = await new Listing({
      name,
      description,
      exchangeDescription,
      ownerUserID: req.user.id,
      categoryID,
      images,
    });

    let savedListing = await newListing.save();
    res.status(200).json({savedListing});
  },
  deleteListing: async (req, res) => {
    let oneListing = await Listing.findOneAndDelete({ listingId: req.body.id });
    let oneListingBid = await ListingBid.findOneAndDelete({ ListingID: req.body.id });
    console.log('Onelisting deleted', oneListing);
    res.send(oneListing);
  }
};
