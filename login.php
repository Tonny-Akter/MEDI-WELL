<?php
include 'db.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];   
    $password = $_POST['password']; 

    $sql = "SELECT * FROM project WHERE Email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "✅ Login successful! Welcome to MediWell.";
        
    } else {
        echo "❌ No account found with that email.";
    }
}
?>

