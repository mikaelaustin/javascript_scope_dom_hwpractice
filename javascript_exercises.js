//1 (part 1) create script with two variables, each assigned to a number. 
//add them together and output the result in the console.

var numOne = 5;
var numTwo = 3;

console.log(numOne + numTwo);

//1 (part 2) Create to script with two variables, each assigned to string.
//add them together and print output in console.

var firstName = "Mikael";
var lastName = "Austin";

console.log(firstName + " " + lastName);

//create array, output two of the items in sub-arrays to console.

var bestCities = ["New York", "Florence", "Paris", "Tokyo", "Brugges", "Santorini"];

console.log(bestCities[1], bestCities[5]);

//write script that checks if variable is < 100. 
//if it is, alert that variable is < 100.
//if it isn't, alert what the value was, and that it was > 100.

var myNumber = 110;

if(myNumber < 100) {
	alert("Your variable is less than 100!")
} else {
	alert("Your variable " + myNumber + " is greater than 100!")
}

//declare a function that takes a name as an argument & tells the name entered.
function name (writeName) {
	console.log(writeName);
}
name ("Mikael");

//declare a function that depending upon which door was entered 
//tells user received different prize in alert.


function chooseADoor (doorNum){
	if(doorNum == 1){
		console.log("You've won a puppy!")
	} else if(doorNum == 2) {
		console.log("You've won $1,000!")
	} else if (doorNum == 3) {
		console.log("You've won a trip to Hawaii!")
	} else if (doorNum == 4) {
		console.log("You've won a lifetime of regret!")
	} else {
		console.log("Pick a door #1-4!")
	}
};

doorNum = 2;
