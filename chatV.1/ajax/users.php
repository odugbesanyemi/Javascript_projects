<div id="display">
    <div id="display-head">
        <h2>All Users</h2>
        <div id="display-icons">
            <div class="sort" style="position:relative;" id="trigger">
                <ion-icon name="funnel-outline" style="color:purple"></ion-icon>
                <div class="expand hidden">
                    <ul class="expand-list">
                        <li class="expand-list-item"><ion-icon name="person-circle-outline"></ion-icon> ASC</li>
                        <li class="expand-list-item"><ion-icon name="apps-outline"></ion-icon> DESC</li>
                    </ul>
                </div>
            </div>
            <div class="filter" id="trigger">
                <ion-icon name="filter-outline" style="color:purple"></ion-icon>
                <div class="expand hidden">
                    <ul class="expand-list">
                        <li class="expand-list-item"><ion-icon name="person-circle-outline"></ion-icon> All</li>
                        <li class="expand-list-item"><ion-icon name="apps-outline"></ion-icon> Online</li>
                        <li class="expand-list-item"><ion-icon name="notifications-outline"></ion-icon>Friends</li>
                    </ul>
                </div>
            </div>
            <div class="search">
                <ion-icon name="search-outline" style="color:purple"></ion-icon>
            </div>
            
        </div>
    </div>
    <div id="display-body">
        <ul>
            <?php
                if(!isset($_SESSION)){
                    session_start();
                }
                include('../includes/dbconn.php');
                $userid = $_SESSION['userid'];
                $sql = "SELECT * FROM users WHERE id != $userid";
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
                }
            ?>
        </ul>
    </div>
</div>