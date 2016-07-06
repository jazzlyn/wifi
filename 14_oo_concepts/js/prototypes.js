(function() {
    'use strict';
    // Wir wissen, dass Character ein Prototype sein wird, deshalb JSON
    var Character = {
        f1: function() {
            console.log('Character f1!');
        },
        f2: function() {
            console.log('Character f2!');
        }
    };

    Character.y = 20;

    Character.f1();

    var Orc = function(name, power, health) {
        // siehe Urukhai

        this.name = name;
        this.power = power;
        this.health = health;
        this.isAlive = true;

        this.o1 = function () {
            console.log('Orc o1!');
        };

        this.o2 = function () {
            console.log('Orc o2!');
        };
    };


    Orc.prototype.x = 100;

    var Orc1 = new Orc('Sepp', 100, 2000);
    console.log(Orc1.name);
    Orc1.o2();

    var Orc2 = new Orc('Lydia', 200, 1800);
    console.log(Orc2.name);
    Orc2.o1();

    Orc2.f2();
    Orc1.f1();
    // Änderungen am Prototype betreffen alle Orcs
    Orc.prototype.y = 30;
    console.log(Orc2.y);

    // Member Variablen mit dem selben Namen wie ein Member im Prototype
    // haben Vorrang. Dh. Orc1.y existiert, JS sieht nicht mehr im Prototype nach.
    Orc1.y = 40;
    console.log(Orc1.y);
    console.log(Orc2.y);

    var Urukhai = function() {
        /*
            Prototypen mit Konstruktor aufrufen
            Der Prototyp wird dadurch im Objekt zugewiesen.
            Damit der Prototyp initialisert wird, muss der Konstruktor aufgerufen werden.
            Um unser Objekt als Kontext zu definieren (dh. zum Besitzer zu machen), rufen
            wir die Funktion über call auf.

            Der erste Parameter bestimmt, welches Objekt "this" in der aufgerufenen
            funktion ist. zB. this.name in Orc ist nun gleichbedeutend mit
            Urukhai.name
        */
        this.prototype = Orc;
        Orc.call(this, 'Uri', 400, 5000);

        this.isChief = true;

        this.u1 = function() {
            console.log('Urukhai u1!');
        };

        this.u2 = function() {
            console.log('Urukhai u2!');
        };
    };


    var Urukhai1 = new Urukhai();
    console.dir(Urukhai1);
    Urukhai1.u1();
    Urukhai1.o1();
    Urukhai.f1();



    /* Bad practice */
    var arr1 = new Array('Hans', 'Pepi', 'Uri');

    Array.prototype.showAll = function() {
        var all = 'Alle: ';
        var trenner = '';
        for (var i = 0; i < this.length; i++) {
            all += trenner + this[i];
            trenner = ', ';
        }
        return all;
    };

    console.log(arr1);
    console.log( arr1.showAll() );

    var arr2 = new Array(3, 5, 2,7, 120);
    console.log( arr2.showAll() );

})();
