(function () {
  'use strict';
  var loginForm = document.getElementById('loginForm');
  var fieldNames = Object.keys(formConfig);

  loginForm.addEventListener('submit', function(event) {
    // zu validierende Felderanzahl des JSON Objects auslesen
    var errors = objectLength(formConfig);
    // zu validierende Felder auslesen
   // var isValid = validateField();
    if (validateField()) {
      errors--;
    }
    // werte /selected etc. aus feld holen
    // required, falls gesetzt, prüfen
    // datentyp prüfen
    // optionale prüfungen (maxLength etc.)
    // wenn nicht valide, absenden verhindern
  });




}());
