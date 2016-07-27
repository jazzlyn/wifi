/*jshint browser: true */
/*jshint esnext: true */
/* from david walsh: https://davidwalsh.name/promises */
(function() {
    'use strict';
    // Params object
    var Params = function(url) {
        this.url = url;
        this.data = data;
        this.format = function(url) {
            // check if input is json
            // else is plain
        }
        
    }
    
    function get(url) {
        // new promise
        return new Promise(function(resolve, reject) {
        // xhr request
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function() {
            // check status
            if (xhr.status === 200) {
                // resolve promise with response text
                var json = JSON.parse(xhr.response);
                resolve(json);
            } else {
                // reject promise with status text
                reject(Error(xhr.statusText));
            }
        };

        // handle network errors
        xhr.onerror = function() {
            reject(Error("Network Error"));
        };

        // make the request
        xhr.send();
        });
    }

    /* Use it!
    get('story.json').then(function(json) {
        console.log("Success!", json);
    }, function(error) {
        console.error("Failed!", error);
    });*/

})();
