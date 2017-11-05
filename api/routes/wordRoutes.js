'use strict';
module.exports = function(app) {
  var unit = require('../controllers/wordController');

  // todoList Routes
  /*app.route('/units')
    .get(unit.list);*/


  app.route('/words')
    .get(unit.listUnits);
	
  app.route('/word_groups')
    .get(unit.listWordGroups);

    app.route('/words/:groupCode').get(unit.listWords);/*, function (req, res, next) {
      var id = req.params.groupCode;
      console.log('The id: ' + id);
  });*/
};