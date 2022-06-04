const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

// ALL PRODUCTS
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let controller = {
	index: (req, res) => {
		res.render('products', { products });
	},

	detail: (req, res) => {
		let id = req.params.id;
		let product = null;
		for (let i = 0; i < products.length; i++) {
			if (id == products[i].id) {
				product = products[i];
				break;
			}
		}
		res.render('product-detail', { product });
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
			image: req.file,
		}
		products.push(newProduct);
		let productsJSON = JSON.stringify(products, null, 4);
		fs.writeFileSync(productsFilePath, productsJSON);
		res.redirect('/');
	},

	edit: (req, res) => {
		let productId = req.params.id;
		let productToEdit = null;
		for (let i = 0; i < products.length; i++) {
			if (productId == products[i].id) {
				productToEdit = products[i];
				break;
			}
		}
		res.render('product-edit-form', { productToEdit });
	},

	update: (req, res) => {
		let productId = req.params.id;
		products[productId]["name"] = req.body.name;
		products[productId]["price"] = req.body.price;
		products[productId]["disount"] = req.body.discount;
		products[productId]["category"] = req.body.category;
		products[productId]["description"] = req.body.description;
		products[productId]["image"] = req.file;
	},

	delete: (req, res) => {
		let productId = req.params.id;
		let deletedProduct = products.splice(1, productId);

		products.push(deletedProduct);
		let productsJSON = JSON.stringify(products, null, 4);
		fs.writeFileSync(productsFilePath, productsJSON);
		res.redirect('/');
	}
};


module.exports = controller;
