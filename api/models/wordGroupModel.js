'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WordGroupSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String
  },
  group: {
    type: [WordGroupSchema]
  },
  order: {
    type: int
  }
});

module.exports = mongoose.model('word_groups', WordGroupSchema);