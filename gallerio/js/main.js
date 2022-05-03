//this is to get the pictures from the folder and change the src attribure of the frame img
//1st step is to target the buttons and the img frame
let natureBtn = document.querySelector('.natureBtn');
let techBtn = document.querySelector('.techBtn');
let loveBtn = document.querySelector('.loveBtn');
let target = document.querySelector('.frame img');
let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');
let picNum;

natureBtn.onclick = () => {
    picNum = 1;
    //let the frame img src choose from
    target.setAttribute('src',"assets/nature/"+ picNum  + ".jpg");
    prevBtn.style.opacity = "0.1";
    prevBtn.onclick = () => {
        if(picNum <= 5 && picNum != 1 ){
            picNum--;
            target.setAttribute('src',"assets/nature/"+ picNum  + ".jpg");
        }
        if(picNum == 1){
            //do nothing
        }
    }
    nextBtn.onclick = () => {
        if(picNum < 5){
            prevBtn.style.opacity = "1";
            picNum ++;
            target.setAttribute('src',"assets/nature/"+ picNum  + ".jpg");
        }
        if(picNum == 5){
            nextBtn.style.opacity.toggle = "0.1";
        }
    }
}

techBtn.onclick = () => {
    picNum = 1;
    //let the frame img src choose from
    target.setAttribute('src',"assets/tech/"+ picNum  + ".jpg");
    prevBtn.onclick = () => {
        if(picNum <= 4 && picNum != 1){
            picNum--;
            target.setAttribute('src',"assets/tech/"+ picNum  + ".jpg");
        }
        if(picNum == 1){
            //do nothing
        }
    }
    nextBtn.onclick = () => {
        if(picNum < 4){
            picNum ++;
            target.setAttribute('src',"assets/tech/"+ picNum  + ".jpg");
        }
        else if(picNum = 0){
            picNum = 1
        }
    }
}