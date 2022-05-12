const express = require('express');

const router = express.Router();
const mainController = require('../controllers/mainController');
const productController = require('../controllers/productController');

router.get('/', mainController.index);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/carrito', mainController.carrito);

<<<<<<< HEAD
router.get('/product', productController.product);
=======
router.get('/productCreate', mainController.productCreate);
>>>>>>> d06980dd60aedc5d48894d69b6acd80d80e91346


module.exports = router;