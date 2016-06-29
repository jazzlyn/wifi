(function() {
  'use strict';
/*
erstelle ein Formular das einen em tipp abgeben lässt für den gewinner des finales (select list). hat der user ein land ausgewählt wird der button “tipp abschicken” aktiviert, drückt der user dann da drauf kommt ein dialog: Wir Drücken dir die Daumen das <name der ausgewählten Mannschaft> die em 2016 in Frankreich gewinnt, anstelel des forms. ab hier kann der user nichts mehr machen.
*/
    var form = document.querySelector('form');
    var submitButton = form.querySelector('button[type=submit]');

    function init() {
        disableSubmit();
        submitButton.addEventListener('click', submitHandler);
    }

    function enableSubmit() {
        submitButton.removeAttribute('disabled');
    }

    function disableSubmit() {
        submitButton.setAttribute('disabled', 'disabled');
    }

    function submitHandler(event) {
        /*if (nothing selected)) {
            event.preventDefault();
        }*/
    }

    function getSelectedValue() {
        // get value of select field for enable submit function.
    }

    function dialogBox() {
        // create dialog box with selected country and
        // 'Good Luck! Maybe ' + countrySelect + 'will win!'
    }

  init();


})();
