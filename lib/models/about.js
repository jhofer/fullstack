'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * About Schema
 */
var AboutSchema = new Schema({
  info: String
});

/**
 * Validations
 */
/*AboutSchema.path('awesomeness').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Awesomeness must be between 1 and 10');
*/
mongoose.model('About', AboutSchema
);
