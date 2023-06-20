// detyra 1

function fuqiaKatrore(numrat) {

    var minNumri = numrat[0]
    for (var i = 0; i < numrat.length; i++) {
        if (numrat[i] < minNumri) {
            minNumri = numrat[i]
        }
    }
    // minnumri = 3 | i = 0, | 3 < 3,false | 
    // minNumri = 3 | i = 1 | 4 < 3, false |
    // minNumri = 3 | i = 2 | 5 < 3, false |
    // minNumri = 3 | i = 3 | 6 < 3, false |
    return minNumri * minNumri

}

console.log(fuqiaKatrore([3, 4, 5, 6, 7]));