var rows = 7;
var cols = 4;
var tid = "grid";

var gridTable = document.createElement('table');
gridTable.setAttribute('id', tid);
gridTable.setAttribute('data-quarter', 3);
for (var i = 0; i < rows; i++) {
  var row = document.createElement('tr');
  gridTable.appendChild(row);
// set cols for 
  for (var j = 0; j < cols; j++) {
    var cell = document.createElement('td');
    var t = document.createTextNode('Daten');
    cell.appendChild(t);
    row.appendChild(cell);
    }
}
document.body.appendChild();

console.log(gridTable);
