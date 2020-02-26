<?php
require '../connect.php';

$post_data = file_get_contents('php://input');

if(isset($post_data) && !empty($post_data)) {
  $request = json_decode($post_data);

  // Sinitize
  $customer_name    = $request->customer_name;
  $customer_address = $request->customer_address;
  $city             = $request->city;
  $gender           = $request->gender;
  $date_of_birth    = $request->date_of_birth;
  $phone            = $request->phone;
  $email            = $request->email;
  // $open_time        = $request->open_time;
  // $order_completed  = $request->order_completed;
  
  // Insert data into Database
  $sql = "INSERT INTO customers(
    customer_name,
    customer_address,
    city,
    gender,
    date_of_birth,
    phone,
    email
  ) VALUES(
    :customer_name,
    :customer_address,
    :city,
    :gender,
    :date_of_birth,
    :phone,
    :email
  )";

  $statement2 = $con->prepare($sql);
  $statement2->execute([
    ':customer_name'    => $customer_name,
    ':customer_address' => $customer_address,
    ':city'             => $city,
    ':gender'           => $gender,
    ':date_of_birth'    => $date_of_birth,
    ':phone'            => $phone,
    ':email'            => $email
  ]);

}
// $st->bindValue( ":art", $art, PDO::PARAM_INT );