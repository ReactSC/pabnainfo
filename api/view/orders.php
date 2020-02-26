<?php
require '../connect.php';

// Query The Categories in Database
$statement = $con->prepare('select * from orders');
$statement->execute();
$orders = $statement->fetchAll(PDO::FETCH_OBJ);

echo json_encode($orders);