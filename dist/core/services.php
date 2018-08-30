<?php
/**
 * Services
 */
session_start();

require('ContentManager.php');

/**
 * Analyze of the action received GET or POST
 */
$action;
if(isset($_GET["action"])){
    $action = $_GET["action"];
}elseif(isset($_POST["action"])){
    $action = $_POST["action"];
}else{
    header('Location:../index.php');
}

$cm = new ContentManager();

/**
 * Switch case on the action received
 * Instanciation of a ContentManager object type
 */
switch($action){
    case 'signup':
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
        break;
    case 'comment':
        $cm->comment($_POST);
        break;
    default:
        $cm=null;
        header('Location:../index.php');
}
