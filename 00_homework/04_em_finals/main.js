(function() {
    'use strict';
    var form = document.querySelector('form');
    //var select = form.querySelector('select');
    var select = document.getElementById('country');
    var submitButton = form.querySelector('button[type=submit]');

    function init() {
        disableSubmit();
        select.addEventListener('change', changeHandler);
        form.addEventListener('submit', submitHandler);
    }

    function enableSubmit() {
        submitButton.removeAttribute('disabled');
    }

    function disableSubmit() {
        submitButton.setAttribute('disabled', 'disabled');
    }

    function changeHandler(event) {
        if (select.value !== '') {
            enableSubmit();
        } else {
            disableSubmit();
        }
    }

    function submitHandler(event) {
        event.preventDefault();
        dialogBox();
    }

    function dialogBox() {
        var countrySelect = select.value;
        form.parentNode.innerHTML = 'Good Luck! Maybe ' + countrySelect + ' will win!';
    }

  init();


})();
