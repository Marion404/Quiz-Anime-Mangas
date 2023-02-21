<?php
include 'utils/connexion.php';
session_start();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>Quiz</title>
    
</head>
<body>
<div class="container">


 <form action="question.php" method="POST">

 
 <div style="text-align:center">   
   
   
    <h1>Connexion</h1>
</div>
    <?php
    if(isset($_GET['pseudo'])) {
    $pseudo = $_GET['pseudo'];
    }
    if (isset($_GET['error'])){?>
    <i><?php echo "Votre pseudo existe déjà.Veuillez en saisir un autre."?></i>
    <input type="text"  name="pseudo" required>
    <input type="submit" id="submit" value="Se Connecter" style="justify-content:center">
    <?php
    } else {?>
     
    <input class="label" type="text" name="pseudo"><br>
    <input  class="btn" type="submit" id="submit" value="Se Connecter" style="justify-content:center; font-size: 25px; line-height: 50%; text-align: center;">
   <a href="question.php">
 <?php
    }?>


 </form>
 
 </div>


</body>
</html>

