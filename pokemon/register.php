<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header('Content-Type: application/json');

$input = file_get_contents('php://input'); 
$data = json_decode($input, true);

$user_username = $data['username'] ?? null;
$first_name = $data['firstName'] ?? null;  
$last_name = $data['lastName'] ?? null;   
$email = $data['email'] ?? null;
$user_password = $data['password'] ?? null;

if (!$user_username || !$first_name || !$last_name || !$email || !$user_password) {
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}


$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "pokemondb"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Database connection failed.']);
    exit;
}

$sql_check = "SELECT * FROM login WHERE `username` = ? OR `email` = ?";
$stmt_check = $conn->prepare($sql_check);
$stmt_check->bind_param("ss", $user_username, $email);
$stmt_check->execute();
$result_check = $stmt_check->get_result();

if ($result_check->num_rows > 0) {
    echo json_encode(['success' => false, 'message' => 'Username or email already exists.']);
    exit;
}

$default_role = "user"; 
$sql_insert = "INSERT INTO login (`first-name`, `last-name`, `username`, `email`, `password`, `role`) 
               VALUES (?, ?, ?, ?, ?, ?)";
$stmt_insert = $conn->prepare($sql_insert);
$stmt_insert->bind_param("ssssss", $first_name, $last_name, $user_username, $email, $user_password, $default_role);

if ($stmt_insert->execute()) {
    echo json_encode(['success' => true, 'message' => 'Registration successful.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Registration failed: ' . $stmt_insert->error]);
}

$conn->close();
?>
