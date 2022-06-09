const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

// ALL PRODUCTS
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let controller = {
	index: (req, res) => {
		const indexProductsFilePath = path.join(__dirname, '../data/productsDataBase.json');
		const productsIndex = JSON.parse(fs.readFileSync(indexProductsFilePath, 'utf-8'));
		res.render('products', { products: productsIndex });
	},

	detail: (req, res) => {
		//======= Para encontrar el pruducto a mostrar =======//
		let id = req.params.id;
		let product = null;
		for (let i = 0; i < products.length; i++) {
			if (id == products[i].id) {
				product = products[i];
				break;
			}
		}
		//======= Para encontrar los productos relacionados =======//
		let relatedProducts = [];
		for (let i = 0; i < products.length; i++) {
			if (i < 6) {
				relatedProducts.push(products[i]);
			}
		}
		res.render('product-detail', { product, relatedProducts });
	},

	create: (req, res) => {
		res.render('product-create-form');
	},

	store: (req, res) => {
		let newProduct = {
			id: Date.now(),
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: req.file.filename,
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
		// let productId = req.params.id;
		// products[productId]["name"] = req.body.name;
		// products[productId]["price"] = req.body.price;
		// products[productId]["disount"] = req.body.discount;
		// products[productId]["category"] = req.body.category;
		// products[productId]["description"] = req.body.description;
		// products[productId]["image"] = req.fil.filename;
		// let productsJSON = JSON.stringify(productsBorrar, null, 4);
		// fs.writeFileSync(productsFilePath, productsJSON);

		for (let i = 0; i < products.length; i++) {
			if (req.params.id == products[i].id) {
				products[i].name = req.body.name;
				products[i].price = req.body.price;
				products[i].discount = req.body.discount;
				products[i].category = req.body.category;
				products[i].description = req.body.description;
				//products[i].image = req.file.filename;
			}
		}
		let productsJSON = JSON.stringify(products, null, 4);
		fs.writeFileSync(productsFilePath, productsJSON);
		res.redirect('/products');
	},

	delete: (req, res) => {
		let id = req.params.id;
		let productsBorrar = products.filter(
			(product => product.id != id));
		let productsJSON = JSON.stringify(productsBorrar, null, 4);
		fs.writeFileSync(productsFilePath, productsJSON);
		//	res.send("Eliminado con éxito");
		res.redirect('/products');
	}
};


module.exports = controller;
