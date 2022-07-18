const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const res = require('express/lib/response');
const bcrypt = require('bcryptjs');
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

	store: (req, res) => {
		
		const resultValidation = validationResult(req)
		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body,
			})
		}

		let newUsers = {
			id: Date.now(),
			name: req.body.nombreApellido,
			usuario: req.body.nombreDeUsuario,
			email: req.body.email,
			fechaDeNacimiento: req.body.fechaDeNacimiento,
			domicilio: req.body.domicilio,
			tipoDeUsuario: req.body.tipoDeUsuario,
			contraseña: bcrypt.hashSync(req.body.passwordDeUsuario, 10),
			image: req.file.filename,
		}
		
		users.push(newUsers)
		
		let usersJSON = JSON.stringify(users, null, 4);
		
		fs.writeFileSync(usersFilePath, usersJSON);
		res.redirect('/users/login');
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

	register: (req, res) => {
		res.render('register');
	},

	profile: (req, res) => {
		let userId = req.params.id;
		let selectedUser = null;
		for (let i = 0; i < users.length; i++) {
			if (userId == users[i].id) {
				selectedUser = users[i];
				break;
			}
		}
		res.render('user-profile', { user: selectedUser });
	}
}




module.exports = controller;