'use strict';


var mongoose = require('mongoose'),
	//Word = mongoose.model('words'),
	WordGroup = mongoose.model('word_groups'),
	Unit = mongoose.model('words');

/*exports.listWords = function(req, res) {
  Word.find({}, function(err, word) {
    if (err)
      res.send(err);
    res.json(word);
  });
};*/

exports.listWordGroups = function(req, res) {
  WordGroup.find({}, function(err, wordGroup) {
    if (err)
      res.send(err);
    res.json(wordGroup);
  }).sort( { order: 1});
};

exports.listUnits = function(req, res) {
  Unit.find({}, function(err, unit) {
    if (err)
      res.send(err);
    res.json(unit);
  });
};

exports.listWords = function(req, res) {
  var groupCode = req.params.groupCode;
  Unit.find({ code: groupCode}, function(err, words) {
    if (err)
      res.send(err);
    res.json(words);
  });
};
