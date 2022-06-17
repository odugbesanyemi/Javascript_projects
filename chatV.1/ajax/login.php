<!--connect database and check if user's credentials are saved in the database. else, kindly send a message to the user telling him/her that the password is wrong-->
<?php include('../includes/header.php');
include('../includes/dbconn.php');
// login function

if (isset($_POST['login'])){
    // check if username is in the database
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);
    $sql = "SELECT * FROM users WHERE username = '$username'";
    $query = mysqli_query($conn, $sql);
    if(mysqli_num_rows($query)>0){
        // username exists 
        // check if password matches the username
        $sql = "SELECT * FROM users WHERE username = '$username' " ;
        $query = mysqli_query($conn,$sql);
        while($row = mysqli_fetch_array($query)){
            $passphrase = $row['password'];
            $id = $row['id'];
        }
        if($password == $passphrase){
            // meaning passwords match 
            // set session for logged in
            $_SESSION['logged_in']=1;
            $_SESSION['userid'] = $id;
            header('location:../php/friendlist.php');
        }
    }else{
        // username does not exists
        $message = "wrong login details, Kindly try again.";
    }
}
if (!empty($message)){
    $_SESSION['message'] = $message;
}

?>
<!-- signin page -->
<div style="text-align:center; color:white;">
    <p style="color:purple; margin:0; margin-top:30px;">Existing User?</p>
    <h1 style="color:purple; margin:0;">Login to account</h1>
</div>
<div class="form-group">
    <form action="<?php $_SERVER['PHP_SELF'] ?> " method="POST">
        <input type="text" name="username" id="username" placeholder="Enter Username" class="shadow" required>
        <input type="password" name="password" id="password" placeholder="Enter Password" class="shadow" required>
        <input type="submit" value="login" class="submitBtn" name="login">
    </form>
    <div style="text-align:center ;">
        <p>Don't have an account? <a href="register.php" id="getStartedBtn">Signup here</a></p>
    </div>
</div>
<?php include('../includes/footer.php') ?>