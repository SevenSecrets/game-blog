const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const article = new Schema({
	title: String,
	sections: [{ type: Schema.Types.ObjectId, ref: 'Section' }],
	date: Date,
	description: String
});

module.exports = mongoose.model('Article', article);