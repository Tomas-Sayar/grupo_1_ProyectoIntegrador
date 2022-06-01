const express = require('express');
const router = express.Router();


const productsController = require('../controllers/productsController');


// GET ALL PRODUCTS
//router.get('/', productsController.index);

// CREATE ONE PRODUCT
router.get('/create', productsController.create);
router.post('/create', productsController.store);

// GET ONE PRODUCT
router.get('/:id/', productsController.detail);


module.exports = router;
