var Numbers = [1, 3, 3, 5, 3, 7, 6, 6, 12, 43, 3];


var countElements = {};
for (var i = 0; i < Numbers.length; i++) {
    var element = Numbers[i];
    if (countElements[element]) {

        countElements[element] += 1;
        
    } else {
        countElements[element] = 1;
    }
}


console.log(countElements);