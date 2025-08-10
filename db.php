<?php
$servername = "localhost";   // Database server (XAMPP uses localhost)
$username   = "root";        // Default MySQL username in XAMPP
$password   = "";            // Default MySQL password is empty
$dbname     = "connect.php"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("❌ Connection failed: " . $conn->connect_error);
}

echo "✅ Connected successfully to the database.";
?>
