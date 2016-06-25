/*
 * mithilfe einer konfigurationsdatei soll ein formular validiert werden
 * error wenn nicht valide
 * es werden alle fehlerhaften felder mit einem error versehen
 * abschicken wenn valide
 */
(function() {
    'use strict';

    // wir schreiben die config nicht in ein pseudo JSON solange wir nciht wissen was JSON ist oder wozu es da ist.
    var config = {
         "username": {
            "id": "userName",
            "required": true,
            "dataType": "text",
            "maxLength": 20
         },
         "password": {
            "id": "password",
            "required": true,
            "dataType": "password",
            "maxLength": 76,
            "minLength": 8
        },
        "service": {
            "id": "service",
            "required": true,
            "dataType": "select",
            "multiple": false
        },
        "agb": {
            "id": "agb",
            "required": true,
            "dataType": "boolean"
        }
    };

    var form = document.querySelector('form');

    function init() {
        form.addEventListener('submit', submitHandler);
    }

    function submitHandler(event) {
        if (!validate()) {
            event.preventDefault();
        }
    }

    function validate() {
        for (var key in config) {
            var formField = form.querySelector('#' + config[key].id);
            validateField(formField);

            //if (config[key].required && (!formField.value || (formField.type === 'checkbox' && !formField.checked))) {
            //   showError(formField, 'field ' + key + ' is required');
            //      }
        }
        return !form.querySelectorAll('.form-error').length;
    }

    // TODO connect this function
    function validateField(formField) {
        var fieldConfig = getFieldConfig(formField.id);
    }

    function getFieldConfig(id) {
        for (var key in config) {
            if (config[key].id === id) {
                return config[key];
            }
        }
    }

    function showError(formField, msg) {
        var errorNode = document.createElement('p');
        errorNode.className = 'form-error';
        errorNode.innerHTML = msg;
        formField.parentNode.insertBefore(errorNode, formField);
    }

    init();

})();

