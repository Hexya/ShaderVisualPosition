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
<header class="wire-news-header">
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
            <a class="logout-img" href="logout.php">
            <img src="images/logout.svg">
            </a>
         </div>';
    ?>
</header>
<div class="wire-news-wrapper-container">
    <div class="center-container">
        <div class="left-container">

            <?php
            require('./core/ContentManager.php');
            $cm = new ContentManager();
            echo $cm->getAllShaders();
            ?>


        </div>
        <div class="right-container">

            <?php
            echo
            '<div class="user-container">
                <div class="img-user">
                    <img src="uploads/avatar/'.$_SESSION["picture"].'">
                </div>
                <div class="txt-user">
                    <p class="pseudo">'.$_SESSION["username"].'</p>
                    <p class="desc">Asahi</p>
                </div>
            </div>'
            ?>

            <div class="rank-container">


                <?php
                echo $cm->getUsers();
                ?>


                <!--<div class="rank-user">
                    <div class="img-user">
                        <img src="images/Tempo/Bulma.png">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Bulma</p>
                        <p class="desc">Bebo flex</p>
                    </div>
                </div>
                <div class="rank-user">
                    <div class="img-user">
                        <img src="images/Tempo/Gotenks.jpg">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Gotenks</p>
                        <p class="desc">Original</p>
                    </div>
                </div>
                <div class="rank-user">
                    <div class="img-user">
                        <img src="images/Tempo/Beerus.jpg">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Beerus</p>
                        <p class="desc">Oni</p>
                    </div>
                </div><div class="rank-user">
                    <div class="img-user">
                        <img src="images/Tempo/Frieza.jpg">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Frieza</p>
                        <p class="desc">Badass power</p>
                    </div>
                </div>
                <div class="rank-user">
                    <div class="img-user">
                        <img src="images/Tempo/Gohan.png">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Gohan</p>
                        <p class="desc">More lvl</p>
                    </div>
                </div>
                <div class="rank-user">
                    <div class="img-user">
                        <img src="images/Tempo/Bulma.png">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Bulma</p>
                        <p class="desc">Bebo flex</p>
                    </div>
                </div>
                <div class="rank-user">
                    <div class="img-user">
                        <img src="images/Tempo/Gotenks.jpg">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Gotenks</p>
                        <p class="desc">Original</p>
                    </div>
                </div>
                <div class="rank-user">
                    <div class="img-user">
                        <img src="images/Tempo/Beerus.jpg">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Beerus</p>
                        <p class="desc">Oni</p>
                    </div>
                </div><div class="rank-user">
                    <div class="img-user">
                        <img src="images/Tempo/Frieza.jpg">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Frieza</p>
                        <p class="desc">Badass power</p>
                    </div>
                </div>
                <div class="rank-user">
                    <div class="img-user">
                        <img src="images/Tempo/Gohan.png">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Gohan</p>
                        <p class="desc">Original</p>
                    </div>
                </div>-->

                <div class="shadow"></div>
            </div>

        </div>
    </div>
</div>

<script src="./build/main.js"></script>
</body>
</html>
