const express = require('express');
const methodOverride = require("method-override");
const app = express();

const path = require('path');
const publicPath = path.resolve(__dirname, './public');

const mainRouter = require('./routers/main');
const productsRouter = require('./routers/products');

// APP CONFIG CARPETA ESTATICA 
app.use(express.static(publicPath));
app.set('view engine', 'ejs');


// APP CONFIG FORMULARIOS
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));



// SERVER
app.listen(3000, () => {
	console.log('el servidor esta corriendo en el puerto 3000');
});

// ROUTERS
app.use('/', mainRouter);

// POR AHORA SOLO PARA EL PRODUCT-DETAILS, FALTA HACERLO PARA LA VISTA DE TODOS LOS PRODUCTOS
app.use('/products', productsRouter);
