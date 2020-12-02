const express = require('express');
const router = express.Router();
const CategoryController = require('./controller/categoryController');
const authVerify = require('../../middleware/authVerify');

router.post('/createOne',authVerify.authenticateToken, CategoryController.createCategory);
router.get('/fetchallcategories',authVerify.authenticateToken, CategoryController.fetchallCategories);
router.get('/fetcpopularcategoriesfour',authVerify.authenticateToken, CategoryController.fetcpopularcategoriesfour);
module.exports = router;
