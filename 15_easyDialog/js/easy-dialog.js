(function() {
    'use strict';
    window.EasyDialog = function(config) {
        // Best practice für änderlichen Scope von weiteren Funktionen
        var that = this;

        // My Attributes
        that.overlay;
        that.titleBar;
        that.modal;
        that.contentUrl;
        that.contentLoaded = Empty;
        that.options = {};

        function Empty(){};

        var defaults = {
            title: 'Dialog',
            className: 'modal-dialog',
            content: '',
            maxWidth: '90%',
            minWidth: '320px',
            maxHeight: '90%',
            minHeight: '320px',
            height: '50%',
            width: '50%',
            overlay: true
        };
        // initialize options
        /*
            Jede Funktion besitzt ein Array namens Arguments. Über dieses kann
            indiziert auf mitgegebene Parameter (im englischen arguments) zugegriffen
            werden.
        */
        if (arguments.length > 0  && typeof arguments[0] === 'object') {
            that.options = extendDefaults(defaults, config);
        }

        /**
         * @brief Öffnet den Dialog
         */
        that.open = function() {

        };

        /**
         * @brief Schließt den Dialog
         * @param [in|out] type parameter_name Parameter description.
         * @param [in|out] type parameter_name Parameter description.
         * @return Description of returned value.
         */
        that.close = function() {

        };

        /**
         * @brief Create DOM Elements
         */
        function createEasyDialog () {

        };

        /**
         * @brief Load content through AJAX
         */
        function loadContent () {

        };

        /**
         * @brief write into content
         */
        function writeContent () {

        };

        /**
         * @brief merge two config objects.
         * @param Object source Default config.
         * @param Object newProps new config.
         * @return merged object.
         */
        function extendDefaults(source, newProps) {
            for (var property in newProps) {
                // exclude properties of prototype object
                if (newProps.hasOwnProperty(property)){
                    source[property] = newProps[property];
                }
            }
            return source
        }

        /*
            createContainer
            crateTitle
            createContent
            createCloseButton
        */
    };

})();

var dlg = new EasyDialog({title: 'Newsletter bestellen', content: 'Bestell gefälligst!', x: 150});

/*
what easy dialog should do:

- open/initialize()

- close

- create easy dialog
    - createcontainer
    - createtitle
    - createcontent
    - createclosebutton
- load content
- write content
- callbacks

- object {defaults}


Callbacks sind Funktionen die durch Ereignisse u.ä. aufgerufen werden. Callbacks werden nie von meiner Applikation ausgeführt.
*/
