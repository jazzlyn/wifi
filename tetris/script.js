'use strict';
var rows = 7;
var cols = 4;
var tid = "grid";

/*
    Eine Zuweisung wird von rechts nach links abgearbeitet.
    Rechts steht eine Konstante, eine Variable oder ein Ausdruck.
    Erst nachdem der Ausdruck ausgewertet wurde (z. B. eine Berechnung,
    das Ergebnis einer Funktion, eine String-Operation) wird das Ergebnis
    der Variable auf der linken Seite zugewiesen.
*/
var gridTable = document.createElement('table');
gridTable.setAttribute('id', tid);
// Wird benötigt, wenn das Attribut nicht als JS Variable geschrieben werden kann
gridTable.setAttribute('data-quarter', 3);

// Schleife für das Erstellen der Zeilen
for (var i = 0; i < rows; i++) {
  var row = document.createElement('tr');

  // Schleife zum Erstellen der Zellen
  for (var j = 0; j < cols; j++) {
    var cell = document.createElement('td');
    // cell.innerHTML = 'Daten';
    // Sauberen DOM Text erzeugen
    var t = document.createTextNode('Daten');
    cell.appendChild(t);

    row.appendChild(cell);
  }
  gridTable.appendChild(row);
}

document.body.appendChild(gridTable);

console.log(gridTable);
