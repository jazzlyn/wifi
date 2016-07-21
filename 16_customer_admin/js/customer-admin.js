/*jshint browser: true */
(function() {
    'use strict';
    var jsonURL = 'data/customers.json';
    var content = document.querySelector('.main-content');
    var form;
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

    function createForm() {
        form = document.createElement('form');
        form.id = 'form';
        form.action = 'POST';
        form.addEventListener('submit', submitHandler);
    }

    function createTable(json) {
        createForm();
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
            row.id = obj.id;
            // create cell for each customer
            for (var key in obj) {
                var cell = document.createElement('td');
                row.appendChild(cell);
                // if key is geodata, make map
                if (key === 'geodata') {
                    cell.addEventListener('mouseover', showTooltipHandler);
                    cell.addEventListener('mouseout', hideTooltipHandler);
                } else if (key === 'id') {
                    createImg(cell, 'edit');
                    createImg(cell, 'delete');
                    // ends actual for loop and begins next loop
                    continue;
                }
                cell.innerHTML = obj[key];
                // append them ALL!
            }
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        form.appendChild(table);
        content.appendChild(form);
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

    function submitHandler(event) {
        event.preventDefault();
        var data = new FormData(form);
        console.log(data);
    }

    function showTooltipHandler(event) {
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

    function hideTooltipHandler(event) {
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

    function editHandler(event) {
        var line = event.target.parentNode.parentNode;
        editData(line);
        var cell = switchButton(line);
        createImg(cell, 'save');
        createImg(cell, 'cancel');
    }

    function editData(line) {
        var cells = line.getElementsByTagName('td');
        for (var i = 1; i < cells.length; i++) {
            var cellText = cells[i].innerHTML;
            cells[i].setAttribute('data-value', cellText);
            var input = document.createElement('input');
            input.name = getInputName(i);
            input.value = cellText;
            cells[i].innerHTML = '';
            cells[i].appendChild(input);
        }
        var hiddenInput = createHiddenInput(line);
        line.appendChild(hiddenInput);
    }

    function createHiddenInput(line) {
        var hiddenInput = document.createElement('input');
        hiddenInput.name = 'id';
        hiddenInput.value = line.id;
        hiddenInput.type = 'hidden';
        return hiddenInput;
    }

    function getInputName(index) {
        var th = document.getElementsByTagName('th');
        return th[index].innerHTML;
    }

    function saveHandler(event) {
        var line = event.target.parentNode.parentNode;
        saveData(line);
        var cell = switchButton(line);
        createImg(cell, 'edit');
        createImg(cell, 'delete');
    }

    function saveData(line) {
        var cells = line.getElementsByTagName('td');
        for (var i = 1; i < cells.length; i++) {
            cells[i].innerHTML = cells[i].querySelector('input').value;
        }
    }

    function cancelHandler(event) {
        var line = event.target.parentNode.parentNode;
        cancelData(line);
        var cell = switchButton(line);
        createImg(cell, 'edit');
        createImg(cell, 'delete');
    }

    function cancelData(line) {
        var cells = line.querySelectorAll('td');
        for (var i = 1; i < cells.length; i++) {
            cells[i].innerHTML = cells[i].getAttribute('data-value');
        }
    }

    function deleteHandler(event) {
        var line = event.target.parentNode.parentNode;
        deleteData(line);
    }

    function deleteData(line) {
        line.parentNode.removeChild(line);
    }

    function switchButton(line) {
        var cell = line.getElementsByTagName('td')[0];
        cell.innerHTML = '';
        return cell;
    }

    function createImg(cell, mode) {
        var img = document.createElement('img');
        img.className = 'table-button';
        img.src = 'buttons/' + mode + '.svg';
        cell.appendChild(img);
        switch (mode) {
            case 'edit':
                img.addEventListener('click', editHandler);
                break;
            case 'delete':
                img.addEventListener('click', deleteHandler);
                break;
            case 'save':
                img.addEventListener('click', saveHandler);
                break;
            case 'cancel':
                img.addEventListener('click', cancelHandler);
                break;
        }
    }
})();
