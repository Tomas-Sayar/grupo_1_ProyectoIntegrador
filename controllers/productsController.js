
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
            .then( product => {
                res.render( 'product-detail', { product } );
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
		//TODO: agregar promesa xq es un pedido asincronico
		let typeOfProduct = db.Product.findOne({ where: { type: req.body.type } })

		db.Product.create({
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			description: req.body.description,
			image: req.file.filename,
			category: req.body.category,
			type: typeOfProduct.id,
			// TODO: brand: req.body.brand,
		});
        res.redirect('/products')
		.catch(error => res.send(error))
	},

	edit: (req, res) => {
		db.Product.findByPk(req.params.id)
            .then( productToEdit => {
                res.render( 'product-edit-form', { productToEdit } );
            });
	},

	update: (req, res) => {
		//TODO: agregar promesa xq es un pedido asincronico
		let typeOfProduct = db.Product.findOne({ where: { type: req.body.type } })

		let productId = req.params.id;

		db.Product.update(
			{
				name: req.body.name,
				price: req.body.price,
				discount: req.body.discount,
				description: req.body.description,
				image: req.file.filename,
				category: req.body.category,
				type: typeOfProduct,
				// TODO: brand: req.body.brand,
			},
			{ where: { id: productId } }
		)
		.then(() => {

			return res.redirect( '/products/' + productId )
			.catch(error => res.send(error))
		})

		res.redirect('/products');
	},

	delete: (req, res) => {
		let borrarProductid = req.params.id;
db.Product.findBy(borrarProductid)

.then(Product => {
	return res.render(path.resolve(__dirname, '..', 'views', 'products'), {Product})})
	.catch(error => res.send(error))
},
destroy: function (req,res) {
	let productborradoId = req.params.id;
	
	db.Product.destroy({where: {id: productborradoId}, force: true}) // force: true es para asegurar que se ejecute la acción
	.then(()=>{
		return res.redirect('/products')})
	.catch(error => res.send(error)) 
}

		//let productsBorrar = products.filter(
		//	(product => product.id != id));
		//let productsJSON = JSON.stringify(productsBorrar, null, 4);
		//fs.writeFileSync(productsFilePath, productsJSON);
		//	res.send("Eliminado con éxito");
	//	res.redirect('/products');
	
};


module.exports = controller;
