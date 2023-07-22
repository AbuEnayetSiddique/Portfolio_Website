<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Set up email headers
    $to = "enayet.ssagar@gmail.com";
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email\r\n";
    
    // Send the email
    $mailSent = mail($to, $subject, $message, $headers);

    if ($mailSent) {
        // If the email is sent successfully, redirect back to the contact page with a success message
        header("Location: index.html?success=1");
        exit;
    } else {
        // If the email fails to send, redirect back to the contact page with an error message
        header("Location: index.html?error=1");
        exit;
    }
}
?>
