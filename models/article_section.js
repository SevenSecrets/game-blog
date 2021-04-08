const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const section = new Schema({
	article: { type: Schema.Types.ObjectId, ref: 'Article'},
	heading: String,
	body: String
});

module.exports = mongoose.model('Section', section);