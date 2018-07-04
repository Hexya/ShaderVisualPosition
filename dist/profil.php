<?php
//login_success.php
session_start();
if(!isset($_SESSION["username"])) {
    header("location:index.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Shader Visual Position</title>
    <link rel="stylesheet" href="./build/main.css">
</head>
<body>
<header>
    <?php
    echo
        '<div class="logout">
            <div class="img-container">
                <a href="profil.php">
                    <img src="uploads/avatar/'.$_SESSION["picture"].'">
                </a>
            </div>
            <h3>'.$_SESSION["username"].'</h3>
            <a href="logout.php">
            <img src="images/logout.svg">
            </a>
         </div>';
    ?>
</header>
<div class="profil-wrapper-container">
    <p>Profil page</p>


</div>

<script src="./build/main.js"></script>
</body>
</html>
