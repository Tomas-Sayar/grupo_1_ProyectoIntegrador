const fs = require('fs');
const { dirname } = require('path');

function logDBMiddleware(req, res, next) {
fs.appendFileSync('logDB.txt', '\nSe creó un registro al ingresar a la página' + req.url);
next();
};

module.exports = logDBMiddleware;