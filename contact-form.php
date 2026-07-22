<?php

$name = isset($_POST['name']) ? $_POST['name'] : '';
$company = isset($_POST['company']) ? $_POST['company'] : '';
$city = isset($_POST['city']) ? $_POST['city'] : '';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$message = isset($_POST['requirement']) ? $_POST['requirement'] : '';

$to = "aryanmaurya.work@gmail.com";   // Change to your email
$subject = "New Contact Form Enquiry";

$body = "
Name: $name

Company: $company

City: $city

Phone: $phone

Email: $email

Message:
$message
";

$headers = "From: website@samartheggscenter.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if(mail($to, $subject, $body, $headers)){
    echo "success";
}else{
    echo "error";
}
?>
