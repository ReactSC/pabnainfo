<?php
require '../connect.php';

$post_data = file_get_contents('php://input');

if(isset($post_data) && !empty($post_data)) {
  $request = json_decode($post_data);

  // Sinitize
  $serial_no    = $request->serial_no;
  $customer_id  = $request->customer_id;
  $sp_id        = $request->sp_id;
  $ex_id        = $request->ex_id;
  $order_time   = $request->order_time;
  $order_status = $request->order_status;
  
  // Insert data into Database
  $sql = "INSERT INTO orders(
    serial_no,
    customer_id,
    sp_id,
    ex_id,
    order_time,
    order_status
  ) VALUES(
    :serial_no,
    :customer_id,
    :sp_id,
    :ex_id,
    :order_time,
    :order_status
  )";

  $statement = $con->prepare($sql);
  $statement->execute([
    ':serial_no'    => $serial_no,
    ':customer_id'  => $customer_id,
    ':sp_id'        => $sp_id,
    ':ex_id'        => $ex_id,
    ':order_time'   => $order_time,
    ':order_status' => $order_status
  ]);

}