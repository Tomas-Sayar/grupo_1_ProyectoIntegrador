const express = require('express');

const router = express.Router();
const mainController = require('../controllers/mainController');
const productController = require('../controllers/productController');

router.get('/', mainController.index);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/carrito', mainController.carrito);

router.get('/product', productController.product);


module.exports = router;