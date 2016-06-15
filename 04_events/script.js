(function () {
  'use strict';
  var firstButton = document.getElementById('firstButton');
  var secondButton = document.getElementById('secondButton');
  var theLink = document.getElementById('theLink');

  /* Wir weisen dem onlick eine Funktion zu. Die Funktion wird als Objekt an onclick weitergegeben. Es kann nur eine Funktion zugewiesen werden.*/
  firstButton.onclick = buttonClicked;

  function buttonClicked(e) {
    var p = document.createElement('p');
    var t = document.createTextNode('klick!');
    p.appendChild(t);
    document.body.appendChild(p);
  }

  /* Mit addEventlistener können mehrere Funktionen zugewiesen werden.
  Der Standard ist, dass ein Eventlistener nur eine Funktion ausführt. */
  secondButton.addEventListener('click', function (e) {
    var p = document.createElement('p');
    var t = document.createTextNode('klock!');
    p.appendChild(t);
    document.body.appendChild(p);
  });
  // link geklickt, alert bla
  theLink.addEventListener('click', function (e) {
    var yes = confirm('Sure?');
    if (yes === false) {
      // verhindert das standardmäßige Verhalten der Funktion
      e.preventDefault;
    }
  });
}());
