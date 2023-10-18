/* function min(firstNum, secondNum) {
    if (firstNum < secondNum){
        return firstNum
    } 
    else 
    return secondNum
}

console.log(min(10, 10));

console.log(min(0, -10));*/

// ----

/* function isEven(number) {
    if (number < 0) {
        return isEven(-number);
    } else if (number == 1) {
        return false;
    } else if  (number == 0) {
        return true;
    } else {
        return isEven(number - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(0));*/



/* function countBs(word) {

    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] === 'B') {
            count+= 1;
        }  
    }
    return count
}
console.log(countBs('Big Bang Theory')); */


function countChar(word, secondWord) {

    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] === secondWord) {
            count+= 1;
        }  
    }
    return count
}
console.log(countChar('Big Bang Theory', 'g'));


console.log(Object.keys({x: 0, y: 0, z: 2}));
