const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	index: (req, res) => {
		let featuredProducts = [];
		for (let i = 0; i < products.length; i++) {
			if (i < 8) {
				featuredProducts.push(products[i]);
			}
		}
		res.render('index', { featuredProducts: featuredProducts });
	},
	login: (req, res) => {
		res.render('login');
	},
	register: (req, res) => {
		res.render('register');
	},
	carrito: (req, res) => {
		res.render('carrito');
	},
};

module.exports = controller;
