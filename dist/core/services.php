<?php
session_start();

require('ContentManager.php');
// Analyse de l'action reçue en GET ou POST
$action;
if(isset($_GET["action"])){
    $action = $_GET["action"];
}elseif(isset($_POST["action"])){
    $action = $_POST["action"];
}else{
    header('Location:../index.php');
}

$cm = new ContentManager();
// Switch case sur l'action reçue
switch($action){
    case 'signup':
        // Instanciation d'un objet de type ContentManager
        // On déclenche la méthode
        $cm->signup($_POST, $_FILES);
        // ContentManager::addCar($_POST) est un appel statique a la methode addCat
        break;
    case 'login':
        $cm->login($_POST);
        break;
    case 'saveImg':
        $cm->saveImg($_POST);
        break;
    default:
        $cm=null;
        header('Location:../index.php');
}
