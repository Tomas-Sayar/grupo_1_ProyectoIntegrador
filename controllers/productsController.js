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
		};

		products.push(newProduct);

		let productsJSON = JSON.stringify(products, null, 4);
		fs.writeFileSync(productsFilePath, productsJSON);

		res.redirect('/');
	},
	//edit: (req, res) => {
	//	let id = req.params.id;
	//	let product = null;
	//	for (let i = 0; i < products.length; i++) {
	//		if (id == products[i].id) {
	//			product = products[i];
	//			break;
	//		}
	//	}
	//	res.render('product-edit-form', { product });
	//},
	//*edit: (req, res) => {
//		const id = req.params.id;
//		let productsSelect = null
//			products.forEach(products => {
//			if (products.id == id) {
//				return productsSelect = products.id;
//			}
//		})
//		res.render("product-edit-form", { productsSelect: productsSelect });
//	},

	edit: (req, res) => {
		const id= req.params.id;
		let productsSelect = products[id];
		res.render("product-edit-form", {productsSelect});
		console.log(productsSelect);
	},
	update: (req, res) => {
		res.redirect("/products")
	},

	delete: (req, res) => {
		res.send("Tu producto fue eliminado con éxito")

	}
};


module.exports = controller;
