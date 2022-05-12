const res = require("express/lib/response");

const controller = {
    index: (req, res) => {
        res.render('index');
    },
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    },
    product: (req, res) => {
        res.render("product-details");
    },
    carrito: (req, res) => {
        res.render("carrito");
    },
    productCreate: (req, res) => {
        res.render("product-create-form");
    },
};

module.exports = controller;