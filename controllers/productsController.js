
const { promiseImpl } = require('ejs');
const fs = require('fs');
const path = require('path');
const db = require('../database/models/index.js');

// ALL PRODUCTS
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	list: (req, res) => {
		//========== Listar todos los products ============//
		db.Product.findAll()
			.then((resultados) => {
				res.render('products', { products: resultados });
			});

	},

	detail: (req, res) => {
		//======= Para encontrar el pruducto a mostrar =======//
		db.Product.findByPk(req.params.id)
			.then(product => {
				res.render('product-detail', { product });
			});
		// //======= Para encontrar los productos relacionados =======//
		// db.Product.findAll()
		//     .then( relatedProducts => {
		// 		console.log(relatedProducts);
		//         res.render( 'product-detail', { relatedProducts } );
		//     });

	},

	create: (req, res) => {
		res.render('product-create-form');
	},

	store: (req, res) => {

		db.Product.create({
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			description: req.body.description,
			image: req.file.filename,
			category_id: req.body.category,
			type_id: req.body.type,
			brand_id: req.body.brand,
		})
		.then(() => {
			res.redirect('/products')
		})
		.catch(error => res.send(error))

	},

	edit: (req, res) => {

		db.Product.findByPk(req.params.id)
			.then(productToEdit => {
				res.render('product-edit-form', { productToEdit });
			})

	},

	update: (req, res) => {

		let productId = req.params.id;

		db.Product.update(
			{
				name: req.body.name,
				price: req.body.price,
				discount: req.body.discount,
				description: req.body.description,
				image: req.file.filename,
				category_id: req.body.category,
				type_id: req.body.type,
				brand_id: req.body.brand,
			},
			{ where: { id: productId } }
		)
			.then(() => {
				return res.redirect('/products/' + productId)
					.catch(error => res.send(error))
			})
			
	},

	destroy: function (req, res) {
		let productId = req.params.id;
		db.Product.destroy({ where: { id: productId }, force: true }) // force: true es para asegurar que se ejecute la acción
			.then(() => {
				return res.redirect('/products')
			})
			.catch(error => res.send(error))
	}

};


module.exports = controller;
