const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
//const { check } = require('express-validator');
const { body } = require('express-validator');
const { validationResult } = require('express-validator');
const usersController = require('../controllers/usersController');
const logDBMiddleware = require('../middlewares/logDBMiddleware');
const multerMiddleware = require('../middlewares/multerMiddleware.js');


//validaciones register//
const validateCreateForm = [
    body('nombreApellido').notEmpty().withMessage("Debes completar el campo de Nombre y Apellido"),
    body('nombreDeUsuario').notEmpty().withMessage("Debes completar el campo de Usuario"),
    body('email').notEmpty().isEmail().withMessage("Debes completar con un email válido").bail(),
    body('fechaDeNacimiento').notEmpty().withMessage("Debes completar con tu Fecha De Nacimiento"),
    body('contraseña').notEmpty().isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 carácteres"),
    body('users-image').custom((value, {req}) => {
        let file = req.file; 
        if(!file) {
            throw new Error("Tienes que subir una imagen");
    }
    return true;
    })
]
//validaciones login//
//const ValidateCreateForm = [
//check('email').isEmail().withMessage("Email incorrecto"),
//check('contraseña').isLength({min:8}).withMessage("La contraseña debe tener al menos 8 carácteres")
//]
//]
//########################### RUTAS ##############################//
//router.get('/', usersController.index);

router.get('/login', usersController.login);
router.post('/login', usersController.processLogin);
router.get('/register', usersController.register);
router.post('/register', multerMiddleware('users').single('users-image'), validateCreateForm, logDBMiddleware, usersController.store);
router.get('/profile/:id', usersController.profile);



module.exports = router;