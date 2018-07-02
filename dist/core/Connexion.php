
<?php
Class Connexion{
    private static $_instance = null;
    public static $ON_DEMO = false;
    public $bdd;
    // Constructor
    public function __construct(){
        if(Connexion::$ON_DEMO==TRUE){
            $this->bdd = new PDO('mysql:host=localhost;dbname=visual_pos', 'login','password', array(PDO::MYSQL_ATTR_INIT_COMMAND =>'SET NAMES utf8'));
        }else{
            $this->bdd = new PDO('mysql:host=localhost;dbname=visual_pos', 'root','root', array(PDO::MYSQL_ATTR_INIT_COMMAND =>'SET NAMES utf8'));
        }
    }
    // Methode getInstance (accessible par la classe ex: Cnnexion::getInstance() )
    // La connexion  est un singelton, ele renvoit son instance si celle ci existe déjà
    // sinon elle crée une nouvelle connexion.
    public static function getInstance(){
        if(is_null(self::$_instance)){
            self::$_instance = new Connexion();
        }
        return self::$_instance;
    }
}
?>
