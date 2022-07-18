const fs = require('fs');

function logMiddleware(req, res, next) {
fs.appendFileSync('log.txt', '\nSe ingresó a la página' + req.url)
next();
};

module.exports = logMiddleware;