/*jshint browser: true */
/*jshint esnext: true */
/* from david walsh: https://davidwalsh.name/promises */
(function() {
    'use strict';
    
    var Params = {
        method: '', // method of request, GET-POST-PUT-DELETE
        url: '', // ajax url
        format: '', // format of string (json or plain accepted)
        data: [], // data for sending
    };

    function get(method, url, format) {
        return _request({
            method: 'GET',
            url: url,
            format: format
        });
    }

    function post(method, url, data) {
        return _request({
            method: 'POST',
            url: url,
            data: data
        });
    }

    function put(method, url, data) {
        return _request({
            method: 'PUT',
            url: url,
            data: data
        });
    }

    function del(method, url, data) {
        return _request({
            method: 'DELETE',
            url: url,
            data: data
        });
    }

    // private function _ !
    function _request(Params) {
        // new promise
        return new Promise(function(resolve, reject) {
            // xhr request
            var xhr = new XMLHttpRequest();
            // open request and get method and url
            xhr.open(Params.method, Params.url);
            /*
              Method 'GET'
            */
            if (Params.method === 'GET' && Params.format === 'json') {
                xhr.setRequestHeader('Accept', 'json');
            }
            /*
              Method 'POST' & 'PUT' & 'DELETE'
            */
            if (Params.method === 'POST' || Params.method === 'PUT' || Params.method === 'DELETE') {
                xhr.setRequestHeader('Content-Type', 'application/json');
            }
            // do, when xhr loaded
            xhr.onload = function() {
                // check status ok
                if (xhr.status === 200) {
                    var response;
                    /*
                    Method 'GET'
                    */
                    if (Params.method === 'GET') {
                        if (Params.format === 'json') {
                            response = JSON.parse(xhr.responseText);
                        } else if (Params.format === 'plain') {
                            response = xhr.response;
                        }
                    }
                    // resolve promise with response text
                    resolve(response);
                } else {
                    // reject promise with status text
                    reject(Error(xhr.statusText));
                }
            };

            // handle network errors
            xhr.onerror = function() {
                reject(Error('Network Error'));
            };

            // make the request
           xhr.send(Params.data); // Params.data optional
        });
    }
    /*
    _request('data/zodiac.json').then(function(response) {
        console.log('Success!', response);
    }, function(error) {
        console.error('Failed!', error);
    });
    */
})();
