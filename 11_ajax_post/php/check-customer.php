<?php
if (!isset($_POST['username']) || !isset($_POST['password'])) {
    print '[]';
    exit;
}
$username = $_POST['username'];
$password = $_POST['password'];

if ($username === 'kunde@myapp.com' && $password === '12345') {
    print '["vorname": "Otto", "nachname": "Kunde", "adresse": "Bürzelweg 12", "plz": 1313, "ort": "Entenhausen"]';
}
else print '[]';
?>
