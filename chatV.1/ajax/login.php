<!--connect database and check if user's credentials are saved in the database. else, kindly send a message to the user telling him/her that the password is wrong-->
<?php
// connect database
include('../includes/dbconn.php');
// 
?>
<?php include('../includes/header.php') ?>
<!-- signin page -->
<div style="text-align:center; color:white;">
    <p style="color:purple; margin:0; margin-top:30px;">Existing User?</p>
    <h1 style="color:purple; margin:0;">Login to account</h1>
</div>
<div class="form-group">
    <form action="<?php $_SERVER['PHP_SELF'] ?> ">
        <input type="text" name="username" id="username" placeholder="Enter Username" class="shadow">
        <input type="password" name="password" id="password" placeholder="Enter Password" class="shadow">
        <input type="submit" value="login" class="submitBtn">
    </form>
    <div style="text-align:center ;">
        <p>Don't have an account? <a href="register.php" id="getStartedBtn">Signup here</a></p>
    </div>
</div>
<?php include('../includes/footer.php') ?>