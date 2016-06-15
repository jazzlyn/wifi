sayHello();
// Funktion ohne Parameter/Rückgabewert
function sayHello() {
  var p = document.createElement('p');
  var t = document.createTextNode('Hello');
  p.appendChild(t);
  document.body.appendChild(p);

  // Oder: document.body.innerHTML = '<p>Hello</p>'; -> Problematisch, da alles im body überschrieben wird.
}

// Aufruf der Methode
//sayHello();

// Funktionen - Gültigkeitsbereiche
var a = 10;
showA();

function showA() {
  /*
      Erzeuge Variable innerhalb des aktuellen Gültigkeitsbereiches.
      Trotz gleichen Namens existiert diese Variable nur zum Zeitpunkt
      des Aufrufs. Die globale Variable wird dadurch ignoriert.
  */
  var a = 4;
  var b = 100;
  console.log(a);
}
// Globale Variable
console.log(a);

// b existiert nur in der Funktion showA und kann außerhalb nicht verwendet werden.
//console.log(b);

/* Funktionsparameter

in den runden Klammern können über Variablen Werte von außen in die Funktion
übergeben werden. Es können keine oder beliebig viele Parameter deklariert
werden.

a wird zu b addiert und in der Konsole ausgegeben.
*/
function addNumbers(a, b) {
  /*
      Als ob:
      var a = erster Wert a von außen;
      var b = zweiter Wert b von außen;
  */
  console.log(a + b);
}

// Beim Aufruf werden die übergebenen Werte in der deklarierten Reihenfolge zugewiesen
addNumbers(4, 5);
addNumbers(7, 4);

/*  Rückgabewerte:
    return beendet die Funktion und liefert an deren Stelle das Ergebnis des
    nachfolgenden Ausdrucks.
*/
function multiplyNumbers(a, b, c) {
  // var product = a * b * c;
  return a * b * c;
}

var p1 = multiplyNumbers(2, 3, 4);
console.log(p1);


// Zahl hoch zwei zurückgeben und in den body schreiben
var multiply = function (a) {
  return a * a;
}
var sum = multiply(5);
var text = document.createTextNode(sum);
document.body.appendChild(text);
