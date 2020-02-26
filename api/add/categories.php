<?php
require 'connect.php';

$post_data = file_get_contents('php://input');

if(isset($post_data) && !empty($post_data)) {
  $request = json_decode($post_data);

  // Sinitize
  $cat_name = $request->name;
  
  // Insert data into Database
  $sql = "INSERT INTO categories(cat_name) VALUES(:cat_name)";
  $statement = $con->prepare($sql);
  $statement->execute([':cat_name' => $cat_name]);
}