window.addEventListener("DOMContentLoaded", (event) => {
var istatus = document.querySelector("h5")

var btn = document.querySelector("#add")
var check = 0

//var removeFriend =document.querySelector("#remove")
btn.addEventListener("click", function(){
    if(check == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    check =1
    btn.innerHTML ="Remove Friend"
   }
   else{
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"
    check =0
    btn.innerHTML ="Add Friend"
   }
})
/*removeFriend.addEventListener("click", function(){
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"
})*/


})