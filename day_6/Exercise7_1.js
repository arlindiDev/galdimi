
var Numbers = [5, -9, 1, 24, -2, 54, -12, 8, -10, -72, -100];

var largest = Numbers[0];

for (var i = 0; i < Numbers.length; i++) {
    if (largest < Numbers[i] ) {
        largest = Numbers[i];
    }
}
console.log(largest);

// first we declare largest to first element of array 
// then we compare the elements to each other
// largest = 5 | true | 5 < 5 | false | largest = 5

// seconde run 
// i = 1, | true | largest = 5 < -9, | false
// largest is still 5

// third run 
// i = 2, | true | 5 < 1 | false 
// largest = 5

// fourth run
// i = 3, | true | 5 < 24 | true 
// change largest from 5 to 24, now largest is 24

// fifth run 
// i = 4, | true | 24 < -2 | false
// largest is still 24

// sixth run 
// i = 5, | true | 24 < 54 | true
// now largest cahnges to 54 
// 54 this is thr largest integer in the array
