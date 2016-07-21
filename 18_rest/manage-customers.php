<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
error_reporting(E_ERROR | E_WARNING | E_PARSE);
ini_set('display_errors', '1');

require 'rb.php';
R::setup('mysql:host=localhost;dbname=customers',
        'root', '');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
	case 'GET':
		$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
		$ret = '';
		$trenner = '';

		// return all
		if ($id === 0) {
			// $customers = R::dispense('customer');
			$allCustomers = R::getAll('SELECT * FROM customer');

			if (count($allCustomers) === 0) {
				$ret = '[]';
			}
			else {
				$ret = '[';
				foreach($allCustomers as $key => $val) {
					$ret .= $trenner . json_encode($val);
					$trenner = ',';
				}
				$ret .= ']';
			}
			echo $ret;
		}
		else {
			$customer = R::load('customer', $id);
			echo json_encode($customer);
		}
		break;
	case 'PUT':
		$data = json_decode(file_get_contents("php://input"));
		$customer = R::dispense('customer');
		$customer->vorname = $data->vorname;
		$customer->nachname = $data->nachname;
		$customer->email = $data->email;
		$customer->adresse = $data->adresse;
		$customer->plz = $data->plz;
		$customer->ort = $data->ort;
		$customer->geodata = $data->geodata;
		// Update if id is sent
		if (property_exists($data, 'id')) {
			$customer->id = $data->id;
		}

		$id = R::store($customer);
		echo '{"id":' . $id . '}';
		break;
	case 'DELETE':
		$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
		$customer = R::load('customer', $id);
		// R::trash($customer);
		echo json_encode($customer);
		break;

	default:
		break;
}
?>
