<?php
require '../connect.php';

// Query The Categories in Database
$statement = $con->prepare('select * from service_providers');
$statement->execute();
$service_providers = $statement->fetchAll(PDO::FETCH_OBJ);

echo json_encode($service_providers);