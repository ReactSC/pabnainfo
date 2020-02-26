<?php
require '../connect.php';

$post_data = file_get_contents('php://input');

if(isset($post_data) && !empty($post_data)) {
  $request = json_decode($post_data);

  // Sinitize
  $office_name        = $request->office_name;
  $office_location    = $request->office_location;
  $office_open_time   = $request->office_open_time;
  $office_close_time  = $request->office_close_time;
  $office_offday      = $request->office_offday;
  $office_status      = $request->office_status;
  
  // Insert data into Database
  $sql = "INSERT INTO offices(
    office_name,
    office_location,
    office_open_time,
    office_close_time,
    office_offday,
    office_status
  ) VALUES(
    :office_name,
    :office_location,
    :office_open_time,
    :office_close_time,
    :office_offday,
    :office_status
  )";

  $statement = $con->prepare($sql);
  $statement->execute([
    ':office_name'      => $office_name,
    ':office_location'  => $office_location,
    ':office_open_time' => $office_open_time,
    ':office_close_time'=> $office_close_time,
    ':office_offday'    => $office_offday,
    ':office_status'    => $office_status
  ]);

}
