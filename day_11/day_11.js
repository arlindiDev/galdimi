class Komuna {
    constructor(nr, emri, kodiPostal) {
        this.nr = nr
        this.emri = emri
        this.kodiPostal = kodiPostal
    }

    toString() {
        return this.kodiPostal + '-' + this.emri
    }

    krahasoKomunat(komuna) {
        if (this.kodiPostal.toUpperCase() == komuna.kodiPostal.toUpperCase()) {
            return true
        }
        return false
    }
}

function krijoKomunen(nr, emri, kodiPostal) {
    if (emri.length != 0 && nr > 1 && nr < 999) {
        return new Komuna(nr, emri, kodiPostal)
    }
    return -1
}

class Shteti {
    constructor(emri) {
        this.emri = emri
        this.komunat = []
    }

    getKomuna(kodiPostal) {
        // var kodiPostal = 'Galdimi'

        for (var i = 0; i < this.komunat.length; i++) {
            if (kodiPostal == this.komunat[i].kodiPostal) {
                return this.komunat[i]
            }
        }
        return -1
    }

    addKomuna(komuna) { // komuna me kodin Postal 
        if(this.komunat.length == 0) {
            this.komunat.push(komuna)
            return true
        }
        for (var i = 0; i < this.komunat.length; i++) { // ketu i = 0  array produktet plotesohet se produktet.length = 1
            if (this.komunat[i].krahasoKomunat(komuna)) { // produktet[0] me krahasu me produktin qe po dojme me shtu nese jane te njejta  
                return false                                    // nese sjane te njejta ather shtoje
            }
        }
         this.komunat.push(komuna)
         return true
    }

}

shteti1 = new Shteti('Kosova') // Instance e klases Kosova


komuna1 = new Komuna(1, 'Prishtina', '10000') // Instance e klases Komuna me nr, emer Kodin Postal
komuna2 = new Komuna(2, 'Prizreni', '11000')
komuna3 = new Komuna(3, 'Peja', '12000')
komuna4 = new Komuna(4, 'Mitrovica', '13000')

console.log(komuna1.toString());

komuna1.krahasoKomunat(komuna2)

shteti1.addKomuna(komuna1)
shteti1.addKomuna(komuna2)
console.log(shteti1)

