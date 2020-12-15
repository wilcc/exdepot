const Category = require('../model/Category');
const User = require('../../users/model/User');
const Listing = require('../../listings/model/Listing');
const ListingBid = require('../../ListingBid/model/ListingBid');
const AWS = require('aws-sdk');
module.exports = {
  createCategory: async (req, res) => {
    try {
      const { CategoryName, Description, image } = req.body;

      let compareFirstWithDB = await Category.findOne({
        CategoryName: CategoryName,
      });
      if (compareFirstWithDB) {
        res.status(200).json({ message: 'Category Name already exists' });
      }

      let newCategory = await new Category({
        CategoryName: CategoryName,
        Description: Description,
        image: image,
      });

      await newCategory.save();
      res.status(200).json({
        message: 'Successfully Created New Category',
        details: newCategory,
      });
    } catch (err) {
      console.log('error occurred in backend createCategory controller:', err);
    }
  },
  fetchallCategories: async (req, res) => {
    try {
      let fetchallCategories = await Category.find();
      res.status(200).json({
        fetchallCategories,
      });
    } catch (err) {
      console.log(err);
    }
  },
  fetcpopularcategoriesfour: async (req, res) => {
    try{
      let sortedCategory = await Category.find().sort({bidCount: -1})
      res.status(200).json({sortedCategory})

    }catch(err){
      res.status(400).json({err})
  }
}
}