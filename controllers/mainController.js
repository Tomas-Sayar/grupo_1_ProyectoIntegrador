const res = require("express/lib/response");
const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const controller = {
    index: (req, res) => {
        res.render('index', { products: products });
    },
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    },
    carrito: (req, res) => {
        res.render("carrito");
    },
    productCreate: (req, res) => {
        res.render("product-create-form");
    },
};


module.exports = controller;
