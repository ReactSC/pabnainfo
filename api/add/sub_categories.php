<?php
require '../../connect.php';


$post_data = file_get_contents('php://input');

if(isset($post_data) && !empty($post_data)) {
  $request = json_decode($post_data);

  // Sinitize
  $sub_cat_name = $request->name;
  $cat_id       = $request->cat_id;
  
  // Insert data into Database
  $sql = "INSERT INTO sub_categories(sub_cat_name, cat_id) VALUES(:sub_cat_name, :cat_id)";

  $statement = $con->prepare($sql);
  $statement->execute([':sub_cat_name' => $sub_cat_name,':cat_id'=> $cat_id]);
  
}