<?php
//On utilise la méthode post pour ouvoir récupérer le pseudo de l'utilisateur ainsi que son adresse IP
include ('../utils/connexion.php');
$pseudo = $_POST['pseudo'];
$sqlQuery = "INSERT INTO users(pseudo, ip_adress) VALUES (:pseudo, :ip_adress)";
$insertUser = $db->prepare($sqlQuery);

$insertUser->execute([
    'pseudo' => $_POST['pseudo'],
    'ip_adress' => $_SERVER['REMOTE_ADDR']
]);
header("Location: ../question.php");
 ?>
 
 
