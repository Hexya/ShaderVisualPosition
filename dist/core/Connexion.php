<?php

/**
 * Connexion Class
 */
Class Connexion{
    private static $_instance = null;
    public static $ONLINE = false;
    public $bdd;
    /**
     * Connexion constructor
     */
    public function __construct(){
        if(Connexion::$ONLINE == TRUE){
            $this->bdd = new PDO('mysql:host=localhost;dbname=visual_pos', 'login','password', array(PDO::MYSQL_ATTR_INIT_COMMAND =>'SET NAMES utf8'));
        }else{
            $this->bdd = new PDO('mysql:host=localhost;dbname=visual_pos', 'root','root', array(PDO::MYSQL_ATTR_INIT_COMMAND =>'SET NAMES utf8'));
        }
    }
    /**
    * Method getInstance
    * Accessible by class ( Connexion::getInstance() )
    * Connexion is a singelton
    * She return the instance if she exist
    * else she create a new instance
    */
    public static function getInstance(){
        if(is_null(self::$_instance)){
            self::$_instance = new Connexion();
        }
        return self::$_instance;
    }
}
?>
