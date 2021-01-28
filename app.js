const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const article = require('./models/article.js');

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@cluster0.mmpxe.mongodb.net/game_blog?retryWrites=true&w=majority`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).then(() => {
	console.log("DB Connected.")
}).catch(err => {
	console.log("Failed to connect to DB:", err);
});

const Article = mongoose.model('Article', article);
const app = express();
const port = 3000;
const db = mongoose.connection;

app.set('view engine', 'pug');
app.use(logger('combined'));

app.get('/', (req, res) => {
	Article.find({}, (err, queryres) => {
		if (err) {
			res.send(err);
		}
		res.render('index', { articles: queryres });	
	})
});

app.get('/articles', (req, res) => {
	Article.find({}, (err, queryres) => {
		if (err) {
			res.send(err);
		}
		res.send(queryres);
	})
})

app.listen(port, () => {
	console.log(`Listening at port ${port}`);
});

module.exports = app;