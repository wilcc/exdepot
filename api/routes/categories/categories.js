const express = require('express');
const router = express.Router();
const CategoryController = require('./controller/categoryController');
const authVerify = require('../../middleware/authVerify');

router.post('/createCategory', CategoryController.createCategory);
module.exports = router;
