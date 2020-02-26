<?php
require '../connect.php';

$post_data = file_get_contents('php://input');

if(isset($post_data) && !empty($post_data)) {
  $request = json_decode($post_data);
  var_dump($request);

  // Sinitize
  $sp_id = $request->sp_id;
  $ex_id = $request->ex_id;

  
  // Insert data into Database
  $sql = "INSERT INTO sp_experiences(sp_id,ex_id) VALUES(:sp_id,:ex_id)";

  $statement = $con->prepare($sql);
  $statement->execute([
    ':sp_id' => $sp_id,
    ':ex_id' => $ex_id,
    ]);

}
