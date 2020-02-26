<?php
require '../connect.php';

$post_data = file_get_contents('php://input');
echo '<pre>';
var_dump($post_data);
echo '</pre>';

if(isset($post_data) && !empty($post_data)) {
  // $request = json_decode($post_data);
  $request = json_decode($post_data);
  echo '<pre>';
  var_dump($request);
  echo '</pre>';
    
  $sp_name          = $request->sp_name;
  $sp_category      = $request->sp_category;
  $sp_sub_category  = $request->sp_sub_category;
  $sp_address       = $request->sp_address;
  $sp_city          = $request->sp_city;
  $sp_phone         = $request->sp_phone;
  $sp_email         = $request->sp_email;
  $sp_degree        = $request->sp_degree;
  $sp_NID           = $request->sp_NID;
  $sp_charge        = $request->sp_charge;
  $sp_avater        = $request->sp_avater;
  $sp_job_complete  = $request->sp_job_complete;
  $sp_status        = $request->sp_status;


  $sql = "INSERT INTO service_providers(
    sp_name,
    sp_category,
    sp_sub_category,
    sp_address,
    sp_city,
    sp_phone,
    sp_email,
    sp_degree,
    sp_NID,
    sp_charge,
    sp_avater,
    sp_job_complete,
    sp_status
    ) VALUES(
      :sp_name,
      :sp_category,
      :sp_sub_category,
      :sp_address,
      :sp_city,
      :sp_phone,
      :sp_email,
      :sp_degree,
      :sp_NID,
      :sp_charge,
      :sp_avater,
      :sp_job_complete,
      :sp_status
      )";

      $statement = $con->prepare($sql);
      $statement->execute([
      ':sp_name'          => $sp_name,
      ':sp_category'      => $sp_category,
      ':sp_sub_category'  => $sp_sub_category,
      ':sp_address'       => $sp_address,
      ':sp_city'          => $sp_city,
      ':sp_phone'         => $sp_phone,
      ':sp_email'         => $sp_email,
      ':sp_degree'        => $sp_degree,
      ':sp_NID'           => $sp_NID,
      ':sp_charge'        => $sp_charge,
      ':sp_avater'        => $sp_avater,
      ':sp_job_complete'  => $sp_job_complete,
      ':sp_status'        => $sp_status
      ]);

      }