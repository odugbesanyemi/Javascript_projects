<?php include('../includes/header.php') ?>


<!-- signin page -->
<div style="text-align:center; color:white;">
<p style="color:purple; margin:0; margin-top:30px;">New to Tecxchat?</p>
    <h1 style="color:purple; margin:0;">Create new account</h1>
</div>
<div class="form-group">
    <form action="<?php $_SERVER['PHP_SELF'] ?> ">
        <input type="text" name="username" id="username" placeholder="Enter Username" class="shadow">
        <input type="email" name="emailAddress" id="emailAddress" placeholder="Email Address" class="shadow">
        <input type="password" name="password" id="password" placeholder="Enter Password" class="shadow">
        <input type="tel" name="tel" id="tel" placeholder="Phone Number" class="shadow">
        <input type="submit" value="register" class="submitBtn">
    </form>
    <div style="text-align:center ;">
        <p>Already have an account? <a href="login.php" id="">click here</a></p>
    </div>
</div>

<?php include('../includes/footer.php') ?>
