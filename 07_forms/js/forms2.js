(function() {
    'use strict';

    //var form =
    //var usernameInput
    //var passwordInput
    //...
    function init() {
        form.addEventListener('submit', submitHandler);
        usernameInput.addEventListener('blur', blurHandler);
        passwordInput.addEventListener('blur', blurHandler);
    }

    function submitHandler(event) {
        // if validateForm() === true submit form
    }

    function validateForm() {
        // check if username is not empty
        // if so show error
        // check if password is not empty
        // if so show error
    }

    function showError(node, msg) {
        // if msg is empty use default msg
        // create error div node for node if not exist
        // else select error div
        // innerHTML = msg;
    }

    function blurHandler(event) {
        var node = event.target;
        // remove node errors on blur
    }

    init();

})();

