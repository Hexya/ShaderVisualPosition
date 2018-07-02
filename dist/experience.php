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
        echo '<h3>Login Success, Welcome - '.$_SESSION["username"].'</h3>';
        echo '<br /><br /><a href="logout.php">Logout</a>';
    ?>
  </header>
  <div class="experience-wrapper-container">
    <div class="coordinate-container">
      <p>Click the button to get your coordinates.</p>

      <button class="generate-btn">Try It</button>
      <br><hr><br>
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
