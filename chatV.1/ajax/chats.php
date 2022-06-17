<?php
session_start();
include('../includes/dbconn.php');
$receipentid  = $_GET['receipent'];
$userid = $_SESSION['userid'];
$sql = "SELECT * FROM users WHERE id = $receipentid";
$query= mysqli_query($conn,$sql);
while ($row = mysqli_fetch_array($query)){
    $receipentname = $row['username'];
}
$identifier1 = $userid.$receipentid;
$identifier2 =$receipentid.$userid;

if(!empty($_GET['message'])){$sent = $_GET['message'];
$sql = "INSERT INTO msg (`identifier`,`sender`,`receipent`,`content`,`status`) VALUES ('$identifier1','$userid','$receipentid','$sent',0 )";
$query = mysqli_query($conn,$sql);
}else{
    // do nothing
}

?>
<div id="display" onfocus="alert('hello world')">
    <div id="display-head">
        <h2><?php echo $receipentname; ?></h2>
        <div id="display-icons">
            <div class="sort">
                <ion-icon name="funnel-outline" style="color:purple"></ion-icon>
            </div>
            <div class="filter">
            <ion-icon name="filter-outline" style="color:purple"></ion-icon>
            </div>
            <div class="search">
                <ion-icon name="search-outline" style="color:purple"></ion-icon>
            </div>
        </div>
    </div>
    <div id="display-body">
        <div class="chat-head" >
 
        </div>
        <div class="chat-foot">
            <!-- this will be the message content and the  send button -->
            <form action="#" method="post">
                <div class="form-group">
                    <textarea name="userinput" id="userinput"  style="resize:none; border:none; font-size:12pt; padding:5px;min-width:70%;color:purple;" ></textarea>
                    <button style="width:100%; border:none; background-color:purple;color:white;" type="button" onclick="sendMessage(<?php echo $receipentid; ?>)">Send</button>
                </div>
            </form>
        </div>
    </div>
</div>