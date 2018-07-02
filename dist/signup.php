<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<div class="main-form-container">

    <?php
    if(isset($message))
    {
        echo '<label class="text-danger">'.$message.'</label>';
    }
    ?>
    <h1>Sign in Shader Visual Position</h1>
    <form action="core/services.php?action=addUser" method="POST" enctype="multipart/form-data">
        <div class="form-content">
            <label>Type your Name </label>
            <input type="text" name="name" placeholder="Add name">
        </div>
        <div class="form-content">
            <label>Add password</label>
            <input type="text" name="password" placeholder="Add password">
        </div>
        <div class="form-content">
            <label>Add picture</label>
            <input type="file" name="picture" placeholder="Add media">
        </div>
        <button type="submit" class="submit-btn">Join us</button>
    </form>

</div>
</body>
</html>
