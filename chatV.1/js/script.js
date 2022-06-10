// target home buttons 
let getStartedBtn = document.querySelector('#getStartedBtn')
const loginbtn = document.querySelector('.loginBtn')
let root = document.querySelector('#root')
let users = document.querySelector('.friends');
let chats = document.querySelector('.chats');
let chathead = document.querySelectorAll('#chathead')


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
                if(XHR.status === 200){
                    root.innerHTML = XHR.response
                }
            }
        }
    XHR.open('GET','../ajax/messages.php',true)
    XHR.send()
    console.log(XHR)
}
