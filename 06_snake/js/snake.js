(function () {
  'use strict';
  /******** initialize ********/
  var rows = 10;
  var cols = 10;
  var snake = [];
  var snakeStartLen = 4;
  var playFieldId = 'playField';
  var playField;
  var grid;

  var LEFT = 37;
  var UP = 38;
  var RIGHT = 39;
  var DOWN = 40;

  init();

  function init() {
    playField = document.getElementById(playFieldId);
    drawGrid();
    createSnake();
    setTimeout(foodInterval, 5000);
  }

  function drawGrid() {
    grid = document.createElement('table');
    grid.className = 'grid';
    for (var i = 0; i < rows; i++) {
      var row = document.createElement('tr');
      for (var j = 0; j < cols; j++) {
        var cell = document.createElement('td');
        row.appendChild(cell);
      }
      grid.appendChild(row);
    }
    playField.appendChild(grid);
  }

  function createSnake() {
    // TODO: need to make sure, the snake is inside the grid
    for (var i = 0; i < snakeStartLen; i++) {
      createSnakeSegment(i, 0);
    }
  }

  function createSnakeSegment(x, y) {
    if (collisionCheck(x, y)) {
      return alert('zomg! start new game.');
    }
    var segment = [x, y];
    var row = grid.getElementsByTagName('tr')[y];
    var cell = row.getElementsByTagName('td')[x];
    cell.className = 'snake-segment';
    segment.push(cell);
    snake.unshift(segment); //sets element on first position of array
  }

  function removeLastSnakeSegment() {
    var lastSnakeSegment = snake.pop();
    //  [x, y, cell]
    lastSnakeSegment[2].className = null;
  }

  function moveSnake(direction) {
    var snakeHeadSegment = snake[0];
    switch (direction) {
      case LEFT:
        var x = snakeHeadSegment[0] - 1;
        var y = snakeHeadSegment[1];
        break;
      case UP:
        var x = snakeHeadSegment[0];
        var y = snakeHeadSegment[1] - 1;
        break;
      case RIGHT:
        var x = snakeHeadSegment[0] + 1;
        var y = snakeHeadSegment[1];
        break;
      case DOWN:
        var x = snakeHeadSegment[0];
        var y = snakeHeadSegment[1] + 1;
        break;
    }
    createSnakeSegment(x, y);
    removeLastSnakeSegment();
  }

  document.addEventListener('keydown', function (e) {
    var key = e.keyCode;
    if (key >= 37 && key <= 40) {
      moveSnake(key); // key = direction
    }
  });

  function collisionCheck(x, y) {
    if (x < 0 || x >= cols || y < 0 || y >= rows) { // checks borders
      return true;
    }
    for (var i = 0; i < snake.length; i++) { // checks snake collision
      if (x === snake[i][0] && y === snake[i][1]) {
        return true;
      }
    }
    return false;
  }

  function createFood() {
    function randomX() {
      return Math.floor(Math.random() * grid.getElementsByTagName('tr').length);
    }
    function randomY() {
      return Math.floor(Math.random() * grid.getElementsByTagName('tr').length);
    }
    var x = randomX();
    var y = randomY();
    while(collisionCheck(x, y)) {
      x = randomX();
      y = randomY();
    }
    var row = grid.getElementsByTagName('tr')[y];
    var cell = row.getElementsByTagName('td')[x];
    cell.className = 'food-segment';
  }

  function foodInterval() {
    setInterval(createFood, 8000);
  }

  /*function createFood() {
    var cell = grid.querySelectorAll('td');
    var randomNumber = Math.floor(Math.random() * cell.length);
    var gridMatch = cell[randomNumber];
    if (gridMatch.className === 'snake-segment') {
      return;
    } else {
      gridMatch.className = 'food-segment';
    }
  }*/

})();
