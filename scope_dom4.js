//create an html page with a form. include inputs for username, email, password, submit
//checks that password is 12345678
//checks username has a number
//if anything is wrong, send alert message saying incorrect
//if info is correct, H1 text is updated
var header = document.getElementById("header");
var form = document.getElementById("myForm");

//console.log(form.innerText);
//console.log(form.innerHTML);

var numbers = [0-9];


form.onsubmit = function(e){
	e.preventDefault();
	var username = document.getElementById("username");

	var email = document.getElementById("email");

	var password = document.getElementById("password");

	var form = document.getElementById("myForm");
	validateForm();

	console.log(form.innerText);
	console.log(form.innerHTML);
}


function validateUsername () {
	
	if (username.value === ""){
		alert("Incorrect username")
	}
	else if (username.value.match(/\d+/g)){
		console.log(username.value)
		return true;
	}	

	else {
		alert("Incorrect username")
		
	}
}


function validateEmail(){
	//console.log(form.email.indexOf("."))
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if (email.value === ""){
		alert("Please enter an email address")
	}
	else if (email.value.match(emailPattern)){
		console.log(email.value);
		return true
	}
	

	else {
		alert("Please enter valid email address");
		
	}
}

function validatePassword(){
	if (password.value === "12345678"){
		console.log(password.value);
		return true;
	}
	else {
		alert("Incorrect password");
	}
}

function validateForm(){
	if(validateUsername() && validateEmail() && validatePassword()){
		header.innerText = "Login is complete";
		console.log("success");
	}
	else{
		console.log("Incorrect");
	}
}
