<?php
ini_set('display_errors', 0);
ini_set('log_errors', 1);
error_reporting(E_ALL);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pokemondb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    error_log("Database connection failed: " . $conn->connect_error);
    echo json_encode(["error" => "Database connection failed."]);
    exit;
}

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $sql = isset($_GET['id']) 
            ? "SELECT * FROM login WHERE id=" . intval($_GET['id']) 
            : "SELECT * FROM login";

        $result = $conn->query($sql);
        $users = [];

        if ($result && $result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $users[] = $row;
            }
        }
        echo json_encode($users);
        break;

        case 'POST':
            $data = json_decode(file_get_contents("php://input"));
        
            if (!empty($data->first_name) && !empty($data->last_name) && !empty($data->username) && !empty($data->email) && !empty($data->password)) {
                $first_name = $conn->real_escape_string($data->first_name);
                $last_name = $conn->real_escape_string($data->last_name);
                $username = $conn->real_escape_string($data->username);
                $email = $conn->real_escape_string($data->email);
                $password = ($conn->real_escape_string($data->password)); 
                $role = $conn->real_escape_string($data->role ?? '');
        
                $sql = "INSERT INTO login (`first-name`, `last-name`, `username`, `email`, `password`, `role`)  
                        VALUES ('$first_name', '$last_name', '$username', '$email', '$password', '$role')";
        
                if ($conn->query($sql)) {
                    echo json_encode(["message" => "User added successfully."]);
                } else {
                    error_log("SQL Error: " . $conn->error);
                    echo json_encode(["error" => "Error while adding user."]);
                }
            } else {
                echo json_encode(["error" => "All fields are mandatory."]);
            }
            break;

    case 'PUT':
        $data = json_decode(file_get_contents("php://input"));
        if (!empty($data->id) && !empty($data->first_name) && !empty($data->last_name) && !empty($data->username) && !empty($data->email)) {
            $id = intval($data->id);
            $first_name = $conn->real_escape_string($data->first_name);
            $last_name = $conn->real_escape_string($data->last_name);
            $username = $conn->real_escape_string($data->username);
            $email = $conn->real_escape_string($data->email);
            $password = $conn->real_escape_string($data->password ?? '');
            $role = $conn->real_escape_string($data->role ?? '');

            $sql = "UPDATE login 
            SET `first-name`='$first_name', `last-name`='$last_name', `username`='$username', `email`='$email', `password`='$password', `role`='$role' 
            WHERE id=$id";

            if ($conn->query($sql)) {
                echo json_encode(["message" => "User modified successfully."]);
            } else {
                echo json_encode(["error" => "Error while modifying user."]);
            }
        } else {
            echo json_encode(["error" => "All fields are mandatory."]);
        }
        break;

    case 'DELETE':
        $data = json_decode(file_get_contents("php://input"));
        if (!empty($data->id)) {
            $id = intval($data->id);
            $sql = "DELETE FROM login WHERE id=$id";

            if ($conn->query($sql)) {
                echo json_encode(["message" => "User deleted successfully."]);
            } else {
                echo json_encode(["error" => "Error while deleting user."]);
            }
        } else {
            echo json_encode(["error" => "ID field is mandatory."]);
        }
        break;

    default:
        echo json_encode(["error" => "Invalid HTTP method."]);
        break;
}

$conn->close();
?>
