<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = 'kunaldasd8@gmail.com'; // Replace with your Gmail address
    $subject = 'New Contact Form Submission';
    $headers = "From: $name <$email>";
    
    $body = "Name: $name\nEmail: $email\n\n$message";
    
    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo '<p>Your message has been sent. Thank you!</p>';
    } else {
        echo '<p>Something went wrong. Please try again later.</p>';
    }
}
?>
