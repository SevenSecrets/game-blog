const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const article = new Schema({
	title: String,
	body: String,
	date: Date
});

module.exports = article;