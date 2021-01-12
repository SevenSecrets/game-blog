const express = require('express');
const logger = require('morgan');
const app = express();
const port = 3000;

app.set('view engine', 'pug')

app.get('/', (req, res) => {
	res.render('index', { title: "article title", article: { title: "article title", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }});
});

app.listen(port, () => {
	console.log(`Listening at port ${port}`);
});

module.exports = app;