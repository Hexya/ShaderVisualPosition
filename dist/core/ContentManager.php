<?php
/**
 * ContentManager Class
 */
Class ContentManager{

    /**
     * @var PDO
     */
    private $bdd;

    /**
     * ContentManager constructor
     */
    public function __construct(){
        require_once('Connexion.php');
        $connexion = Connexion::getInstance();
        $this->bdd = $connexion->bdd;
    }

    /**
     * @function
     * @name signup
     * @param $pPost - name password
     * @param $pFIles - image
     * Signup function
     */
    public function signup($pPost, $pFIles){
        if(!empty($pPost['name']) && !empty($pPost['password'])) {
            $image = "";
            if (!empty($pFIles['picture']['tmp_name'])) {
                $uniq = uniqid();
                // uniqid is a native method of php which return a unique number
                // This make sure you do not stock in base 2 same pics
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

    /**
     * @function
     * @name login
     * @param $pPost - name password
     * Login function
     */
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
            // Get line of BDD as like array
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

    /**
     * @function
     * @name saveImg
     * @param $pPost - id name country state city latitude longitude date
     * Save Shader function
     */
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

    /**
     * @function
     * @name getUsers
     * Get users on wire news page
     */
    public function getUsers() {
        $query = $this->bdd->prepare('SELECT * FROM users');
        $query->execute();

        $results = $query->fetchAll();
        foreach($results as $user) {
            $response.= '<div class="rank-user">
                            <div class="img-user">
                                <img src="uploads/avatar/'.$user['media'].'">
                            </div>
                            <div class="txt-user">
                                <p class="pseudo">'. $user['username'] .'</p>
                                <p class="desc">More info</p>
                            </div>
                        </div>';
        }
        return $response;
    }

    /**
     * @function
     * @name getShaders
     * Get Shaders on profil page
     */
    public function getShaders() {
        $query = $this->bdd->prepare('SELECT * FROM shaders LEFT JOIN liked_img ON shaders.sh_id = liked_img.li_img_id WHERE usr_id = '.$_SESSION["id"].' ORDER BY sh_date DESC');
        //$query = $this->bdd->prepare('SELECT DISTINCT `sh_id`,`usr_id`,`usr_name`,`sh_country`,`sh_state`,`sh_city`,`sh_latitude`,`sh_longitude`,`sh_media`,`sh_date` FROM shaders LEFT JOIN liked_img ON shaders.sh_id = liked_img.li_img_id WHERE '.$_SESSION["id"].'ORDER BY sh_date DESC');
        $query->execute();

        $results = $query->fetchAll();
        foreach($results as $shader) {
            $response.= '<div  data-id='.$shader['sh_id'].' class="shader-container">
                            <div class="shader-content">
                                <img src="uploads/shaders/'.$shader['sh_media'].'">
                            </div>
                            <p class="local-txt">'.$shader['sh_country'].' | '.$shader['sh_city'].'</p>
                            <img class="ice-cream" value="'.$shader['sh_id'].'" status="'.$shader['li_status'].'" src="images/iceCreamP.svg">
                            <span class="long-coor">'.$shader['sh_longitude'].'</span>
                            <span class="lat-coor">'.$shader['sh_latitude'].'</span>
                            <span class="state-txt">'.$shader['sh_state'].'</span>
                        </div>';
        }
        return $response;
    }

    /**
     * @function
     * @name likeImg
     * @param $pPost - likeUsrId likeImgId likeStatus
     * Like action function
     */
    public function likeImg($pPost) {
        $likedUsrId  = $_SESSION["id"];
        $likedImgId  = $pPost['imgId'];
        $likedStatus = $pPost['status'];

        $existQuery = $this->bdd->query('SELECT * from liked_img WHERE li_usr_id = "' . $likedUsrId . '" and li_img_id = "' . $likedImgId . '"');

        $count = false;
        foreach($existQuery as $result) {
            $count = $result;
        }

        if($count !== false) {
            $query = $this->bdd->prepare('UPDATE liked_img SET li_status = ' . $likedStatus . ' WHERE li_id = ' . $count['li_id']);
            $query->execute();
        } else {
            $query = $this->bdd->prepare('INSERT INTO liked_img (li_usr_id, li_img_id, li_status) VALUES ("' . $likedUsrId . '","' . $likedImgId . '", "' . $likedStatus . '")');
            $query->execute();
        }
    }

    /**
     * @function
     * @name getLike
     * Get Shaders likes
     */
    public function getLike() {
        $query = $this->bdd->prepare('SELECT * FROM liked_img WHERE usr_id = '.$_SESSION["id"].' ORDER BY sh_date');
        $query->execute();

        $response = '';

        $results = $query->fetchAll();
        foreach($results as $shader) {
            $response.= '<p>'.$shader['sh_country'].'</p>';
        }
        return $response;
    }

    /**
     * @function
     * @name getAllShaders
     * Get all the Shaders on the wire news page
     */
    public function getAllShaders() {
        //$query = $this->bdd->prepare('SELECT * FROM shaders LEFT JOIN liked_img ON shaders.sh_id = liked_img.li_img_id LEFT JOIN users ON shaders.usr_id = users.id ORDER BY sh_date DESC');
        $query = $this->bdd->prepare('SELECT * FROM shaders LEFT JOIN users ON shaders.usr_id = users.id ORDER BY sh_date DESC');
        $query->execute();

        $results = $query->fetchAll();
        foreach($results as $shader) {
            $query2 = $this->bdd->prepare('SELECT * FROM liked_img WHERE li_img_id ='. $shader['sh_id'] .' AND li_status = 1');
            $query2->execute();
            $results2 = $query2->fetchAll();
            $num = count($results2);
            $response.= '<div class="shader-container">
                            <div class="shader-header">
                                <div class="user-img">
                                    <img src="uploads/avatar/'.$shader['media'].'">
                                </div>
                                <p>'.$shader['usr_name'].'</p>
                            </div>
            
                            <div class="shader-img">
                                <img src="uploads/shaders/'.$shader['sh_media'].'">
                            </div>
                            <div class="shader-comment">
                                <div class="action-icon">';
                                $query4 = $this->bdd->prepare('SELECT * FROM liked_img WHERE li_usr_id = ' .$_SESSION['id'] .' AND li_img_id = '. $shader['sh_id']); // Requete sur le status de l'image en fonction de l'id l'utilisateur
                                $query4->execute();
                                $results4 = $query4->fetch();
                                $response .= '<span class="like-icon"><img class="litle-ice-cream" value="'.$shader['sh_id'].'" status="'.$results4['li_status'].'" src="images/iceCreamPL.svg"></span>
                                    <span class="comment-icon"><img src="images/comment.svg"></span>
                                </div>
                                <p class="like-count">'. $num .' Like</p>
                                <div class="user-comment">
                                <div class="comments-container">';
                                 $query3 = $this->bdd->prepare('SELECT * FROM comments WHERE sh_id = '. $shader['sh_id']);
                                 $query3->execute();
                                 $comments = $query3->fetchAll();
                                 foreach ($comments as $comment) {
                                     $response .= '<p><span class="user-name">'. $comment['usr_name'] .' </span> '. $comment['com_value'] .'</p>';
                                 }
                                 $response .= '</div>
                                </div>
                                <input type="text" class="comment-input" placeholder="Add comment...">
                                <button data-like="'.$num.'"  data-name="'. $_SESSION["username"] .'" data-id="'. $shader['sh_id'] .'" class="comment-btn"></button>
                            </div>
                        </div>';
        }
        return $response;
    }

    /**
     * @function
     * @name comment
     * @param $pPost - commentUsrId commentUsrName comment dataId date
     * Comment action on Shader post
     */
    public function comment($pPost){
        if(!empty($pPost['comment'])) {
            $commentUsrId   = $_SESSION["id"];
            $commentUsrName = $_SESSION["username"];
            $comment        = $pPost['comment'];
            $dataId        = $pPost['id'];
            $date           = date("Y-m-d H:i:s");
            $query = $this->bdd->prepare('INSERT INTO comments (usr_id, usr_name, sh_id, com_value, com_date) VALUES ("' . $commentUsrId . '","' . $commentUsrName . '","' . $dataId . '", "'. $comment .'", "'. $date .'")');
            $query->execute();

            $data = [
                'comment' => $comment,
                'id' => $dataId,
                'success'  => true
            ];
        } else {
            $data = [
                'success' => false
            ];
        }
        $json = json_encode($data);
        echo($json);
    }
}
