<?php
require '../connect.php';

// Query The Categories in Database
$statement = $con->prepare('select * from sp_offices');
$statement->execute();
$sp_offices = $statement->fetchAll(PDO::FETCH_OBJ);

echo json_encode($sp_offices);