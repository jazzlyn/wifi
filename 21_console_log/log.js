/*jshint browser: true */
/*jshint esnext: true */

var Logger = function () {
    var logList;
    var history = {};
    var counter = 0;
    // public
    function log(content) {
        createEntry(content);
        // write to history object
    }
    // private
    function createEntry (content) {
        var entry = document.createElement('li');
        entry.innerHTML = content;
        logList.appendChild(entry);
    }

    function init() {
        if (logList !== undefined) {
            logList.parentNode.removeChild(logList);
        }

        var logger = document.createElement('div');
        logger.id = "logger";
        logList = document.createElement('ul');
        logList.className = 'log-list';
        var titleBar = document.createElement('h2');
        titleBar.className = 'titlebar';
        titleBar.innerHTML = 'Logger';
        createEntry('Logger initialized');
        logger.appendChild(titleBar);
        logger.appendChild(logList);
        document.body.appendChild(logger);
    }

    return {
        log: log,
        init: init
    };
};
