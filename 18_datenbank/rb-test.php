<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);#

require 'rb.php';
R::setup('mysql:host=localhost;dbname=customers',
        'root', '');

// json import
$string = file_get_contents("data/customers.json");
$allCustomers = json_decode($string, true);
foreach($allCustomers as $key => $value) {

	$customer = R::dispense( 'customer' );
	$customer->vorname = $value['vorname'];
	$customer->nachname = $value['nachname'];
	$customer->email = $value['email'];
	$customer->adresse = $value['adresse'];
	$customer->ort = $value['ort'];
	$customer->plz = $value['plz'];
	$customer->geodata = $value['geodata'];
	$id = R::store($customer);
	print $id;
}



R::close();
?>
