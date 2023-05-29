var numbers = [5, -9, 1, 24, -2, 54, -12, 8, -10, -72, -100];

var positiveNums = 0;
var negativeNums = 0;
var ciftNums = 0;
var tekNums = 0;

for (var i = 0; i < numbers.length; i++) {

    if (numbers[i] > 0) {

        positiveNums++;
    }
    else if (numbers[i] < 0) {

        negativeNums++;
    }
    // From line 19-24 we check the array elements for even and odd numbers comment out to work
    else if (numbers[i] % 2 == 0) {
        ciftNums++;
    }
    else if (numbers[i] % 2 != 0) {
        tekNums++;
    }

}
console.log(positiveNums);
console.log(negativeNums);
console.log(ciftNums);
console.log(tekNums);
