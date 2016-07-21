<!DOCTYPE html>
<html lang="de">
<head>
	<meta charset="UTF-8">
	<title>REST Test</title>
	<link rel="stylesheet" href="css/pure-min.css">
	<style>
		#msg {
			width: 300px;
			padding: 20px;
			color: #900;
			line-height: 1.8;
			font-size: 1.1em;
			border: 1px solid #999;
			border-radius: 8px;
			overflow: auto;
		}

		.test-list li {
			list-style: none;
			margin-bottom: 0.3em;
		}
	</style>
</head>
<body>
<ul class="test-list">
	<li>
		<a href="#manage-customers.php" id="bPut" class="pure-button pure-button-primary">Store Customer</a> <br>
	</li>
	<li>
		<a href="#" id="bDelete" class="pure-button pure-button-primary">Delete random Customer</a> <br>
	</li>
	<li>
		<a href="#" id="bLoad" class="pure-button pure-button-primary">Load random Customer</a> <br>
	</li>
	<li>
		<a href="#" id="bUpdate" class="pure-button pure-button-primary">Update customer 1</a> <br>
	</li>
	<li>
		<div id="msg"></div>
	</li>
</ul>
<script src="js/libs/jquery-3.0.0.min.js"></script>
<script src="js/rest-test.js"></script>
</body>
</html>
