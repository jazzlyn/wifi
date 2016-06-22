(function() {
    'use strict';
    // submit wird aktiv, wenn username und pw ausgefüllt sind. enter soll abgefangen werden. abschickbutton ausgegraut.

    var form = document.querySelector('form');
    var usernameInput = form.querySelector('input[type=text]');
    var passwordInput = form.querySelector('input[type=password]');
    var submitButton = form.querySelector('button[type=submit]');

    function init() {
        form.addEventlistener('submit', submitHandler);
        usernameInput.addEventListener('keyup', inputHandler);
        passwordInput.addEventListener('keyup', inputHandler);
        disableButton();
    }

    function submitHandler(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    }

    function inputHandler(event) {
        if (validateForm()) {
            return enableSubmit();
        }
        disableSubmit();
    }

    function validateForm() {
        return usernameInput.value && passwordInput.value;
    }

    function enableSubmit() {
        submitButton.removeAttribute('disabled');
    }

    function disableSubmit() {
        submitButton.setAttribute('disabled', 'disabled');
    }

    init();
    

})();
