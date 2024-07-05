const overlay=document.querySelector(".overlay")
const form=document.querySelector(".form")
const addButton=document.querySelector(".button")
const close=document.querySelectorAll(".close")
const create=document.querySelector(".create")
const tittle=document.querySelector(".tittle")
const amount=document.querySelector("amount")
console.log(close)
addButton.addEventListener("click",function(){
    form.style.display="block"
    overlay.style.display="block"
})
close.forEach((close)=>{
    close.addEventListener("click",function(){
        form.style.display="none"
        overlay.style.display="none"
    }) 
})
form.addEventListener("submit",function(e){
e.preventDefault()
})

