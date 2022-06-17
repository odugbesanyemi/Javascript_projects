<div id="display">
    <div id="display-head">
        <h2>My Contacts</h2>
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
    <div id="display-body" >
        <ul >
        <?php
                session_start();
                include('../includes/dbconn.php');
                $userid = $_SESSION['userid'];
                $sql = "SELECT msg.receipent, msg.content, users.username, users.id  
                FROM msg
                INNER JOIN users
                ON msg.receipent = users.id
                WHERE msg.receipent != $userid AND sender = $userid
                GROUP BY receipent";

                $query = mysqli_query($conn,$sql);
                if(mysqli_num_rows($query)>0){
                    while ($row = mysqli_fetch_array($query)){
                        echo'
                        <li id="chathead">
                        <div class="user-details">
                            <img src="../assets/pexels-mohamed-abdelghaffar-771742.jpg" rounded alt="">
                            <div class="user-names">
                                <p style="margin:0; font-size:16px;">'.$row['username'] .'</p>
                                <p style="margin:0;">online</p>
                            </div>
                        </div>
                        <div class="user-commands">
                            <ion-icon name="chatbox-ellipses-outline" style="color:blue;" onclick="chat('.$row['id'] .')"></ion-icon>
                            <ion-icon name="add-circle-outline" style="color:grey ;"></ion-icon>
                        </div>
                        </li>
                        ';
                    }
                }else{
                    // mean there is no chat yet
                    echo '
                    <div class="emptymail" style= "text-align:center;">
                    <img src="../assets/emptymailbox.jpg" alt="emptymail.jpg">
                    <h3 style="font-size:20px; color:purple; margin:0;">No Chats Yet !</h3>
                    <p style="padding:0 20px">Add new friends to your chat by sending a message to them</p>
                    </div>
                    ';
                }
            ?>
        </ul>
    </div>
</div>