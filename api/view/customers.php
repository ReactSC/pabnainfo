<?php
require '../connect.php';

// Query The Categories in Database
$statement = $con->prepare('select * from castomers');
$statement->execute();
$castomers = $statement->fetchAll(PDO::FETCH_OBJ);

echo json_encode($castomers);