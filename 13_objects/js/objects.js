(function() {
    'use strict';

     var actor = {
        name: 'Batman',
        power: 120,
        stepSize: 5,
        health: 70,
        position: {x: 0, y: 0},
        sprite: 'img/batman.png',
        move: function(x, y) {
            // Langform: this.position.x = this.position.x + x;
            this.position.x += x;
            this.position.y += y;
            console.log("x: " + this.position.x + " y: " + this.position.y);
        },
        fight: function(enemy) {
        }
    };

    actor.move(3, 5);
    actor.age = 85;

    // Alternative Methode: Object Constructor
    var obj1 = new Object();
    obj1.x = 12;
    obj1.y = 10;
    obj1.w = 4;
    obj1.h = 3;
    obj1.area = function() {
        return this.h * this.w;
    }

    /********** eigene Objekte mit Konstruktor erstellen ******/
    var Orc = function() {
        var test = 'Hallo'; // private member
        this.health = 10; // öffentliche member
        this.size = 200;
        this.weight = 180;
        this.power = 400;
        this.weapon = 'club';
        this.x = 0;
        this.y = 0;
        this.move = function(x, y) {
            this.x += x;
            this.y += y;
        }

        this.fight = function (enemy) {
            enemy.health -= this.power/10;
        }
    };

    var ignaz = new Orc();
    ignaz.move(12, 3);

    var orcArmy = [];
    for (var i = 0; i < 100; i++) {
        orcArmy[i] = new Orc();
    }


    /*************** Objekte konfigurieren ***************/
    var Dwarf = function(config) {
        for (var key in config) {
            this[key] = config[key];
        }
    }

    var pepe = new Dwarf({
        health: 200,
        weight: 120,
        power: 320
    });

    var healthMin = 250;
    var healthMax = 280;
    var weightMin = 40;
    var weightMax = 120;
    var powerMin = 290;
    var powerMax = 500;

    var dwarfArmy = [];

    for (var j = 0; j < 100; j++) {
        var healthDiff = healthMax - healthMin;
        var health = Math.round(Math.random() * healthDiff + healthMin);

        var weightDiff = weightMax - weightMin;
        var weight = Math.round(Math.random() * weightDiff + weightMin);

        var powerDiff = powerMax - powerMin;
        var power = Math.round(Math.random() * powerDiff + powerMin);

        dwarfArmy[j] = new Dwarf({
            health: health,
            weight: weight,
            power: power
        });

    }
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
