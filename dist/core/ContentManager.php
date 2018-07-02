<?php
Class ContentManager{
    // Propriétés
    private $bdd;
    // constructor
    public function __construct(){
        require_once('Connexion.php');
        $connexion = Connexion::getInstance();
        $this->bdd = $connexion->bdd;
    }
    // methodes
    /**
     *
     */
    public function addUser($pPost, $pFIles){
        //CONSTRUCT code
        $message = "";

        if(empty($pPost["name"]) || empty($pPost["password"]))
        {
            $message = '<label>All fields are required</label>';
        }
        else {
            $image = "";
            if (!empty($pFIles['picture']['tmp_name'])) {
                $uniq = uniqid();
                // uniqid est une methode native de php qui renvoi un numéo unique
                // cela permet d'être sur de ne pas avoir 2fois le même fichier image
                move_uploaded_file($pFIles['picture']['tmp_name'], "../images/" . $uniq . $pFIles['picture']['name']);
                $image = $uniq . $pFIles['picture']['name'];
            }
            $name = mb_convert_case($pPost['name'], MB_CASE_TITLE, "UTF-8");
            $password = $pPost['password'];
            $query = $this->bdd->prepare('INSERT INTO users (username, password, media) VALUES ("' . $name . '","' . $password . '", "' . $image . '")');
            $query->execute();
        }
    }

    public function login($pPost){
        $query = "SELECT * FROM users WHERE username = :username AND password = :password";
        $statement = $this->bdd->prepare($query);
        $statement->execute(
            array(
                'username'     =>     $pPost["username"],
                'password'     =>     $pPost["password"]
            )
        );
        $count = $statement->rowCount();
        if($count > 0)
        {
            $_SESSION["username"] = $pPost["username"];
            $data = [
                'username' => $pPost["username"],
                'success' => true
            ];
        } else
        {
            $data = [
                'success' => false
            ];
        }

        $json = json_encode($data);
        echo($json);
        die;
    }

    public function saveImg($pPost) {
        $data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $pPost['base64']));
        $fname = time() . '.jpg';
        file_put_contents('../uploads/' . $fname, $data);
        $query = $this->bdd->prepare('INSERT INTO images (id, username, country, state, city, latitude, longitude, fname ) VALUES ("' . $id . '""' . $name . '","' . $pPost['country'] . '", "' . $pPost['state'] . '", "' . $pPost['city'] . '", "' . $pPost['latitude'] . '", "' . $pPost['longitude'] . '", "' . $fname . '")');
        $query->execute();
    }
}
