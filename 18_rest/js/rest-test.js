(function(){
	var newCustomer = {
		"vorname": "Roger",
		"nachname": "Rabbit",
		"email": "roger@rabbit.com",
		"adresse": "Feldweg 12",
		"plz": "4321",
		"ort": "Häschendorf",
		"geodata": "47.8892925, 16.3440962"
	};

	var oldCustomer = {
		"id": "1",
		"vorname": "Jessica",
		"nachname": "Rabbit",
		"email": "jr@rabbit.com",
		"adresse": "Feldweg 12",
		"plz": "4321",
		"ort": "Häschendorf",
		"geodata": "47.8892925, 16.3440962"
	};

	var url = 'manage-customers.php';
	var bPut = $('#bPut');
	var bUpdate = $('#bUpdate');
	var bDelete = $('#bDelete');
	var bLoad = $('#bLoad');
	var msg = $('#msg');

	bPut.on('click', restRequest);
	bLoad.on('click', restRequest);
	bDelete.on('click', restRequest);
	bUpdate.on('click', restRequest);

	function restRequest(ev) {
		ev.preventDefault();
		var method = 'GET';
		var data;
		var urlParams = '';

		switch (this.id) {
			case 'bPut':
				method = 'PUT';
				data = JSON.stringify(newCustomer);
				break;
			case 'bDelete':
				method = 'DELETE';
				var id = Math.round(Math.random() * 100);
				urlParams = '?id=' + Math.round(Math.random() * 100) +
						'&_=' + new Date().getTime();
				break;
			case 'bLoad':
				urlParams = '?id=' + Math.round(Math.random() * 100) +
						'&_=' + new Date().getTime();
				break;
			case 'bUpdate':
				method = 'PUT';
				data = JSON.stringify(oldCustomer);
				break;
		}

		$.ajax({
            url: url + urlParams,
            type: method,
            data: data,
            contentType: 'application/json',
            dataType: 'json',
            cache: false,
            success: function(result) {
            	console.log(result);
                msg.text(JSON.stringify(result));
            }
        });
	}

}());
