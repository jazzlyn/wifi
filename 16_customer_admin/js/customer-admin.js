/*jshint browser: true */
(function() {
    'use strict';
    var jsonURL = 'data/customers.json';
    var content = document.querySelector('.main-content');
    var tooltip;
    var tooltipImage;
    var mapsUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=%geodata%&zoom=8&size=200x200&key=AIzaSyAFUcvizMVY5V9IXYuZfnPgnQkJdZ0GAk4';

    loadJSON();
    createTooltip();

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
            var row = document.createElement('tr');
            // create cell for each customer
            for (var key in obj) {
                var cell = document.createElement('td');
                row.appendChild(cell);
                // if key is geodata, make map
                if (key === 'geodata') {
                    cell.addEventListener('mouseover', showTooltip);
                    cell.addEventListener('mouseout', hideTooltip);
                } else if (key === 'id') {
                    var editImg = document.createElement('img');
                    editImg.src = 'buttons/pencil.svg';
                    editImg.className = 'table-button';
                    editImg.addEventListener('click', editData);
                    cell.appendChild(editImg);
                    // ends actual for loop and begins next loop
                    continue;
                }
                cell.innerHTML = obj[key];
                // append them ALL!
            }
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        content.appendChild(table);
    }

    function createTHead(json, table) {
        // creates header for table
        var thead = document.createElement('thead');
        // inserts a row into the header
        var row = document.createElement('tr');
        for (var key in json[0]) {
            // create cell headlines for each key
            var cell = document.createElement('th');
            cell.innerHTML = key;
            // append them ALL!
            row.appendChild(cell);
        }
        thead.appendChild(row);
        table.appendChild(thead);
    }

    function showTooltip(event) {
        if (event.target === tooltip) {
            return;
        }
        var cell = event.target;
        var geodata = cell.innerHTML;
        geodata = geodata.replace(/ /g, '');
        if (geodata !== '') {
            var map = mapsUrl.replace('%geodata%', geodata);
            tooltipImage.src = map;
            cell.appendChild(tooltip);
        }
    }

    function hideTooltip(event) {
        tooltip.remove();
    }

    function createTooltip() {
        if (tooltip) {
           return;
        }
        tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltipImage = document.createElement('img');
        tooltip.appendChild(tooltipImage);
    }

    function editData(event) {
        var line = event.target.parentNode.parentNode;
        var cells = line.getElementsByTagName('td');
        for (var i = 1; i < cells.length; i++) {
            var cellText = cells[i].innerHTML;
            cells[i].setAttribute('data-value', cellText);
            var input = document.createElement('input');
            input.value = cellText;
            cells[i].innerHTML = '';
            cells[i].appendChild(input);
            // save button generieren -> events
            // abbrechen button regenerieren -> events, bei abbruch alter text zurück
            // TODO in createTable Formular um die Tabelle herum setzen
            // Tabelle muss sich in dem Formular befinden
            // Form muss on submit event abfangen, weil AJAX, Json stringify
            // nachlesen HTML5 data attributes
        }
    }
})();
