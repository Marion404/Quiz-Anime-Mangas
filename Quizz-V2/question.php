

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="assets/css/style.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    
    <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
</style>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>



    <title>Quiz</title>
</head>

<body class="container p-10">

<div id="timer" class="">
   
</div>
  
  
</div>
<div class="title pt-2 pb-2 text-center mx-auto p-2" id="title-custom">
    <h1 class="">Quiz sur les animes</h1>
</div>
<?php include 'utils/connexion.php';?>
<?php
    
    // On récupère tout le contenu de la table questions
    $sqlQuery = 'SELECT * FROM questions';
    $questionsStatement = $db->prepare($sqlQuery);
    $questionsStatement->execute();
    $questions = $questionsStatement->fetchAll(PDO::FETCH_ASSOC);

   ?>
<?php
setcookie(
    'score',
'1',
['expires' => time()+365*24*3600,
'secure' => true,
'httponly' => true,
]
)
?>

<?php 
//On fait un foreach pour chaque question
foreach ($questions as $question) {
    ?>
        <div class="card-body bg-primary text-white border-radius:10px text-center mx-auto my-5 rounded p-2">
            <h3 class="card-header border-radius:50px "> <?= $question['question']?></h3>
        </div>
        <div class="row container-fluid">
            <div class="col"></div>
            
            <div class="rounded text-center mx-auto" style="width:400px">
                
            <div class="reponse-body rounded text-center mx-auto">
                <input class="form-check-input ok" type="checkbox" style="width:16px" id="<?= $question['id']?>.1">
                <label class="form-check-label text-dark" for="flexCheckDefault" name="box">
                    
                    <?= $question['choix1']?>
                    
                </div>    
                
                
                <div class="reponse-body rounded text-center mx-auto">
                    <input class="form-check-input ok" type="checkbox" style="width:16px" id="<?= $question['id']?>.2">
                    <label class="form-check-label" for="flexCheckDefault" name="box">
                        
                        <?= $question['choix2']?>
                        
                    </div>
                    <div class="reponse-body rounded text-center mx-auto px-3">
                        <input class="form-check-input ok" type="checkbox" style="width:16px; padding:5px" id="<?= $question['id']?>.3">
                        <label class="form-check-label" for="flexCheckDefault" name="box">
                            <?= $question['choix3']?>
                            <br><br>
                        </div>
                        <img style="width:300px;display:none" id="1" src="assets/images/seiya.jpg">
                        <?php 
                        
                        echo '<div class="d-flex justify-content-center"><img style="width:300px;display:none" id="image' . $question['id'] . '" src="assets/images/' . $question['image']. '"></div>';
                        echo "<input class='valide' type='button' id='submit' value='Valider' onClick='changeColor({$question['id']}, \"".addslashes($question['resultat'])."\", \"".addslashes($question['choix1'])."\", \"".addslashes($question['choix2'])."\", \"".addslashes($question['choix3'])."\")'>";


                        
                        ?></div>
                <div class="col"></div>
        </div>
    <?php
}
?>
<br>
</body>
</html>
<script type="text/javascript" src="assets/js/main.js"></script> 
<script type="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js">

