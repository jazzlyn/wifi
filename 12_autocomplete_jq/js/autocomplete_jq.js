var data = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];

(function(data) {
    'use strict';

    var search = $('#search');
    var fieldWrapper = $('#fieldWrapper');

    var UP = 38;
    var DOWN = 40;
    
    function init() {
        search.on('keyup', keyupHandler);
    }

    function keyupHandler(event) {
        if (event.keyCode === DOWN) {
            var index = getCurrentIndex();
            index++;
            setActive(index);
            return;
        }
        if (event.keyCode === UP) {
            var index = getCurrentIndex();
            index--;
            if (index < 0) {
                index = getLastIndex();
            }
            setActive(index);
            return;
        }
        var srch = search.val().toLowerCase();
        var results = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].toLowerCase().indexOf(srch) === 0) {
                results.push(data[i]);
            }
            if (results.length >= 10) {
                break;
            }
        }
        createAutoComplete(results);
        /*var url = 'countries.php';
        $.get(
            url,
            {'srch': search.val()},
            function(data) {
                console.log(data);
                createAutoComplete(data);
            },
            'json'
        );*/
    }

    function createAutoComplete(JSONresponse) {
        var ulNode = $('.search-result').first();
        if (!ulNode.length) {
            ulNode = $('<ul></ul>').addClass('search-result');
        }
        ulNode.empty();
        for (var i = 0; i < JSONresponse.length; i++) {
            var liNode = $('<li></li>')
                .text(JSONresponse[i])
                .on('click', function(event) {
                    search.val( $(this).text() );
                    ulNode.remove();
            });
            ulNode.append(liNode);
        }
        fieldWrapper.append(ulNode);
    }

    function setActive(index) {
        $('.search-result .active').removeClass('active');
        var $currentNode = $('.search-result li:nth-child(' +(index+1) + ')');
        $currentNode.addClass('active');
        
    }
    
    function getCurrentIndex() {
        var cur = document.querySelector('.search-result .active');
        if (!cur) {
            return -1;
        }
        for (var i = 0; i < cur.parentNode.childNodes.length; i++) {
            if (cur.parentNode.childNodes[i] === cur) {
                return i;
            }
        }
    }
    
    function getLastIndex() {
        return $('.search-result').children().length - 1;
    }
    
    init();

})(data);

