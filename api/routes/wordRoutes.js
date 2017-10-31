'use strict';
module.exports = function(app) {
  var unit = require('../controllers/wordController');

  // todoList Routes
  /*app.route('/units')
    .get(unit.list);*/


  app.route('/words')
    .get(unit.listWords);
	
  app.route('/word_groups')
    .get(unit.listWordGroups);
};