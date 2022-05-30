let operator_btns = document.querySelectorAll('.operator');
let digit_btns = document.querySelectorAll('.digit');
let equalbtn = document.querySelector('.equalbtn');
let screen = document.querySelector('.screen')
let clearBtn = document.querySelector('.clear')
let delBtn = document.querySelector('.delete')
let firstNumber;
let secondNumber;
let operator;
// create functions for independent tasks like minus, plus, division and multiplication
//1 function is to add
let add = (x,y) => {
    return x + y;
}
let minus = (x,y) => {
    return x-y ;
}
let division = (x,y) => {
    return x/y;
}
let multiply = (x,y) => {
    return x * y ;
}

// whatever button the user hits should be displayed to screen.textcontent
clearBtn.onclick =() =>{
    screen.textContent =""
    firstNumber = ""
    secondNumber =""
}
delBtn.onclick = () =>{
    //we want to be able to delete the numbers from right to left
    let len = screen.textContent.length
    let text = screen.textContent
    let newText = text.substr(0,len-1)
    screen.textContent = newText
    
}

for(const x of digit_btns){
    x.onclick = () =>{
        screen.textContent += x.textContent;
    }
}
//we want to perform operator options 

for (const x of operator_btns) {
    x.onclick = ()=>{
        if(screen.textContent == ""){
            alert('write something')
        }
        else{
            firstNumber = screen.textContent
            screen.textContent += " " + x.textContent
            operator = x.classList
            screen.textContent = ""
        }   
    }    
}

equalbtn.onclick =() =>{
    secondNumber = screen.textContent
    if(operator.contains("plus") ){
        screen.textContent = add(Number(firstNumber),Number(secondNumber))
    }
    else if(operator.contains('divide')){
        screen.textContent = division(Number(firstNumber),Number(secondNumber))
    }
    else if(operator.contains('minus')){
        screen.textContent = minus(Number(firstNumber),Number(secondNumber))
    }
    else if (operator.contains('multiply')){
        screen.textContent = multiply(Number(firstNumber),Number(secondNumber))
    }
}