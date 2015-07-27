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

var checkDiagonal = function () {
  if (board[1][1] > 0) {
    if (board[0][0] === board[1][1] && board[2][2] === board[1][1]){
      return true;
    }
    if (board[0][2] === board[1][1] && board[2][0] === board[1][1]) {
      return true;
    }
  }
}

var checkVertical = function () {
  for (var i = 0; i < board[0].length; i++) {
    if (board[0][i] === board[1][i] && board[2][i] === board[0][i] && board[0][i] > 0 ) {
      return true;
    }
  }
}

var checkHorizontal = function () {
  for (var i = 0; i < board.length; i++) {
    if (board[i][0] === board[i][1] && board[i][2] === board[i][0] && board[i][0] > 0 ) {
      return true;
    }
  }
}

//create tree structure for moves, and then traverse recursively via minimax.

var board = ["00","01","02","10","11","12","20","21","22"]
var smallboard = ["a","b","c"]

var mySpliceOne = function(array, index) {
  var temp = []
  for (var i = 0; i < array.length; i++) {
    temp.push(array[i])
  }
  temp.splice(index,1);
  return temp;
}

var build = function(moves, obj, depth, move) {
  obj.moves = obj.moves || ""
  if (moves.length > 0) {
    obj.depth = depth
    obj.poss = moves
    obj.children = []
    for (var i = 0; i < moves.length; i++) {
      // console.log('YAYAYAYAY')
      var newObj = {}
      newObj.moves = obj.moves + '|' + moves[i]
      obj.children.push(build(mySpliceOne(moves, i), newObj, obj.depth+1))
    }
  }
  return obj
}

var moveset = build({}, smallboard)

// var minimax = function (board) {
//   var boardTemp = board
//   var scores = [];
//   var moves = [];
// }