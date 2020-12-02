const Listing = require('../model/Listing');
const ListingBid = require('../../ListingBid/model/ListingBid');
const AWS = require('aws-sdk');

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
    console.log(req)
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
      categoryID,
      images: [...imageListing],
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
