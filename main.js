

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