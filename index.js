document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".hamburger").style.display="none"
    document.querySelector("nav").style.display="flex"
})

document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector("nav").style.display="none"
    document.querySelector(".hamburger").style.display="flex"
})