<?php
require '../connect.php';

// Query The Categories in Database
$statement = $con->prepare('select * from sub_categories');
$statement->execute();
$sub_categories = $statement->fetchAll(PDO::FETCH_OBJ);

echo json_encode($sub_categories);