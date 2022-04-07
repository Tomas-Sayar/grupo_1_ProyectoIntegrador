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
