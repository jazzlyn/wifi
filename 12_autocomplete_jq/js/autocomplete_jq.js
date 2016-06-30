(function() {
    'use strict';

    var search = $('#search');
    var fieldWrapper = $('#fieldWrapper');

    function init() {
        search.on('keyup', inputHandler);
    }

    function inputHandler(event) {
        var url = 'countries.php';
        $.get(
            url,
            {'srch': search.val()},
            function(data) {
                console.log(data);
                createAutoComplete(data);
            },
            'json'
        );
    }

    function createAutoComplete(JSONresponse) {
        var ulNode = $('<ul></ul>').addClass('search-result');
        for (var i = 0; i < JSONresponse.length; i++) {
            var liNode = $('<li></li>')
                .text(JSONresponse[i])
                .on('click', function(event) {
                    search.val( $(this).text() );
                    ulNode.empty();
            });
            ulNode.append(liNode);
        }
        fieldWrapper.append(ulNode);
    }

    init();

})();
