const fs = require('fs');

function logMiddleware(req, res, next) {
<<<<<<< HEAD
    fs.appendFileSync('log.txt', 'Se ingresó a la página ' + req.url, null, 4)
    next();
=======
fs.appendFileSync('log.txt', '\nSe ingresó a la página' + req.url)
next();
>>>>>>> 31ff2fd8c091da5d3dbcb8c4f5de1dae5f3fb94c
};

module.exports = logMiddleware;