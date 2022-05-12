const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.resolve(__dirname, './public');

const mainRouter = require('./routers/main');


// APP CONFIG 
app.use(express.static(publicPath));
app.set('view engine', 'ejs');


// SERVER
app.listen(3000, () => {
	console.log('el servidor esta corriendo en el puerto 3000');
});


// ROUTERS
<<<<<<< HEAD
app.use('/', mainRouter);
=======
app.use('/', mainRouter);
app.use('/login', mainRouter);
app.use('/register', mainRouter);
app.use('/carrito', mainRouter);
app.use('/product', mainRouter);
app.use('/productCreate', mainRouter);
>>>>>>> d06980dd60aedc5d48894d69b6acd80d80e91346
