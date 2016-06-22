(function () {
  'use strict';
  /*// zugriff auf formulare über die üblichen selektoren wie id, klasse, tag etc.
  var loginForm = document.getElementById('loginForm');
  // document besitzt ein forms array.
  console.log(document.forms);
    // Jedes Formular besitzt ein Elements Objekt.
  console.dir(loginForm.elements);
  // Sie können neben Array-Selektor auch als Objekte angesprochen werden.
  console.log(loginForm.elements.password);*/
  var username = document.getElementById('userName');
  var password = document.getElementById('password');
  var service = document.getElementById('service');
  var checkbox = document.getElementById('agb');

  loginForm.addEventListener('submit', function(e) {
    if (validateForm() === 0) {
      alert('okay');
    } else {
      e.preventDefault();
      if (username.value === '') {
        getError(username);
      }
      if (password.value === '') {
        getError(password);
      }
      if (service.value === '') {
        getError(service);
      }
      if (checkbox.checked === false) {
        getError(checkbox);
      }
    }
  });


  function validateForm() {
  // add blur event for live validating
  var errors = 4;
    if (username.value !== '') {
      errors--;
      deleteError(username);
    }
    if (password.value !== '') {
      errors--;
      deleteError(password);
    }
    if (service.value !== '') {
      errors--;
      deleteError(service);
    }
    if (checkbox.checked === true) {
      errors--;
      deleteError(checkbox);
    }
    return errors;
  };


  function getError(element) {
    var errorElement = document.createElement('p');
    var text = document.createTextNode('Bitte füllen Sie das Feld aus!');
    errorElement.appendChild(text);
    errorElement.className = 'form-error';
    element.parentNode.insertBefore(errorElement, element);
  }

  function deleteError(element) {
    var errorClass = element.nextElementSibling;
    if (errorClass.classList.contains('form-error')) {
      element.parentNode.removeChild(errorClass);
    }
  }
})();

/*(function () {

    var errorRequired = 'Bitte füllen Sie das Feld aus.';
    var errorSelectRequired = 'Bitte wählen Sie einen Wert aus.';
    var errorCheckbox = 'Bitte bestätigen Sie';

    var userName = document.getElementById('userName');
    var password = document.getElementById('password');
    var service = document.getElementById('service');
    var agb = document.getElementById('agb');

    loginForm.addEventListener('submit', function (e) {
        // Best practice: ein Formular ist ungültig und muss erst beweisen, dass es gültig ist.
        var errors = 4; // Anzahl der möglichen Fehler

        if (userName.value !== '') {
            errors--;
            removeError(userName);
        } else {
            addError(userName, errorRequired);
        }

        if (password.value !== '') {
            errors--;
            removeError(password);
        } else {
            addError(password, errorRequired);
        }

        if (service.options[service.selectedIndex].value !== '') {
            errors--;
            removeError(service);
        } else {
            addError(service, errorSelectRequired);
        }

        if (agb.checked === true) {
            errors--;
            removeError(agb);
        } else {
            addError(agb, errorCheckbox);
        }

        if (errors !== 0) {
            e.preventDefault();
        }
    });

    function addError(elem, errorMsg) {
        var myError = getError(elem);
        myError.innerHTML = errorMsg;

        // Checkboxen (und später Radio Buttons) gesondert behandeln, Fehler nach label
        var where = elem;
        if (elem.type === 'checkbox') {
            where = document.querySelector('label[for=' + elem.id + ']');
        }
        where.insertAdjacentElement('afterend', myError);
    }

    function getError(elem) {
        // Check, ob error bereits vorhanden ist
        var nextElement = elem.nextElementSibling;

        if (nextElement !== null && nextElement.classList.contains('form-error')) {
            return nextElement;
        }

        // Erstellen, falls es noch nicht vorhanden ist
        var myError = document.createElement('div');
        myError.className = 'form-error';
        return myError;
    }

    function removeError(elem) {
        // Checkboxen müssen ein wenig anders behandelt werden
        var where = elem;
        if (elem.type === 'checkbox') {
            where = document.querySelector('label[for=' + elem.id + ']');
        }
        var nextElement = where.nextElementSibling;

        if (nextElement !== null && nextElement.classList.contains('form-error')) {
            // Kann nur vom Elternelement aus gelöscht werden.
            nextElement.parentNode.removeChild(nextElement);
        }
    }

}());
