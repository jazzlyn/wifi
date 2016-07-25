/*jshint browser: true */
(function() {
    'use strict';
    var jsonURL = 'data/zodiac-data.json';
    var json;
    var wrapper = document.querySelector('.pure-menu');
    var heading = document.querySelector('.pure-menu-heading');

    function init() {
        loadJSON();
    }

    function loadJSON() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', jsonURL, true);
        xhr.onreadystatechange = stateChanged;
        xhr.send();
    }

    function stateChanged(event) {
        if (event.currentTarget.readyState === 4 && event.currentTarget.status === 200) {
            json = JSON.parse(event.currentTarget.response);
            createZodiacList();
        }
    }

    function createZodiacList() {
        wrapper.innerHTML = '';
        heading.innerHTML = 'Zodiac Signs';
        var ulNode = document.createElement('ul');
        ulNode.className = 'pure-menu-list';
        for (var i = 0; i < json.zodiac_signs.length; i++) {
            var obj = json.zodiac_signs[i];
            var liNode = document.createElement('li');
            var aNode = document.createElement('a');
            aNode.className = 'pure-menu-link';
            var textNode = document.createTextNode(obj.name);
            aNode.appendChild(textNode);
            aNode.addEventListener('click', detailHandler);
            liNode.appendChild(aNode);
            ulNode.appendChild(liNode);
        }
        wrapper.appendChild(ulNode);
    }

    function detailHandler(event) {
        createDetailedView(event);
    }


    function createDetailedView(event) {
        // create heading with actual zodiac sign
        heading.innerHTML = event.currentTarget.innerHTML;

        // create greeting with actual date
        wrapper.innerHTML = '';
        var h3node = document.createElement('h3');
        var span = document.createElement('span');
        span.className = 'datetime';
        span.innerHTML = setDate();
        h3node.innerHTML = 'Your personal Horoscope for&nbsp' + span.innerHTML;

        // create infoelement with details from actual zodiac sign
        var div = document.createElement('div');
        for (var i = 0; i < json.zodiac_signs.length; i++) {
            var obj = json.zodiac_signs[i];
            for (var key in obj) {
                if (obj.name === heading.innerHTML) {
                    if (key === "name") {
                        continue;
                    }
                    var p = document.createElement('p');
                    var label = document.createElement('span');
                    var textNode = document.createTextNode(obj[key]);
                    label.innerHTML = key;
                    label.className = 'label';
                    p.appendChild(label);
                    p.appendChild(textNode);
                    div.appendChild(p);
                }
            }
        }
        wrapper.appendChild(h3node);
        wrapper.appendChild(div);

        // create params element for zodiac sign
        var ul = document.createElement('ul');
        ul.className = 'pure-menu-list';
        for (var j = 0; j < json.params.length; j++) {
            var li = document.createElement('li');
            var params = json.params[j];
            var val = getVal();
            li.innerHTML = params + ':&nbsp;' + val + '/5';
            ul.appendChild(li);
        }
        wrapper.appendChild(ul);
        var print = clickElement('print');
        wrapper.appendChild(print);
        var back = clickElement('overview');
        wrapper.appendChild(back);

    }

    function setDate() {
        var allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        var date = new Date();
        var weekday = date.getDay() - 1;
        var day = date.getDate();
        var month = date.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        var seconds = date.getSeconds();
        var currentDate = allDays[weekday] + '&nbsp;' + day + '.' + month + '.' + year + '&nbsp;' + hours + ':' + minutes + ':' + seconds;
        return currentDate;
    }

    function getVal() {
        var minVal = 2;
        var maxVal = 5;
        var diffVal = maxVal - minVal;
        var val = Math.round(Math.random() * diffVal + minVal);
        return val;
        // TODO: die gesamt anzahl der punkte immer 20 ergeben müssen.
    }

    function clickElement(type) {
        var p = document.createElement('p');
        var a = document.createElement('a');
        a.href = '#';
        var text;
        if (type === 'overview') {
            text = document.createTextNode('back to Zodiac List');
            a.addEventListener('click', function() { createZodiacList();});
        } else if (type === 'print') {
            text = document.createTextNode('Print Horoscope');
            a.addEventListener('click', function() { window.print();});
        }
        a.appendChild(text);
        p.appendChild(a);
        return p;
    }

    init();

})();
