           <!-- this will be the area for seeing messages -->
            <!-- we want to display all chat messages based on date  -->
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
            <?php 
            // get identifier first
            $sql = "SELECT * FROM msg WHERE identifier =$identifier1 or identifier = $identifier2 ;
            ";
            $query = mysqli_query($conn,$sql);
            if(mysqli_num_rows($query)>0){
                while($row = mysqli_fetch_array($query)){
                    if ($row['sender']==$userid){
                        echo '
                        <div class="chat" style="padding:10px; border-radius:10px; background-color: rgba(128, 0, 128, 0.10);margin-bottom:5px;margin-left:20px; margin-top:10px;">
                            <p style="font-size:16px;margin:0;">'.$row['content'] .'</p>
                            <p style="font-size:9px;margin-top:5px;">'. $row['datesent'] .'</p>
                        </div>
                    ';
                    }else{
                        echo '
                        <div class="chat" style="padding:10px; border-radius:10px; background-color:ghostwhite;margin-bottom:5px;margin-right:20px; margin-top:8px;">
                            <p style="font-size:16px;margin:0;">'.$row['content'] .'</p>
                            <p style="font-size:9px;margin-top:5px;">'. $row['datesent'] .'</p>
                        </div>
                    ';
                    }
                }
            }else{
                echo'
                <div class="emptymail" style= "text-align:center;">
                <img src="../assets/emptymailbox.jpg" alt="emptymail.jpg">
                <h3 style="font-size:20px; color:purple; margin:0;">No Messages Yet!</h3>
                <p style="padding:0 20px">Be the first to send a message.</p>
                </div>
                ';
            }
            ?>
