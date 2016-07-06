(function() {
    'use strict';
    var Customer = function(name, address){
        // Erlaubt Zugriff aus Funktionen, in denen this nicht Customer ist
        var me = this;
        /*
            In einer Funktion, die durch Erstellen eines neuen Objekts aufgerufen wird (new),
            kann ich Attribute/Properties und Funktionen/Methods von außen zugänglich machen,
            indem ich Variablen mit vorangestelltem "this" deklariere.

            Die Werte werden dann jedem neuen Objekt neu zugewiesen.
        */
        this.name = name;
        this.address = address;

        // Mit var deklarierte Variablen sind von außen nicht zugänglich -> private
        var today = new Date();

        this.showAll = function () {
            console.log( createOutput() +  ' today: ' + today );
        };

        // Private Methode, nicht von außen zugänglich
        function createOutput() {
            return 'My name: ' + me.name + ' My Address: ' + me.address;
        }
    };

    // Konstruktor erstellt ein Duplikat von Customer und führt die Funktion Customer aus
    var customer1 = new Customer('Pepi', 'Entenhausen');
    customer1.showAll();

    var customer2 = new Customer('Klara', 'Wien');
    customer2.showAll();

    /*
        ein per JSON erstelltes Objekt
        - wird nur einmal erstellt, Kopien können nur mühevoll gemacht werden.
        - private Methoden/Attribute sind nicht vorgesehen.
    */
    var vendor = {
        name: 'Hans',
        address: 'Mustermanngasse 2',
        createOutput: function() {
            console.log('My name: ' + this.name + ' My Address: ' + this.address);
        }
    };

    vendor.createOutput();
    /*************** Prototypes ***************/

    var Car = function(name, year, color, kW) {
        this.name = name;
        this.year = year;
        this.color = color;
        this.kW = kW;
    };

    Car.prototype.getPS = function() {
        return parseInt(this.kW * 1.36);
    };

    var golf = new Car('VW Golf 3', 1998, 'blue', 66);
    var golfPS = golf.getPS();
    var sandero = new Car('Dacia Sandero', 2016, 'red', 55);
    var sanderoPS = sandero.getPS();
    var veyron = new Car('Bugatti Veyron', 2010, 'black', 800);
    var veyronPS = veyron.getPS();

    console.log(golf);
    console.log(golfPS);
    console.log(sanderoPS);
    console.log(veyronPS);

})();
