var EasyDialog;
/*jshint browser: true */
(function() {
    'use strict';
    EasyDialog = function(config) {
        // Best practice für veränderbaren Scope von weiteren Funktionen
        var that = this;

        // Attributes
        that.overlay;
        that.easyDialog;
        that.closeButton;
        that.titleBar;
        that.content;
        that.contentUrl;
        //that.contentLoaded = Empty;
        that.options = {};
        that.isOpen = false;

        // function Empty(){};

        var defaults = {
            theme: 'easy-bright',
            title: 'Dialog',
            content: '',
            contentUrl: '',
            maxWidth: '90%',
            minWidth: '320px',
            maxHeight: '90%',
            minHeight: '320px',
            height: '50%',
            width: '50%',
            overlay: true,
            autoOpen: true
        };
        // merges default parameters with customized into one object
        if (config !==  undefined  && typeof config === 'object') {
            that.options = extendDefaults(defaults, config);
        } else {
            that.options = defaults;
        }
        /**
         * @brief Opens the dialog
         */
        that.open = function() {
            if (that.isOpen === false) {
                document.body.appendChild(that.overlay);
                document.body.appendChild(that.easyDialog);
                that.isOpen = true;
            }
        };
        /**
         * @brief Closes the dialog
         */
        that.close = function() {
            if (that.isOpen) {
                document.body.removeChild(that.overlay);
                document.body.removeChild(that.easyDialog);
                that.isOpen = false;
            }
        };
        /**
         * @brief Create DOM Elements
         */
        function createEasyDialog () {
            // create overlay and give class
            var overlay = document.createElement('div');
            overlay.className = 'ed-overlay';
            that.overlay = overlay;

            // create easydialog and give class
            var easyDialog = document.createElement('div');
            easyDialog.classList.add('easy-dialog', that.options.theme);
            easyDialog.id = 'easyDialog';
            that.easyDialog = easyDialog;

            // create close button, give class and append to easy dialog
            var closeButton = document.createElement('a');
            closeButton.className = 'ed-close-button';
            closeButton.href = '#';
            closeButton.innerHTML = '&times;';
            easyDialog.appendChild(closeButton);
            that.closeButton  = closeButton;

            // add EventListener to close button
            closeButton.addEventListener('click', function(event) {
                event.preventDefault();
                that.close();
            });

            // create title bar and append to easy dialog
            var titleBar = document.createElement('h1');
            titleBar.className = 'ed-title-bar';
            titleBar.innerHTML = that.options.title;
            easyDialog.appendChild(titleBar);
            that.titleBar = titleBar;

            // create content and append to easy dialog
            var content = document.createElement('p');
            content.className = 'ed-content';
            content.innerHTML = that.options.content;
            easyDialog.appendChild(content);
            that.content = content;

            // get content if AJAX url is set
            if (that.options.contentUrl) {
                loadContent(that.options.contentUrl);
            } else {
                writeContent(that.options.content);
            }
            // append easy dialog and overlay to body
            if (that.options.autoOpen) {
                that.open();
            }
        }

        /**
         * @brief Load content through AJAX
         */
        function loadContent() {
            var url = that.options.contentUrl;
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = stateChanged;
            xhr.open('GET', url);
            xhr.send();
        }

        function stateChanged(event) {
            if (event.currentTarget.readyState === 4 && event.currentTarget.status === 200) {
                writeContent(event);
            }
        }
        /**
         * @brief write into content
         */
        function writeContent(event) {
            that.content.innerHTML = event.currentTarget.response;
        }
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
            return source;
        }

        /* permanent calls */
        createEasyDialog();
    };

})();

var dlg = new EasyDialog({
    title: 'Newsletter bestellen',
    content: 'Bestell gefälligst!',
    contentUrl: 'content.html',
    x: 150});

var dialogTrigger = document.getElementById('dialogTrigger');
dialogTrigger.addEventListener('click', function(event){
    dlg.open();
});