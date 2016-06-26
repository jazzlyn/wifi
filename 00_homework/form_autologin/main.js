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
    inputTimeout = setTimeout(function() {
        validateField(event.target);
        validateForm();
    }, 300);
  }

  function submitHandler(event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  }

  function validateForm() {
    if (validateField(usernameInput) && validateField(passwordInput)) {
      enableSubmit();
    }
  }

  function validateField(inputField) {
    removeError(inputField);
    if (inputField === usernameInput) {
      if (/^[a-zA-Z0-9_\.\-]+$/.test(usernameInput.value) === false) {
        showError('Der Username darf nur Gross- und Kleinbuchstaben, Zahlen sowie _ - und . beinhalten.', usernameInput)
        return;
      }
      if (usernameInput.value.length < 6 || usernameInput.value.length > 20) {
         showError('Der Username darf nur zwischen 6 und 20 Zeichen lang sein.', usernameInput);
         return;
      }
    } else {
      if(passwordInput.value.length < 6) {
        showError('Das Passwort muss mindestens 6 Zeichen lang sein.', passwordInput);
        return;
      }
    }
    return true;
  }

  function showError(msg, inputField) {
    if (!inputField.value) {
        return;
    }
    var errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    var text = errorDiv.innerHTML = msg;
    inputField.parentNode.insertBefore(errorDiv, inputField.nextElementSibling);
  }

  function removeError(inputField) {
    while (inputField.nextElementSibling.className === 'error') {
        inputField.parentNode.removeChild(inputField.nextElementSibling);
    }
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
