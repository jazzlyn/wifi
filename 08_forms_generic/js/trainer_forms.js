(function () {
    'use strict';
    var loginForm = document.getElementById('loginForm');
    var fieldNames = Object.keys(formConfig);

    for (var f in formConfig) {
        console.dir(f);
    }

    loginForm.addEventListener('submit', function (ev) {
        var errors = objectLength(formConfig);

        // Alle zu validierenden Felder auslesen
        for (var i = 0; i < fieldNames.length; i++) {
            // Namen des aktuellen Feldes holen
            var fieldName = fieldNames[i];
            // Konfigurations-Objekt für das aktuelle Feld holen
            var fieldConfig = formConfig[fieldName];
            // Aktuelles Feld aus dem DOM holen
            var field = loginForm.elements[fieldName];

            var valid = validateField(field, fieldConfig);

            if (valid === 'ok') {
                errors--;
                // Fehlermeldungen entfernen, falls vorhanden
            }
            else {
                // Fehlermeldungen hinzufügen
            }
        }

        // wenn nicht valide, absenden verhindern
        if (errors !== 0) {
            ev.preventDefault();
        }
    });
}());
