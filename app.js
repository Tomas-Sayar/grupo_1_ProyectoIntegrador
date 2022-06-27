const express = require('express');
const methodOverride = require("method-override");
const app = express();

const path = require('path');
const publicPath = path.resolve(__dirname, './public');

const logMiddleware = require('./middlewares/logMiddleware');
const mainRouter = require('./routers/main');
const productsRouter = require('./routers/products');
const usersRouter = require('./routers/users');
//const session = require('express-session');


// APP CONFIG CARPETA ESTATICA 
app.use(express.static(publicPath));
app.set('view engine', 'ejs');


// APP CONFIG FORMULARIOS
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

//LOGIN SESSION CONFIG
//app.use(session({secret:"carrotTommyFer"}));
app.use(logMiddleware);


// SERVER
app.listen(3000, () => {
	console.log('el servidor esta corriendo en el puerto 3000');
});

// ROUTERS
// MAIN
app.use('/', mainRouter);
// PRODUCTS
app.use('/products', productsRouter);
//USERS
app.use('/users', usersRouter);


//ERROR 404
app.use((req, res, next) => { 
	res.status(404).render("not-found")
	});