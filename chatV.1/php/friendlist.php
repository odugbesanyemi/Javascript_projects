<!-- we want to have a list of all the users categorized by those online and those offline and those who are friends  -->
<?php include('../includes/header.php') ?>
<!-- this is the user bar component -->
<?php include ('../includes/usercomponent.php')?>
<div id="root">
<?php include ('../ajax/users.php')?>
</div>
<?php include('../includes/footer.php') ?>
