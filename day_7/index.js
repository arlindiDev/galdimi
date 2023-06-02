var steps = 10;

var kati = 4;


for(var j = 1; j <= kati; j++) {
    for(var i = 0; i <= steps; i++) {
        walk();
    }
    console.log( j + ' Floor completed')
}




function walk () {
    console.log('Walk');
}

// i = 1, | true | walk one step | 