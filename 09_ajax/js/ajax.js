(function() {
    'use strict';
    /*
    Same Domain Policy: Die von XHR aufgerufenen URLs müssen sich unter der selben
    Domain wie der Aufrufer befinden. AJAX kann daher nicht über das Filesystem
    getestet werden (Doppelklick auf Datei), da das Filesystem keine Domain ist.

    AJAX muss immer unter einem Webserver laufen.
    */
    var button = document.querySelector('button');

    function init() {
        button.addEventListener('click', clickHandler);
    }

    function clickHandler(event) {
        var url = 'answer.html';
        var xhr = new XMLHttpRequest(); // state 0 object wird erstellt
        /*
        Wir geben bekannt, welche Funktion aufgerufen wird, wenn sich der Status des xhr Objekts ändert.

        0 nicht initialisiert (Objekt erzeugt)
        1 geöffnet (Request wurde gesendet, noch keine Antwort)
        2 Server hat geantwortet
        3 Daten werden übertragen
        4 Request wurde beendet
        */
        xhr.onreadystatechange = stateChanged; // trigger, wenn sich der Status ändert
        // initialisieren
        xhr.open('GET', url);
        // senden, es werden sich jetzt die States ändern und die Funktion stateChanged aufgerufen
        xhr.send();
    };
    /*
    Die Callback Funktion ist außerhalb des Kontext des xhr Objekts definiert,
    deshalb können wir in stateChanged nicht über die xhr Variable darauf
    zugreifen. Das Event Objekt, das wir in der Variable ev speichern, weiß aber,
    wer das Event aufrief: ev.currentTarget. Das ist der Besitzer/Aufrufer des
    events = xhr im obigen Kontext.
    */
    function stateChanged(event) {
        if (event.currentTarget.readyState === 4 && event.currentTarget.status === 200) {
            var divNode = document.getElementById('msg');
            divNode.innerHTML = event.currentTarget.response;
        }
    }

    init();
})();
