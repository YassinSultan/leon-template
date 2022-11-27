let linkList = document.querySelector(".links ul")
let burgerIcon = document.querySelector(".burger-icon")
let burgerDash =document.querySelectorAll(".burger-icon span")
let listDispaly=false

function displayList(){
    linkList.style.opacity="1"
    listDispaly=true
    burgerDash[1].style.display="none"
    burgerDash[0].style.transform="rotate(315deg) translate(-5px, 4px)"
    burgerDash[2].style.transform="rotate(45deg)"
}
function hideList(){
    linkList.style.opacity="0"
    listDispaly=false
    burgerDash[1].style.display="block"
    burgerDash[0].style.transform="rotate(0deg) translate(0px, 0px)"
    burgerDash[2].style.transform="rotate(0deg)"
}


burgerIcon.addEventListener("click",()=>{
    if(listDispaly==false){
        displayList()
    }
    else{
        hideList()

    }
})

document.onscroll=function(){
    if (listDispaly==true){
        hideList()
    }
}