const res = require("express/lib/response");
const fs = require('fs');
const path = require('path');


// ALL PRODUCTS
const productsFilePath = path.join(__dirname, '../data/ProductsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// REALATED PRODUCTS
const relatedProductsFilePath = path.join(__dirname, '../data/relatedProductsDataBase.json');
const relatedProducts = JSON.parse(fs.readFileSync(relatedProductsFilePath, 'utf-8'));



let controller = {
    detail: (req, res) => {
        res.render("product-details", { products: products });
    }
}


module.exports = controller;