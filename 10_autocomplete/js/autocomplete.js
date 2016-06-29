(function() {
    'use strict';

    var search = document.getElementById('search');
    var fieldWrapper = document.getElementById('fieldWrapper');
    var submitButton = search.querySelector('button[type=submit]');

    function init() {
        search.addEventListener('keyup', inputHandler);
    }

    function inputHandler(event) {
        var url = 'js/ac.json';
        var xhr = new XMLHttpRequest(); // state 0 object wird erstellt
        var value = this.value;
        xhr.onreadystatechange = stateChanged; // trigger, wenn sich der Status ändert
        xhr.open('GET', url + '?srch=' + value);
        xhr.send();
    }

    function stateChanged(event) {
        if (this.readyState === 4 && this.status === 200) {
            var jsonResponse = JSON.parse(this.response);
            createNodes(jsonResponse);
        }
    }

    /*
    function createAutoComplete(config) {
        if (autoComplete === undefined) {
            autoComplete = document.createElement('ul');
            autoComplete.classList.add('search-result');
        }
        // Prüfen, ob es bereits lis gibt, ggf. löschen
        var lis = autoComplete.getElementsByTagName('li');
                for(var i = 0; i < lis.length; i++) {
            autoComplete.removeChild(lis[i]);
        }
        for (var j = 0; j < config.length; j++) {
            // Elemente erstellen

        }*/

    function createNodes(jsonResponse) {
        var ulNode = fieldWrapper.querySelector('ul.search-result');
        if (!ulNode) {
            ulNode = document.createElement('ul');
            ulNode.className = 'search-result';
            fieldWrapper.appendChild(ulNode);
        }
        ulNode.innerHTML = '';
        for (var i = 0; i < jsonResponse.length; i++) {
            var liNode = document.createElement('li');
            var text = document.createTextNode(jsonResponse[i]);
            liNode.appendChild(text);
            ulNode.appendChild(liNode);
        }
    }

    init();


})();
