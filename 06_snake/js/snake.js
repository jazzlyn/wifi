(function () {
  'use strict';
  /******** initialize ********/
  var rows = 10
    , cols = 10
    , snake = []
    , snakeStartLen = 4
    , playFieldId = 'playField'
    , playField;

  init();

  function init() {
    playField = document.getElementById(playFieldId);
    drawGrid();

  };

  function drawGrid() {
    var grid = document.createElement('table');
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
  };
}());
