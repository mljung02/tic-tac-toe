var score = function (turn) {
  if (turn%2 === 1) {
    if (checkHorizontal() || checkVertical() || checkDiagonal()) {
      return 10
    }
  } else if (turn%2 === 0) {
    if (checkHorizontal() || checkVertical() || checkDiagonal()) {
      return -10
    }
  } else {
    return 0;
  }
}

var minimax = function (board) {
  var boardTemp = board
  var scores = [];
  var moves = [];
}