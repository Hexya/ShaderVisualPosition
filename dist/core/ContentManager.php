<?php
Class ContentManager{
    // Propriétés
    private $bdd;
    // Constructor
    public function __construct(){
        require_once('Connexion.php');
        $connexion = Connexion::getInstance();
        $this->bdd = $connexion->bdd;
    }
    // Methods
    public function signup($pPost, $pFIles){
        if(!empty($pPost['name']) && !empty($pPost['password'])) {
            $image = "";
            if (!empty($pFIles['picture']['tmp_name'])) {
                $uniq = uniqid();
                // uniqid est une methode native de php qui renvoi un numéo unique
                // cela permet d'être sur de ne pas avoir 2fois le même fichier image
                move_uploaded_file($pFIles['picture']['tmp_name'], "../uploads/avatar/" . $uniq . $pFIles['picture']['name']);
                $image = $uniq . $pFIles['picture']['name'];
            }
            $name = mb_convert_case($pPost['name'], MB_CASE_TITLE, "UTF-8");
            $password = md5($pPost['password']);
            $query = $this->bdd->prepare('INSERT INTO users (username, password, media) VALUES ("' . $name . '","' . $password . '", "' . $image . '")');
            $query->execute();

            $_SESSION["username"] = $name;
            $_SESSION["picture"] = $image;
            $data = [
                'name' => mb_convert_case($pPost['name'], MB_CASE_TITLE, "UTF-8"),
                'password' => md5($pPost['password']),
                'image' => $pFIles['picture']['name'],
                'success' => true
            ];
        } else {
            $data = [
                'success' => false
            ];
        }

        $json = json_encode($data);
        echo($json);
        die;
    }

    public function login($pPost){
        $query = "SELECT * FROM users WHERE username = :username AND password = md5(:password)";
        $statement = $this->bdd->prepare($query);
        $statement->execute(
            array(
                'username' => $pPost["username"],
                'password' => $pPost["password"]
            )
        );
        $count = $statement->rowCount();
        if($count > 0) {
            // Recup ligne de base de donné sous forme de tableaux
            $user = $statement->fetch();
            $_SESSION["username"] = $user["username"];
            $_SESSION["picture"] = $user["media"];
            $data = [
                'username' => $pPost["username"],
                'success' => true
            ];
        } else {
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
        file_put_contents('../uploads/shaders/' . $fname, $data);
        $query = $this->bdd->prepare('INSERT INTO images (id, username, country, state, city, latitude, longitude, fname ) VALUES ("' . $id . '""' . $name . '","' . $pPost['country'] . '", "' . $pPost['state'] . '", "' . $pPost['city'] . '", "' . $pPost['latitude'] . '", "' . $pPost['longitude'] . '", "' . $fname . '")');
        $query->execute();
    }
}
