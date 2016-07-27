/*jshint browser: true */
/*jshint esnext: true */

(function() {
    'use strict';
    // localStorage speichert alle Daten als String
    console.log(localStorage);

    // new Object for LS
    var myObj = {
        name: 'Thomas',
        state: 'tired',
        isAbleTo: 'confuse others',
    };
    /*
    Objekte müssen mit stringify in Strings umgewandelt werden, sonst wird beim speichern die toString Methode des Objekts aufgerufen.
    */
    localStorage.tomData = JSON.stringify(myObj);
    console.dir(localStorage.tomData);
    /*
    Beim Auslesen muss der String wieder in ein Objekt umgewandelt werden.
    */
    var myObj1 = JSON.parse(localStorage.tomData);
    console.dir(myObj1);

    // Clear localStorage for own domain
    localStorage.clear();
})();
