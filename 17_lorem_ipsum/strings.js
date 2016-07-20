/*jshint browser: true */
(function() {
    'use strict';

    function init() {
        var p1 = document.getElementById('p1');
        enableFolding(p1, true, 90);
    }

    function enableFolding(node, keepWords, maxLength) {
        var longString = node.textContent;
        var shortString = cutString(longString, keepWords, maxLength);
        node.setAttribute('data-value', longString);
        node.innerHTML = shortString;
        var a = document.createElement('a');
        a.innerHTML = '&nbsp;weiterlesen…';
        a.setAttribute('data-value', '&nbsp;zuklappen');
        node.appendChild(a);
        a.addEventListener('click', toggleStrings);
    }

    function toggleStrings(event) {
        var node = event.currentTarget.parentNode;
        var a = event.currentTarget;
        node.removeChild(a);
        var nodeString = node.textContent;
        node.innerHTML = node.getAttribute('data-value');
        node.setAttribute('data-value', nodeString);
        var aString = a.textContent;
        a.innerHTML = a.getAttribute('data-value');
        a.setAttribute('data-value', aString);
        node.appendChild(a);
    }

    function cutString(string, keepWords, maxLength) {
        if (typeof(string) !== 'string' || string.length === 0) {
            return '';
        }
        if (maxLength === undefined || maxLength.isNaN === true) {
            maxLength = 120;
        }
        if (string.length < maxLength) {
            throw Error('String is too short!');
        }
        var trimmedString = string.substring(0, maxLength);
        if (keepWords === true) {
            var lastSpace = trimmedString.lastIndexOf(' ');
            if (lastSpace > -1) {
                trimmedString = trimmedString.substring(0, Math.min(trimmedString.length, lastSpace));
            }
        }
        return trimmedString;
    }
    
    init();

})();
