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
			nombre: req.body.name,
			precio: req.body.price,
			descuento: req.body.discount,
			categoria: req.body.category,
			descripcion: req.body.description,
			imagen: req.file,
		}
		products.push(newProduct);
		let productsJSON = JSON.stringify(products, null, 4);
		fs.writeFileSync(productsFilePath, productsJSON);
		res.redirect('/');
	},

	edit: (req, res) => {
		let id = req.params.id;
		let product = null;
		for (let i = 0; i < products.length; i++) {
			if (id == products[i].id) {
				product = products[i];
				break;
			}
		}
		res.render('product-edit-form', { product });
	},

	delete: (req, res) => {
		res.send("Eliminado con éxito");
		res.redirect('/products')
	}
};


module.exports = controller;
