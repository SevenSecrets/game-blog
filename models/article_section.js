const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const section = new Schema({
	articleId: {
		type: Schema.Types.ObjectId,
		required: true
	},
	heading: String,
	body: String
});

module.exports = mongoose.model('section', section);