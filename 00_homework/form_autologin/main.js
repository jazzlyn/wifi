(function() {
  'use strict';
  var form = document.querySelector('form');
  var submitButton = form.querySelector('button[type=submit]');
  var usernameInput = form.querySelector('input[type=text]');
  var passwordInput = form.querySelector('input[type=password]');
  var inputTimeout;

  function init() {
    disableSubmit();
    usernameInput.addEventListener('keyup', inputHandler);
    passwordInput.addEventListener('keyup', inputHandler);
    submitButton.addEventListener('click', submitHandler);
  }

    function enableSubmit() {
        submitButton.removeAttribute('disabled');
    }

    function disableSubmit() {
        submitButton.setAttribute('disabled', 'disabled');
    }

  function inputHandler(event) {
    if (inputTimeout) {
      clearTimeout(inputTimeout);
    }
    inputTimeout = setTimeout(validateForm, 1000);
  }

  function submitHandler(event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  }


  function validateForm() {
    if (validateField()) {
      enableSubmit();
    }
  }

  function validateField() {
 //   var regEx = new RegExp('^[a-zA-Z0-9_\\-\\.]*$');
    var regEx = new RegExp('^[a-zA-Z0-9]*$');
    if (regEx.test(usernameInput) === false) {
      showError('Der Username darf nur Gross- und Kleinbuchstaben, Zahlen sowie _ - und . beinhalten.', usernameInput)
      return;
    }
    if (usernameInput.value < 6 || usernameInput.value > 20) {
       showError('Der Username darf nur zwischen 6 und 20 Zeichen lang sein.', usernameInput);
      return;
    }
    if (passwordInput.value < 6) {
      showError('Das Passwort muss mindestens 6 Zeichen lang sein.', passwordInput);
      return;
    }
    return true;
  }

  function showError(msg, inputField) {
    var errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    var text = errorDiv.innerHTML = msg;
    inputField.parentNode.insertBefore(errorDiv, inputField.nextElementSibling);
  }

  init();

})();

/*

erstelle ein LoginForm mit folgenden Feldern:
-input: username (6-20 Zeichen, erlaubt sind
abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-.)

- input: password (mindestens 6 zeichen erlaubt ist alles)

- checkbox: automatisch einlogen

validiere ein Feld sobald der User 1 sekunde lang nichts mehr eingegeben hat

zeige pro feld nur 1ne fehlermeldung an z.b. der benutzername muss mindestens 6 zeichen

lang sein.

sind alle felder valide soll der submit aktiviert werden.


*/
