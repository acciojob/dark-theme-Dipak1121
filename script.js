//your code here
let mainDiv = document.getElementById("app");
let btn = document.getElementById("swap");
btn.addEventListener("click", onClick);
function onClick(){
	mainDiv.classList.toggle("night");
	btn.classList.toggle("button_night")
}