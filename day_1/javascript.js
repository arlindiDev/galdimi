
document.getElementById("proccess").addEventListener("click", okButtonClicked);

function okButtonClicked() {
	var input = document.getElementById("input").value;

	if(input == "HELLO GALDIMI") {
		console.log("E pershendeti galdimin");
	} else {
		console.log(input);
	}
}

var ourString = "Hello World";
console.log(ourString);

// STRING
ourString = "Hello";
// window.alert(ourString);

// INTEGER
var number = 30;
console.log(number);

var numberString = "100";
// TYPE CAST
var typeCastStringToInt = parseInt(numberString);
console.log(typeCastStringToInt);

console.log(number + typeCastStringToInt);

// FLOATING POINT
var numberWithComma = 1.5;
console.log(numberWithComma);

// CONSTANT VALUE CANT CHANGE IT!!
const CANT_CHANGE_ME = 10;
console.log(CANT_CHANGE_ME);

// Data types
// String
// boolean
// integer
// float or double
