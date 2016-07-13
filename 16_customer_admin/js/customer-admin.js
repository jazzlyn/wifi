/*jshint browser: true */
(function() {
    'use strict';
    var jsonURL = 'data/customers.json';

    function init() {
        loadJSON();
    }


    function loadJSON() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', jsonURL);
        xhr.onreadystatechange = stateChanged;
        xhr.send();
    }

    function stateChanged() {
        if (event.currentTarget.readyState === 4 && event.currentTarget.status === 200) {
            var jsonResp = JSON.parse(event.currentTarget.response);
            createTable(jsonResp);
        }
    }

    function createTable(jsonResp) {
        var gridTable = document.createElement('table');
        gridTable.id = 'gridTable';
        gridTable.className = 'pure-table pure-table-horizontal';
        // create thead
        createTHead(jsonResp, gridTable);
        // create tbody for table
        var tbody = document.createElement('tbody');
        // iterate through all objects in json array
        for (var i = 0; i < jsonResp.length; i++) {
            // get actual object from the array
            var obj = jsonResp[i];
            // create row for each customer
            var row = tbody.insertRow();
            // create cell for each customer
            for (var key in obj) {
                var cell = row.insertCell();
                cell.innerHTML = obj[key];
            }
        }
        gridTable.appendChild(tbody);
        document.body.appendChild(gridTable);
    }

    function createTHead(jsonResp, gridTable) {
        // creates header for table
        var thead = gridTable.createTHead();
        // inserts a row into the header
        var row = thead.insertRow(0);
        var firstObj = jsonResp[0];
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
