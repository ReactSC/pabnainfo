<?php
require '../connect.php';

// Query The Categories in Database
$statement = $con->prepare('select * from sp_experiences');
$statement->execute();
$sp_experiences = $statement->fetchAll(PDO::FETCH_OBJ);

echo json_encode($sp_experiences);