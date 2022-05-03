const express = require('express');
const app = express();

const path = require('path');

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.listen(3000, () => {
	console.log('el servidor esta corriendo en el puerto 3000');
});

app.get('/', (req, res) => {
	res.sendFile(path.resolve('./views/index.html'));
});

app.get('/Inicio', (req, res) => {
	res.sendFile(path.resolve('./views/login.html'));
});

app.get('/Registro', (req, res) => {
	res.sendFile(path.resolve('./views/register.html'));
});

/**detalles del producto*/
app.get('/frutos-secos', (req, res) => {
	res.sendFile(path.resolve('./views/frutos-secos.html'));
});

/*carrito*/
app.get('/carrito', (req, res) => {
	res.sendFile(path.resolve('./views/carrito.html'));
});

app.get('/miel-liquida', (req, res) => {
	res.sendFile(path.resolve('./views/miel-liquida.html'));
});

app.get('/pan-semillas', (req, res) => {
	res.sendFile(path.resolve('./views/pan-semillas.html'));
});

app.get('/quinua', (req, res) => {
	res.sendFile(path.resolve('./views/quinua.html'));
});

app.get('/latas-scotch', (req, res) => {
	res.sendFile(path.resolve('./views/latas-scotch.html'));
});

app.get('/tostaditas-de-arroz', (req, res) => {
	res.sendFile(path.resolve('./views/tostaditas-de-arroz.html'));
});
/**fin detalles del producto */
