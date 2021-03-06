const express = require('express');
const router = express.Router();
const {ProductByCategoryId,Products} = require('../controllers/product');
const pagination = require('../middleware/pagination');
const join = require('../middleware/querys');


// @route   GET api/product/:category_id
// @desc    Get product by category_id
router.get('/:category_id',ProductByCategoryId);

// @route   GET api/product/
// @desc    Get products
router.get('/',pagination('products',join),Products);

module.exports = router;