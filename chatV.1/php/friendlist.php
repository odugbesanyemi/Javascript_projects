<!-- we want to have a list of all the users categorized by those online and those offline and those who are friends  -->
<!-- we will check with php if the user is logged in if not we want to redirect them to the login page -->
<?php
// activate session
session_start();
// check if isset session value logged in
if(isset($_SESSION['logged_in'])){
// do nothing 
}else{
    // redirect user to login page
    header('location: ../ajax/login.php');
}

?>
<?php include('../includes/header.php') ?>
<!-- this is the user bar component -->
<?php include ('../includes/usercomponent.php')?>
<div id="root">
    <?php include ('../ajax/users.php')?>
</div>
<?php include('../includes/footer.php') ?>