<?php 
include('../includes/header.php'); ?>
<?php include('../includes/dbconn.php'); ?>
<?php
$message;
if (isset($_POST['register'])){
// we want to check if the username is already choosen
    $username = $_POST['username'];
    $sql = "SELECT * FROM users WHERE username = '$username'";
    $query = mysqli_query($conn,$sql);
    if (mysqli_num_rows($query)>0){
        // meaning there is a username registered already
        $message = "Username already exists";
        header('location:'.$_SERVER['PHP_SELF']);
    }else{
        // sanitize post data and send to the database
        if(!empty($_POST['username'] && $_POST['emailAddress'] && $_POST['password'] && $_POST['tel'])){
            $sql = "INSERT INTO users (username, phone, email, `password`) VALUES (?,?,?,?)";
            $stmt = mysqli_stmt_init($conn);
        if (mysqli_stmt_prepare($stmt,$sql)){
            mysqli_stmt_bind_param($stmt,'ssss',$param_username,$param_phone,$param_email, $param_password);
            $param_username = $_POST['username'];
            $param_phone = $_POST['tel'];
            $param_email = $_POST['emailAddress'];
            $param_password = $_POST['password'];
        if(mysqli_stmt_execute($stmt)){
            $message = "Successfully registered, Login to Begin.";
            header('location:login.php');

        }
        }
        }else{
            die();
        }
    }
}
if (!empty($message)){
    $_SESSION['message'] = $message;       
}

?>
<!-- signin page -->
<div style="text-align:center; color:white;">
    <p style="color:purple; margin:0; margin-top:30px;">New to Tecxchat?</p>
    <h1 style="color:purple; margin:0;">Create new account</h1>
</div>
<div class="form-group">
    <form action="<?php $_SERVER['PHP_SELF'] ?> " method="POST">
        <input type="text" name="username" id="username" placeholder="Enter Username" class="shadow" required>
        <input type="email" name="emailAddress" id="emailAddress" placeholder="Email Address" class="shadow" required>
        <input type="password" name="password" id="password" placeholder="Enter Password" class="shadow" required>
        <input type="tel" name="tel" id="tel" placeholder="Phone Number" class="shadow" required>
        <input type="submit" value="register" class="submitBtn" name="register" required>
    </form>
    <div style="text-align:center ;">
        <p>Already have an account? <a href="login.php" id="">click here</a></p>
    </div>
</div>

<?php include('../includes/footer.php') ?>