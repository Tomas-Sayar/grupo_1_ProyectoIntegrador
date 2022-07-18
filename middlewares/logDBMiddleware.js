const fs = require('fs');
const { dirname } = require('path');

function logDBMiddleware(req, res, next) {
<<<<<<< HEAD
    fs.appendFileSync('logDB.txt', 'Se creó un registro al ingresar a la página ' + req.url);
    next();
=======
fs.appendFileSync('logDB.txt', '\nSe creó un registro al ingresar a la página' + req.url);
next();
>>>>>>> 31ff2fd8c091da5d3dbcb8c4f5de1dae5f3fb94c
};

module.exports = logDBMiddleware;