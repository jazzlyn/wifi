(function() {
    'use strict';
    /*
    Same Domain Policy: Die von XHR aufgerufenen URLs müssen sich unter der selben
    Domain wie der Aufrufer befinden. AJAX kann daher nicht über das File-System
    getestet werden (Doppelklick auf Datei), da das Filesystem keine Domain ist.

    AJAX muss immer unter einem Webserver laufen. Brackets zb. lässt uns über die
    Live Vorschau die Dateien in einem einfache Webserver aufrufen.
    */
    var button = document.querySelector('button');

    function init() {
        button.addEventListener('click', clickHandler);
    }

    function clickHandler(event) {
        var url = 'answer.html';
        var xhr = new XMLHttpRequest(); // state 0 object wird erstellt
        /*
        Wir geben bekannt, welche Funktion aufgerufen wird, wenn sich der Status des xhr     Objekts ändert.

        0 nicht initialisiert (Objekt erzeugt)
        1 geöffnet (Request wurde gesendet, noch keine Antwort)
        2 Server hat geantwortet
        3 Daten werden übertragen
        4 Request wurde beendet
        */
        xhr.onreadystatechange = stateChanged;
        //xhr.onreadystatechange = stateChanged; // trigger, wenn sich status ändert
        // initialisieren
        xhr.open('GET', url);
        // senden, es werden sich jetzt die States ändern und die Funktion stateChanged aufgerufen
        xhr.send();
    };

    function stateChanged(event) {
        if (event.currentTarget.readyState === 4 && event.currentTarget.status === 200) {
            var divNode = document.getElementById('msg');
            divNode.innerHTML = event.currentTarget.response;
        }
    }
    init();
})();
