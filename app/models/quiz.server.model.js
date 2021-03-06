'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Quiz Schema
 */
var QuizSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Quiz name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Quiz', QuizSchema);