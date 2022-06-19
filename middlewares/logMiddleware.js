const fs = require('fs');

function logMiddleware(req, res, next) {
    fs.appendFileSync('log.txt', 'Se ingresó a la página ' + req.url, null, 4)
    next();
};

module.exports = logMiddleware;