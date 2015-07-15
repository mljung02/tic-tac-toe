var all = document.getElementById('all');
var squares = document.getElementsByClassName('square');
var compTemp

var turn = 0;
var board = [[0,0,0],[0,0,0],[0,0,0]]
var checkWin = function () {
  if (checkHorizontal() || checkVertical() || checkDiagonal()) {
    alert('winnar!!!')
    clearBoard();
    return true
  }
}

var clearBoard = function () {
  board = [[0,0,0],[0,0,0],[0,0,0]];
  var xs = document.getElementsByClassName('squarex');
  var os = document.getElementsByClassName('squareo');
  console.log(os)
  for (var i = xs.length - 1; i >= 0; i--) {
    xs[i].innerHTML = '';
    xs[i].className = 'square';
  }
  for (var j = os.length - 1; j >= 0; j--) {
    os[j].innerHTML = '';
    os[j].className = 'square';
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

var updateBoard = function (id, turn) {
  if (turn%2 === 0) {
    board[parseInt(id[1])][parseInt(id[2])] = 1;
  } else {
    board[parseInt(id[1])][parseInt(id[2])] = 2;
  }
}

all.addEventListener('click', function (e) {
  console.log(e.target,' @!@  ' ,turn)
  if (e.target.className === 'square') {
    e.target.innerHTML = 'X';
    e.target.className += 'x';
    updateBoard(e.target.id, turn);
    console.log(board,'       !!        ',turn);
    turn++
    if (!checkWin()) {
      squares = document.getElementsByClassName('square');
      compTemp = squares[Math.floor(Math.random()*squares.length)]
      compTemp.innerHTML = 'O'
      compTemp.className += 'o'
      updateBoard(compTemp.id, turn)
      checkWin();
      console.log(board,'       !!        ',turn);
      turn++
    }
  }
})

