// Ndertoni klasen Vetura qe ka atribute shpejtesinAktuale , marken, ngjyren , shpejtesinMaksimale
// Ofroni ne function qe rrite shpejtesinAktuale per 1 sa her te thirret ajo metod, shpejtesiaAktuale nuk mund ta kaloj shpejtesinMaksimale.
class car {
    constructor(marka, shpejtesineAktuale, ngjyra, shpejtesineMaksimale) {
        this.marka = marka;
        this.shpejtesineAktuale = shpejtesineAktuale;
        this.ngjyra = ngjyra;
        this.shpejtesineMaksimale = shpejtesineMaksimale;
    }

    rritShpejtsine() {

    console.log('this is my ' + this.marka);
    }
}

var kerriPare = new car('mercedes', 0, 'zeze', 30);
var kerridyte = new car('BMW', 1, 'bardhe', 40);

console.log(kerriPare.marka); // accessing property in object kerripare
console.log(kerridyte.shpejtesineAktuale);
kerriPare.rritShpejtsine(); // accessing the function method

// kerriPare car object
// 



