const res = require("express/lib/response");
const fs = require('fs');
const path = require('path');

// ALL PRODUCTS
const productsFilePath = path.join(__dirname, '../data/ProductsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));




let controller = {
    detail: (req, res) => {
        let id = req.params.id;
        let product = null;
        for (let i = 0; i < products.length; i++) {
            if (id === products[i].id) {
                product = products[i];
                break;
            }
        }
        res.render("product-details", { product: product });
    },
    productCreate: (req, res) => {
        res.render("product-create-form");
    },
}


module.exports = controller;