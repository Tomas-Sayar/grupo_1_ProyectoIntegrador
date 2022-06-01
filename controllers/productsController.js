const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

// ALL PRODUCTS
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
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
		res.render('product-details', { product });
	},
	create: (req, res) => {
		res.render('product-create-form');
	},
	store: (req, res) => {
		let newProduct = {
			id: products.length + 1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
		};

		products.push(newProduct);

		let productsJSON = JSON.stringify(products);
		fs.writeFileSync(productsFilePath, productsJSON);

		res.redirect('/');
	},
};

module.exports = controller;
