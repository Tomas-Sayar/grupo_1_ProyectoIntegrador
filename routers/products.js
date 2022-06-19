const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productsController = require('../controllers/productsController');
const logDBMiddleware = require("../middlewares/logDBMiddleware")

//###########################  MULTER ##############################//
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let carpetaDestino = path.join(__dirname, '../public/img/products');
        callback(null, carpetaDestino);
    },
    filename: (req, file, callback) => {
        let imageName = 'product-' + Date.now() + path.extname(file.originalname);
        callback(null, imageName);
    }
})
let updatefile = multer({ storage });



//########################### RUTAS ##############################//

// GET ALL PRODUCTS
router.get('/', productsController.index);

// CREATE ONE PRODUCT
router.get('/create', productsController.create);
router.post('/create', updatefile.single('product-image'), logDBMiddleware, productsController.store);

// GET ONE PRODUCT
router.get('/:id', productsController.detail);

// EDIT ONE PRODUCT
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', updatefile.single('product-image'), productsController.update);

//DELETE PRODUCT
router.delete('/delete/:id', productsController.delete);


module.exports = router;
