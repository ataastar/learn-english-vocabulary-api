'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WordSchema = new Schema({
  hungarian: {
    type: String
  },
  imageUrl: {
    type: String
  },
  english: {
    type: [{
      type: String
    }]
  },
  pronunciation: {
    type: String
  },
  audio: {
    type: String
  }
});

var UnitSchema = new Schema({
	name: String,
	code: String,
	words: [WordSchema]
})

//module.exports = mongoose.model('words', WordSchema);
module.exports = mongoose.model('words', UnitSchema);