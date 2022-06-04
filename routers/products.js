const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const productsController = require('../controllers/productsController');

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


// GET ALL PRODUCTS
router.get('/', productsController.index);

// CREATE ONE PRODUCT
router.get('/create', productsController.create);
router.post('/create', updatefile.single('product-image'), productsController.store);

// GET ONE PRODUCT
router.get('/:id', productsController.detail);

//GET EDIT ONE PRODUCT
router.get('/:id/edit', productsController.edit);
router.put('/:id/edit', productsController.edit);

//DELETE PRODUCT
router.delete('/:id/delete', productsController.delete);



module.exports = router;
