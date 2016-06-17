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

  init();

  function init() {
    playField = document.getElementById(playFieldId);
    drawGrid();
    createSnake();
    drawSnake();
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
    var segment = [x, y];
    snake.push(segment);
  }
  
  function drawSnake() {
    for (var i = 0; i < snake.length; i++) {
      var y = snake[i][1]; // get y element from snake array
      var row = grid.getElementsByTagName('tr')[y];
      var x = snake[i][0]; // get x element from snake array
      var cell = row.getElementsByTagName('td')[x];
      cell.className = 'snake-segment';
    }
  }
})();
