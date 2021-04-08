const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const article = new Schema({
	title: String,
	date: Date
});

article.virtual('sections', {
	ref: 'section',
	localField: '_id',
	foreignField: 'articleId',
	justOne: false
})

module.exports = mongoose.model('article', article);