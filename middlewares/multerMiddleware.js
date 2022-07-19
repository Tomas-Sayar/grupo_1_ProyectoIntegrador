const fs = require('fs');
const multer = require('multer');
const path = require('path');
const { nextTick } = require('process');
function multerMiddleware(type) {
const storage = multer.diskStorage({
        destination: (req, file, callback) => {
            let carpetaDestino;
            if ( req.body.type ) {
                carpetaDestino = path.join(__dirname, '../public/img/' + type + '/' + req.body.type);
            } else {
                carpetaDestino = path.join(__dirname, '../public/img/' + type);
            }
            callback(null, carpetaDestino);
        },
        filename: (req, file, callback) => {
            let imageName = type + '-' + Date.now() + path.extname(file.originalname);
            callback(null, imageName);
        },
        
    })
    let updatefile = multer({ storage });
    return updatefile;
}

module.exports = multerMiddleware;