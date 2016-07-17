/*jshint browser: true */
(function() {
    'use strict';
    var p = document.querySelector('p');
    var string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, vitae. Tempore sed rem error minus harum soluta, odio explicabo quaerat, labore nostrum libero a doloribus ullam, neque reprehenderit repellat maxime.';
    var span;

    function init() {
        createPoints();
        cutString(string, true);
    }

    function cutString(string, keepWords) {
        if (string.length < 120) {
            throw Error('String is too short!');
        }
        var trimmedString = string.substring(0, 120);
        if (keepWords) {
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')));
        }
        p.innerHTML = trimmedString + '…';
        p.appendChild(span);
    }

    function createPoints() {
        span = document.createElement('span');
        span.innerHTML = 'weiterlesen';
        span.addEventListener('click', clickHandler);
    }

    function clickHandler() {
        p.innerHTML = string;
    }

    init();

})();
