

const divMenu = document.getElementById("menu_id");
const btnOpen = document.getElementById("openId")
const btnClose = document.getElementById("closeId")


function btnMenu(){
    if (divMenu.style.width == '100vw'){
        divMenu.style.width = '0vw';
        btnOpen.style.display = "block"
        btnClose.style.display = "none"
       
    }else{
        divMenu.style.width = '100vw'
        btnOpen.style.display = "none"
        btnClose.style.display = "block"
        
    }
}



const Pbtn1 = document.getElementById("btn1")
const Pbtn2 = document.getElementById("btn2")
const Pbtn3 = document.getElementById("btn3")
const Pbtn4 = document.getElementById("btn4")


function toggleClass(btn){
 if(btn == Pbtn1){
    Pbtn1.classList.add("active")
    Pbtn2.classList.remove("active")
    Pbtn3.classList.remove("active")
    Pbtn4.classList.remove("active")
 }else if(btn == Pbtn2){
    Pbtn2.classList.add("active")
    Pbtn1.classList.remove("active")
    Pbtn3.classList.remove("active")
    Pbtn4.classList.remove("active")
 }else if(btn == Pbtn3){
    Pbtn3.classList.add("active")
    Pbtn2.classList.remove("active")
    Pbtn1.classList.remove("active")
    Pbtn4.classList.remove("active")
 }else if(btn == Pbtn4){
    Pbtn4.classList.add("active")
    Pbtn2.classList.remove("active")
    Pbtn3.classList.remove("active")
    Pbtn1.classList.remove("active")
 }

}