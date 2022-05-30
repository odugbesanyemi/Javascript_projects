let operator_btns = document.querySelectorAll('.operator_btns button');
let digit_btns = document.querySelectorAll('.digit');
let equalbtn = document.querySelector('.equalbtn');
let screen = document.querySelector('.screen')
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
    if(operator == "plus"){
        screen.textContent = add(Number(firstNumber),Number(secondNumber))
    }
    else if(operator == "divide"){
        screen.textContent = division(Number(firstNumber),Number(secondNumber))
    }
    else if(operator == "minus"){
        screen.textContent = minus(Number(firstNumber),Number(secondNumber))
    }
    else if (operator == "multiply"){
        screen.textContent = multiply(Number(firstNumber),Number(secondNumber))
    }
}