// Ndertoni klasen Vetura qe ka atribute shpejtesinAktuale , marken, ngjyren , shpejtesinMaksimale
// Ofroni ne function qe rrite shpejtesinAktuale per 1 sa her te thirret ajo metod, shpejtesiaAktuale nuk mund ta kaloj shpejtesinMaksimale.
// Ofroni ne function që bënë krahasimin për barazi të dy objekteve të tipit Vetura, dy Vetura jane te njejta nese kan marken, shpejtsinmaksimale dhe ngjyren e njejte
class Car {
    constructor(marka, shpejtesineAktuale, ngjyra, shpejtesineMaksimale) {
        this.marka = marka;
        this.shpejtesineAktuale = shpejtesineAktuale;
        this.ngjyra = ngjyra;
        this.shpejtesineMaksimale = shpejtesineMaksimale;
    }

    rritShpejtsine() {

        if (this.shpejtesineAktuale < this.shpejtesineMaksimale) {
            this.shpejtesineAktuale++
        }
    }

    krahasoKerret(kerriTjeter) {
        if (this.marka == kerriTjeter.marka) {
            return true
        }
        return false
    }
}


var kerriPare = new Car('mercedes', 0, 'zeze', 50);
var kerridyte = new Car('BMW', 1, 'bardhe', 40);
var kerritrete = new Car('BMW', 1, 'bardhe', 40);



if (kerritrete.krahasoKerret(kerridyte)) {
    console.log('kerri i dyte edhe kerri i trete jane te njejta')
} else {
    console.log('Nuk jane te njejta')
}

for (var i = 0; i < 40; i++) {

    kerriPare.rritShpejtsine()
    console.log(kerriPare.shpejtesineAktuale);

}



 // accessing the function method

// kerriPare car object
// 



