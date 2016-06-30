(function() {
    'use strict';

    var loginform = document.getElementById('loginform');
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var submitButton = document.querySelector('input[type=submit]');
    var url = 'php/check-customer.php';


    function init() {
        loginform.addEventListener('submit', submitHandler);
    }

    function submitHandler(event) {
        event.preventDefault();
        if (username.value && password.value) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onreadystatechange = stateComplete;
            var postValues = {username: username.value, password: password.value};
            xhr.send(JSON.stringify(postValues));
        } else {
            console.log('nicht ausgefüllt');
        }
    }

    function stateComplete() {
        if (event.target.readyState === 4 && event.target.status === 200) {
            console.log('ausgefüllt');
        }
    }

    init();


})();
