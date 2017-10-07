//Create an HTML page with two buttons that argue with each other. 
//When one button is clicked, the text "I'm right" should be placed next to it. 
//When the other button is clicked, the text is replaced with, "No, I'm right!"
var buttonOne = document.getElementById("buttonOne")
var buttonTwo = document.getElementById("buttonTwo")

buttonOne.onclick = function changeOne() {
	document.getElementById('text-update').innerText = "I'm right";
}

buttonTwo.onclick = function changeTwo() {
	document.getElementById('text-update').innerText = "No, I'm right";
	}
