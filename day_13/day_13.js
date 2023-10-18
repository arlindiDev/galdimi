/* function reverseString(str) {
    var final = "";
    for(var i = str.length -1; i >= 0; i--) {
        final += str[i];
    }
    return final
}

console.log(reverseString('hajde ketu Galdim')) */


/* function longestWord(str) {
    var words = str.split(' ');
    var longest = ' ';
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest) longest = words[i].length;
    }
    return longest
}
console.log(longestWord('This is the longest word')); */


/* function titleCase(str) {
    var words = str.toLowerCase.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase + words[i].slice[1]

    }
    return words.join(' ')

}

titleCase('Im a little tea pot') */


/* function smallestNumber() {

    var arr = [5,2,9,5,7];
    var smallest = arr[0];
    
    for(var i=0; i<arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];   
        }
    }
    
    console.log(smallest);
   


}

smallestNumber(); */


/*function largestNumbers(arr) {
    var maxes = []

    for (var i = 0; i < arr.length; i++) {
        var tempMax = arr[i][0]

        for (j = 0; j < arr[i].length; j++) {
            var currentElement = arr[i][j]
            if (currentElement >= tempMax) {
                tempMax = currentElement
            }
        }
        maxes.push(tempMax)
    }
    return maxes
}

var foundIt = largestNumbers([[4, 5, 3, 1], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])

console.log(foundIt)*/


/* function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]
        }
    }
    // Only change code above this line
    console.log(product);
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
*/

/* function repeatStringNumTimes(str, num){
    var final ='';
    if(num < 0) return '';

    for(var i=0; i <num; i++){
        final += str;
    }

    return final


}
console.log(repeatStringNumTimes(' Hajde', 4)) */

function repeat (str, num){
    var final = '';
    if(num < 0) return '';

    for(i=0; i<num; i++){
        final += str;
    }
    return final
}
console.log(repeat('abc ', 4))



