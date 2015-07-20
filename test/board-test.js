const assert = require('chai').assert;
const Board = require('../lib/board');

describe('Board', function () {

  it('should construct an object', function () {
    assert(new Board());
  });

  it('should have a property called board that is an array', function () {
    const board = new Board();
    assert(board.board);
    assert(Array.isArray(board.board));
  });

  it('should contain five arrays as rows', function () {
    const board = new Board();
    assert.equal(board.board.length, 5);
    board.board.forEach(function (row) {
      assert(Array.isArray(row));
    });
  });

  it('should have five lights in each row', function () {
    const board = new Board();
    const firstRow = board.board[0];
    assert.equal(firstRow.length, 5);
  });

});
