(function() {
    'use strict';

    var search = $('#search');
    var fieldWrapper = $('#fieldWrapper');

    var UP = 38;
    var DOWN = 40;
    var ENTER = 13;
    
    function init() {
        search.on('keyup', keyupHandler);
        search.on('keydown', keydownHandler);
    }

    function keyupHandler(event) {
        var keyCode = event.keyCode;
        if (keyCode === DOWN) {
            var index = getCurrentIndex();
            index++;
            setActive(index);
            return;
        }
        if (keyCode === UP) {
            var index = getCurrentIndex();
            index--;
            if (index < 0) {
                index = getLastIndex();
            }
            setActive(index);
            return;
        }

        var url = 'countries.php';
        $.get(
            url,
            {'srch': search.val()},
            function(data) {
                createAutoComplete(data);
            },
            'json'
        );
    }
    function keydownHandler(event) {
        console.log(event);
        if (event.keyCode === UP || event.keyCode === DOWN) {
            return;
        }
        if (event.keyCode === ENTER) {
            event.preventDefault();
            search.val($('.search-result .active').text);
        }

        var url = 'countries.php';
        $.get(
            url,
            {'srch': search.val()},
            function(data) {
                createAutoComplete(data);
            },
            'json'
        );
    }

    function createAutoComplete(JSONresponse) {
        var ulNode = $('.search-result').first();
        if (!ulNode.length) {
            ulNode = $('<ul></ul>').addClass('search-result');
        }
        ulNode.empty();
        for (var i = 0; i < JSONresponse.length; i++) {
            var liNode = $('<li></li>').text(JSONresponse[i]).on('click', function(event) {
                search.val( $(this).text() );
                ulNode.remove();
            });
            ulNode.append(liNode);
        }
        fieldWrapper.append(ulNode);
    }

    function setActive(index) {
        $('.search-result .active').removeClass('active');
        var $currentNode = $('.search-result li:nth-child(' +(index+1) + ')');
        $currentNode.addClass('active');
        
    }
    
    function getCurrentIndex() {
        var currentNode = document.querySelector('.search-result .active');
        if (!currentNode) {
            return -1;
        }
        for (var i = 0; i < currentNode.parentNode.childNodes.length; i++) {
            if (currentNode.parentNode.childNodes[i] === currentNode) {
                return i;
            }
        }
    }
    
    function getLastIndex() {
        return $('.search-result').children().length - 1;
    }
    
    init();

})();

