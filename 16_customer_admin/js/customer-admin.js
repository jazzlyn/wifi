/*jshint browser: true */
(function() {
    'use strict';
    var jsonURL = 'data/customers.json';

    function init() {
        loadJSON();
    }

    function loadJSON() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', jsonURL, true);
        xhr.onreadystatechange = stateChanged;
        xhr.send();
    }

    function stateChanged(event) {
        if (event.currentTarget.readyState === 4 && event.currentTarget.status === 200) {
            var json = JSON.parse(event.currentTarget.response);
            createTable(json);
        }
    }

    function createTable(json) {
        var table = document.createElement('table');
        //table.id = 'table';
        table.className = 'pure-table pure-table-horizontal';
        // create thead
        createTHead(json, table);
        // create tbody for table
        var tbody = document.createElement('tbody');
        // iterate through all objects in json array
        for (var i = 0; i < json.length; i++) {
            // get actual object from the array
            var obj = json[i];
            // create row for each customer
            var row = tbody.insertRow();
            // create cell for each customer
            for (var key in obj) {
                var cell = row.insertCell();
                cell.innerHTML = obj[key];
            }
        }
        table.appendChild(tbody);
        document.body.appendChild(table);
    }

    function createTHead(json, table) {
        // creates header for table
        var thead = table.createTHead();
        // inserts a row into the header
        var row = thead.insertRow(0);
        var firstObj = json[0];
        for (var key in firstObj) {
            var cell = row.insertCell();
            var capKey = capitalizeFirstLetter(key);
            cell.innerHTML = capKey;
        }
    }

    function capitalizeFirstLetter(key) {
        return key.charAt(0).toUpperCase() + key.slice(1);
    }

    init();

})();
