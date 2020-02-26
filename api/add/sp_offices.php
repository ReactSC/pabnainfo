<?php
require '../connect.php';

$post_data = file_get_contents('php://input');

if(isset($post_data) && !empty($post_data)) {
  $request = json_decode($post_data);

  // Sinitize
  $sp_id      = $request->sp_id;
  $office_id  = $request->office_id;
  $start_time = $request->start_time;
  $close_time = $request->close_time;
  $work_day   = $request->work_day;
  
  // Insert data into Database
  $sql = "INSERT INTO sp_offices(
    sp_id,
    office_id,
    start_time,
    close_time,
    work_day
  ) VALUES(
    :sp_id,
    :office_id,
    :start_time,
    :close_time,
    :work_day
  )";

  $statement = $con->prepare($sql);
  $statement->execute([
    ':sp_id'      => $sp_id,
    ':office_id'  => $office_id,
    ':start_time' => $start_time,
    ':close_time' => $close_time,
    ':work_day'   => $work_day
  ]);

}
