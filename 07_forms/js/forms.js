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

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault;
    if (validateForm() === 0) {
      alert('okay');
    } else {
       wrongInput();
    }
  });


  function validateForm() {
    var errors = 2;
    if (username.value !== '') {
      errors--;
      deleteErrorMessage();
    }
    if (password.value !== '') {
      errors--;
      deleteErrorMessage();
    }
    return errors;
  };

  function wrongInput() {
    var errorElement = document.createElement('div');
    errorElement.className = 'form-error';
    errorElement.innerHTML = 'Bitte füllen Sie das Feld aus!';
    username.insertAdjacentHTML('afterend', errorElement);
  }

  function deleteErrorMessage() {
    var errorClass = username.nextElementSibling;
    if (errorClass.classList.contains('form-error')) {
      username.parentNode.removeChild(errorClass);
    }
  }
})();
