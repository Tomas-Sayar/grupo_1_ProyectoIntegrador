const fs = require('fs');
const multer = require('multer');
const path = require('path');
const { nextTick } = require('process');
const db = require('../database/models/index.js');

function multerMiddleware(type) {
    const storage = multer.diskStorage({
            destination: (req, file, callback) => {
                carpetaDestino = path.join(__dirname, '../public/img/' + type);
                callback(null, carpetaDestino);
            },
            filename: (req, file, callback) => {
                let imageName = type + '-' + Date.now() + '-' + 'category' + req.body.type + path.extname(file.originalname);
                callback(null, imageName);
            },
            
        })
        let updatefile = multer({ storage });
        return updatefile;
    }
    
    module.exports = multerMiddleware;