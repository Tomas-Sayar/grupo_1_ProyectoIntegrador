const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

// ALL USERS
const productsFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const controller= {
    store: (req,res) => {
let newUsers = {
    nombre: req.body.nombreApellido, 

};

    }
}




module.exports = controller;