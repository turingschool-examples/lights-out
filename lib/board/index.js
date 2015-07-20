const _ = require('lodash');
const Light = require('../light');

function Board() {
  this.board = [];
  for (var i = 0; i < 5; i++) {
    var row = [];
    for (var j = 0; j < 5; j++) {
      row.push(new Light());
    }
    this.board.push(row);
  }
}

module.exports = Board;
