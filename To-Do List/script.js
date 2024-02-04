document.addEventListener("DOMContentLoaded", () => {
const inputbox = document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
var btn = document.querySelector("#add")
btn.addEventListener("click", function(){
    if (inputbox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
        }
    inputbox.value = "";
    saveData();
})
listContainer.addEventListener("click", function(det){
 if(det.target.tagName === "LI"){
    det.target.classList.toggle("checked");
    saveData();
 }
 else if(det.target.tagName === "SPAN"){
    det.target.parentElement.remove();
    saveData();
 }
},false);

function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

})
