const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const { response } = require('express');
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
		};

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
		res.redirect('/');
	},

	login: (req, res) => {
		res.render('login');
	},

	processLogin: (req, res) => {
		let errors = validationResult(req);
		if (errors.isEmpty()) {
			let usersJSON = fs.readFileSync('users.json', { errors });
			let users;
			if (usersJSON == "") {
				users = [];
			} else {
				users = JSON.parse(usersJSON);
			}
			let usuarioALoguearse
			for (let i = 0; i < users.length; i++) {
				if (users[i].email == req.body.email) {
					if (bcrypt.compareSync(req.body.password, users[i].password));
					usuarioALoguearse = users[i];
					break;
				}
			}
		}
		if (usuarioALoguearse == undefined) {
			return res.render('login', {errors: [
					{msg: 'Usuario Inválido'}
]});			
req.session.usuarioLogueado = usuarioALoguearse;
		res.render('sucess');
} else {
		return res.render('login',{errors: errors.errors});
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