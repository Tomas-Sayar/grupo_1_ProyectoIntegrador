const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {check} = require('express-validator');
const {body} = require('express-validator') ;
const {validationResult} = require('express-validator');
const usersController = require('../controllers/usersController');
const logDBMiddleware= require('../middlewares/logDBMiddleware');

//###########################  MULTER ##############################//
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let carpetaDestino = path.join(__dirname, '../public/img/users');
        callback(null, carpetaDestino);
    },
    filename: (req, file, callback) => {
        let imageName = 'users-' + Date.now() + path.extname(file.originalname);
        callback(null, imageName);
    }
})
let updatefile = multer({ storage });


//########################### RUTAS ##############################//
//router.get('/', usersController.index);
router.get('/login', usersController.login);
//router.post('/login',usersController.processLogin)
router.get('/register', usersController.register);
router.post('/register',logDBMiddleware, usersController.store);
//[ check('usuario').isEmail().withMessage("Email incorrecto"),
//check('contraseña').isLength({min:8}).withMessage("La contraseña debe tener al menos 8 carácteres")
//]





module.exports = router;