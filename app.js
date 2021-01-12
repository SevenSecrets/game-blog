import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import article from './models/article.js';

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

app.set('view engine', 'pug')

app.get('/', (req, res) => {
	res.render('index', { title: "article title", article: { title: "article title", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }});
});

app.listen(port, () => {
	console.log(`Listening at port ${port}`);
});

export default app;