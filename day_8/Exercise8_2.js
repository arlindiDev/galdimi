

function findMaxFrom(values) {
    var largest = values[0];

    for (var i = 0; i < values.length; i++) {
        if (largest < values[i]) {
            largest = values[i];
        }
    }
    return largest;

}


function arrayFromInput() {

    var inputArray = [];
    for (var i = 0; i < 4; i++) {
        var input = prompt('Enter Element ' + i);
        var number = parseInt( input);
        inputArray.push(number);

    }
    return inputArray;
}

var values = arrayFromInput();
console.log(values);

var largesValue = findMaxFrom(values);
console.log(largesValue);



/*
function linearSearch(inputArray) {

    var inputArray = [];  // defined userinput array
    var size = 5; // array size, in this case 6 elements from 0 - 6

    for (var i = 0; i <= size; i++) {

        inputArray[i] = prompt('Enter Element ' + (i + 1)); // take user input and place the element value in array
        inputArray.sort(function (a, b) {
            return a - b;
        });

    }
    console.log(inputArray);

}

linearSearch();
*/

