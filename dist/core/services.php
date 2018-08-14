<?php
session_start();

require('ContentManager.php');
// Analyze of the action received GET or POST
$action;
if(isset($_GET["action"])){
    $action = $_GET["action"];
}elseif(isset($_POST["action"])){
    $action = $_POST["action"];
}else{
    header('Location:../index.php');
}

$cm = new ContentManager();
// Switch case on the action received
switch($action){
    case 'signup':
        // Instanciation of a ContentManager object type
        // We active the method
        $cm->signup($_POST, $_FILES);
        break;
    case 'login':
        $cm->login($_POST);
        break;
    case 'saveImg':
        $cm->saveImg($_POST);
        break;
    case 'likeImg':
        $cm->likeImg($_POST);
    default:
        $cm=null;
        header('Location:../index.php');
}
