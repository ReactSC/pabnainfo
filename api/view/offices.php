<?php
require '../connect.php';

// Query The Categories in Database
$statement = $con->prepare('select * from offices');
$statement->execute();
$offices = $statement->fetchAll(PDO::FETCH_OBJ);

echo json_encode($offices);