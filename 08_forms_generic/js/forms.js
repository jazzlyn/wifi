(function () {
    'use strict';
    var loginForm = document.getElementById('loginForm');
    console.log(loginForm);
    var fieldNames = Object.keys(formConfig);

    loginForm.addEventListener('submit', submitHandler);
  
    function submitHandler(event) {
        var errors = objectLength(formConfig);

        // Alle zu validierenden Felder auslesen
        for (var i = 0; i < fieldNames.length; i++) {
          // Namen des aktuellen Feldes holen
          var fieldName = fieldNames[i];
          // Konfigurations-Objekt für das aktuelle Feld holen
          var fieldConfig = formConfig[fieldName];
          // Aktuelles Feld aus dem DOM holen
          var field = loginForm.elements[fieldName];
          // remove errors for cleanup  
          removeError(field);

          var valid = validateField(field, fieldConfig);

          if (valid === 'ok') {
              errors--;
              // Fehlermeldungen entfernen, falls vorhanden              
          }
          else {
            var errorMsg;
            switch(valid) {
              case 'E_required':
                errorMsg = fieldName + ' muss ausgefüllt sein';
                break;
              case 'E_email':
                errorMsg = fieldName + ' muss eine email enthalten';
                break;
              case 'E_integer':
                errorMsg = fieldName + ' muss eine Zahl enthalten';
                break;
              case 'E_boolean':
                errorMsg = fieldName + ' muss ein boolean wert sein';
                break;
            }

            addError(field, errorMsg);
            // TODO AT HOME:
            // Fehlermeldungen hinzufügen
            // Email Validation?
          }
        }

        // wenn nicht valide, absenden verhindern
        if (errors !== 0) {
            event.preventDefault();
        }
    }
}());
