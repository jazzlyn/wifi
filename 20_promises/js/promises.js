/*jshint browser: true */
/*jshint esnext: true */
(function() {
    'use strict';

    // Promise erstellen
	function getImage(url){
		return new Promise (function(resolve, reject) {
			var img = new Image();
			img.src = url;

			img.onload = function() {
				resolve(img);
			};
			img.onerror = function() {
				reject('error: ' + url);
			};
		});
	}

	getImage('http://lorempixel.com/400/200/').then(
		function(myImage){
			document.body.appendChild(myImage);
		},
		function(text) {
			console.log('Das Bild ' + text + ' konnte nicht geladen werden.');
		}
	);


})();
