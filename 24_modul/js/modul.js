/*jshint browser: true */
/*jshint esnext: true */

(function(){
    'use strict';
    window.myModule = function(config) {
        // Button wird erzeuge, config enthält buttonText und buttonClicked
        var txt = 'Klick mich';
        var callback = Empty;
        var self = this;

        function Empty(){};

        function createButton () {
            // this ist jetzt myModule, da die Funktion über call aufgerufen wurde
            console.log(this);
            this.button = document.createElement('button');
            this.button.innerHTML = txt;
            this.button.addEventListener('click', buttonClicked);
            document.body.appendChild(this.button);
        }

        function buttonClicked(ev) {
            callback.call(self, ev);
        }

        // Initialisierung
        // Prüfen, ob gültiges Objekt mitgegeben wurde
        if (config !== undefined && typeof(config) === 'object') {
            // Prüfen, ob entsprechende Keys mit gültigen Werten übergeben wurden
            if (config.hasOwnProperty('buttonText') && config.buttonText) {
                txt = config.buttonText;
            }

            if (config.hasOwnProperty('buttonClicked') && typeof(config.buttonClicked) === 'function') {
                callback = config.buttonClicked;
            }
        }

        // Button Objekt zur Verfügung stellen
        this.button;
        /* call, apply rufen eine Funktion auf und übergeben einen Kontext
            (bestimmen, wer "this" in der aufgerufenen Funktion ist).

            Eine Funktion könnte den Kontext über bind fix den Kontext zugewiesen
            bekommen. Damit würde bei jedem Aufruf der Kontext aus bind verwendet werden.
            z. B.: createButton.bind(this); createButton();
        */
        createButton.call(this);
    };
})();
// Testcode

var testModule = new myModule({
    buttonText: 'Hallo',
    buttonClicked: function() {
        console.log('bla');
    }
});
