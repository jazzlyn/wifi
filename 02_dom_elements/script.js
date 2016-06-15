/* IIFE Immdiately invoked function expression - selbstaufrufender Funktionsausdruck
Anonyme Funktionen werden ohne Namen deklariert und existieren nur im Speicher. Sie werden nur einmal aufgerufen. Da Funktionsdeklarationen aber keinen Ausdruck darstellen, wandeln wir die Deklaration durch Klammern in einen Ausdruck um. Damit lässt sich die eben erstellte Funktion aufrufen!

Wir schaffen dadurch einen eigenen Gültigkeitsbereich und arbeiten nicht im globalen Raum.

(function() {
  'use strict';
}());
*/

(function () {
  'use strict';
  // Element mit der para1 selektieren
  var para1 = document.getElementById('para1');
  // Alle Absätze selektieren -> Array wird zurück gegeben.
  var allParas = document.getElementsByTagName('p');
  for (var i = 0; i < allParas.length; i++) {
    allParas[i].style.backgroundColor = 'grey';
  }
  // Alle Elemente mit der Klasse 'marked' selektieren
  var marked = document.getElementsByClassName('marked');
  // querySelector selektiert anhand eines CSS Selektors und gibt das erste Element zurück.
  var m1 = document.querySelector('.marked');
  // querySelectorAll selektiert alle Elemente und gibt ein Array zurück.
  var m2 = document.querySelectorAll('.marked');
  // In der ersten Liste jeden zweiten Link rot hinterlegen
  var links = document.querySelectorAll('ul:first-of-type>li:nth-child(even)>a');
  for (var i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = 'red';
  }
}());
