var Numbers = [5, -9, 1, 24, -2, 54, -12, 8, -10, -72, -100];


for (var i = 1; i < Numbers.length; i++) {
    for (var j = 0; j < i; j++)
    if (Numbers[i] < Numbers[j]) {
        var x = Numbers[i];
        Numbers[i] = Numbers[j];
        Numbers[j] = x;
    }


}
console.log(Numbers);



