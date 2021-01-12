import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const article = new Schema({
	title: String,
	body: String,
	date: Date
});

export default article;