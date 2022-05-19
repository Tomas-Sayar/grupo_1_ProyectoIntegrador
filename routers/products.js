const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productsController');


//router.get('/', productsController.product);

router.get('/create', productsController.productCreate);

router.get('/:id/', productsController.detail);



module.exports = router;
