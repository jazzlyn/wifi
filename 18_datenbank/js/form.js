/*jshint browser: true */
(function() {
    'use strict';
    var url = 'manage-customers.php';
    var form = document.getElementById('form');
    var vorname = document.querySelector('input[name="vorname"]');
    var nachname = document.querySelector('input[name="nachname"]');
    var email = document.querySelector('input[name="email"]');
    var geburtsdatum = document.querySelector('input[name="geburtsdatum"]');
    var adresse = document.querySelector('input[name="adresse"]');
    var ort = document.querySelector('input[name="ort"]');
    var plz = document.querySelector('input[name="plz"]');
    var geodata = document.querySelector('input[name="geodata"]');

    form.addEventListener('submit', submitHandler);

    function submitHandler(event) {
        event.preventDefault();
    }

    // create new JSON object for database



    // send with ajax

})();
