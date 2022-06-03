const express = require('express');
const res = require('express/lib/response');
const router = express.Router();


const productsController = require('../controllers/productsController');


// GET ALL PRODUCTS
router.get('/', productsController.index);

// CREATE ONE PRODUCT
router.get('/create', productsController.create);
router.post('/create', productsController.store);

// GET ONE PRODUCT
router.get('/:id', productsController.detail);

//GET EDIT ONE PRODUCT
router.get('/:id/edit',productsController.edit);

//EDIT ONE PRODUCT
router.put('/:id/edit', productsController.edit);

//DELETE PRODUCT
router.delete('/:id', productsController.delete);



module.exports = router;
