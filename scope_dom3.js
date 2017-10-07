//create an html that listens for a keypress
//h1 text should show key that was pressed
var typeKey = document.getElementById("key")

document.addEventListener("keydown", function(e){
	typeKey.innerText = e.key
})