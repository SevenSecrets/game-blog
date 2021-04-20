const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const article = require('./models/article.js');
const section = require('./models/article_section');
const SectionsHelpers = require('./helpers/sections_helpers');

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

const Article = article;
const Section = section;
const app = express();
const port = process.env.PORT || 3000;
const db = mongoose.connection;

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")));
app.use(logger('combined'));

app.get('/', (req, res) => {
	Article.find({}, (err, queryres) => {
		if (err) {
			res.send(err);
		}
		res.render('index', { articles: queryres });	
	});
});

app.get('/articles', (req, res) => {
	Article.find({}, (err, queryres) => {
		if (err) {
			res.send(err);
		}
		res.send(queryres);
	});
});

app.get('/articles/:ArticleId', (req, res) => {
	Article.findById(req.params.ArticleId, (err, article) => {
		if (err) {
			res.send(err);
		}
		let sectionids = article.sections;
		let sections = SectionsHelpers.getArticleSections(sectionids);
		Promise.all(sections)
		.then((values) => {
			res.render('article', { article: article, sections: values });
		})
		.catch(err => {
			console.log(err);
		});
	});
});

app.listen(port, () => {
	console.log(`Listening at port ${port}`);
});

module.exports = app;