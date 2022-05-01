//this is a guessing game and
/*
-Generate a random number between 1 and 100.
-Record the turn number the player is on. Start it on 1.
-Provide the player with a way to guess what the number is.
-Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
-Next, check whether it is the correct number.
-If it is correct:
-Display congratulations message.
-Stop the player from being able to enter more guesses (this would mess the game up).
-Display control allowing the player to restart the game.
-If it is wrong and the player has turns left:
-Tell the player they are wrong and whether their guess was too high or too low.
-Allow them to enter another guess.
-Increment the turn number by 1.
-If it is wrong and the player has no turns left:
-Tell the player it is game over.
-Stop the player from being able to enter more guesses (this would mess the game up).
-Display control allowing the player to restart the game.
-Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.
*/
//set interval functions
let count = 10;
const timeUp = function(){
    count--;
    document.body.innerHTML.textContent = count;
}
//step 1: declare all variables while refrencing the DOM for data
const showAlert = document.querySelector('#alert');
const userInput = document.querySelector('#takeinput');
const submit = document.querySelector('.submitbtn');
const attemptAlert = document.querySelector('.attempt-alert');
let trial = 10;
const refreshBtn = document.querySelector('.refreshBtn');
// funtion to generate the random number
let num = Math.floor(Math.random()*100);
// add an event listener to the button that on pressed, it should check the value of userInput and check if it is thesame with num
//if user clicks btn when userInput  = "" don't do anything but prompt the user to add value
submit.onclick = () => {
    if( userInput.value.length == 0 ){
        alert('write something');
    }else{
        //we want to run the code here
        //1. we will check if the value of userInput matches num
        if (trial != 0 ) {
            // until trial is set to 0 run the below code
            // firstly 
            trial --;
            if(userInput.value == num){
                //this is game over, make the background of the alert green
                showAlert.textContent = "GAME OVER. YOU WIN!!";
                showAlert.classList.add('bg-success');
                userInput.disabled = true;
                submit.disabled = true;
                newElement('.gif','img','Refresh','src', 'assets/giphy.gif');
                newElement('.wrapper','button','Refresh','class', 'btn btn-danger refreshBtn');
                newElement('.attempt-alert','p',userInput.value,"class","bg-success");
                setTimeout(function(){
                    const gify = document.body.querySelector('img');
                    gify.style.display ="none";
                },10000)
                addscore();
                //multiply trial by 0.01 to get amount won
                let amount = trial * 0.01;
                //save the amount to the loalstorage
                let wallet = document.querySelector('.wallet');
                let newwallet = Number(wallet.textContent) + amount;
                localStorage.setItem('walletdb',newwallet);
                document.querySelector('.wallet').textContent = localStorage.getItem('walletdb');

            }else if(userInput.value < num){
                showAlert.textContent = "Too Low, Try Again ! you have " + trial + " chances left";
                newElement('.attempt-alert','p',userInput.value);
                userInput.value = "";  
            }else if(userInput.value >num){
                showAlert.textContent = "Too High, Try Again! you have " + trial + " chances left";
                newElement('.attempt-alert','p',userInput.value);
                userInput.value = "";  
            }
            
        } else{
            showAlert.textContent = "GAME OVER, Try Again!!";
            newElement('.wrapper','button','Refresh','class', 'btn btn-danger refreshBtn')
            userInput.value = "";  
            userInput.disabled = true;
            submit.disabled = true;
        }
    }
    //function to reset  
    const refreshBtn = document.querySelector('.refreshBtn');
    refreshBtn.onclick = function() {
        window.location.assign('index.html');
    }

}
    //function that creates a child Element and appends to the parent 
    function newElement(parent,child,content,attr,attrVal){
        let usedValue = document.createElement(child);
        usedValue.setAttribute(attr,attrVal);
        document.querySelector(parent).appendChild(usedValue);
        usedValue.textContent = content;
        return self;
    };
// i will be dealing with the show options that in if any of the navBtn is clicked,
//1. the show options should be appended with Necessary information that concerns the page


// library for authentication
function auth(){
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");
    let dataField = document.querySelector(".username");
    let submit = document.querySelector("#registersubmit");
    localStorage.setItem('loggedIn', 0);

    if (localStorage.getItem('username') === null){
        let registerBtn = document.querySelector('.registerBtn');
        //user is not registered
        registerBtn.addEventListener('click',()=>{
            let loginFrame = document.querySelector(".loginframe");
            loginFrame.classList.remove("hidden");
            submit.addEventListener('click', ()=>{
                localStorage.setItem('username', username.value);
                localStorage.setItem('password', password.value);
                let userdata = localStorage.getItem('username');
                dataField.textContent = userdata;
                window.location.reload(true);
                const dt = new Date();
                localStorage.setItem('logindate',dt.getDate("") + "/ "+dt.getMonth()+'/ ' +dt.getFullYear());

            })

        })
    }  
    else
        {
        
        //means user is already registered
        //remove the register btn
        //replace the btn with a logout btn
        dataField.textContent = "Howdy! " + localStorage.getItem('username');
        let logout = document.createElement('button');
        localStorage.setItem('loggedIn',1)
        logout.textContent = "Logout";
        dataField.appendChild(logout);
        logout.setAttribute('class','btn btn-outline-danger ms-3');
        userInput.focus;
        //add event to the logout btn
        logout.addEventListener('click', ()=>{
            alert('are you sure?');
            localStorage.clear();
            window.location.reload(true);
        })
        
    }
}

// end library for authentication
auth();

//scoreboard function
//the purpose of the scoreboard is to check if user is registered 
//if user is registered then display their results and save once ever refresh button is clicked
//scores to keep is 
// 1. Time games start ( timer begins onchange of the input and ends on chances end)
//2. number of wins
//3. number of fails
//4. fastest time
//5. lowest time
let scoreboard = document.querySelector('.scoreboard');
let score = document.querySelector('.score');
let scoredb = localStorage.getItem('score');
let loginDate = document.querySelector('.loginDate');
score.textContent = scoredb;
//addscore function

if(localStorage.getItem('loggedIn') == 1){
    //DISPLAY SCORE BOARD
    localStorage.setItem('score',score.textContent);
    document.querySelector('.score').textContent = scoredb;
    loginDate.textContent = localStorage.getItem('logindate');
    document.querySelector('.wallet').textContent =localStorage.getItem('walletdb');

    //newElement('.scoreboard','button','increase score','class','increaseBtn');
    //let increaseBtn = document.querySelector('.increaseBtn');
    //increaseBtn.addEventListener('click', () => {
    //    addscore();
    //} );
    
}else{
    //REMOVE SCORE BOARD AND TELL USER TO LOGGIN
    //make the input and the button disabled
    userInput.disabled = true;
    submit.disabled = true;
    scoreboard.style.backgroundColor = "grey";
    newElement('.col-8','p','Please Sign In to Play','class','text-white')
    scoreboard.style.display = "none";
    
}
function addscore(){
    //this function should 
    let newScore = Number(score.textContent) + 1;
    score.textContent = newScore;   
    localStorage.setItem('score',newScore)
    return score.textContent;
}

//end of score board function
let score1 = document.querySelector('.score1');
score1.textContent = score.textContent;
//for wallet 
//1. we will check number of attempts that a user has left and multiply X 0.01
