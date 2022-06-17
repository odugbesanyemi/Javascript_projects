// target home buttons 
let getStartedBtn = document.querySelector('#getStartedBtn')
const loginbtn = document.querySelector('.loginBtn')
let root = document.querySelector('#root')
let users = document.querySelector('.friends')
let chats = document.querySelector('.chats');
let chathead = document.querySelectorAll('#chathead')
let alertDiv = document.querySelector('.alert');


// check if the text content of alert is empty and if true, make the display not visible
let chat = (receiverid) =>{
    let XHR = new XMLHttpRequest
    XHR.onreadystatechange = () =>{
        if(XHR.readyState === XMLHttpRequest.DONE){
            if(XHR.status === 200){
                root.innerHTML = XHR.response
                setInterval(() => {
                    let chathead = document.querySelector('.chat-head')
                    let XHR1= new XMLHttpRequest
                    XHR1.onreadystatechange =() => {
                        if(XHR1.readyState===XMLHttpRequest.DONE){
                            chathead.onfocus =()=>{
                                chathead.innerHTML = XHR1.response
                            }
                        }
                    }
                    XHR1.open('GET','../ajax/msgbody.php?receipent='+receiverid,true)
                    XHR1.send()             
                }, 3000);
                
                // we want to run another XHR to load the msgbody.php data into the 
            }
        }
    }
    XHR.open('GET','../ajax/chats.php?receipent='+receiverid,true)
    XHR.send()
}

// build a function that accepts data from the page to take users to the chat session
// it will take the get data for 

users.onclick = () =>{
    chats.removeAttribute('id')
    users.setAttribute('id','active')
    let XHR = new XMLHttpRequest
        XHR.onreadystatechange = () =>{
            if(XHR.readyState === XMLHttpRequest.DONE){
                if(XHR.status === 200){
                    root.innerHTML = XHR.response
                }
            }
        }

    XHR.open('GET','../ajax/users.php',true)
    XHR.send()
}

chats.onclick = () =>{
        users.removeAttribute('id')
        chats.setAttribute('id','active')
        let XHR = new XMLHttpRequest
            XHR.onreadystatechange = () =>{
                if(XHR.readyState === XMLHttpRequest.DONE){
                    root.innerHTML = XHR.response
                }
            }
        XHR.open('GET','../ajax/messages.php',true)
        XHR.send()
}

let sendMessage = (receiverid) =>{
    let userinput = document.querySelector('#userinput').value
    let XHR = new XMLHttpRequest
    XHR.onreadystatechange = () =>{
        if(XHR.readyState === XMLHttpRequest.DONE){
            if(XHR.status === 200){
                root.innerHTML = XHR.response
                let chathead = document.querySelector('.chat-head')
                let XHR1= new XMLHttpRequest
                XHR1.onreadystatechange =() => {
                    if(XHR1.readyState===XMLHttpRequest.DONE){
                        chathead.innerHTML = XHR1.response
                        chathead.scrollIntoView(false)
                    }
                }
                XHR1.open('GET','../ajax/msgbody.php?receipent='+receiverid,true)
                XHR1.send()

            }
        }
    }
    XHR.open('GET','../ajax/chats.php?receipent='+receiverid+'&message='+userinput,true)
    XHR.send()
}


