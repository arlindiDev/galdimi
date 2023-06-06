
var numbersArray = [10, 5, 1, -100, 8];


function biggestNumber() {

    var largest = numbersArray[0];
    for (var i = 0; i < numbersArray.length; i++) {
        if (largest < numbersArray[i]) {
            largest = numbersArray[i];
        }
    } 
    return largest;
}

var maxNumber = biggestNumber();
console.log(maxNumber);


// we declare an integer array 
// create function biggest number with no parameters
// assign variable largest to index 0 within the function 
// for loop as counter to go trhough array
// if statement to find largest number and compare the elements in the array


