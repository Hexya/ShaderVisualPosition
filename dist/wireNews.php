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
            <a href="logout.php">
            <img src="images/logout.svg">
            </a>
         </div>';
    ?>
</header>
<div class="wire-news-wrapper-container">
    <div class="center-container">
        <div class="left-container">

            <div class="shader-container">

                <div class="shader-header">
                    <div class="user-img">
                        <img src="">
                    </div>
                    <p>Vegita San</p>
                </div>

                <div class="shader-img">
                    <img src="https://scontent-cdt1-1.cdninstagram.com/vp/86effe30f7a6fcfc6dbf893de071c21a/5C0476A7/t51.2885-15/e35/37896558_288588958571205_5674524883262898176_n.jpg">
                </div>

                <div class="shader-comment">
                    <div class="action-icon">
                        <span class="like-icon">Corazon</span>
                        <span class="comment-icon">Comment</span>
                    </div>
                    <p class="like-count">1230 Like</p>
                    <div class="user-comment">
                        <p><span class="user-name">Maëlly </span> Amazing pic!</p>
                    </div>
                    <input type="text" placeholder="Add comment...">
                </div>

            </div>

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
                <div class="rank-user">
                    <div class="img-user">
                        <img src="">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Bulma</p>
                        <p class="desc">Bebo flex</p>
                    </div>
                </div>
                <div class="rank-user">
                    <div class="img-user">
                        <img src="">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Goten</p>
                        <p class="desc">Original</p>
                    </div>
                </div>
                <div class="rank-user">
                    <div class="img-user">
                        <img src="">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Badack</p>
                        <p class="desc">Oni</p>
                    </div>
                </div><div class="rank-user">
                    <div class="img-user">
                        <img src="">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Bulma</p>
                        <p class="desc">Bebo flex</p>
                    </div>
                </div>
                <div class="rank-user">
                    <div class="img-user">
                        <img src="">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Goten</p>
                        <p class="desc">Original</p>
                    </div>
                </div>
                <div class="rank-user">
                    <div class="img-user">
                        <img src="">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Badack</p>
                        <p class="desc">Oni</p>
                    </div>
                </div><div class="rank-user">
                    <div class="img-user">
                        <img src="">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Bulma</p>
                        <p class="desc">Bebo flex</p>
                    </div>
                </div>
                <div class="rank-user">
                    <div class="img-user">
                        <img src="">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Goten</p>
                        <p class="desc">Original</p>
                    </div>
                </div>
                <div class="rank-user">
                    <div class="img-user">
                        <img src="">
                    </div>
                    <div class="txt-user">
                        <p class="pseudo">Badack</p>
                        <p class="desc">Oni</p>
                    </div>
                </div>

                <div class="shadow"></div>
            </div>

        </div>
    </div>
</div>

<script src="./build/main.js"></script>
</body>
</html>
