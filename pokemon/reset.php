<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header('Content-Type: application/json');

$input = file_get_contents('php://input'); 
$data = json_decode($input, true);

$user_username = $data['username'] ?? null;
$new_password = $data['password'] ?? null;

$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "pokemondb"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Database connection failed.']);
    exit;
}

$sql_check = "SELECT * FROM login WHERE `username` = ?";
$stmt_check = $conn->prepare($sql_check);
$stmt_check->bind_param("s", $user_username);
$stmt_check->execute();
$result_check = $stmt_check->get_result();

if ($result_check->num_rows === 0) {
    echo json_encode(['success' => false, 'message' => 'User not found.']);
    exit;
}

$sql_update = "UPDATE login SET `password` = ? WHERE `username` = ?";
$stmt_update = $conn->prepare($sql_update);
$stmt_update->bind_param("ss", $new_password, $user_username);

if ($stmt_update->execute()) {
    echo json_encode(['success' => true, 'message' => 'Password successfully updated.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error updating password.']);
}

$conn->close();
?>
