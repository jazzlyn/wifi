/**
*   Gibt die Anzahl der Members eines Objekts zurück
*/
function objectLength(obj){
    return  Object.keys(obj).length;
}

/**
*   Ein einzelnes Formfeld nach den Kriterien aus fieldConfig validieren
*/
function validateField(field, fieldConfig) {
    var myType = getFieldType(field);
    // Jeder check bricht bei scheitern die Funktion mit return "fehlercode" ab, ansonsten "ok"
    // required überprüfen
    if (fieldConfig.required === true) {
        if (isFilledOut(field) === false) {
            return 'E_required';
        }
    }
    // nicht required, nicht ausgefüllt -> return true
    else if (isFilledOut(field) === false) {
        return 'ok';
    }
    // Datentyp prüfen
    var dataType = fieldConfig.dataType;
    switch (dataType) {
        case 'email':
            if (validateEmail(field.value) === false) {
                return 'E_email';
            }
            break;
        case 'int':
            if (validateInteger(field.value) === false) {
                return 'E_integer';
            }
            break;
        case 'boolean':
             if (validateBoolean(field.value) === false) {
                return 'E_boolean';
            }
            break;
    }
    // optionale Attribute prüfen
    return 'ok';
}

function getFieldType(field) {
    // Node Namen in Kleinbuchstaben ermitteln
    var myType = field.nodeName.toLowerCase();
    // Inputs geben ihren Typ zurück
    if (myType === 'input') {
        return field.type;
    }
    // Select, textarea geben ihren nodename zurück
    return myType;
}
//Unabhänging vom Feldtyp wird ermittelt, ob es einen gültigen/ausgefüllten Wert gibt
function isFilledOut (field) {
    var fieldType = getFieldType(field);
    // Einige Felder wie select/checkbox benötigen spezielle Prüfung
    switch (fieldType) {
        case 'select':
            // console.log(field.options[field.selectedIndex].value === field.value);
            // PRÜFEN: würde vielleicht field.value genügen?
            if (field.value === '') {
                return false;
            } else {
                return true;
            }
            break;
        case 'checkbox':
            return field.checked;
    }
    // Alle anderen Felder prüfen auf Leerstring
    if (field.value === '') {
        return false;
    }
    return true;
}

function validateEmail(val) {
    var regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regEx.test(val);
}

function validateInteger(val) {
      var float = parseFloat(val);
      if (!isNaN(float) && isFinite(float) && float === parseInt(val)) {
        return true;
      }
      return false;
    }

function validateBoolean(val) {
    return val === 'true';
}

function addError(field, errorMsg) {
    var myError = getError(field);
    myError.innerHTML = errorMsg;

    // Checkboxen (und später Radio Buttons) gesondert behandeln, Fehler nach label
    var where = field;
    if (field.type === 'checkbox') {
        where = document.querySelector('label[for=' + field.id + ']');
    }
    where.insertAdjacentElement('afterend', myError);
}
// Wenn noch kein Fehler vorhanden, Element erzeugen, ansonsten vorhandenen
// Fehler zurück geben.
function getError(field) {
    // Check, ob error bereits vorhanden ist
    var nextElement = field.nextElementSibling;

    if (nextElement !== null && nextElement.classList.contains('form-error')) {
        return nextElement;
    }
    // Erstellen, falls es noch nicht vorhanden ist
    var myError = document.createElement('div');
    myError.className = 'form-error';
    return myError;
}
// Falls Fehler vorhanden ist, soll er gelöscht werden.
function removeError(field) {
    // Checkboxen müssen ein wenig anders behandelt werden
    var where = field;
    if (field.type === 'checkbox') {
        where = document.querySelector('label[for=' + field.id + ']');
    }
    var nextElement = where.nextElementSibling;

    if (nextElement !== null && nextElement.classList.contains('form-error')) {
        // Kann nur vom Elternelement aus gelöscht werden.
        nextElement.parentNode.removeChild(nextElement);
    }
}
