/*jshint browser: true */
(function() {
    'use strict';
    var jsonURL = 'data/zodiac-data.json';
    var wrapper;

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
            createWrapper();
            createZodiacList(json);
        }
    }

    function createWrapper() {
        wrapper = document.createElement('div');
        wrapper.className = 'pure-menu wrapper';
        var heading = document.createElement('span');
        heading.className = 'pure-menu-heading';
        heading.innerHTML = 'Zodiac Signs';
        wrapper.appendChild(heading);
        document.body.appendChild(wrapper);
    }

    function createZodiacList(json) {
        var ulNode = document.createElement('ul');
        ulNode.className = 'pure-menu-list';
        for (var i = 0; i < json.length; i++) {
            var obj = json[i];
            var liNode = document.createElement('li');
            var aNode = document.createElement('a');
            aNode.className = 'pure-menu-link';
            var textNode = document.createTextNode(obj.name);
            aNode.appendChild(textNode);
            liNode.appendChild(aNode);
            //liNode.addEventListener('click', detailHandler);
            ulNode.appendChild(liNode);
        }
        wrapper.appendChild(ulNode);

        // der user soll sein sternzeichen aus einer liste aller sternzeichen wäheln können, klickt er auf sein sternzeichen soll die liste nicht mehr sichtbar sein und eine ansicht angezigt weden
    }

    function detailHandler() {
        // show detailed content
    }

    function overviewHandler() {
        // der user kann von der “horoskop ansicht” zurück zur sternzeichen liste und ein anderes sternzeichen anwählen

    }

    function createDetailedView() {
        /*    <div>
        <h1>Fische</h1>
        <p>dein persönliches Horoskop für <span class=”datetime”>Samstag 25.06.2016 13:02:57</span></p>
        <ul>
            <li>Glück: 4/5</li>
            <li>Liebe: 3/5</li>
            <li>Geld: 5/5</li>
            <li>Familie: 2/5</li>
            <li>Job: 4/5</li>
            <li>Freizeit: 2/5</li>
        </ul>
        </div>
        im h1 soll das ausgewählte Sternzeichen stehen
        */
    }

    function setDate() {
        // im .datetime das Aktuelle datum mit Uhrzeit, wie oben formatiert
    }

    function setValues() {
        // die werte für Glück, Liebe, etc sollen zufällig erstellt werden. Wobei kein wert unter 2 herauskommen darf und die gesamt anzahl der punkte immer 20 ergeben müssen.
    }

    function printHoroscope() {
        // oder ein aktuelles horoskop erstellen lassen. pdf
    }

    init();

})();
