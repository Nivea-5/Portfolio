<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $fname = htmlspecialchars($_POST['fname']);
    $lname = htmlspecialchars($_POST['lname']);
    $enterprise = htmlspecialchars($_POST['enterprise']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST['message']);
    
    // Vérifier si les données sont valides
    if ($name && $email && $message) {
        $to = "maelgarnier5@gmail.com"; // Remplacez par l'adresse email du destinataire
        $subject = "Portfolio - Message from: $fname $lname";
        $body = "Name: $fname $lname\nEmail: $email\nEnterprise: $enterprise\n\nMessage:\n$message";
        $headers = "From: $email";

        // Envoyer l'email
        if (mail($to, $subject, $body, $headers)) {
            echo "Email sent successfully.";
        } else {
            echo "Failed to send email.";
        }
    } else {
        echo "Invalid input. Please check your details and try again.";
    }
} else {
    echo "Invalid request.";
}
?>
