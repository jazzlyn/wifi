/*jshint browser: true */
/*jshint esnext: true */
/* from david walsh: https://davidwalsh.name/promises */
(function() {
    'use strict';
    
    function get(url) {
        // new promise
        return new Promise(function(resolve, reject) {
        // xhr request
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function() {
            // check status
            if (xhr.status === 200) {
                var response;
                // resolve promise with response text
                if (xhr.responseType === "json") {
                    xhr.setRequestHeader("Accept", "json");
                    response = JSON.parse(xhr.response);
                } else if (xhr.responseType === "text") {
                    response = xhr.response;
                } else {
                    return;
                }
                resolve(response);
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
