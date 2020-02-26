<?php
require '../connect.php';

$post_data = file_get_contents('php://input');

if(isset($post_data) && !empty($post_data)) {
  $request = json_decode($post_data);

  // Sinitize
  $ex_name = $request->ex_name;
  
  // Insert data into Database
  $sql = "INSERT INTO experiences(ex_name) VALUES(:ex_name)";

  $statement = $con->prepare($sql);
  $statement->execute([':ex_name' => $ex_name]);

}
