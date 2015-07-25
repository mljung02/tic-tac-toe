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

build({}, smallboard)

// var minimax = function (board) {
//   var boardTemp = board
//   var scores = [];
//   var moves = [];
// }