const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

// ALL PRODUCTS
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let controller = {
index: (req, res) => {
	res.render('products', {products});
},

	detail: (req, res) => {
		let id = req.params.id;
		let productDetail = null;
		for (let i = 0; i < products.length; i++) {
			if (id === products[i].id) {
				productDetail = products[i];
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
			nombre: req.body.name,
			precio: req.body.price,
			descuento: req.body.discount,
			categoria: req.body.category,
			descripcion: req.body.description,
		};

		products.push(newProduct);

		let productsJSON = JSON.stringify(products);
		fs.writeFileSync(productsFilePath, productsJSON);

		res.redirect('/');
	},
};

module.exports = controller;
