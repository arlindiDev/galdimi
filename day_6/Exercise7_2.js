var Numbers = [5, -9, 1, 24, -2, 54, -12, 8, -10, -72, -100];

var smallest = Numbers[0];

for (var i = 0; i < Numbers.length; i++) {
    if (smallest > Numbers[i] ) {
        smallest = Numbers[i];
    }
}
console.log(smallest);
