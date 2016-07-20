/*jshint browser: true */
(function() {
    'use strict';

    function init() {
        var p1 = document.getElementById('p1');
        console.log(p1);
        modifyString(p1, true, 90);
    }

    function cutString(element, string, keepWords, maxLength) {
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
        element.innerHTML = trimmedString;
        return element;
        //return trimmedString;
    }

    function modifyString(element, keepWords, maxLength) {
        var oldString = element.textContent;
        var newString = cutString(element, oldString, keepWords, maxLength);

        if (element === newString) {
            var readMore = createReadMore();
            clickEvent(element, readMore, oldString);
            return;
        }
        if (element === oldString) {
            var readLess = createReadLess();
            clickEvent(element, readLess, newString);
            return;
        }
    }

    function clickEvent(element, readMoreOrLess, stringElement) {
        readMoreOrLess.addEventListener('click', function(event) {
            event.preventDefault();
            element.innerHTML = stringElement;
        });
        element.appendChild(readMoreOrLess);
    }

    function createReadMore() {
        var readMore = document.createElement('a');
        readMore.href = '#';
        readMore.innerHTML = '...weiterlesen';
        return readMore;
    }

    function createReadLess() {
        var readLess = document.createElement('a');
        readLess.href = '#';
        readLess.innerHTML = '...zuklappen';
        return readLess;
    }

    init();

})();
