const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/productsController');
const multerMiddleware = require('../middlewares/multerMiddleware.js');


//########################### RUTAS ##############################//

// GET ALL PRODUCTS
router.get('/', productsController.list);

// CREATE ONE PRODUCT
router.get('/create', productsController.create);
router.post('/create', multerMiddleware('products').single('product-image'), productsController.store);

// GET ONE PRODUCT
router.get('/:id', productsController.detail);

// EDIT ONE PRODUCT
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', multerMiddleware('products').single('image'), productsController.update);

//DELETE PRODUCT
router.delete('/delete/:id', productsController.destroy);


module.exports = router;
