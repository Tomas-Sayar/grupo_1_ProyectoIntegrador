const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/productsController');
<<<<<<< HEAD
const logDBMiddleware = require("../middlewares/logDBMiddleware")

=======
const multerMiddleware = require('../middlewares/multerMiddleware.js');
>>>>>>> 31ff2fd8c091da5d3dbcb8c4f5de1dae5f3fb94c
//###########################  MULTER ##############################//




//########################### RUTAS ##############################//

// GET ALL PRODUCTS
router.get('/', productsController.index);

// CREATE ONE PRODUCT
router.get('/create', productsController.create);
<<<<<<< HEAD
router.post('/create', updatefile.single('product-image'), logDBMiddleware, productsController.store);
=======
router.post('/create', multerMiddleware('products').single('product-image'), productsController.store);
>>>>>>> 31ff2fd8c091da5d3dbcb8c4f5de1dae5f3fb94c

// GET ONE PRODUCT
router.get('/:id', productsController.detail);

// EDIT ONE PRODUCT
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', multerMiddleware('products').single('product-image'), productsController.update);

//DELETE PRODUCT
router.delete('/delete/:id', productsController.delete);


module.exports = router;
