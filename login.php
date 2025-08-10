<?php
// Include the database connection
include 'db.php'; // this is the file where your connection code is

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];   // User input
    $password = $_POST['password']; // Ignored in check, but still collected

    // Query to find the email in the table
    $sql = "SELECT * FROM project WHERE Email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "✅ Login successful! Welcome to MediWell.";
        // Example: redirect to dashboard
        // header("Location: dashboard.php");
        // exit();
    } else {
        echo "❌ No account found with that email.";
    }
}
?>
