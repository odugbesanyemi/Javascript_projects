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
                newElement('body','img','Refresh','src', 'assets/giphy.gif');
                newElement('.wrapper','button','Refresh','class', 'btn btn-danger refreshBtn');
                newElement('.attempt-alert','p',userInput.value,"class","bg-success");
                setTimeout(function(){
                    const gify = document.body.querySelector('img');
                    gify.style.display ="none";
                },10000)

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
    //function that creates a child Element and appends to the parent 
    function newElement(parent,child,content,attr,attrVal){
        let usedValue = document.createElement(child);
        usedValue.setAttribute(attr,attrVal);
        document.querySelector(parent).appendChild(usedValue);
        usedValue.textContent = content;
        return self;
    };
    //function to reset  
    const refreshBtn = document.querySelector('.refreshBtn');
    refreshBtn.onclick = function() {
        window.location.assign('index.html');
    }


}


