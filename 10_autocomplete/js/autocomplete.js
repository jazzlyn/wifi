(function() {
    'use strict';

    var search = document.getElementById('search');
    var fieldWrapper = document.getElementById('fieldWrapper');
    var submitButton = search.querySelector('button[type=submit]');

    function init() {
        search.addEventListener('keyup', inputHandler);
       // search.addEventListener('focus', focusHandler);
    }

    function inputHandler(event) {
        var url = 'countries.php';
        var xhr = new XMLHttpRequest(); // state 0 object wird erstellt
        var value = this.value;
        xhr.onreadystatechange = stateChanged; // trigger, wenn sich der Status ändert
        xhr.open('GET', url + '?srch=' + value);
        xhr.send();
    }

    function clickHandler(event) {
        var newValue = this.innerText || this.textContent;
        search.value = newValue;
        search.nextElementSibling.innerHTML = '';

    }

    function stateChanged(event) {
        if (this.readyState === 4 && this.status === 200) {
            var jsonResponse = JSON.parse(this.response);
            createNodes(jsonResponse);
        }
    }

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
            liNode.addEventListener('click', clickHandler);
            ulNode.appendChild(liNode);
        }
    }
    // focus,
    // mit pfeiltasten durchgehen und mit enter bestätigen. active class, if not, first element. then next sibling. is it last element? if it is, give it the first element back. enter key sets value of input field. clear ulnode. keycodes. focus handler on input field, listens to clickevent
    init();


})();
