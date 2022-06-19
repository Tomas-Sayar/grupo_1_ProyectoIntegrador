const { json } = require('express/lib/response');
const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
// ALL USERS
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
	//	index: (req, res) => {
	//		let featuredProducts = [];
	//		for (let i = 0; i < products.length; i++) {
	//			if (i < 8) {
	//				featuredProducts.push(products[i]);
	//			}
	//		}
	//		res.render('index', { featuredProducts: featuredProducts });
	//	},

	store: (req, res) => {
		let newUser = {
			id: Date.now(),
			name: req.body.nombreApellido,
			username: req.body.nombreDeUsuario,
			DateOfBirth: req.body.fechaDeNacimiento,
			adress: req.body.domicilio,
			userType: req.body.tipoDeUsuario,
			image: req.file.filename,
			password: req.body.passwordDeUsuario,
		}
		console.log(users);
		users.push(newUser);
		let usersJSON = JSON.stringify(users, null, 4);
		fs.writeFileSync(usersFilePath, usersJSON);
		res.redirect('/');
	},

	store: (req, res) => {
		let newUsers = {
			id: Date.now(),
			name: req.body.nombreApellido,
			usuario: req.body.nombreDeUsuario,
			fechaDeNacimiento: req.body.fechaDeNacimiento,
			domicilio: req.body.domicilio,
			tipoDeUsuario: req.body.tipoDeUsuario,
			contraseña: req.body.passwordDeUsuario,
			image: req.file.filename,
		}
		users.push(newUsers);
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
			let usersJson = fs.readFileSync("users.json", { errors });
			let users;
			if (usersJson == "")
				users = [];
		} else {
			users = JSON.parse(usersJson);
			for (let i = 0; i < users.length; i++) {
				if (users[i].email == req.body.email) {
					if (bcrypt.compareSync(req.body.password, users[i].password));
					let usuarioALoguearse = users[i];
				}
			}
			return res.render('login', { errors });
		}
	},
	register: (req, res) => {
		res.render('register');
	},
};


module.exports = controller;