const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const res = require('express/lib/response');
const bcrypt = require('bcryptjs');
const db = require('../database/models/index.js');

// ALL USERS
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



const controller = {
	//index: (req, res) => {
	//	let featuredProducts = [];
	//	for (let i = 0; i < products.length; i++) {
	//		if (i < 8) {
	//			featuredProducts.push(products[i]);
	//		}
	//	}
	//	res.render('index', { featuredProducts: featuredProducts });
	//},

	register: (req, res) => {
		res.render('register');
	},

	store: (req, res) => {

		db.User.create({
			name: req.body.nombreApellido,
			username: req.body.nombreDeUsuario,
			email: req.body.email,
			dateOfBirth: req.body.fechaDeNacimiento,
			adress: req.body.domicilio,
			password: req.body.passwordDeUsuario,
			image: req.file.filename,
			typeOfUser_id: req.body.type,
		})
		.then(() => {
			res.redirect('/')
		})
		.catch(error => res.send(error))
	},

	login: (req, res) => {
		res.render('login');
	},

	processLogin: (req, res) => {
		//CAPTURAMOS LOS ERRORES
		let errors = validationResult(req);
		let usuarioALoguearse

		//SI NO HAY ERRORES VERIFICAMOS LOS DATOS
		if (errors.isEmpty()) {
			let usersJSON = fs.readFileSync('./data/users.json');
			let users = JSON.parse(usersJSON)

			if (usersJSON == "") {
				users = [];
			}
			//RECORREMOS TODOS LOS USUARIOS Y BUSCAMOS EL QUE COINCIDA CON EL EMAIL Y LA CONTRASEÑA
			for (let i = 0; i < users.length; i++) {
				if (users[i].email == req.body.email) {

					if (bcrypt.compareSync(req.body.contraseña, users[i].contraseña));
					usuarioALoguearse = users[i];
					break;
				}
			}
		}
		if (usuarioALoguearse == undefined) {
			return res.render('login', {
				errors: [
					{ msg: 'Usuario Inválido' }
				]
			})
		} else {
			req.session.usuarioLogueado = usuarioALoguearse;
			res.redirect('/')
		}
	},


	profile: (req, res) => {
		// let selectedUser = null;
		// for (let i = 0; i < users.length; i++) {
		// 	if (userId == users[i].id) {
		// 		selectedUser = users[i];
		// 		break;
		// 	}
		// }

		let userId = req.params.id;

		db.User.findByPk(userId)
			.then((selectedProfile) => {

				res.render('user-profile', { user: selectedProfile });

			})
	}
}




module.exports = controller;