class Apartment {
    constructor(nr, kati, shtreter, isAvailable) {
        this.nr = nr,
            this.kati = kati,
            this.shtreter = shtreter,
            this.isAvailable = isAvailable
    }

    toString() {
        return this.kati + '-' + this.nr + ': ' + this.shtreter;
    }

    krahasoApartmentin(apartment) {
        if (this.kati == apartment.kati && this.nr == apartment.nr) {
            return true
        }
        return false

    }


}

function createApartment(nr, kati, shtreter, isAvailable) {
    if (nr == 0 && shtreter < 1 && shtreter > 6) {
        return -1
    }
    return new Apartment(nr, kati, shtreter, isAvailable)
}

class Host {
    constructor(emriHost, apartmentet) {
        this.emriHost = emriHost,
            this.apartmentet = []
    }

    addApartmentin(apartment) {
        if (this.apartmentet.length == 0) {
            this.apartmentet.push(apartment)
            return true
        }
        for (var i = 0; i < this.apartmentet.length; i++) {
            if (this.apartmentet[i].krahasoApartmentin(apartment)) {
                return false
            }
        }

        this.apartmentet.push(apartment)
        return true
    }

    gjejIndex(apartment) {
        for (var i = 0; i < this.apartmentet.length; i++) {
            if (this.apartmentet[i].krahasoApartmentin(apartment)) {
                return i
            }
        }
        return -1
    }

    getAvailableApartments(apartment) {
        if (apartment.isAvailable == true) {
            return true
        }
        return false 
    }
        
}

host1 = new Host('Apartment Prishtina')

apartment1 = createApartment(12, 'Kati 1', 2, true)
apartment2 = createApartment(13, 'Kati 2', 4, false)
apartment3 = createApartment(11, 'Kati 3', 3, true)



host1.addApartmentin(apartment1)
host1.addApartmentin(apartment2)
host1.addApartmentin(apartment3)

console.log(host1)
console.log(host1.getAvailableApartments(apartment1))
console.log(apartment2.isAvailable)
