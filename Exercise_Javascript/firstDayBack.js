
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

for (i = 0; i < numbers.length; i++) {
    number = numbers[i]

    if (number < 5) {
        console.log('Number smaller than 5: ' + number)

    } else if (number >= 5){
        console.log('Number greater than and equal to 5: ' + number);
    }
}
// i = 0; number = 1 | if statement(false) | else (true) 
// i = 1; number = 2 | if statement(true) | else (false) 
