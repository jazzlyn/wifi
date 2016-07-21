/*
	Dieser Code ist nicht funktionell!!!!!!
	Module reveal pattern ist die Lösung: z. B.
	https://www.christianheilmann.com/2007/08/22/again-with-the-module-pattern-reveal-something-to-the-world/

	https://carldanley.com/js-revealing-module-pattern/

*/

var Logger = function(){
	// public
	function log (content) {
		console.log("content");
		createEntry(content);
		// write to history object

	}

	// private
	var createEntry = function(content, id) {
		var entry = document.createElement('li');
		entry.innerHTML = content;
		entry.id = id;
		logList.appendChild(entry);
	}

	var history = {};
	var counter = 0;

	var logger = document.createElement('div');
	logger.id = "logger";

	var logList = document.createElement('ul');
	logList.className = 'log-list';

	var titleBar = document.createElement('h2');
	titleBar.className = 'titlebar';
	titleBar.innerHTML = 'Logger';

	createEntry('Logger initialized');

	logger.appendChild(titleBar);
	logger.appendChild(logList);

	document.body.appendChild(logger);

	return {
		log: log()
	}
};
