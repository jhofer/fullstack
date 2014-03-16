'use strict';

var mongoose = require('mongoose'),
stringUtils = require('underscore.string'),
Schema = mongoose.Schema;

/**
 * About Schema
 */
 var AboutSchema = new Schema({
	info: String,
 });

/**
 * Validations
 */
 AboutSchema.path('info').validate(function (string) {
	return ! stringUtils.isBlank(string);
 }, 'Awesomeness must be between 1 and 10');

 module.exports = mongoose.model('About', AboutSchema);
