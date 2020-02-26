<?php
require '../connect.php';

// Query The Categories in Database
$statement = $con->prepare('select * from experiences');
$statement->execute();
$experiences = $statement->fetchAll(PDO::FETCH_OBJ);

echo json_encode($experiences);