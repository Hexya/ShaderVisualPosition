<?php
//login_success.php
session_start();
if(!isset($_SESSION["username"])) {
    header("location:pdo_login.php");
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
                <img src="uploads/avatar/'.$_SESSION["picture"].'">
            </div>
            <h3>'.$_SESSION["username"].'</h3>
            <a href="logout.php">
            <img src="images/logout.svg">
            </a>
         </div>';
    ?>
  </header>
  <div class="experience-wrapper-container">
    <div class="coordinate-container">

        <div class="generate-container">
            <div class="circle"></div>
            <div class="big-circle"></div>
            <button class="generate-btn">
              <img src="images/playicon.png">
            </button>
            <p class="instruct">Press to generate</br>your Shader</p>
        </div>
            <div class="transition"></div>
            <div class="loading">
                <div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div><p class="corp">Generating</p>
            </div>
            <!--<p class="loading">Generating<span class="point-1">.</span><span class="point-2">.</span><span class="point-3">.</span>-->
            </p>

        <p>Country: <span class="country"></span></p>
      <p>State: <span class="state"></span></p>
      <p>City: <span class="city"></span></p>
      <p>Latitude: <span class="latitude">161</span></p>
      <p>Longitude: <span class="longitude">200</span></p>
      <p>IP: <span class="ip"></span></p>
      <button class="save-btn">SAVE ME BITCH</button>
    </div>


  </div>

  <script src="./build/main.js"></script>
</body>
</html>
