/*

*/
// Gibt Anzahl der Member eines Objekts zurück
function objectLength(object) {
  return Object.keys(object).length;
}

// Ein einzelnes Formfeld kann nach den Kriterien aus fieldConfig variieren.

function getValues() {
  var values = [];
  var htmlField;
  var requiredField;
  for (var key in formConfig) {
    htmlField = loginForm.elements[key].value;
    requiredField = formConfig[key].required;
    values.push(htmlField, requiredField);
  }
  return values;
}

function convertValues(items) {
  var arrays = [];
  var size = 2;
  while (items.length > 0) {
    arrays.push(items.splice(0, size));
  }
  return arrays;
}

function validateField() {
  var values = getValues();
  var valuesArray = convertValues(values);
  event.preventDefault();
  for (var i = 0; i < valuesArray.length; i++) {
    if (valuesArray[i][1] === true && (valuesArray[i][0] !== '' || valuesArray[i][0] !== 'checkbox')) {
      console.log('hier');
      return true;
    } else if (valuesArray[i][1] === false && valuesArray[i][0] !== '') {
      return true;
    } else {
      return false;
    }
  }
}

  // Datentyp prüfen

  // optionale Attribute prüfen

  //console.log(field.name + ' ist ungültig');
  // return "ok";
