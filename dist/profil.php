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
<header class="home-header">
    <div class="wire-news-btn">
        <a href="wireNews.php">
            <img src="images/logoCleanSC.png">
        </a>
    </div>
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
    <div class="user-profil-container">
        <div class="user-img">
            <?= '<img src="uploads/avatar/'.$_SESSION["picture"].'">' ?>
        </div>
        <div class="user-info">
            <?= '<p class="name-txt">'.$_SESSION["username"].'</p>' ?>
            <p class="modif-txt">Update your profil</p>
        </div>
        <div class="more-pic"><a href="experience.php">+</a></div>
        <p class="more-txt">Generate an other</br>shaders</p>
    </div>
    <div class="gallery-desc">
        <p>Find here all your Shader visual wallpaper </p>
    </div>
    <div class="gallery-container">
        <?php
            require('./core/ContentManager.php');
            $cm = new ContentManager();
            echo $cm->getShaders();
        ?>
    </div>


</div>

<script src="./build/main.js"></script>
</body>
</html>
