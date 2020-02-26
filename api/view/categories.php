<?php
require '../connect.php';

// Query The Categories in Database
$statement = $con->prepare('select * from categories');
$statement->execute();
$categories = $statement->fetchAll(PDO::FETCH_OBJ);

echo json_encode($categories);