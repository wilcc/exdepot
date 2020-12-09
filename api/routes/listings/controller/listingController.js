const Listing = require('../model/Listing');
const ListingBid = require('../../ListingBid/model/ListingBid');
const AWS = require('aws-sdk');

module.exports = {
  fetchAll: async (req, res) => {
    let allListings = await Listing.find();

    res.status(200).json({allListings})
  },
  fetchOne: async (req, res) => {
    let oneListing = await Listing.findOne({ _id: req.params.listingID });
    res.status(200).json({oneListing})
  },
  fetchOwnerListing: async (req, res) => {
    let ownerListing = await Listing.find({ ownerUserID: req.user.id });

    
    let listingIds = ownerListing.map((listing) => listing._id)
    let bids = await ListingBid.find({ListingID: {$in: listingIds}})
    let bidCountLookup = {}
    for( let i = 0; i < bids.length; i++ ){
      let listingId = bids[i].ListingID
      if( listingId in bidCountLookup ){
        bidCountLookup[listingId] += 1;
      }else{
        bidCountLookup[listingId] = 1
      }
    }
    for(let i=0; i < ownerListing.length; i++) {
      let listingId = ownerListing[i]._id
      if( listingId in bidCountLookup ){
        ownerListing[i] = {bidCount: bidCountLookup[listingId], ...ownerListing[i]._doc}
      }else{
        ownerListing[i] = {bidCount: 0, ...ownerListing[i]._doc}
      }
    }

    console.log('Test for ListingList in controller jsondata', ownerListing)
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

    let fileKeys = Object.keys(req.files);
    let imageListing = [];
    for(let i = 0; i < fileKeys.length; i++) {
      let fileRequest = req.files[fileKeys[i]]
      try {
        let s3 = new AWS.S3({
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        })
      let bucketName = 'exdepot-midterm'
      let keyName = `user_${req.user.id}/` + fileRequest.name //'s3_test_1.jpg'
      var objectParams = {
          Bucket: bucketName,
          Key: keyName,
          Body: fileRequest.data,
          ACL: 'public-read'
      };
      var uploadPromise = await s3.putObject(objectParams).promise();

      let urlS3 = `https://${bucketName}.s3.amazonaws.com/${keyName}`
      imageListing.push(urlS3);
      } catch (err) {
        console.log(err)
      }
    }
    let newListing = await new Listing({
      name,
      description,
      exchangeDescription,
      ownerUserID: req.user.id,
      ownerUserName: req.user.userName,
      categoryID,
      images: [...imageListing],
    });
    let savedListing = await newListing.save();
    res.status(200).json({savedListing});
  },
  deleteListing: async (req, res) => {
    let oneListing = await Listing.findOneAndDelete({ _id: req.body.id });
    let oneListingBid = await ListingBid.findOneAndDelete({ ListingID: req.body.id });
    console.log('Onelisting deleted', oneListing);
    res.send(oneListing);
  }
};
