const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/', productsController.product);


module.exports = router;