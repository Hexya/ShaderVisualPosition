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
                'name'     => mb_convert_case($pPost['name'], MB_CASE_TITLE, "UTF-8"),
                'password' => md5($pPost['password']),
                'image'    => $pFIles['picture']['name'],
                'success'  => true
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
            $_SESSION["id"] = $user["id"];
            $_SESSION["username"] = $user["username"];
            $_SESSION["picture"]  = $user["media"];
            $data = [
                'username' => $pPost["username"],
                'success'  => true
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
        $fileName = time() . '.jpg';
        file_put_contents('../uploads/shaders/' . $fileName, $data);
        $id        = $_SESSION["id"];
        $name      = $_SESSION["username"];
        $country   = $pPost["country"];
        $state     = $pPost["state"];
        $city      = $pPost["city"];
        $latitude  = $pPost["latitude"];
        $longitude = $pPost["longitude"];
        $date      = date("Y-m-d H:i:s");
        $query = $this->bdd->prepare(
         'INSERT INTO shaders (usr_id, usr_name, sh_country, sh_state, sh_city, sh_latitude, sh_longitude, sh_media, sh_date) 
          VALUES ("' . $id . '", "' . $name . '", "' . $country . '", "' . $state . '", "' . $city . '", "' . $latitude . '", "' . $longitude . '", "' . $fileName . '", "' . $date . '")');
        $query->execute();
    }

    public function getShaders() {
        $query = $this->bdd->prepare('SELECT * FROM shaders LEFT JOIN liked_img ON shaders.sh_id = liked_img.li_img_id WHERE usr_id = '.$_SESSION["id"].' ORDER BY sh_date DESC');
        $query->execute();

        $results = $query->fetchAll();
        foreach($results as $shader) {
            $response.= '<div class="shader-container">
                            <div class="shader-content">
                                <img src="uploads/shaders/'.$shader['sh_media'].'">
                            </div>
                            <p>'.$shader['sh_country'].' | '.$shader['sh_state'].'</p>
                            <img class="ice-cream" value="'.$shader['sh_id'].'" status="'.$shader['li_status'].'" src="images/iceCreamP.svg">
                        </div>';
        }
        return $response;
    }

    public function likeImg($pPost) {
        $likedUsrId  = $_SESSION["id"];
        $likedImgId  = $pPost['imgId'];
        $likedStatus = $pPost['status'];
        $query = $this->bdd->prepare('INSERT INTO liked_img (li_usr_id, li_img_id, li_status) VALUES ("' . $likedUsrId . '","' . $likedImgId . '", "' . $likedStatus . '")');
        $query->execute();
    }

    public function getLike() {
        $query = $this->bdd->prepare('SELECT * FROM liked_img WHERE usr_id = '.$_SESSION["id"].' ORDER BY sh_date');
        $query->execute();

        $results = $query->fetchAll();
        foreach($results as $shader) {
            $response.= '<p>'.$shader['sh_country'].'</p>';
        }
        return $response;
    }
}
