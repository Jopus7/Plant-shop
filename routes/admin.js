const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();



router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts);
router.get('/edit-product/:productId', adminController.getEditProduct)
router.post('/add-product', adminController.postAddProduct);
router.post('/edit-product')


module.exports = router;